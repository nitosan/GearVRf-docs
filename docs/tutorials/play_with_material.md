##Overview

Now that you've created your first VR app with GearVR Framework. We are going to learn how to create things that look much better in VR.

##Create Project
Create a GearVR Framework project is by copying the [template project](https://github.com/nitosan/GearVRf-template) 

Perform the following steps to make sure your project runs correctly

1. Copy your [Oculus signature file](https://developer.oculus.com/osig/) to `app/src/main/assets` folder.
1. Change the `applicationId` in `build.gradle` to a unique name to avoid naming conflict when you testing the app later
1. Change the `app_name` in `res/values/strings.xml` to avoid confusion when you debugging the app.

## What is Material
In 3D graphics term, a material is a set of textures and shader parameters that can be used to simulate different types of materials in real life.

For example with the correct material, you can make your 3D objects looks like bricks.

![](/images/tutorial_material_2.png)

By CaliCoastReplay - Own work, [CC BY 4.0](https://commons.wikimedia.org/w/index.php?curid=55131278)

## Create SceneObjects
First, let's create one cube and one sphere

```java
    GVRCubeSceneObject mCube;
    GVRSphereSceneObject mSphere;
```

and initialize them in `onInit` function

```java
    //Create Shpere
    mSphere = new GVRSphereSceneObject(gvrContext);
    mSphere.getTransform().setPosition(2, 0, -3);
    gvrContext.getMainScene().addSceneObject(mSphere);

    //Create Cube
    mCube = new GVRCubeSceneObject(gvrContext);
    mCube.getTransform().setPosition(-2, 0, -3);
    gvrContext.getMainScene().addSceneObject(mCube);
```


## Material with solid color

Material with solid color can be used to create simple 3D objects, such as a red ball, a white cube.

Let's create a red material with the following code.

```java
    GVRMaterial flatMaterial;
    flatMaterial = new GVRMaterial(gvrContext);
    flatMaterial.setColor(1.0f, 0.0f, 0.0f);
```

!!!note
    GearVR Framework uses [RGB color model](https://en.wikipedia.org/wiki/RGB_color_model) and the range of each color is from 0 to 1 

Now that we created the material, let's apply it to the sphere.
```java
    mSphere.getRenderData().setMaterial(flatMaterial);
    mSphere.getRenderData().setShaderTemplate(GVRPhongShader.class);
```

Build and run your app and see if you can find the red sphere.

## Material with Texture

Solid color objects are good, but what if I want to create things like a wooden box or brick wall? 

Yes, we can do that with textures, let's learn how to do that.

The first step of creating a textured material is to have one texture. Which you can download it here

![](/images/crate_wood.jpg)

Place the texture under `app\src\main\res\raw` folder

Sync your project, and you should be able to load the texture using following code

```java
    GVRTexture texture = gvrContext.getAssetLoader().loadTexture(new GVRAndroidResource(gvrContext, R.raw.crate_wood));
```

You can create a material with texture using following code.

```java
    GVRMaterial textureMaterial;
    textureMaterial = new GVRMaterial(gvrContext);
    textureMaterial.setMainTexture(texture);

    mCube.getRenderData().setMaterial(textureMaterial);
```

Build and run your app, you should see the wooden crate we just created.

## Turn on the light

We just created a wooden crate, but if you look at it closely, you'll find it's really bright and doesn't feel natural. 

In this section, we're going to apply lighting to both objects to make it look a lot nicer.

First, let's add a light to the scene using following code

```java
    GVRPointLight pointLight;
    pointLight = new GVRPointLight(gvrContext);
    pointLight.setDiffuseIntensity(0.6f, 0.5f, 0.5f, 1.0f);
    pointLight.setSpecularIntensity(0.5f, 0.5f, 0.5f, 1.0f);

    GVRSceneObject lightNode = new GVRSceneObject(gvrContext);
    lightNode.getTransform().setPosition(0,0,0);
    lightNode.attachLight(pointLight);

    gvrContext.getMainScene().addSceneObject(lightNode);
```

The code snippet will create a light with diffuse color of (0.6, 0.5, 0.5) and specular color of (0.5, 0.5, 0.5). Which will give the scene a red tone.

There is one more thing we need to do to make the light work, it is to make sure all the scene objects uses PhongShader and uses diffuse texture.

Add the following line to the cube object:
```java
textureMaterial.setTexture("diffuseTexture", texture);
mCube.getRenderData().setShaderTemplate(GVRPhongShader.class);
```

Build and run the app, you should be able to see the lighting on the sphere and crate box, feel free to tweak with the light to make it look better.


## Make it move

Add the following code to the `onStep()` function to make the cube move.
```java

    //Rotate the cube along the Y axis
    mCube.getTransform().rotateByAxis(1, 0, 1, 0);

```

## Source Code
Complete [Source Code](https://github.com/nitosan/GearVRf-Demos/tree/master/tutorials/tutorial_2_materials) for this sample

