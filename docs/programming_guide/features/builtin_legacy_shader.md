Legacy shaders are included for compatibility with older GearVRF versions and will be deprecated in the future. Lighting support is limited to a single point light or no lights at all.

##UNLIT_HORIZONTAL_STEREO_SHADER

The computed fragment color is the product of the diffuse texture, diffuse color and opacity. It requires the vertex to have positions and texture coordinates. Normals are not required because lights in the scene are not used by this shader. The u_right parameter controls whether it displays on the left half or the right half of the output display.

|uniform |	type |	description|
|-|-|-|
|u_texture|	sampler2D |	diffuse texture|
|u_color |	vec3 |	RGB diffuse color|
|u_opacity|	float |	alpha for transparency|
|u_right|	int |	1 = right eye, 0 = left|

##UNLIT_VERTICAL_STEREO_SHADER

The computed fragment color is the product of the diffuse texture, diffuse color and opacity. It requires the vertex to have positions and texture coordinates. Normals are not required because lights in the scene are not used by this shader. The u_right parameter controls whether it displays on the top half or the bottom half of the output display.

|uniform |	type |	description|
|-|-|-|
|u_texture |	sampler2D |	diffuse texture|
|u_color |		vec3 |	RGB diffuse color|
|u_opacity |	float |	alpha for transparency|
|u_right |		int |	1 = right eye, 0 = left|

##OES_SHADER

The computed fragment color is the product of the diffuse texture, diffuse color and opacity. It requires the vertex to have positions and texture coordinates. Normals are not required because lights in the scene are not used by this shader. The texture supplied as u_ texture must be and OES external texture (type GL_TEXTURE_EXTERNAL_OES, not GL_TEXTURE_2D) as this shader uses samplerExternalOES as opposed to sampler2D.

|uniform 	|type| 	description|
|-|-|-|
|u_texture 	|sampler2D| 	diffuse texture|
|u_color 	|vec3| 	RGB diffuse color|
|u_opacity 	|float| 	alpha for transparency|
|u_right 	|int| 	description|

##OES_HORIZONTAL_STEREO_SHADER

The computed fragment color is the product of the diffuse texture, diffuse color and opacity. It requires the vertex to have positions and texture coordinates. Normals are not required because lights in the scene are not used by this shader. The texture supplied as u_ texture must be and OES external texture (type GL_TEXTURE_EXTERNAL_OES, not GL_TEXTURE_2D) as this shader uses samplerExternalOES as opposed to sampler2D.The u_right parameter controls whether it displays on the left half or the right half of the output display.

|uniform 	|type| 	description|
|-|-|-|
|u_texture 	|sampler2D| 	diffuse texture|
|u_color 	|vec3| 	RGB diffuse color|
|u_opacity 	|float| 	alpha for transparency|
|u_right 	|int| 	1 = right eye, 0 = left|

##OES_VERTICAL_STEREO_SHADER

The computed fragment color is the product of the diffuse texture, diffuse color and opacity. It requires the vertex to have positions and texture coordinates. Normals are not required because lights in the scene are not used by this shader. The texture supplied as u_ texture must be and OES external texture (type GL_TEXTURE_EXTERNAL_OES, not GL_TEXTURE_2D) as this shader uses samplerExternalOES as opposed to sampler2D. The u_right parameter controls whether it displays on the top half or the bottom half of the output display.

|uniform 	|type| 	description|
|-|-|-|
|u_texture 	|sampler2D |	diffuse texture|
|u_color 	|vec3 |	RGB diffuse color|
|u_opacity 	|float |	alpha for transparency|
|u_right 	|int |	1 = right eye, 0 = left|

##CUBEMAP_SHADER

The computed fragment color is the product of the diffuse texture, diffuse color and opacity. It requires the vertex to have positions and texture coordinates. Normals are not required because lights in the scene are not used by this shader. The diffuse texture must be a cube map texture (six different textures for each face of the cube).

|uniform 	|type| 	description|
|-|-|-|
|u_texture 	|sampler2D |	diffuse texture|
|u_color 	|vec3 |	RGB diffuse color|
|u_opacity 	|float |	alpha for transparency|
|u_right 	|int |	description|

##CUBEMAP_REFLECTION_SHADER

The computed fragment color is the product of the diffuse texture, diffuse color and opacity. It requires the vertex to have positions and texture coordinates. Normals are not required because lights in the scene are not used by this shader. The diffuse texture must be a cube map texture (six different textures for each face of the cube).

 
|uniform 	|type |	description|
|-|-|-|
|u_texture 	|sampler2D |	diffuse texture|
|u_color 	|vec3 |	RGB diffuse color|
|u_opacity 	|float |	alpha for transparency|
|u_view_i 	|mat4atrix |	view matrix|
|v_viewspace_position 	|vec3 |	view space position|
|v_viewspace_normal 	|vec3 |	view space normal|

##TEXTURE_SHADER

The computed fragment color is the product of the diffuse texture, diffuse color and opacity as illuminated by a single point light. It requires the vertex to have positions, normals and texture coordinates. If the scene is not lit, the material and light intensity properties are ignored. GVRPhongShader provides the same functionality and supports multiple lights.

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
|v_view_space_normal |	vec4 |	view space normal|
|v_view_space_light_directionl |	vec4 |	view space light direction|


##LIGHTMAP_SHADER

The computed fragment color is the product of the diffuse texture, diffuse color and opacity as illuminated by a light map. It requires the vertex to have positions, normals and texture coordinates. GVRPhongShader supports light mapping integrated with other surface shading capabilities.

|uniform |	type |	description|
|-|-|-|
|u_main_texture |	sampler2D |	diffuse texture|
|u_lightmap_texture |	sampler2D |	light map texture|
|u_lightmap_offset |	vec2 |	light map offset|
|u_lightmap_scale |	vec2 |	light map scal|


##ASSIMP_SHADER

The computed fragment color is the product of the diffuse texture, diffuse color and opacity. It requires the vertex to have positions and texture coordinates. Normals are not required because lights in the scene are not used by this shader. The GearVRF asset importer no longer uses this shader, it uses GVRPhongShader instead.

 
|uniform 	|type 	|description|
|-|-|-|
|u_texture 	|sampler2D |	diffuse texture|
|u_color 	|vec3 |	RGB diffuse color|
|u_opacity 	|float |	alpha for transparency|
|u_ambient_color 	|vec4 |	color reflected by ambient light|
|u_diffuse_color 	|vec4 |	color reflected by diffuse light|
