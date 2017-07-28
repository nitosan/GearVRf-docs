
GearVRf supports loading of 3D content files both synchronously and asynchronously. Your application may issue a blocking load and wait for the asset or get a callback when the asset loading is finished. GearVRf can import .OBJ, .FBX, Collada  (.dae) and X3D file formats, as well as all file formats supported by [Assimp](http://www.assimp.org/main_features_formats.html). GearVRf can also read all commonly used bitmap file formats.

##Loading a 3D Model

Loading models is handled by the GVRAssetLoader class which is accessible from the context by calling GVRContext.getAssetLoader(). The asset loader can load models from a variety of places. You use the volume type to indicate where you are reading the model from.

* GVRResourceLoader.VolumeType.ANDROID_ASSETS designates the model is in the "assets" directory.
* GVRResourceLoader.VolumeType.ANDROID_SDCARD designates the model on the phone SD card.
* GVRResourceLoader.VolumeType.NETWORK designates the model is on the internet.

The `GVRAssetLoader.loadModel` function loads a model from a device and returns as soon as the model geometry has been parsed and accumulated. This model may not have been added to the scene yet. If you pass the current GVRScene as an argument, the asset loader will wait until all of the textures in the model have been loaded and then add it to the scene. If you omit the argument, the model is not added to the scene and you will need to add it in your own code.

##Model Loading Example

This example shows how to load a model which lives in the assets directory of your application. The path name for the asset is relative to that directory. The asset is loaded in the background in another thread and added to the scene when all of its textures have completed loading. The model returned may not be completely loaded but all of the geometry will be accessible. Usually assets are loaded in the onInit function of your main script.

```java
public void onInit(GVRContext context)
{
    GVRScene scene = context.getNextMainScene();
    try
    {
        String url = "https://raw.githubusercontent.com/gearvrf/GearVRf-Demos/master/gvrjassimpmodelloader/assets/trees/trees9.3ds";
        GVRSceneObject model = context.getAssetLoader().loadModel(url, GVRResourceVolume.VolumeType.NET, scene);
        model.getTransform().setPosition(0.0f, -4.0f, -20.0f);
    }
    catch (IOException e)
    {
        Log.e("ERROR", "Failed to load model: %s", e);
    }
}
```
