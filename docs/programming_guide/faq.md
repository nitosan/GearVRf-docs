
### 1. Is there any example of object following the head tracking, just like a reticle?

See [gvr-tutorial-lesson2 sample](https://github.com/gearvrf/GearVRf-Demos/blob/master/gvr-tutorial-lesson2/app/src/main/java/org/gearvrf/balloons/BalloonMain.java#L51). Examine the BalloonMain.java and the headTracker tracker object it sets up. The key part is adding the object to the main camera rig.

### 2. I want to implement a scrollable list of item like ListView in Android. How to go about that?

1. Background objects: rendering order N, depth test on
1. Clip object: rendering order N+1, depth test on, alpha blend on, alpha = 0 (completely transparent)
1. List view object: rendering order N+2, depth test on

The clip object should be a plane with a hole in it where you want to see the list view. It should be completely transparent. It will be rendered after the background so it will update the depth buffer but the background will show thru completely. This clip object should have a Z value putting it IN FRONT of the list view object even though it will be rendered before that object (because you set the rendering order to a smaller value).

GearVRF will render objects in ascending rendering order so the background will be rendered first. The clip object will update the depth buffer so that anything drawn BEHIND it will show thru the hole but will be obscured by the transparent clip area (the depth buffer will do the clipping for us).

### 3. Can i use an emulator during development for testing?

Short answer: No.

Long answer: It would likely be somewhat painful to do. Oculus only provides 32bit arm libraries. Which means you would need to set up an arm emulator (rather than an x86 one). In that emulator, we would detect the oculus service is not on the system and fall back to daydream. However, in our experience, running an arm emulator is horrifically slow, especially for anything GL related. It's best to stick with a physical phone for development.

### 4. I am using Windows, trying to build the framework and getting weird errors. Like this one:

```
...\GearVRf\GVRf\Framework\framework\..\backend_oculus/src/main/jni/util/configuration_helper.cpp:235:1: fatal error: opening dependency file ./obj/local/armeabi-v7a/objs/...\GearVRf\GVRf\Framework\framework\..\backend_oculus/src/main/jni/util/configuration_helper.o.d: No such file or directory
```

Your paths might be too long. Try moving the framework to C:\ and build again.

### 5. I want to inflate and show an Android view. Can I do that?

Yes. The gvr-renderableview sample shows how to do that.

### 6. I want to use ExoPlayer instead of MediaPlayer for video playback. Can I do this?

Yes. See the gvr-360video sample, which allows you to use either. Set the USE_EXO_PLAYER flag in Minimal360VideoActivity.java.

### 7. How can I create a mixed VR android app and launching VR Mode later, by clicking a button for example? I need to create an activity visualized in normal mode for settings and later launch a VR mode, showing the "you need gear vr" screen if you have not attached it.

Unfortunately, this is not supported. Apps get marked as "vr" not individual activities. Which means the prompt will show when you try to launch your "normal" activity. This is not a gvrf limitation.

### 8. Trying to build a sample but I get the following error:

```
What went wrong:
Execution failed for task ':app:transformClassesWithDexForDebug'.
> com.android.build.api.transform.TransformException: com.android.ide.common.process.ProcessException: java.util.concurrent.ExecutionException: com.android.dex.DexException: Multiple dex files define Lcom/oculus/systemutils/BuildConfig;
```

Most likely you still have VrApi.jar and SystemUtils.jar under the framework module (GearVRf/GVRf/Framework/framework/src/main/libs/). Please remove them from there, clean and build.

### 9. I am using Linux and getting a strange aapt error during the build. Something like `java.io.IOException: Cannot run program "/aapt": error=2, No such file or directory`

You might be missing support for executing 32bit binaries and/or libraries aapt depends on. Please run the following:

```
sudo dpkg --add-architecture i386
sudo apt-get update
sudo apt-get install libc6:i386 libncurses5:i386 libstdc++6:i386
sudo apt-get install zlib1g:i386
```

### 10. Is there support for the Oculus Platform SDK?

Yes, the entitlement check is supported. Go to GVRf/Extensions/. There is a platformsdk_support module. To build it run `./gradlew -Pplatformsdk_support=true platformsdk_support:assembleDebug`. Checkout the javadoc in PlatformEntitlementCheck.java. Have been verified to work with Platform SDK versions 1.6, 1.7 and 1.8. For further information see https://github.com/Samsung/GearVRf/wiki/Entitlement-Check-using-GVRF

### 11. Is there any way to play youtube video from url?

Yes. See https://github.com/Samsung/GearVRf/issues/1033#issuecomment-278244683

### 12. I am trying to use GVRF on a Google Pixel phone and I get this exception:

```
02-15 19:53:15.697 23156-23156/? E/AndroidRuntime: FATAL EXCEPTION: main
Process: pl.lynx.daydream.test, PID: 23156
java.lang.UnsatisfiedLinkError: dalvik.system.PathClassLoader[DexPathList[[zip file "/data/app/pl.lynx.daydream.test-2/base.apk"],nativeLibraryDirectories=[/data/app/pl.lynx.daydream.test-2/lib/arm64, /system/fake-libs64, /data/app/pl.lynx.daydream.test-2/base.apk!/lib/arm64-v8a, /system/lib64, /vendor/lib64]]] couldn't find "libgvrf.so"
```
Daydream has 64bit binaries but GVRf only supports 32bit binaries. In your app's gradle file you need to add this:

```
android {

    // ignore the x86 and arm-v8 files from the google vr libraries
    packagingOptions {
        exclude 'lib/x86/libgvr.so'
        exclude 'lib/arm64-v8a/libgvr.so'
    }
}
```

### 13. I used to build the demos from the GearVRf-Demos repo just fine. Suddenly I am getting errors. What happened?

The master branch is subject to frequent improvements. The GVRf team pushes updated framework snapshots to the maven repo, but due to the gradle's caching you are most likely using outdated snapshot. Please pass the --refresh-dependencies argument to gradlew if you are building from the command line. Or you can just delete the gradle cache via 
```
rm -rf ~/.gradle/caches/.
```
Alternatively you could use the 3.1 branch which is stable. After cloning the demos repo, switch to the release_v3.1 branch.

### 14. I am building an app from scratch. How do I add support for GVRF to my app? What are the minimum dependencies?

Please see this bare-bones project that can serve as a reference: https://github.com/gearvrf/GearVRf-Demos/tree/master/template/GVRFApplication.

### 15. My app in the Oculus Store fails to install on Android N devices. I get an UNTRUSTED_APK_ERROR error.

Oculus doesn't support APK signature scheme v2 yet. It should be disabled if you plan to submit apps to the Oculus store. Android Studio seems to apply the scheme unconditionally. Build from the command line and include the following section in your gradle file:

```
android {
    signingConfigs {
        release {
            v2SigningEnabled false
            storeFile file("<full-path-to-your-store-file>")
            storePassword "<your_store_pwd>"
            keyAlias "<alias>"
            keyPassword "<key_pwd>"
        }
    }
    defaultConfig {
        signingConfig signingConfigs.release
    }
}
```

### 16. Can you run GearVR app on your phone without GearVR?

Yes, in your phone's Settings->Applications->Application Manager->Gear VR Service->Manage Storage Tab on VR Service Version multiple times until the 'Developer Options' menu appears. Then flick on the 'Developer mode' switch. You may need to do this every time when the phone restarts

### 17. How to reduce nausea?

Maintain a high frame-rate, such as 90+ fps.

### 18. How many triangles can I display max for a good VR experience with high frame rate?

On a mobile phone such as Galaxy S6/S7, please keep triangle count in the thousands to tens of thousands range if possible, depending on shader complexities.

### 19. What are some graphics performance tips?

Keep draw calls minimal and relatively cheap pixel shader. Keep in mind shadows from shadow map more or less doubles the triangle rendered. Use profiler to see if you are really GPU bound.

### 20. Which phones are compatible with GearVR?

Currently, Samsung Galaxy S6, S6 Edge, S6 Edge+, S7, S7 Edge, S7 Edge+, S8, S8+, Note 5
