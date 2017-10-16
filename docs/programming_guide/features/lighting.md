## VR lights, classes, shadows, uniforms, and examples

Lights control the illumination of visible scene objects. Depending on the color, intensity and position of the lights, objects may appear lighter, darker or shadowed. The final color of an object depends on both materials and lighting. Together they provide everything the fragment shader needs to compute the final color. The fragment shader combines the contributions of all the lights in the scene to compute illumination per pixel. At this time, GearVRf does not support vertex lighting.

All lights in the scene are global - they illuminate all the scene objects that have the lighting effect enabled. A light must be attached to a scene object before it can illuminate anything. The scene object determines the position and direction of the light. By default, a light with no transformation points down the positive Z axis towards the viewer.

## Built-in Light Classes

The light's class determines what lighting algorithm is used by the GPU. Three built-in light classes are provided by GearVRF which implement the Phong shading model per pixel. These work together with the Phong surface shader class GVRPhongShader.

* GVRDirectLight: A directional light is infinitely far away and illuminates only from a specific direction. This light has color and direction properties.
* GVRPointLight: A point light illuminates in all directions from a specific position. This light has color and position properties.
* GVRSpotLight: A spot light illuminates in a cone radiating from a point. It has color, position and direction.

All lights have an enabled uniform which enables or disables the light. The point and spot lights support attenuation factors which control how the light falls off with distance according to this equation:

``
Attenuation = 1 / (attenuation_constant + attenuation_linear * distance + attenuation_quadratic * distance * distance)
``

The light object contains the data used by the fragment shader. It is accessed in terms of key / value pairs where the key is a string containing the name of the uniform and the value is a scalar or vector. GearVRF automatically loads these values into the fragment shader uniforms for you.

## Shadows

GearVRf can calculate shadow maps for directional and spot lights. You can enable shadow mapping by calling GVRLightBase.setCastShadow with a true parameter. Shadow mapping involves considerable overhead per frame because it renders the scene from the viewpoint of the light to calculate the shadow map. It also uses up more uniform variables. If you disable shadow mapping on all lights, GearVRf will free up all resources used for shadow mapping and return to normal performance.

## Built-in Light Uniforms

This table describes the uniforms used by the built-in Phong lighting implementation.

|uniform name| 	type| 	description|
|------------|------|--------------|
|enabled |	int 	|1 = light is enabled, 0 = disabled|
|world_position 	|vec3 |	position of light in world space|
|world_direction 	|vec3 |	orientation of light in world space|
|specular_exponent 	|vec4 |	color reflected by specular light|
|ambient_intensity 	|vec4 |	intensity of ambient light|
|diffuse_intensity 	|vec4 |	intensity of diffuse light|
|specular_intensity 	|vec4 |	intensity of specular light|
|attenuation_constant 	|float| 	constant attenuation factor|
|attenuation_linear 	|vec4 |	linear attenuation factor|
|attenuation_quadratic 	|float| 	quadratic attenuation|
|inner_cone_angle   |float| spotlight inner cone angle|
|outer_cone_angle   |float| spotlight outer cone angle|

## Light Construction Example

A light is a component that is attached to a scene object which gives it both a position and a direction. An individual light can be enabled and disabled programmatically without causing shader compilation. All other light attributes are implementation specific. This example uses the lights built-into GearVRF which implement the Phong lighting model. Here we constructs a red spot light.

```java
GVRSpotLight createSpotLight(GVRContext gvrContext)
{
    GVRSpotLight light = new GVRSpotLight(gvrContext);

    light.setDiffuseIntensity(1, 0, 0);
    light.setSpecularIntensity(1, 0, 0);
    light.setInnerCone(10);
    light.setOuterCone(15);
    return light;
}
```
You need to attach your light to a GVRSceneObject before it can illuminate anything. To enable multiple lighting support the GVRPhongShader template must be selected. You can also turn the lighting effect on and off for a particular mesh. In this example we light a sphere with the spot light created above.
```java
GVRLightBase light = createSpotLight(gvrContext);
GVRSceneObject lightNode = new GVRSceneObject(gvrContext);
GVRMaterial material = new new GVRMaterial(gvrContext, GVRMaterial.GVRShaderType.Phong.ID);
GVRSceneObject sphereNode = new GVRSphereSceneObject(gvrContext, material);

material.setVec4("diffuse_color", 1.0f, 0.8f, 0.5f, 1.0f);
material.setVec4("specular_color", 1.0, 1.0, 1.0, 1.0f);
material.setFloat("specular_exponent", 5.0f);
sphereNode.attachComponent(light);
GVRRenderData rdata = sphereNode.getRenderData();
rdata.enableLight();
```
