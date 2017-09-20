## Software Requirements

Before start using GearVR Framework, make sure you download the following SDKs

* [Android Studio](https://developer.android.com/studio/index.html)
* [JDK 1.7 or above](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
* [Oculus Mobile SDK](https://developer.oculus.com/downloads/package/oculus-mobile-sdk/) (If developing for Samsung GearVR)
* [Google VR SDK](https://developers.google.com/vr/android/download) (If developing for Google DayDream)

## Hardware Requirements

GearVR Framework supports following devices

* Gear VR compatible Samsung phone:
    - Note 8
    - Galaxy S8
    - Galaxy S8+
    - Galaxy S7
    - Galaxy S7 Edge
    - Note 5
    - Galaxy S6
    - Galaxy S6 Edge
    - Galaxy S6+
* Samsung Gear VR headset
* [Daydream-ready phone](https://vr.google.com/daydream/phones/)
* Google Daydream View VR headset

## Getting Started

Getting started with GearVR Framework in few simple steps

1. Download the [template project](https://github.com/gearvrf/GearVRf-Demos/tree/master/template/GVRFApplication)
1. Rename your project by changine the folder name
1. Open the project with Android Studio
1. Rename your Android App by updating `app_name` field of `app/src/main/res/values/strings.xml`
1. (For Gear VR only) Make sure to download your [Oculus signature file](https://developer.oculus.com/osig/) and copy it under `app\src\main\assets` folder
1. (For DayDream only) comment out or remove following code
    1. in `app/build.gradle` 

        ```
    compile "org.gearvrf:backend_oculus:$gearvrfVersion"
        ```

    1. in `AndroidManifest.xml`

        ```
    <meta-data android:name="com.samsung.android.vr.application.mode" android:value="vr_only"/>
        ```

1. Update the applicationID in `app/build.gradle` to avoid conflict between other GearVR Framework apps.
1. Click Run button and put on your VR device

## Device Setup

### Gear VR

After you build the application, click `Start` and your device will install Oculus automatically.

!!! note
	You can test VR apps without a VR headset, by enabling Samsung VR service developer mode.
	Settings > Apps > manage applications > Gear VR Service > Storage > Manage Storage - press the "VR Service Version" 6 times. After that a 'You are a developer' message will appear.

!!! note
	Make sure to install your VR app with a valid oculus signature on the device first. Otherwise you'll see a 'You are not a developer' message.

!!! warning
	Screen will start blinking after you turn on the developer mode
	
### DayDream

Enable Google VR Service from "Settings" => "Apps" => "Google VR Service" make sure it has the permission it required to run.
