##Overview

Now that you've learnt how to use 3D model and animation with GearVR Framework. We are going to learn how to use controllers to make VR app more interactive.

##Create Project
Create a GearVR Framework project by copying the [template project](https://github.com/gearvrf/GearVRf-Demos/tree/master/template/GVRFApplication) 

Perform the following steps to make sure your project runs correctly

1. (if developing for Gear VR) Copy your [Oculus signature file](https://developer.oculus.com/osig/) to `app/src/main/assets` folder.
1. Change the `applicationId` in `build.gradle` to a unique name to avoid naming conflict when you test the app later
1. Change the `app_name` in `res/values/strings.xml` to avoid confusion when you debug the app.

##Intro

Being able to interact with in the VR environment helps a lot with the immersion. Currently, there are two ways to interact with VR content

1. GearVR controller

    Gear VR controller provides 3 degrees of freedom orientation tracking and trackpad control, it's highly recommended for a more immersive VR experience
    ![](/images/gear_vr_controller.jpg)

2. Gaze controller

    Gaze controller is available by default from GearVR headset, based on the direction of the headset and input commands using the touchpad on GearVR

!!!note
    Gear VR Framework supports both controllers and GearVR controller have higher priority over gaze controller. It will automatically switch when user turn controller on/off.

## Using VR Controller

For VR controller to work correctly, we need to implement 3 key elements

1. Cursor
2. Collider
3. PickHandler

### 1. Create Cursor
Cursor indicates the location and object that user is pointing. It's a important way for user to interact with the VR environment.

A cursor can be anything, an image, a cube or even something that's animated. Developer can pick anything that fits their needs. 

In this tutorial we'll use a simple reticle texture as an example.

![](/images/cursor.png)

First let's create a quad to display this texture, notice we turn off the depth test and set the rendering order as `OVERLAY` so other SceneObjects will not cover it, so it will be always visible to the user.

```java
    GVRTexture cursor_texture = gvrContext.getAssetLoader().loadTexture(new GVRAndroidResource(gvrContext, "cursor.png"));
    final GVRSceneObject cursor = new GVRSceneObject(gvrContext, gvrContext.createQuad(1f, 1f), cursor_texture);
    cursor.getRenderData().setDepthTest(false);
    cursor.getRenderData().setRenderingOrder(GVRRenderData.GVRRenderingOrder.OVERLAY);
```


### 2. Collider

In order to know which object dose the user picked in the scene, we need to add collider to the SceneObject.

There are three types of colliders

1. BoxCollider

    BoxCollider can detect picking within a bounding box

2. SphereCollider

    SphereCollider can detect picking within a sphere

3. MeshCollider

    MeshCollider can detect picking of a complex 3d Model, however it's slower than the previous two.

Collider can be added to any SceneObject as a component
```java
    sceneObject.attachComponent(new GVRMeshCollider(getGVRContext(), false));
```


### 3. PickHandler

PickHandler will be triggered once the cursor enter/exit a SceneObject, base on the events developer can implement different feedback for the user

PickHandler have 4 major method, onEnter/onExit/onTouchStart/onTouchEnd

Here is an example of how to use each method

```java
    private ITouchEvents mPickHandler = new GVREventListeners.TouchEvents()
    {
        private GVRSceneObject movingObject;

        public void onEnter(GVRSceneObject sceneObj, GVRPicker.GVRPickedObject pickInfo)
        {
            sceneObj.getRenderData().getMaterial().setColor(Color.RED);
        }

        public void onTouchStart(GVRSceneObject sceneObj, GVRPicker.GVRPickedObject pickInfo)
        {
            if (movingObject == null)
            {
                sceneObj.getRenderData().getMaterial().setColor(Color.BLUE);
                if (mController.startDrag(sceneObj))
                {
                    movingObject = sceneObj;
                }
            }
        }

        public void onTouchEnd(GVRSceneObject sceneObj, GVRPicker.GVRPickedObject pickInfo)
        {
            sceneObj.getRenderData().getMaterial().setColor(Color.RED);
            if (sceneObj == movingObject)
            {
                mController.stopDrag();
                movingObject = null;
            }
        }

        public void onExit(GVRSceneObject sceneObj, GVRPicker.GVRPickedObject pickInfo)
        {
            sceneObj.getRenderData().getMaterial().setColor(Color.GRAY);
            if (sceneObj == movingObject)
            {
                mController.stopDrag();
                movingObject = null;
            }
        }
    };
```

### 4. Enable Controller



### 1. Enable Controller
Add the following code in `init` class to enable the controller
```java
        GVRInputManager input = gvrContext.getInputManager();
        input.addCursorControllerListener(listener);

        //Add controller if detected any
        for (GVRCursorController cursor : input.getCursorControllers()) {
            listener.onCursorControllerAdded(cursor);
        }
```

### 2. Create the controller listener
By define the `CursorControllerListener`, you can specify what happens when controller gets connect/disconnected or when user presses a button.

Notice we also created a `GVRGearControllerSceneObject`, it is a SceneObject that acts exactly like a GearVR controller in VR. It's highly recommended for a better user experience.

```java
    //Listener for controller event
    private static GVRCursorController.ControllerEventListener controllerEventListener = new
            GVRCursorController.ControllerEventListener() {
                @Override
                public void onEvent(GVRCursorController gvrCursorController) {
                    KeyEvent keyEvent = gvrCursorController.getKeyEvent();
                    if(keyEvent != null){
                        //TODO: add logic to handle controller key press here
                    }
                }
            };

    //Listener for add/removal of a controller
    private static CursorControllerListener listener = new CursorControllerListener() {

        @Override
        public void onCursorControllerAdded(GVRCursorController controller) {

            //Setup GearVR Controller
            if (controller.getControllerType() == GVRControllerType.CONTROLLER) {
                //Create cursor
                GVRSceneObject cursor = createQuad(1f, 1f, R.raw.cursor);
                cursor.getRenderData().setDepthTest(false);
                cursor.getRenderData().setRenderingOrder(100000);

                //Create GearController
                GVRGearControllerSceneObject ctrObj = new GVRGearControllerSceneObject(s_Context);
                ctrObj.setCursorController(controller);
                ctrObj.setCursor(cursor);

                //Setup picking
                ctrObj.setRayDepth(8.0f);

                controller.addControllerEventListener(controllerEventListener);

            }else{
                controller.setEnable(false);
            }
        }

        @Override
        public void onCursorControllerRemoved(GVRCursorController controller) {
            if (controller.getControllerType() == GVRControllerType.CONTROLLER) {
                controller.removeControllerEventListener(controllerEventListener);
                controller.resetSceneObject();
            }
        }
    };
```

### 3. Build
Build and run the project, you should be able to see a Gear VR controller in VR that mirrors your move

## Gaze Controller
Gaze controller is available by default from GearVR headset, you can enable gaze controller with following steps

### 1. Enable Gaze Config 
Add the following line to `gvr.xml` file, under `vr-app-settings` section
```
        useGazeCursorController="true"
```

Your `gvr.xml` file should look like this
```xml
<lens name="N4" >
    ...
    
    <vr-app-settings
        useGazeCursorController="true"
        useSrgbFramebuffer="false" >

    ...
</lens>
```
### 2. Load Config file
Make sure to load the `gvr.xml` in `MainActivity.java`
```java
        setMain(new MainScene(), "gvr.xml");
```

### 3. Controller cursor
Download the controller cursor texture [here](/images/cursor.png)

![](/images/cursor.png)

Place the cursor file under `app\src\main\res\raw`

### 4. Controller Listener

Add following code to `MainScene.java` to create a controller listener. We use `CursorControllerListener` to show a cursor if we find a gaze controller.

!!!note
    make sure to place these code inside `MainScene` class

```java
    private GVRContext mContext;
    private GVRScene mMainScene;
    private static final float DEPTH = -1.5f;

    //Listener for add/removal of a controller
    private CursorControllerListener listener = new CursorControllerListener() {

        private GVRSceneObject cursor;

        @Override
        public void onCursorControllerAdded(GVRCursorController controller) {

            // Gaze Controller
            if (controller.getControllerType() == GVRControllerType.GAZE) {

                //Add controller cursor
                GVRTexture cursor_texture = mContext.getAssetLoader().loadTexture(new GVRAndroidResource(mContext, R.raw.cursor));
                cursor = new GVRSceneObject(mContext, mContext.createQuad(0.1f, 0.1f), cursor_texture);
                cursor.getTransform().setPosition(0.0f, 0.0f, DEPTH);
                mMainScene.getMainCameraRig().addChildObject(cursor);
                cursor.getRenderData().setDepthTest(false);
                cursor.getRenderData().setRenderingOrder(100000);

                //Set controller position
                controller.setPosition(0.0f, 0.0f, DEPTH);
                controller.setNearDepth(DEPTH);
                controller.setFarDepth(DEPTH);
            } else {
                // disable all other types
                controller.setEnable(false);
            }
        }

        @Override
        public void onCursorControllerRemoved(GVRCursorController controller) {
            if (controller.getControllerType() == GVRControllerType.GAZE) {
                if (cursor != null) {
                    mMainScene.getMainCameraRig().removeChildObject(cursor);
                }
                controller.setEnable(false);
            }
        }
    };
```

Add following code to the `onInit` function to initialize Gaze controller.
```java
        mContext = gvrContext;
        mMainScene = gvrContext.getMainScene();

        //List controllers
        GVRInputManager input = gvrContext.getInputManager();
        input.addCursorControllerListener(listener);

        for (GVRCursorController cursor : input.getCursorControllers()) {
            listener.onCursorControllerAdded(cursor);
        }
```

### 5. Build
Build and run the project, you should be able to see a cursor on the center of the screen



## Source Code
Complete [Source Code](https://github.com/gearvrf/GearVRf-Demos/tree/master/tutorials/tutorial_3_model_animation) for this sample
