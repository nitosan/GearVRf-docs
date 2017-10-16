GearVRf provides a set of built-in shaders for you to use in your applications. Although you can write custom shaders, for many applications these built-in shaders will be all that you need.

## GVRMaterial.GVRShaderType.Phong

The Phong shader implements the phong lighting model for multiple light sources. All of the models imported by the asset loader use the phong shader so they will automatically respond to the light sources in the scene. This shader maps multiple textures onto a mesh illuminated by any light sources in the scene. Although it supports many different uniforms, you will typically only use a few of them.

Depending on which uniforms you use and the format of your mesh, GearVRf will generate a custom native shader optimized for your specific usage. Adding or removing a light source from the scene can cause a new native shader to be recompiled.

|uniform | type | description |
|--------|------|-------------|
|ambientTexture   | sampler2D  | ambient texture |
|diffuseTexture   | sampler2D  | diffuse texture |
|specularTexture  | sampler2D  | specular texture |
|opacityTexture   | sampler2D  | opacity texture (alpha channel) |
|normalTexture    | sampler2D  | normal texture |
|emissiveTexture  | sampler2D  | emissive texture |
|lightmapTexture  | sampler2D  | lightmap texture |
|ambient_color    | vec4       | ambient color |
|diffuse_color    | vec4       | diffuse color |
|specular_color   | vec4       | specular color |
|emissive_color   | vec4       | emissive color |
|specular_exponent | float     | specular exponent |

## GVRMaterial.GVRShaderType.PhongLayered

This shader performs the same computations as the Phong shader but allows layering of ambient, diffuse, specular, opacity and emissive texture maps. This shader supports up to two textures of each type and blends them at run time. It is primarily used for supporting FBX files with layered textures. Unless your application needs this functionality, the Phong shader is more efficient.

The following blend operations are supported:

| value | operation |
|-------|-----------|
|  0    | multiply  |
|  1    | add       |
|  2    | subtract  |
|  3    | divice    |
|  4    | smooth add |
|  5    | signed add |

This table gives the additional uniforms for the Phong Layered shader. It supports all of the uniforms for the Phong shader as well.

|uniform | type | description |
|--------|------|-------------|
|ambientTexture1  | sampler2D  | second ambient texture |
|diffuseTexture1   | sampler2D  | second diffuse texture |
|specularTexture1  | sampler2D  | second specular texture |
|opacityTexture1   | sampler2D  | second opacity texture |
|emissiveTexture1  | sampler2D  | second emissive texture |
|lightmapTexture1  | sampler2D  | second lightmap texture |
|ambient_color    | vec4       | ambient color |
|diffuse_color    | vec4       | diffuse color |
|specular_color   | vec4       | specular color |
|emissive_color   | vec4       | emissive color |
|specular_exponent | float     | specular exponent |
|ambientTexture1_blendop  | int  | ambient texture blend operation |
|diffuseTexture1_blendop   | int  | diffuse texture blend operation |
|specularTexture1_blendop  | int  | specular texture blend operation |
|opacityTexture1_blendop   | int  | opacity texture blend operation |
|emissiveTexture1_blendop  | int  | emissive texture blend operation |
|lightmapTexture1_blendop  | int  | lightmap texture blend operation |

## GVRMaterial.GVRShaderType.UnlitHorizontalStereo

Displays a single 2D texture across the framebuffer horizontally for both eyes. The computed fragment color is the product of the diffuse texture, diffuse color and opacity. It requires the vertex to have positions and texture coordinates. Normals are not required because lights in the scene are not used by this shader. The u_right parameter controls whether it displays on the left half or the right half of the output display.

|uniform |	type |	description|
|-|-|-|
|u_texture|	sampler2D |	diffuse texture|
|u_color |	vec3 |	RGB diffuse color|
|u_opacity|	float |	alpha for transparency|
|u_right|	int |	1 = right eye, 0 = left|

## GVRMaterial.GVRShaderType.UnlitVertictalStereo

Displays a single 2D texture across the framebuffer vertically for both eyes.  The computed fragment color is the product of the diffuse texture, diffuse color and opacity. It requires the vertex to have positions and texture coordinates. Normals are not required because lights in the scene are not used by this shader. The u_right parameter controls whether it displays on the top half or the bottom half of the output display.

|uniform |	type |	description|
|-|-|-|
|u_texture |	sampler2D |	diffuse texture|
|u_color |		vec3 |	RGB diffuse color|
|u_opacity |	float |	alpha for transparency|
|u_right |		int |	1 = right eye, 0 = left|

## GVRMaterial.GVRShaderType.OES

Maps an external 2D texture onto the mesh. The computed fragment color is the product of the diffuse texture, diffuse color and opacity. It requires the vertex to have positions and texture coordinates. Normals are not required because lights in the scene are not used by this shader. The texture supplied as u_ texture must be and OES external texture (type GL_TEXTURE_EXTERNAL_OES, not GL_TEXTURE_2D) as this shader uses samplerExternalOES as opposed to sampler2D.

|uniform 	|type| 	description|
|-|-|-|
|u_texture 	|sampler2D| 	diffuse texture|
|u_color 	|vec3| 	RGB diffuse color|
|u_opacity 	|float| 	alpha for transparency|
|u_right 	|int| 	description|

## GVRMaterial.GVRShaderType.OESHorizontalStereo

Displays a single external 2D texture across the framebuffer vertically for both eyes. The computed fragment color is the product of the diffuse texture, diffuse color and opacity. It requires the vertex to have positions and texture coordinates. Normals are not required because lights in the scene are not used by this shader. The texture supplied as u_ texture must be and OES external texture (type GL_TEXTURE_EXTERNAL_OES, not GL_TEXTURE_2D) as this shader uses samplerExternalOES as opposed to sampler2D.The u_right parameter controls whether it displays on the left half or the right half of the output display.

|uniform 	|type| 	description|
|-|-|-|
|u_texture 	|sampler2D| 	diffuse texture|
|u_color 	|vec3| 	RGB diffuse color|
|u_opacity 	|float| 	alpha for transparency|
|u_right 	|int| 	1 = right eye, 0 = left|

## GVRMaterial.GVRShaderType.OESVerticalStereo

Displays a single external 2D texture across the framebuffer vertically for both eyes. The computed fragment color is the product of the diffuse texture, diffuse color and opacity. It requires the vertex to have positions and texture coordinates. Normals are not required because lights in the scene are not used by this shader. The texture supplied as u_ texture must be and OES external texture (type GL_TEXTURE_EXTERNAL_OES, not GL_TEXTURE_2D) as this shader uses samplerExternalOES as opposed to sampler2D. The u_right parameter controls whether it displays on the top half or the bottom half of the output display.

|uniform 	|type| 	description|
|-|-|-|
|u_texture 	|sampler2D |	diffuse texture|
|u_color 	|vec3 |	RGB diffuse color|
|u_opacity 	|float |	alpha for transparency|
|u_right 	|int |	1 = right eye, 0 = left|

## GVRMaterial.GVRShaderType.Cubemap

Maps a cubemap texture onto the mesh. The computed fragment color is the product of the diffuse texture, diffuse color and opacity. It requires the vertex to have positions and texture coordinates. Normals are not required because lights in the scene are not used by this shader. The diffuse texture must be a cube map texture (six different textures for each face of the cube).

|uniform 	|type| 	description|
|-|-|-|
|u_texture 	|sampler2D |	diffuse texture|
|u_color 	|vec3 |	RGB diffuse color|
|u_opacity 	|float |	alpha for transparency|
|u_right 	|int |	description|

## GVRMaterial.GVRShaderType.CubemapReflection

Wraps a cubemap texture around a mesh as a reflection map which varies with the viewpoint. The computed fragment color is the product of the diffuse texture, diffuse color and opacity. It requires the vertex to have positions and texture coordinates. Normals are not required because lights in the scene are not used by this shader. The diffuse texture must be a cube map texture (six different textures for each face of the cube).

 
|uniform 	|type |	description|
|-|-|-|
|u_texture 	|sampler2D |	diffuse texture|
|u_color 	|vec3 |	RGB diffuse color|
|u_opacity 	|float |	alpha for transparency|
|u_view_i 	|mat4atrix |	view matrix|
|v_viewspace_position 	|vec3 |	view space position|
|v_viewspace_normal 	|vec3 |	view space normal|

## GVRMaterial.GVRShaderType.Texture

Maps a single 2D texture onto a mesh with light sources. The computed fragment color is the product of the diffuse texture, diffuse color and opacity as illuminated the lights in the scene. It requires the vertex to have positions, normals and texture coordinates. If the scene is not lit, the material and light intensity properties are ignored. GVRPhongShader provides the same functionality and supports multiple layered textures.

|uniform 	|type |	description|
|-|-|-|
|u_texture	|	sampler2D |	diffuse texture|
|u_color	|	vec3 |	RGB diffuse color|
|u_opacity 	|float| 	alpha for transparency|
|ambient_color |	vec4 |	color reflected by ambient light|
|diffuse_color |	vec4 |	color reflected by diffuse light|
|specular_color |	float |	exponent for specular reflection|
|specular_exponent |	vec4 |	color reflected by specular light|
|ambient_intensity |	vec4 |	intensity of ambient light|
|diffuse_intensity |	vec4 |	intensity of diffuse light|
|specular_intensity |	vec4 |	intensity of specular light|


##  GVRMaterial.GVRShaderType.Lightmap

Maps a lightmap texture onto a mesh. The computed fragment color is the product of the diffuse texture, diffuse color and opacity as illuminated by a light map. It requires the vertex to have positions, normals and texture coordinates. GVRPhongShader supports light mapping integrated with other surface shading capabilities.

|uniform |	type |	description|
|-|-|-|
|u_main_texture |	sampler2D |	diffuse texture|
|u_lightmap_texture |	sampler2D |	light map texture|
|u_lightmap_offset |	vec2 |	light map offset|
|u_lightmap_scale |	vec2 |	light map scal|

