## Phong shader tempates, vertex and fragment shaders, and examples

The phong reflectance model is used to calculate how objects reflect light. This model assumes that reflected light is most intense at an angle perpendicular to the light source and falls off in a lobe based on angle from the viewer. The base surface material is assumed to reflect evenly but texture maps can be used to modify the normal per pixel to provide bumps or control reflection per pixel. 

![](/images/gvrf_phong_reflectance.png)

Instead of implementing an extremely complex single shader to handle all of the many combinations of texture maps, lighting and materials, GearVRF supports the concept of shader templates. A shader template is a complex shader with a lot of #ifdef statements which allow it to be compiled in different ways depending on what features are required to render an object. GearVRF will examine your meshes, materials and lights and set the #ifdefs to generate a custom shader for each case.

The asset loader uses the phong shader template for all imported assets. This means that, if you import an asset containing new lights, other objects in your scene may be affected and will use different custom shaders that support the newly added lights. Similarly, importing an object that uses lightmapping if it has not been used before in the scene might cause a new shader to be generated.

To use the phong shader template programmatically, call GVRRenderData.setShaderTemplate(GVRPhongShader.class). This tells GearVRF to defer selecting a specific shader until the scene has been composed. After GVRActivity.onInit completes, the shader templates are used to generate and compile the needed shaders. If you import assets while the application is running, the asset loader will take care of binding the shaders. But if you program creatively and add objects to the scene in other ways, you may have to call GVRScene.bindShaders to make sure the proper shaders are generated.

The phong model separates light into several different types and allows different colors for each. The components are combined with corresponding material uniforms to independently control illumination for each type.

* Ambient light reflects uniformly everywhere in the scene and is added to all objects
* Diffuse light reflects at many angles and is stronger in the direction of the surface normal
* Specular light reflects towards the viewer

Each light type has a corresponding color uniform to define the overall object color and a texture sampler to provide a color at each pixel.

## Phong Shader Example
```java
	GVRTexture tex = context.getAssetLoader().loadTexture(new GVRAndroidResource(mGVRContext, R.drawable.gearvrflogo));
	GVRSceneObject plane = new GVRSceneObject(context, 10.0f, 4.0f, tex);
	GVRRenderData rdata = backdrop.getRenderData();
	GVRMaterial material = new GVRMaterial(context);
	        
	material.setVec4("diffuse_color", 0.8f, 0.8f, 0.8f, 1.0f);
	material.setVec4("ambient_color", 0.3f, 0.3f, 0.3f, 1.0f);
	material.setVec4("specular_color", 1.0f, 1.0f, 1.0f, 1.0f);
	material.setVec4("emissive_color", 0.0f, 0.0f, 0.0f, 0.0f);
	material.setFloat("specular_exponent", 10.0f);
	material.setTexture("diffuseTexture", tex);
	rdata.setMaterial(material);
	rdata.setShaderTemplate(GVRPhongShader.class);
```

## Vertex Shader

The phong vertex shader supports lighting with multiple light sources, normal mapping and skinning with up to 60 bones. Lighting calculations are done per pixel.

Phong Shader Vertex Attributes

|Attribute| 	Type| 	Description|
|---------|---------|--------------|
|a_position |	vec3| 	X, Y, Z position in model space|
|a_normal |	vec3 |	normal vector in model space|
|a_texcoord |	vec2 |	U, V texture coordinate for diffuse texture|
|a_tangent |	vec3 |	tangent for normal mapping|
|a_bitangent |	vec3 |	bitangent for normal mapping|
|a_bone_weights |	vec4 |	weights for 4 bones for skinning|
|a_bone_indices |	ivec4 |	bone matrix indices for 4 bones|

The vertex shader uses one or more matrices calculated each frame by GearVRF. These matrices are supplied to all shaders so they are available for you to use in your own vertex and fragment shader code.


Phong Shader Matrix Uniforms

|Uniform |	Type |	Description|
|-|-|-|
|u_model |	mat4 |	model matrix (model -> world)|
|u_view |	mat4 |	view matrix (world -> camera)|
|u_mvp |	mat4 |	model, view, projection (model -> screen)|
|u_mv |	mat4 |	model, view (model -> camera)|
|u_mv_it |	mat4 |	inverse transpose of model, view (for lighting)|

##Fragment Shader

The fragment shader performs the lighting calculations at each pixel. Shadow mapping is supported for multiple light sources but should be used sparingly because it is computationally expensive. It renders the scene from the viewpoint of each light that casts shadows.

Many different types of texture maps are supporting by the phong fragment shader template but usually a scene object only uses one or two. Each texture map contributes differently to the overall color and reacts differently to the lighting in the scene.

Phong Texture Maps

|Sampler |	Description|
|-|-|
|diffuseTexture |	Supplies diffuse color per pixel|
|ambientTexture |	Supplies ambient color per pixel|
|specularTexture |	Supplies specular color per pixel|
|emissiveTexture |	Supplies emissive color per pixel|
|normalTexture |	Supplies normal per pixel|

Materials used with the phong shader template support these uniforms. Each different type of light has its own set of uniforms used to define the light properties.

Phong Material Uniforms

|Uniform |	Type |	Description|
|-|-|-|
|diffuse_color |	vec4 |	color reflected by diffuse light, alpha component has overall opacity|
|ambient_color |	vec4 |	color reflected by ambient light|
|specular_color |	vec4 |	color reflected by specular light (towards viewer)|
|emissive_color |	vec4 |	light color emitted by object|
|specular_exponent |	float |	specular exponent (shininess)|
|u_lightmap_offset |	vec2 |	texture coordinate offset for lightmap texture|
|u_lightmap_scale |	vec2 |	texture coordinate scale for lightmap texture|


