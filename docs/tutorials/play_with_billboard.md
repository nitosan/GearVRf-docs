##Overview

In VR applications there are some elements that needs to always facing the user, such as text, menus.
Here we're going to introduce an easy way to implement it using `GVRBillboard` component.

!!!note
    `Billboard` in 3D graphics term is something always facing the camera. 


##Create Project
Create a GearVR Framework project by copying the [template project](https://github.com/gearvrf/GearVRf-Demos/tree/master/template/GVRFApplication) 

Perform the following steps to make sure your project runs correctly

1. (if developing for Gear VR) Copy your [Oculus signature file](https://developer.oculus.com/osig/) to `app/src/main/assets` folder.
1. Change the `applicationId` in `build.gradle` to a unique name to avoid naming conflict when you test the app later
1. Change the `app_name` in `res/values/strings.xml` to avoid confusion when you debug the app.


## Intro

Before we start, there is a [3D T-rex model](/images/trex_mesh.fbx) and it's [texture](/images/trex_tex_diffuse.png) we're going to use for this tutorial. 

## How to use Billboard

Make sure to copy both files into `app/src/main/assets` folder

You can learn how to load 3D models with following [play with 3D models tutorial](play_with_3d_models), here we'll just highlight the code for billboard

```java
mTrexObj = gvrContext.getAssetLoader().loadModel("trex_mesh.fbx");
mTrexObj.getTransform().setPosition(4,-6,-8);
mTrexObj.attachComponent(new GVRBillboard(gvrContext, new Vector3f(0f,1f,0f)));
mNode.addChildObject(mTrexObj);
```

!!!note
    The second parameter of `GVRBillboard` is the up vector of the billboard, it indicates which direction is up so the billboard will rotate accordingly.


## Source Code
Complete [Source Code](https://github.com/nitosan/GearVRf-Samples/tree/master/sample_billboard) for this sample