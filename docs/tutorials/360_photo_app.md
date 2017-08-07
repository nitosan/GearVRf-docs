
## Overview

Last time we showed how easy it is to create a simple game scene. This time we're going to create an app for viewing 360 photos.

To display a photo in VR you first need to have a 360 photo. Then display the photo inside a sphere. When user looks at the image from inside the sphere, it will create a immersive experience for the them. 


## Create Project
Make a copy of [template project](https://github.com/nitosan/GearVRf-template) and copy your oculus signing files to the assets folder


## Load Image

In order to display the image we need to load the image into the memory first. And here is how to do it.

1. download a 360 photo from [here](https://github.com/gearvrf/GearVRf-Demos/blob/master/gvr-360photo/app/src/main/res/raw/photosphere.jpg) 

1. place it under `\app\src\main\res\raw` folder

1. load image with the following code
```java
Future<GVRTexture> texture = 
	gvrContext.getAssetLoader().loadFutureTexture(
		new GVRAndroidResource(gvrContext, R.raw.photosphere)
	);
```

!!!note
	We use loadFutureTexture because we want to load the texture asynchronously.

## Create Sphere

Add the following code to create a sphere and apply the texture we previously loaded
```java
	GVRSphereSceneObject sphere = 
		new GVRSphereSceneObject(gvrContext, false, texture);

	//Add Sphere to the scene
    gvrContext.getMainScene().addSceneObject(sphere);
```

!!!note
	We specify faceingOut parameter as false, because the player is inside the sphere looking out.

	You can also specify the stack and slice parameter to make the sphere more smooth.
