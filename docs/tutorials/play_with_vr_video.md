##Overview

Now that you've learned how to use controllers with GearVR Framework. We are going to learn how to play VR video in VR

##Create Project
Create a GearVR Framework project by copying the [template project](https://github.com/gearvrf/GearVRf-Demos/tree/master/template/GVRFApplication) 

Perform the following steps to make sure your project runs correctly

1. (if developing for Gear VR) Copy your [Oculus signature file](https://developer.oculus.com/osig/) to `app/src/main/assets` folder.
1. Change the `applicationId` in `build.gradle` to a unique name to avoid naming conflict when you test the app later
1. Change the `app_name` in `res/values/strings.xml` to avoid confusion when you debug the app.

##Intro

VR video is the most popular content in VR.

However implementing VR videos is not that straight forward, since currently there are more than [20 different types](https://samsungvr.com/portal/content/faq_tech_gear_vr) of VR video types each with different pros and cons.

Here we're going to learn how to play the most common type: [Monoscopic 360 video](https://samsungvr.com/ui/CMS/Geometry/2D360.html)


## Prepare VR video file
You can download a monoscopic 360 video [here](/images/videos_s_3.mp4).

And copy it to `app\src\main\assets` folder

!!!note
    Feel free to use any monoscopic 360 video


## Create Video Player

Create a new class named `GVRVideoPlayerObject` and replace the default generated code with the following code.

This `GVRVideoPlayerObject` class will create a sphere and apply the video to the sphere as material.

```java
package com.example.org.gvrfapplication;

import android.content.res.AssetFileDescriptor;
import android.media.MediaPlayer;

import org.gearvrf.GVRContext;
import org.gearvrf.GVRMesh;
import org.gearvrf.GVRSceneObject;
import org.gearvrf.scene_objects.GVRSphereSceneObject;
import org.gearvrf.scene_objects.GVRVideoSceneObject;
import org.gearvrf.scene_objects.GVRVideoSceneObjectPlayer;

import java.io.IOException;

public class GVRVideoPlayerObject extends GVRSceneObject{

    private final GVRVideoSceneObjectPlayer<?> mPlayer;
    private final MediaPlayer mMediaPlayer;

    public GVRVideoPlayerObject(GVRContext gvrContext) {
        super(gvrContext);

        GVRSphereSceneObject sphere = new GVRSphereSceneObject(gvrContext, 72, 144, false);
        GVRMesh mesh = sphere.getRenderData().getMesh();

        mMediaPlayer = new MediaPlayer();
        mPlayer = GVRVideoSceneObject.makePlayerInstance(mMediaPlayer);

        GVRVideoSceneObject video = new GVRVideoSceneObject(gvrContext, mesh, mPlayer, GVRVideoSceneObject.GVRVideoType.MONO);
        video.getTransform().setScale(100f, 100f, 100f);

        addChildObject(video);
    }

    public void loadVideo(String fileName) {
        final AssetFileDescriptor afd;
        try {
            afd = this.getGVRContext().getContext().getAssets().openFd(fileName);
            mMediaPlayer.setDataSource(afd.getFileDescriptor(), afd.getStartOffset(), afd.getLength());
            afd.close();
            mMediaPlayer.prepare();

        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public void play() {
        if(mMediaPlayer != null) {
            mMediaPlayer.start();
        }
    }

    public void setLooping(boolean value) {
        mMediaPlayer.setLooping(value);
    }

    public void onPause() {
        mMediaPlayer.pause();
    }

    public void onResume() {
        mMediaPlayer.start();
    }
}

```

## Use video player

Add the following code to the `onInit` function of `MainScene.java` to load and play the video

Create `mPlayerObject`

```java
    private GVRVideoPlayerObject mPlayerObj = null;
```

Load and play VR video
```java
        mPlayerObj = new GVRVideoPlayerObject(gvrContext);
        mPlayerObj.loadVideo("videos_s_3.mp4");
        mPlayerObj.setLooping(true);
        mPlayerObj.play();

        gvrContext.getMainScene().addSceneObject(mPlayerObj);
```

Add `onResume` and `onPause` functions to the `MainScene` class
```java
    public void onResume() {
        if(mPlayerObj != null)
            mPlayerObj.onResume();
    }

    public void onPause() {
        if (mPlayerObj != null)
            mPlayerObj.onPause();
    }
```

Override `onResume` and `onPause` functions in the `MainActivity`
```java
    @Override
    protected void onResume() {
        super.onResume();
        main.onResume();
    }

    @Override
    protected void onPause() {
        super.onPause();
        main.onPause();
    }
```

## Build and Run
Build and run the VR app, you should be able to watch the VR video on your device.


## Source Code
Complete [Source Code](https://github.com/gearvrf/GearVRf-Demos/tree/master/tutorials/tutorial_5_vr_video) for this sample