3D object picking, colliders, and examples

For a scene object to be pickable, it must have a collider component attached. The collider typically references collision geometry that is simpler than the scene object's mesh. For example, the collider might be a sphere or an axially aligned bounding box.

To pick a 3D object GearVRf casts a ray from the camera viewpoint in the direction the viewer is looking through the entire scene looking only at the geometry in the colliders. When the ray penetrates the collider geometry, the scene object that owns it is "picked". The list of picked objects is sorted based on distance from the camera so it is easy to choose the closest object to the viewer.

![](../../../images/gvrf_picking.png)


##Types of Colliders

GearVRf provides several types of colliders to use depending on how accurate you want picking to be.

* _GVRSphereCollider_ is the fastest collision to compute but is the least accurate because it approximates the shape of the scene object as spherical. For meshes that are larger in one dimension than another, the picker might register false positives.
* _GVRMeshCollider_ can be used in several ways. You can direct it to use the mesh of the scene object that owns it or you can provide your own collision mesh. You can also request the mesh collider to use the bounding box of the scene object's mesh. This is usually a lot faster and sufficient for a lot of picking needs. It accommodates irregularly shaped objects better than the sphere collider.

##Picking

The picking operation is performed by the GVRPicker class. The picker can operate in two modes. You can call the pickObjects function directly to get back the list of objects that were picked and information about the collision. You can also attach the picker to a scene object and it will automatically cast a ray from that scene object and generate events indicating what was picked.

##Procedural Picking

To use the picker procedurally you must provide the origin and direction of the pick ray in world coordinates and the GVRScene you want to pick against. The picker returns an array of GVRPickedObject instances that indicate what was picked and where it was hit. The hit position returned will be in the coordinate system of the collider geometry - not in world coordinates. To transform it to world coordinates you must multiply it by the model matrix of the scene object hit.

|GVRPicker.GVRPickedObject|||
|-|-|-|
|HitObject |	GVRSceneObject |	the scene object that was hit|
|HitCollider |	GVRCollider |	the collider that was hit|
|HitPosition |	float[3] |	X, Y, Z coordinates of where collider was hit|
|HitDistance |	float |	distance from camera in world coordinates|

##Picking Events

The most convenient way to use the picker is to attach it to a scene object, typically the owner of the current camera, and respond to the pick events generated when objects are hit. Events are raised each time the picking ray enters or exits an object. You can also observe changes to the list of picked objects as a whole.

To handle pick events in your application you provide a class which implements the IPickEvents interface and attach it as a listener to the scene's event receiver. (The picker routes all pick events through the scene.)

##Picking Example

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
    GVRScene scene = context.getNextMainScene();
    {
         GVRSceneObject sphere = new GVRSphereSceneObject(context);
         scene.getEventReceiver().addListener(new PickHandler());
         scene.getMainCameraRig().getOwnerObject().attachComponent(new GVRPicker(context, scene));
         sphere.getTransform().setPositionZ(-2.0f);
         sphere.attachComponent(new GVRSphereCollider(context));
         scene.addSceneObject(sphere);
    }
}

```