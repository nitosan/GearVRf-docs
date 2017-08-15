##Overview

Now that you've learnt how to apply material to the VR app with GearVR Framework. We are going to learn how to play with 3D model and animation in VR

##Create Project
Create a GearVR Framework project is by copying the [template project](https://github.com/nitosan/GearVRf-template) 

Perform the following steps to make sure your project runs correctly

1. Copy your [Oculus signature file](https://developer.oculus.com/osig/) to `app/src/main/assets` folder.
1. Change the `applicationId` in `build.gradle` to a unique name to avoid naming conflict when you testing the app later
1. Change the `app_name` in `res/values/strings.xml` to avoid confusion when you debugging the app.

## Intro

Often times when we develop VR applications, we need to show complex 3D models. For example a plane, a castle or even an earth. We're going to learn how to achieve it with GearVR Framework

Before we start, we need to have a 3D model file. Here is a [3D T-rex model](/images/trex_mesh.fbx) and it's [texture](/images/trex_tex_diffuse.pkm) we're going to use for this tutorial. You can preview them in [FBX Review](https://www.autodesk.com/products/fbx/fbx-review). 

If you want to use 3D models that you prefer that's totally fine, just keep in mind it has to be one of the following file formats:

* OBJ
* FBX
* Collada(.dae)
* X3D
* All formats supported by [Assimp](http://www.assimp.org/main_features_formats.html)



## How to load 3D models

The first step of loading a 3D model into your VR app is to place it correctly. Please make sure to copy the files to the following path.

1. Copy `trex_mesh.fbx` into `app/src/main/res/raw`
1. Copy `trex_tex_diffuse` into `app/src/main/res/drawable-xxxhdpi`

After copying the 3D model files, we can use `GVRAssetLoader` class to load them, it is accessible from the context by calling `GVRContext.getAssetLoader()` GVRAssetLoader supports loading content synchronously and asynchronously, generally asynchronously loading is recommended.

Using the following code to load the fbx file and texture asynchronously
```java
    Future<GVRMesh> dinoMesh = gvrContext.getAssetLoader().loadFutureMesh(
            new GVRAndroidResource(gvrContext, R.raw.trex_mesh)
    );

    Future<GVRTexture> dinoTexture = gvrContext.getAssetLoader().loadFutureTexture(
            new GVRAndroidResource(gvrContext, R.raw.trex_tex_diffuse)
    );
```

!!!note
    Asynchronous methods have `Future` in its API for example `loadFutureTexture` compare to synchronous version `loadTexture`

After 3D model and texture both loaded, we can add them to the scene with a scene object
```java
    GVRSceneObject dinoObj = new GVRSceneObject(gvrContext, dinoMesh, dinoTexture);

    dinoObj.getTransform().setPosition(0,0,-10);
    dinoObj.getTransform().rotateByAxis(-90, 1f, 0f, 0f);
    gvrContext.getMainScene().addSceneObject(dinoObj);

```

!!!note
    You might need to rotate the model differently if you're using other models.

Build and run the app, you should be able to see a T-Rex!

## How to play animations

Using a 3D model with animations follow a different process. let's see how it works. 

First, let's download following files

* [3D model with animation](/images/astro_boy.dae)
* [Texture](/images/astro_boy.jpg)

Then make sure to copy both files into `app/src/main/assets` folder

You can load the animated model with following code
```java
    GVRModelSceneObject character = gvrContext.getAssetLoader().loadModel("astro_boy.dae");
    character.getTransform().setRotationByAxis(45.0f, 0.0f, 1.0f, 0.0f);
    character.getTransform().setScale(3, 3, 3);
    character.getTransform().setPosition(0.0f, -0.4f, -0.5f);
    gvrContext.getMainScene().addSceneObject(character);
```

And play the animation with `GVRAnimator`, here we make sure the animation in looping forever with the `setRepeatCount` set to -1
```java
    GVRAnimator animator = (GVRAnimator)character.getComponent(GVRAnimator.getComponentType());
    animator.setRepeatCount(-1);
    animator.setRepeatMode(GVRRepeatMode.REPEATED);
    animator.start();
```

## Work with 3D modeling tools
Fbx is the recommended format for the GearVR framework. Currently, all major 3D modeling tools support exporting to FBX format.


## Source Code
Complete [Source Code](https://github.com/gearvrf/GearVRf-Demos) for this sample
