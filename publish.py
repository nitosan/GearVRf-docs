#!/usr/bin/env python

import os
import shutil
import subprocess
import glob


def get_curr_path():
    return os.path.dirname(os.path.realpath(__file__))


def copy_all(src, dst):
    for filename in glob.glob(os.path.join(src, '*.*')):
        shutil.copy(filename, dst)


def copy_tree(src, dst):
    if os.path.isdir(src):
        shutil.copytree(src, dst)
    elif os.path.exists(src):
        shutil.copy(src, dst)


def del_tree(path):
    if os.path.isdir(path):
        shutil.rmtree(path)
    elif os.path.isfile(path):
        os.remove(path)
    else:
        print 'Invalid path: ' + path


def gen_javadoc(src_path, out_path, package_name):
    cmd = ['javadoc', '-Xdoclint:none']
    cmd.extend(['-d', out_path])
    cmd.extend(['-sourcepath', src_path])
    cmd.extend(['-subpackages', package_name])
    cmd.extend(['-encoding', 'UTF-8'])
    cmd.extend(['-charset', 'UTF-8'])
    subprocess.call(cmd)


def gen_java_docs(base_path, out_path):
    del_tree(out_path)

    # Generate frameworks
    sub_out_path = os.path.join(out_path, 'Framework')
    src_path = os.path.join(base_path, 'GVRF', 'Framework', 'framework', 'src', 'main', 'java')
    gen_javadoc(src_path, sub_out_path, 'org.gearvrf')

    # Generate 3DCursor
    sub_out_path = os.path.join(out_path, '3DCursor')
    src_path = os.path.join(base_path, 'GVRf', 'Extensions', '3DCursor', '3DCursorLibrary', 'src', 'main', 'java')
    gen_javadoc(src_path, sub_out_path, 'org.gearvrf')

    # Generate DebugWebServer
    sub_out_path = os.path.join(out_path, 'DebugWebServer')
    src_path = os.path.join(base_path, 'GVRf', 'Extensions', 'DebugWebServer', 'debugwebserver', 'src', 'main', 'java')
    gen_javadoc(src_path, sub_out_path, 'smcl.samsung')

    # Generate SceneSerializer
    sub_out_path = os.path.join(out_path, 'SceneSerializer')
    src_path = os.path.join(base_path, 'GVRf', 'Extensions', 'SceneSerializer', 'sceneserializer', 'src', 'main', 'java')
    gen_javadoc(src_path, sub_out_path, 'org.gearvrf')

    # Generate WidgetPlugin
    sub_out_path = os.path.join(out_path, 'WidgetPlugin')
    src_path = os.path.join(base_path, 'GVRf', 'Extensions', 'WidgetPlugin', 'widgetplugin', 'src', 'main', 'java')
    gen_javadoc(src_path, sub_out_path, 'org.gearvrf')

    # Generate gvrf-physics
    sub_out_path = os.path.join(out_path, 'gvrf-physics')
    src_path = os.path.join(base_path, 'GVRf', 'Extensions', 'gvrf-physics', 'src', 'main', 'java')
    gen_javadoc(src_path, sub_out_path, 'org.gearvrf')

    # Generate particle system
    sub_out_path = os.path.join(out_path, 'gvrf-particlesystem')
    src_path = os.path.join(base_path, 'GVRf', 'Extensions', 'gvrf-particlesystem', 'src', 'main', 'java')
    gen_javadoc(src_path, sub_out_path, 'org.gearvrf')


def gen_all_docs(out_path, version_num):
    # Search for GVRF folder
    # Search for GVRF_SOURCE_PATH
    gvrf_path = os.environ.get('GVRF_SOURCE_PATH')
    curr_path = get_curr_path()
    full_out_path = os.path.join(curr_path, out_path, version_num)
    template_path = os.path.join(curr_path, 'api_reference', 'template')

    print "==> Setting up environment"
    if gvrf_path is None:
        # Search at the parent dir
        parent_path = os.path.dirname(curr_path)
        gvrf_path = os.path.join(parent_path, 'GearVRf')

    # Generate all java docs
    print '==> generate javadoc'
    if os.path.isdir(gvrf_path):
        gen_java_docs(gvrf_path, full_out_path)
    else:
        print "==> Invalid GVRF path: " + gvrf_path

    # copy template
    print '==> copy template'
    copy_all(template_path, full_out_path)


def main():
    # Generate site with mkdocs
    from subprocess import call
    call(['mkdocs', 'build'])
    print '==> Generating Documentation site'

    # Generate API reference from GVRF source
    gen_all_docs('api_reference', 'v3.3')

    # Copy api_reference and replace the placeholder api_reference in site
    if os.path.isdir('site'):
        if os.path.isdir('site/api_reference'):
            shutil.rmtree('site/api_reference')
        shutil.copytree('api_reference', 'site/api_reference')
        print '==> Add API reference'


if __name__ == "__main__":
    # main()
    main()
