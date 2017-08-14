##Overview

Now that you've created your first VR app with GearVR Framework. We are going to learn how to create great looking scenes in VR

##Create Project
Create a GearVR Framework project is by copying the [template project](https://github.com/nitosan/GearVRf-template) 

Perform the following steps to make sure your project runs correctly

1. Copy your [Oculus signature file](https://developer.oculus.com/osig/) to `app/src/main/assets` folder.
1. Change the `applicationId` in `build.gradle` to a unique name to avoid naming conflict when you testing the app later
1. Change the `app_name` in `res/values/strings.xml` to avoid confusion when you debugging the app.

##Intro

Be able to interact with in the VR environment helps a lot with the emersion. Currently, there are two ways to interact with VR content

1. Gaze controller
2. GearVR controller

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

    <vr-app-settings
        framebufferPixelsHigh="DEFAULT"
        framebufferPixelsWide="DEFAULT"
        showLoadingIcon="true"
        useProtectedFramebuffer="false"
        useGazeCursorController="true"
        useSrgbFramebuffer="false" >

        <mono-mode-parms
            monoFullScreen="false"
            monoMode="false" />

        <mode-parms
            allowPowerSave="true"
            resetWindowFullScreen="true" />

        <performance-parms
            cpuLevel="1"
            gpuLevel="1" />

        <eye-buffer-parms
            colorFormat="COLOR_8888"
            depthFormat="DEPTH_24"
            fov-y="DEFAULT"
            multiSamples="2"
            resolutionWidth="DEFAULT"
            resolutionHeight="DEFAULT"
            resolveDepth="false" />

        <head-model-parms
            eyeHeight="DEFAULT"
            headModelDepth="DEFAULT"
            headModelHeight="DEFAULT"
            interpupillaryDistance="DEFAULT" />
    </vr-app-settings>

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
            Log.i("GUI", "Add Controller");
            // Gaze Controller
            if (controller.getControllerType() == GVRControllerType.GAZE) {

                //Add controller cursor
                cursor = new GVRSceneObject(mContext,
                        new FutureWrapper<GVRMesh>(mContext.createQuad(0.1f, 0.1f)),
                        mContext.getAssetLoader().loadFutureTexture(new GVRAndroidResource(mContext, R.raw.cursor)));
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

## Gear VR Controller
Gear VR controller provides better user experience and more precise tracking. GearVR cursor controller functionality is still under development [this demo](https://github.com/gearvrf/GearVRf-Demos/tree/master/gvr-controller) for using Gear VR controller



