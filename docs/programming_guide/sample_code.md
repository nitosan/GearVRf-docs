
#GearVRf Samples and Demos

To get the GearVR Framework Samples and Demos, clone the following repository in the same directory as where you did the clone for the framework source code:

```
$ git clone https://github.com/gearvrf/GearVRf-Demos.git -b release_v3.2
```

!!!note
	You should put both GearVRf/ and GearVRf-Demos/ in the same directory.


##Sample GearVRf Applications

Sample GearVRf applications, available in the GearVRf SDK, can provide you with valuable insight into writing your own VR applications.

!!!note
	The flat images below represent GearVRf applications with actual stereographic displays.
|||
|-|-|
|__Solar System__ <br/> (gvrsolarsystem) <br/> ![](/images/GearVRf_Solar_System_Mono_Small.png) |	__Solar system with four inner rotating planets revolving around the rotating sun as viewed from the point on the moon closest to Earth__ <br/> Asynchronous loading of meshes and textures is used. <br/>Loading order is by priority; no mesh or texture is loaded twice. <br/>Animation is used to create the illusion of rotation and revolution.|
|__Dynamic Graphics Board__<br/>(gvropacityanigalery)<br/>![](/images/Dynamic_Gallery_Mono_Small_Centered.png)|__Images and video displayed on a board inside a 3D scene__<br/>A video or image is displayed in a rectangular scene object (up the stairs).<br/>Animation is used to switch images and video smoothly.<br/>OnStep decides and defines the animation to apply, based on HMD orientation.<br/>Post-effect converts view to sepia colors.|
|__Eye Picking__ <br/>(gvreyepickingsample)<br/>![](/images/Eye_Picking_Stereo_Center_OffCenter_Small.png)|__Color of objects (bunnies and rectangles) changes to red when an object is at the center of the view__<br/>OnStep updates scene object colors.<br/>Implements a color custom shader.|
|__Pick and Move__ <br/>(gvr-pickandmove)<br/>![](/images/GVR_Pick_Move_Small.png)|__3D mirror ball can be selected and repositioned in a 3D scene__<br/>Uses the HMD trackpad.<br/>Uses Cubemap support.<br/>Uses scene picking.|
|__Useful Scene Objects__<br/>(scene-objects)<br/>![](/images/GVR_Scene_Objects_Big_Cube.png)|__Contains fundamental scene objects (such as a cube, sphere, cone, and text) that you can use in your own apps__|