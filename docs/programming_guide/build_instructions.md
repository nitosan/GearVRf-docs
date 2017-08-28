GearVRf app requirements, build instructions, building and running, and sample apps

In order to build and and run GearVRf applications (your own or sample apps) in Android Studio, you have two options:

* (Preferred) Download the [latest release](https://github.com/Samsung/GearVRf/releases) of previously built Gear VR Framework .aar files
* Optionally, locally build the Gear VR Framework from the latest [source code]( https://github.com/Samsung/GearVRf)

##Prerequisites

For BOTH methods, locally building AND using a pre-built framework, the following prerequisites must be met.

### 1. Install Required SDKs
Make sure follow the [Getting Started Guide](../getting_started) and install all the required SDKs

### 2. Building Gear VR Framework
You can optionally locally build GearVRf from source code using Android Studio.

Here are the steps:

1. Add __OVR_MOBILE_SDK__ to `gradle.properties` and set it to the path to the Oculus Mobile SDK; recommended to use the global gradle.properties `$HOMEPATH/.gradle/gradle.properties` or `~/.gradle/gradle.properties)`.
1. Add __ANDROID_NDK_HOME__ to gradle.properties and set it to the path to the Android NDK installation.
1. Navigate to the GearVR Framework and select the folder, and click __OK__
1. Click __Make Project__ (from the __Build__ menu)

### 3. Building and Running GearVRf Applications
After you have the Gear VR Framework, by either locally building or using a pre-built framework, you can now import, build, and run GearVRf applications (your own or sample apps) in Android Studio. The specific procedure you use depends on whether you locally built the Gear VR Framework from source code files or used pre-built framework files.


1. When building your own GearVRf apps from scratch, copy the appropriate device XML file from the GearVRf SDK to your application's assets folder. 
GearVRf provides an xml file for you to use: gvr.xml.
1. Import the GearVRf application code.
    * Click __File -> Open ...__
    * Navigate to the project folder (for example, gvr-simplesample).
    * Click __OK__
1. Clean and build the application.
    * Go to the __Build__ menu and click __Clean__...
    * Click __Make Project__ (from the __Build__ menu)
1. Run the application.
    * Connect an Android mobile device to your local machine.
    * Select your project in the project explorer
    * Click __Run__ on the toolbar

!!!note
	You may need to apply to Oculus for a signature file for your device.
	For application and use details, refer to the online signature generator (https://dashboard.oculus.com/tools/osig-generator/)

### Generate Javadocs
When locally building the Gear VR Framework, you can optionally generate Javadoc files with details about the GearVRf API.

Optional: To get GearVRf API reference details by generating GearVRf Javadoc files in the specified directory:

1. In Android Studio, click __Project > Generate Javadoc...__
1. In the Generate Javadoc window:
    1. __Javadoc command__: (Pathname to the Javadoc executable file) Typically, in the bin directory of the Java directory.
    1. Click on the plus-icon to __expand the Framework listing__.
    1. Checkmark __src__
    1. Select __Use standard doclet__
    1. __Destination:__ (Convenient local directory to contain the Javadoc files)
    1. Optional Specify VM options:
        NOTE: You may encounter errors if VM options is not specified.
        1. Click __Next >__
        1. Click __Next >__
        1. VM options: -bootclasspath [path to your Android jar file](Typically the pathname ends in .../android/sdk/android.jar)
    1. Click __Finish__

