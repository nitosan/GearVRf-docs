
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

<style type="text/css">

.md-flex a {
    color: white;
}

.md-flex a:hover {
    text-decoration: none;
}

.md-nav a {
    color: black;
}

.md-nav a:hover {
    text-decoration: none;
}

.md-footer a {
    color: white;
}

.md-footer a:hover {
    text-decoration: none;
}

</style>

#GearVRf Samples and Demos

To get the GearVR Framework Samples and Demos, clone the following repository in the same directory as where you did the clone for the framework source code:

```
$ git clone https://github.com/gearvrf/GearVRf-Demos.git -b release_v3.2
```

!!!Note You should put both GearVRf/ and GearVRf-Demos/ in the same directory.


##Sample GearVRf Applications

Sample GearVRf applications, available in the GearVRf SDK, can provide you with valuable insight into writing your own VR applications.

<div class="container-fluid">
    <div class="row">
        <div class="col-12 col-lg-3">
            <img src="/images/samples/img_1_360photo.png">
            <p>A minimal sample showing how to display an equirectangular (360) photo.</p>
        </div>
        <div class="col-12 col-lg-3">
            <img src="/images/samples/img_2_360video.png">
            <p>A minimal sample showing how to display an equirectangular (360) video using either Android's MediaPlayer class or the ExoPlayer class.</p>
        </div>
        <div class="col-12 col-lg-3">
            <img src="/images/samples/img_3_3dcursor.png">
            <p>A simplified version of the gvr-3dcursor sample that shows how to use the 3DCursor plugin.</p>
        </div>
        <div class="col-12 col-lg-3">
            <img src="/images/samples/img_4_accessibility.png">
            <p>Shows how to use GearVRf's accessibility classes. For example: InvertedColors, TextToSpeech, and Zoom.</p>
        </div>
    </div>
    <div class="row">
        <div class="col-12 col-lg-3">
            <img src="/images/samples/img_5_physics.png">
            <p>Simple sample showing how to use GearVRf with the Bullet Physics plugin.</p>
        </div>
        <div class="col-12 col-lg-3">
            <img src="/images/samples/img_6_camera.png">
            <p>Simple sample showing how to use the camera2 api along with renderscript for use with the passthrough camera.</p>
        </div>
        <div class="col-12 col-lg-3">
            <img src="/images/samples/img_7_audio.png">
            <p>Simple example of Spatial Audio using GoogleVR's audio library (previously used cardboard's audio library).</p>
        </div>
        <div class="col-12 col-lg-3">
            <img src="/images/samples/img_8_complex_scene.png">
            <p>A simple sample which can contain as many Stanford bunnies as we want to make it complex</p>
        </div>
    </div>
    <div class="row">
        <div class="col-12 col-lg-3">
            <img src="/images/samples/img_9_controller.png">
            <p>A simple sample that demostrates how to use VR controller.</p>
        </div>
        <div class="col-12 col-lg-3">
            <img src="/images/samples/img_10_controls.png">
            <p>A nice demo that shows input from both the gamepad and touchpad to control a character.</p>
        </div>
        <div class="col-12 col-lg-3">
            <img src="/images/samples/img_11_cubemap.png">
            <p>A simple example to show how to load in a cubemap and use it for the background as well as a reflection on an object.</p>
        </div>
        <div class="col-12 col-lg-3">
            <img src="/images/samples/img_12_events.png">
            <p>An example showing how to display Android Views inside VR and route events to those views.</p>
        </div>
    </div>
    <div class="row">
        <div class="col-12 col-lg-3">
            <img src="/images/samples/img_13_eyepicking.png">
            <p>A simple picking example.</p>
        </div>
        <div class="col-12 col-lg-3">
            <img src="/images/samples/img_14_gamepad.png">
            <p>A minimal example showing how to receive input from a gamepad.</p>
        </div>
        <div class="col-12 col-lg-3">
            <img src="/images/samples/img_15_immersepedia.png">
            <p>A larger sample that shows a concept of an immersive virtual museum. Uses many features of GearVRf: picking, TextViews, Video, input, etc.</p>
        </div>
        <div class="col-12 col-lg-3">
            <img src="/images/samples/img_16_javascript.png">
            <p>A minimal example showing how an application can be written with Javascript.</p>
        </div>
    </div>
    <div class="row">
        <div class="col-12 col-lg-3">
            <img src="/images/samples/img_17_keyboard.png">
            <p>A sample that shows how to create a virtual keyboard, including voice input, and use it in a simple trivia game.</p>
        </div>
        <div class="col-12 col-lg-3">
            <img src="/images/samples/img_18_lua.png">
            <p>A minimal example showing how an application can be written with Lua.</p>
        </div>
        <div class="col-12 col-lg-3">
            <img src="/images/samples/img_19_meshanimation.png">
            <p>A simple sample that loads in an animated model and starts the animation.</p>
        </div>
        <div class="col-12 col-lg-3">
            <img src="/images/samples/img_20_modelviewer.png">
            <p>A viewer that allows you to select and display models stored in /sdcard/GVRModelViewer2/. You can look at the model from different angles, change lighting, look at it in wireframe, and toggle animations. Uses the libGDX plugin for UI.</p>
        </div>
    </div>
    <div class="row">
        <div class="col-12 col-lg-3">
            <img src="/images/samples/img_21_multilight.png">
            <p>A simple sample showing how to use multiple lights.</p>
        </div>
        <div class="col-12 col-lg-3">
            <img src="/images/samples/img_22_outline.png">
            <p>A sample showing how to use multiple render passes with the same geometry to show an outline.</p>
        </div>
        <div class="col-12 col-lg-3">
            <img src="/images/samples/img_23_particle.png">
            <p>A sample showing how to use particle system plugin</p>
        </div>
        <div class="col-12 col-lg-3">
            <img src="/images/samples/img_24_performance.png">
            <p>A sample used to test the performance of Gear VR Framework</p>
        </div>
    </div>
    <div class="row">
        <div class="col-12 col-lg-3">
            <img src="/images/samples/img_25_remotescripting.png">
            <p>The remote scripting sample enables the debug server and sets up a text object with the ipaddress of the phone so we know where to telnet into.</p>
        </div>
        <div class="col-12 col-lg-3">
            <img src="/images/samples/img_26_renderableview.png">
            <p>Inflates and displays some Android views onto a rotating cube.</p>
        </div>
        <div class="col-12 col-lg-3">
            <img src="/images/samples/img_27_rendertotexture.png">
            <p>A sample demostrates the render to texture functionality</p>
        </div>
        <div class="col-12 col-lg-3">
            <img src="/images/samples/img_28_sceneobject.png">
            <p>Shows how create the various scene object types: quad, cube, sphere, cylinder, cone, passthrough camera, text, video. Tap the touchpad to cycle through the objects.</p>
        </div>
    </div>
    <div class="row">
        <div class="col-12 col-lg-3">
            <img src="/images/samples/img_29_shadows.png">
            <p>A sample that shows a light source with shadowing.</p>
        </div>
        <div class="col-12 col-lg-3">
            <img src="/images/samples/img_30_simplePhysics.png">
            <p>A sample demostrates simple physics scene</p>
        </div>
        <div class="col-12 col-lg-3">
            <img src="/images/samples/img_31_simplesample.png">
            <p>A simple sample that creates a quad and applies a texture to it.</p>
        </div>
        <div class="col-12 col-lg-3">
            <img src="/images/samples/img_32_solarsystem.png">
            <p>A sample that shows both heirarchy and animation.</p>
        </div>
    </div>
    <div class="row">
        <div class="col-12 col-lg-3">
            <img src="/images/samples/img_33_switch.png">
            <p>A sample that shows how to use the GVRSwitch node.</p>
        </div>
        <div class="col-12 col-lg-3">
            <img src="/images/samples/img_34_tutorial_lesson.png">
            <p>Samples for Youtube Gear VR Framework tutorial video </p>
        </div>
        <div class="col-12 col-lg-3">
            <img src="/images/samples/img_35_ar.png">
            <p>A simple augmented reality sample using the Vuforia computer vision library. It looks for a marker and displays a teapot on top of it. You can use either the stone or chips markers. PDFs for the markers are in gvr-vuforia/app/src/main/.</p>
        </div>
        <div class="col-12 col-lg-3">
            <img src="/images/samples/img_36_widgetviewer.png">
            <p>A sample for using WidgetViewer component</p>
        </div>
    </div>
</div>
