
##Release 4.0

### VULKAN Support

Release 4.0 introduces alpha level support for rendering on Vulkan. Not all of the GearVRf features are supported on Vulkan yet and the implementation is still slow and unstable. Mobile VR back ends do not yet support Vulkan and there is a high overhead to transfer the image rendered by Vulkan back to OpenGL for display.

Vulkan does not support light sources of any kind. It cannot use external textures which means none of the scene objects which exchange textures with Android will work on Vulkan yet. 

GearVRf supports authoring custom shaders which will work for both Vulkan and OpenGL.

### Shader Changes

In previous releases, the GearVRf built-in shaders were implemented by individual C++ classes. in 4.0, the built-in shaders are implemented in terms of GVRShaderTemplate, the same mechanism provided to users for authoring custom shaders. There is a new Java class for each of the built-in shaders.

Release 4.0 now has a single shader manager. There is no longer any difference between the post effect shader manager and the material shader manager. The GVRPostEffectShaderManager and GVRMaterialShaderManager classes will most likely be deprecated in the future in favor of GVRShaderManager.

The GVRShader object was introduced to make it easier to construct simple custom shaders. Unlike GVRShaderTemplate, only a single native shader is produced and no parameter substitution is done.

Additional arguments are now required for custom shaders. In addition to a uniform descriptor, all shaders now require a texture descriptor and a vertex descriptor. These descriptors are used to emit platform-specific shader declarations to facilitate sharing of shaders between OpenGL and Vulkan.

| New API | Description |
|---------|-------------|
|GVRShader | describes simple custom shader |
|GVRShaderTemplate(String uniforms, String textures, String vertex, GLSLESVersion) | constructor for custom shader |
|getTextureDescriptor() | returns shader texture descriptor |
|getVertexDescriptor() | returns shader texture descriptor |
|setMaterialDefaults(GVRShaderData) | override to set default material value |


The GLSLESVersion argument indicates the shader language version. If VULKAN is specified, the shader language is level 400. This allows you to author shaders which can work on both Vulkan and OpenGL. The token @MATERIAL_UNIFORMS in shader source is replaced by uniform declarations constructed from the uniform descriptor of your shader class. The token @MATRIX_UNIFORMS is replaced by GearVRf matrix declarations. Any Vulkan-specific layout specifiers are stripped out if the shader is used on OpenGL.

### GVRMesh API Changes

In earlier releases, the vertices and indices were kept internal to the mesh and could not be shared. In 4.0, we introduce GVRVertexBuffer and GVRIndexBuffer objects which encapsulate the vertex and index buffer and permit them to be shared across meshes.

New APIs are provided which allow access to the vertex and index data in terms of Java Direct Buffers. This helps reduce copying of vertex data during asset import.

A mesh need not have an index buffer. GearVRf can display meshes which contain only vertex data. In this case, it is assumed each three successive vertices define a different triangle.

| New API | Description |
|---------|-------------|
|GVRVertexBuffer | object which contains vertices of a mesh |
|GVRIndexBuffer | object which contains indices of a mesh |
|setVertexBuffer(GVRVertexBuffer) | replace vertex buffer used by mesh |
|GVRVertexBuffer getVertexBuffer() | get vertex buffer used by mesh |
|setIndexBuffer(GVRIndexBuffer) | replace index buffer used by mesh |
|setFloatArray(String name, float[]) | update floating point vertex component |
|setFloatVec(String name, FloatBuffer) | |
|setFloat(String name, float) | |
|setIntArray(String name, int[]) | update integer point vertex component |
|setIntVec(String name, InBuffer) | |
|setInt(String name, int) | |
|setIndices(int[]) | set integer (32 bit) indices |
|setIndices(IntBuffer) | |
|setTriangles(int[]) | |
|setIndices(CharBuffer) | set char (16 bit) indices |
|getIndices() | get integer indices |
|getTriangles() | get char indices |
|createQuad(float w, y) | create planar quad |
|createQuad(GVRContext, String desc, float w, h) | |
|getBoxBound(float[]) | get bounding box |

We have deprecated the following functions in favor of API simplification.

| Deprecated  | Use This Instead |
|-------------|------------------|
| setFloatVector | setFloatArray |
| getFloatVector | getFloatArray |
| setVec2Vector | setFloatArray |
| getVec3Vector | getFloatArray |
| setVec3Vector | setFloatArray |
| getVec3Vector | getFloatArray |
| setVec4Vector | setFloatArray |
| getVec4Vector | getFloatArray |
| getAttributeNames | GVRVertexBuffer.getDescriptor |

### GVRTexture Changes

The GVRTexture object has been split into two pieces - a texture sampler object and an image data object. GVRTexture now behaves like Future<GVRTexture> used to in that the image data is loaded in the background and becomes available once the texture is loaded. The different texture classes (GVRBitmapTexture, GVRCubemapTexture, ...) are now derived from GVRImage instead of GVRTexture. These are created by the asset loader and assigned to the texture. (We should probably rename these classes for clarity.)

| Deprecated | Use This Instead |
|------------|------------------|
| Future<GVRTexture> | GVRTexture |
| getFutureId | getId |

| New API | Description |
|---------|-------------|
|GVRImage | contains image data for a texture |
|setImage(GVRImage) | set the image data for a texture |
|GVRImage getImage() | get the image data for a texture |
|setTexCoord(String attr, String var) | set name of texcoord attribute and shader variable |
|String getTexCoordAttr() | get name of texture coordinate vertex attribute |
|String getTexCoordShaderVar() | get name of texture coordinate shader variable |

### GVRMaterial Changes

The GVRPostEffect object has been removed - use GVRMaterial for post effects now. A new base class for supplying data to shaders, GVRShaderData, has been added. GVRMaterial is now derived from GVRShaderData.

### GVRContext Changes

GVRContext.createQuad has been deprecated. GVRMesh.createQuad is the replacement function.