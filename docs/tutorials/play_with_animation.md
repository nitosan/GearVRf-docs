##Overview

Now that you've learnt how to load 3D model, we are going to learn how to play with animation in VR

##Create Project
Create a GearVR Framework project by copying the [template project](https://github.com/gearvrf/GearVRf-Demos/tree/master/template/GVRFApplication) 

Perform the following steps to make sure your project runs correctly

1. (if developing for Gear VR) Copy your [Oculus signature file](https://developer.oculus.com/osig/) to `app/src/main/assets` folder.
1. Change the `applicationId` in `build.gradle` to a unique name to avoid naming conflict when you test the app later
1. Change the `app_name` in `res/values/strings.xml` to avoid confusion when you debug the app.

## Intro

Before we start, we have to obtain a 3D model file with animation.

Gear VR Framework supports following formats

* FBX
* Collada(.dae)

And here is one animated 3D model that we are going to use for this tutorial

* [3D model with animation](/images/astro_boy.dae)
* [Texture](/images/astro_boy.jpg)


## How to play animations

Make sure to copy both files into `app/src/main/assets` folder

You can load the animated model with following code
```java
    GVRModelSceneObject character = gvrContext.getAssetLoader().loadModel("astro_boy.dae");
    character.getTransform().setRotationByAxis(45.0f, 0.0f, 1.0f, 0.0f);
    character.getTransform().setScale(6, 6, 6);
    character.getTransform().setPosition(0.0f, -0.5f, -1f);
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

![](/images/tutorials/screenshot_tut_03_2.jpg)

## Source Code
Complete [Source Code](https://github.com/gearvrf/GearVRf-Demos/tree/master/tutorials/tutorial_3_model_animation) for this sample
