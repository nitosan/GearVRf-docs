Definitions of GearVRf XML settings file parameters

Before rendering can start, the framework needs to know about the characteristics of the display device. These are specified in the XML settings file passed to GVRActivity.setMain or GVRActivity.setScript when your application is being initialized.

|vr-app-settings||
|-|-|
|framebufferPixelsHigh |	Height of the framebuffer|
|framebufferPixelsWide |	Width of the framebuffer|
|showLoadingIcon |	Enable / disable loading icon|
|useProtectedFramebuffer |	Enable / disable use of protected framebuffer|
|useSrgbFramebuffer |	Enable / disable use of SRGB framebuffer|

|mono-mode-parms | |
|-|-|
|allowPowerSave |	If enabled, the application will run at 30 fps when power is low. Otherwise, it will show an error message when power is low.|
|resetWindowFullScreen |	If enabled, the fullscreen flag of the activity window will be on when a VR activity returns from background to foreground. It will help performance since it won't draw a DecorView as background. |

|performance-parms||
|-|-|
|cpuLevel |	CPU clock level|
|gpuLevel |	GPU clock level|

|eye-buffer-parms||
|-|-|
|colorFormat |	Format of the color buffer (default COLOR_8888) <br/> COLOR_5551 5 bits R,G,B, 1 bit alpha <br/> COLOR_565 5 bits red, 6 bits green, 5 bits blue<br/> COLOR_4444 4 bits RGBA<br/> COLOR_888 8 bits RGBA <br/> COLOR_888_sRGB SRGB color format <br/> COLOR_RGBA16F 16 bits float RGBA|
|depthFormat |	Format of the depth buffer (default DEPTH_24) <br /> DEPTH_0 no depth buffer <br /> DEPTH_16 16 bit depth buffer <br /> DEPTH_24 24 bit depth buffer <br /> DEPTH_24_STENCIL_8 32 bit depth buffer |
|fov-y |	Y field of view in degrees (default 90)|
|resolutionWidth |	Eye buffer resolution width in pixels (default 1024)|
|resolutionHeight |	Eye buffer resolution height in pixels (default 1024)|
|resolveDepth |	True to resolve framebuffer to a texture (default false)|
|multiSamples |	Number of framebuffer multisamples for anti-aliasing <br/> 1 = no multisampling (not recommended) <br/> 2 = 2xMSAA recommended setting <br/> 4 = 4xMSAA Higher visual quality but lower performance |


|head-model-parms||
|-|-|
|eyeHeight |	Distance from ground to eye|
|headModelDepth |	Offset of head center ahead of eyes based on eye height|
|headModelHeight |	Distance from neck joint to eyes based on eye height|
|interpupillaryDistance |	Distance between left and right eye|