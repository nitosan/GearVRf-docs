
## Overview
After setting up GearVR Framework, let's create our first VR app and learn a few very important concepts in the process.

## Create Project
Create a GearVR Framework project by copying the [template project](https://github.com/nitosan/GearVRf-template) 

Perform the following steps to make sure your project runs correctly

1. (if developing for Gear VR) Copy your [Oculus signature file](https://developer.oculus.com/osig/) to `app/src/main/assets` folder.
1. Change the `applicationId` in `build.gradle` to a unique name to avoid naming conflict when you test the app later
1. Change the `app_name` in `res/values/strings.xml` to avoid confusion when you debug the app.

## Project Structure
Before we start, let's take a look at some essential parts of a GearVR Framework app

![](/images/gvrf_tut1_project.png)

The template project contains two classes, `MainActivity` and `MainScene`

* `MainActivity` is the entry point of the app, like `android.app.Activity` it handles the initialization and life cycle of a VR app.

* `MainScene` is the container of a scene, just like a scene in the movie, it contains things like camera, characters, visual effects etc, it is the place for all your VR content.

In the assets folder, there are two files: `gvr.xml` and `oculussig` file

* `gvr.xml` is where you config various behavior of GearVR framework, which we'll get into detail in future tutorials

* `oculussig` is the Oculus signing file which allows you to deploy debug apps to VR devices, so always make sure this you have a signing file in your project


## Scene
Usually a VR app/game consists of one or more scenes. The template project already created one Scene called `MainScene` and it should be the starting point for your VR project. 

!!!note
    `MainScene` extends from `GVRMain`, if you're creating your own entry point class, make sure to extend `GVRMain`

There are two functions in `MainScene`; both are important for the scene to work

* onInit() is called when the scene is being loaded, and can be used to perform actions like object creation, assets loading.
* onStep() called once per frame, can be used to perform things like animation, AI or user interactions

### Add object

Adding an object to the scene is simple, Just create the object and specify the material and add it to the scene

First, let's add a new member variable for the Cube to the `MainScene`
```java
    GVRCubeSceneObject mCube
```

Then add the cube to our scene with following code in `onInit()` function
```java
    //Create a cube
    mCube = new GVRCubeSceneObject(gvrContext);

    //Set shader for the cube
    mCube.getRenderData().setShaderTemplate(GVRPhongShader.class);

    //Set position of the cube at (0, -2, -3)
    mCube.getTransform().setPosition(0, -2, -3);
    
    //Add cube to the scene
    gvrContext.getMainScene().addSceneObject(mCube);
```

Build and run the app, you should be able to see a white cube on the screen

!!!note
    If you're using "VR developer mode" without headset the orientation might be different, you might need to turn around to see the cube

### Make it move

Now let's make the cube rotate. Because we want to see the cube rotate continuously, we need to update its rotation every frame. So instead of the `onInit()` function we need to add the rotation logic into `onStep()` function


Add the following code to the `onStep()` function
```java

    //Rotate the cube along the Y axis
    mCube.getTransform().rotateByAxis(1, 0, 1, 0);

```

`rotateByAxis()` has 4 parameters, the first specifies the rotation angle while the rest 3 defines the rotation axis.

![](/images/3d_rotation.png)

By [opengl_tutorials](http://www.opengl-tutorial.org/), [CC-BY-NC-ND](https://creativecommons.org/licenses/by-nc-nd/3.0/fr/deed.en)

Build and run the app, you should be able to see a rotating cube.

Now that you have a rotating cube in VR, feel free to try different things: change its color, make it scale up and down or move it around.

## Source Code
Complete [Source Code](https://github.com/nitosan/GearVRf-Demos/tree/master/tutorials/tutorial_1_simple_app) for this sample
