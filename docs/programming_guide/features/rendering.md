Opaque scene objects are drawn front-to-back, in render order. Transparent objects are drawn back-to-front. The renderer will automatically sort scene object data. However, the application may set the render order (lower render value first). Standard constants are shown below; however, any integer values are valid.

|Render Type = Render Value|Render Order|
|-|-|
|Background = 1000 |	First|
|Geometry = 2000 |	Second|
|Transparent = 3000 |	Third|
|Overlay = 4000 |	Last|

After your startup code has built a scene graph, GearVRf enters its event loop. On each frame, GearVRf starts its render pipeline, which consists of four main steps. The first three steps run your Java callbacks on the GL thread. The final step is managed by GearVRf.

1. GearVRf executes any Runnable you added to the run-once queue. 
Queue operations are thread-safe. You can use the GVRContext.runOnGlThread() method from the GUI or background threads in the same way you use Activity.runOnUiThread() from non-GUI threads. The analogy is not exact: runOnGlThread() always enqueues its Runnable, even when called from the GL thread.

1. GearVRf executes each frame listener you added to the on-frame list. 
GearVRf includes animation and periodic engines that use frame listeners to run time-based code on the GL thread, but you may add frame listeners directly. A frame listener is like a Runnable that gets a parameter telling you how long it has been since the last frame. An animation runs every frame until it stops, and morphs a scene object from one state to another. A periodic callback runs a standard Runnable at a specified time (or times) as a runOnGlThread() callback. You can run a sequence of animations either by starting each new animation in the previous animation's optional on-finish callback or by starting each new animation at set times from a periodic callback.

1. GearVRf runs your onStep() callback, which is the place to process Android or cloud events and make changes to your scene graph. As a rule of thumb, an animation changes a single scene object's properties; onStep() changes the scene graph itself. Of course, you can use onStep() to start an animation that will make a smooth change.

1. GearVRf renders the scene graph twice, once for each eye.
    1. Rendering determines what a camera can see and draws each visible triangle to a buffer in GPU memory.
    1. Any post-effects you have registered for an eye are applied the buffer for step 4.a in registration order. (Typically, you will use per-eye registration to run the same effect with different per-eye parameters, but you can run different effects on each eye, perhaps adding different debugging info to each eye.).
    A post-effect is a shader that is a lot like the shaders that draw scene objects' skins; the big difference is that while a material shader's vertex shader may be quite complex (adding in lighting and reflections), a post-effect is a 2D effect, and all the action is in the fragment shader, which draws each pixel. GearVRf includes pre-defined post-effect shaders, and it is easy to add your own.

    1. One last shader applies barrel distortion to the render buffer, and draws the barrel distortion to the screen. When the user views the screen though a fish-eye lens, the undistorted image will (nearly) fill the field of view. This step is not programmable, except in so far as you provide an XML file with screen size information at start-up time.