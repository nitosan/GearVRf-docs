## 3D object picking, colliders, and examples

For a scene object to be pickable, it must have a collider component attached. The collider typically references collision geometry that is simpler than the scene object's mesh. For example, the collider might be a sphere or an axially aligned bounding box.

To pick a 3D object GearVRf casts a ray from the camera viewpoint in the direction the viewer is looking through the entire scene looking only at the geometry in the colliders. When the ray penetrates the collider geometry, the scene object that owns it is "picked". The list of picked objects is sorted based on distance from the camera so it is easy to choose the closest object to the viewer.

![](/images/gvrf_picking.png)


## Types of Colliders

GearVRf provides several types of colliders to use depending on how accurate you want picking to be.

* _GVRSphereCollider_ is the fastest collision to compute but is the least accurate because it approximates the shape of the scene object as spherical. For meshes that are larger in one dimension than another, the picker might register false positives.
* _GVRBoxCollider_ approximates the scene object shape as a rectangular box. It is slightly less efficient than the sphere collider but may bound the mesh more tightly.
* _GVRMeshCollider_ can be used in several ways. You can direct it to use the mesh of the scene object that owns it or you can provide your own collision mesh. You can also request the mesh collider to use the bounding box of the scene object's mesh. This is usually a lot faster and sufficient for a lot of picking needs. It accommodates irregularly shaped objects better than the sphere collider.

## Picking

The picking operation is performed by the GVRPicker class. The picker can operate in two modes. You can call the *GVRPicker.pickObjects* function directly to get back the list of objects that were picked and information about the collision. You can also attach the picker to a scene object and it will automatically cast a ray from that scene object and generate events indicating what was picked.

## Procedural Picking

To use the picker procedurally you must provide the origin and direction of the pick ray in world coordinates and the GVRScene you want to pick against. The picker returns an array of GVRPickedObject instances that indicate what was picked and where it was hit. The hit position returned will be in the coordinate system of the collider geometry - not in world coordinates. To transform it to world coordinates you must multiply it by the model matrix of the scene object hit. This is not the most efficient method of picking and should only be called once per frame.

For mesh colliders, you can enable coordinate picking in the constructor and the picker will provide additional information with the barycentric coordinates, texture coordinates and normal at the hit location.

|Field|Type|Description|
|-----|----|-----------|
|hitObject |	GVRSceneObject |	the scene object that was hit|
|hitCollider |	GVRCollider |	the collider that was hit|
|hitPosition |	float[3] |	X, Y, Z coordinates of where collider was hit|
|hitDistance |	float |	distance from camera in world coordinates|
|faceIndex*   | int    | index of face hit|
|barycentricCoordinates* | float[3] | barycentric coordinates of the hit location on the collided face |
|textureCoordinates* | float[2] | U,V coordinates of the hit location on the mesh |
|normalCoordinates* | float[3] | normalized surface normal at the hit location |


## Picking Events

The most convenient way to use the picker is to attach it to a scene object, typically the owner of the current camera, and respond to the pick events generated when objects are hit. Events are raised each time the picking ray enters or exits an object. You can also observe changes to the list of picked objects as a whole.

To handle pick events in your application you provide a class which implements the IPickEvents interface. If you want to handle all pick events from all objects, attach it as a listener to the event receiver for the scene or the picker. (By default, the picker routes all pick events through the scene and to its own listeners.) If you attach the IPickEvents interface to a scene object, only the pick events which affect that scene object are sent.

## Picking Example

This example shows how to use picking events to do selection highlighting. When the pick ray enters an object, its material color is changed to red. When the pick ray exists, the color is changed back to white again.

```java
public class PickHandler implements IPickEvents
{
    public void onEnter(GVRSceneObject sceneObj, GVRPicker.GVRPickedObject pickInfo)
    {
         sceneObj.getRenderData().getMaterial().setDiffuseColor(1, 0, 0, 1);
    }
    public void onExit(GVRSceneObject sceneObj, GVRPicker.GVRPickedObject pickInfo)
    {
        sceneObj.getRenderData().getMaterial().setDiffuseColor(1, 1, 1, 1);
    }
    public void onInside(GVRSceneObject sceneObj, GVRPicker.GVRPickedObject pickInfo) { }
    public void onPick(GVRPicker) { }
    public void onNoPick(GVRPicker) { }
}

public void onInit(GVRContext context)
{
     GVRScene scene = context.getMainScene();
     GVRSceneObject sphere = new GVRSphereSceneObject(context);
     GVRPicker picker = new GVRPicker(scene, true);
     
     picker.getEventReceiver().addListener(new PickHandler());
     scene.getMainCameraRig().getOwnerObject().attachComponent(picker));
     sphere.getTransform().setPositionZ(-2.0f);
     sphere.attachComponent(new GVRSphereCollider(context));
     scene.addSceneObject(sphere);
 }
```

## Touch Events and the Controller

The picker can be used with a controller to generate touch events. This lets your application know what is selected by the controller and whether or not the action button is pressed. Every GVRCursorController instance has its own GVRPicker. Your gvr.xml settings file should indicate which controller types your application supports in the "useControllerType" setting. GVRInputManager.selectController will select the available controller preferred by your application.

To handle touch events in your application you provide a class which implements the ITouchEvents interface and attach it as a listener to the controller. To do this, your application must handle controller selection events with a class that implements ICursorControllerSelected ang register this listener with the input manager.  When a controller is selected for your application, the onCursorControllerSelected function is called and you can attach touch event listeners to the controller.

## Controller Touch Example

This example shows how to use touch events to drag an object with the controller. When the user presses the controller button while the pick ray is inside an object, that object is dragged by the controller.

```java
public class TouchHandler implements GVREventListeners.TouchEvents
{
    private GVRSceneObject mDragged = null;
    public void onTouchStart(GVRSceneObject sceneObj, GVRPicker.GVRPickedObject pickInfo)
    {
    	if (mDragged == null)
        {
        	GVRPicker picker = pickInfo.picker;
            GVRController controller = picker.getController();
            if (controller.startDrag(sceneObj))
            {
            	mDragged = sceneObj;
            }
        }
    }
    
    public void onTouchEnd(GVRSceneObject sceneObj, GVRPicker.GVRPickedObject pickInfo)
    {
    	if (mDragged == sceneObj)
        {
        	GVRPicker picker = pickInfo.picker;
            GVRController controller = picker.getController();
            controller.stopDrag(sceneObj);
            mDragged = null;
        }
    }
}

public class ControllerSelector implements ICursorControllerSelectListener
{
    public void onCursorControllerSelected(GVRCursorController newController, GVRCursorController oldController)
    {
        newController.addPickEventListener(new TouchHandler());
    }
};

public void onInit(GVRContext context)
{
     GVRScene scene = context.getMainScene();
     GVRSceneObject sphere = new GVRSphereSceneObject(context);
     
     sphere.getTransform().setPositionZ(-2.0f);
     sphere.attachComponent(new GVRSphereCollider(context));
     scene.addSceneObject(sphere);
     context.getInputManager().selectController(new ControllerSelector());
 }
```
