##Overview

Now that you've learned how to apply the material to the VR app with GearVR Framework, we are going to learn how to play with 3D model.

##Create Project
Create a GearVR Framework project by copying the [template project](https://github.com/gearvrf/GearVRf-Demos/tree/master/template/GVRFApplication) 

Perform the following steps to make sure your project runs correctly

1. (if developing for Gear VR) Copy your [Oculus signature file](https://developer.oculus.com/osig/) to `app/src/main/assets` folder.
1. Change the `applicationId` in `build.gradle` to a unique name to avoid naming conflict when you test the app later
1. Change the `app_name` in `res/values/strings.xml` to avoid confusion when you debug the app.

## Intro

Often times when we develop VR applications, we need to show complex 3D models. For example a plane, a castle or even an earth. We're going to learn how to achieve it with GearVR Framework

Before we start, we need to have a 3D model file. Here is the [3D T-rex model](/images/trex_mesh.fbx) with [texture](/images/trex_tex_diffuse.png) we're going to use for this tutorial. You can preview them in [FBX Review](https://www.autodesk.com/products/fbx/fbx-review). 

You can use your own 3D models, just make sure it is one of the following file formats:

* OBJ
* FBX
* Collada(.dae)
* X3D
* All formats supported by [Assimp](http://www.assimp.org/main_features_formats.html)



## How to load 3D models

The first step is to place it correctly. Please make sure to copy the files to the following path.

1. Copy `trex_mesh.fbx` into `app/src/main/assets`
1. Copy `trex_tex_diffuse` into `app/src/main/assets`

After copying the 3D model files, we can use `GVRAssetLoader` class to load them, it is accessible from the context by calling `GVRContext.getAssetLoader()`

Using the following code to load the fbx file and texture 
```java
GVRMesh dinoMesh = gvrContext.getAssetLoader().loadMesh(new GVRAndroidResource(gvrContext, "trex_mesh.fbx"));
GVRTexture dinoTexture = gvrContext.getAssetLoader().loadTexture(new GVRAndroidResource(gvrContext, "trex_tex_diffuse.png"));
```

!!!note
    Loading methods have `Future` in its API such as `loadFutureTexture` is deprecated

After 3D model and texture both loaded, we can add them to the scene with a scene object
```java
    GVRSceneObject dinoObj = new GVRSceneObject(gvrContext, dinoMesh, dinoTexture);

    dinoObj.getTransform().setPosition(0,0,-10);
    dinoObj.getTransform().rotateByAxis(-90, 1f, 0f, 0f);
    gvrContext.getMainScene().addSceneObject(dinoObj);

```

!!!note
    We create `GVRSceneObject` instead of use `AssetLoader.loadModel()` because `loadModel()` require fbx files to have correct path to texture file which a lot of 3D modeling software failed to produce.

!!!note
    You might need to rotate the model differently if you're using other models.

Build and run the app, you should be able to see a T-Rex!

## Work with 3D modeling tools
Fbx is the recommended format for the GearVR framework. Currently, all major 3D modeling tools support exporting to FBX format.


## Source Code
Complete [Source Code](https://github.com/gearvrf/GearVRf-Demos/tree/master/tutorials/tutorial_3_model_animation) for this sample
