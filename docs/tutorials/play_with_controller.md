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
2. Gaze controller

## Gear VR Controller
Gear VR controller provides 3 degrees of freedom orientation tracking and trackpad control, it's highly recommended for a more immersive VR experience


![](/images/gear_vr_controller.jpg)

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
