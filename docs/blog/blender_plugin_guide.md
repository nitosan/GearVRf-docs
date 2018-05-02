# Blender integration

Gear VR framework Blender Plugin provides a way for the Blender users to preview their creation in Gear VR.

# Prerequisite

* Blender
* Download and build GearVRf-Demos project

# Installation

Download the Gear VR Framework project from github, and you can find the plugin in `GVRf/tools/blender_addon` folder.

Create a zip file of the `gvrf_exporter` folder and import it through the add-ons tab of Blender User Preferences.

![](/images/tutorials/blender_import_addon.jpg)

# Usage

Open or create a blender project ([Here is a sample project](https://github.com/dsazulay/blender-sample-projects))

Enable `Export to GVRf` plugin in User preference

![](/images/tutorials/blender_enable_addon.jpg)

Build and run the `gvr-remove-scripting` from `GearVRf-demos` project on a device

Switch to Import-Export tab of Blender and
Choose the directory to export (default dir is GvrfExportWorkspace located on user's home directory)
Set Client's IP field to reflect the client's device IP address
Click on "Export" button and preview the blender project in VR

![](/images/tutorials/blender_use_addon.jpg)

# Q&A
1. Blender addon report error "Connect attempt failed"
Make sure the IP address is correct, also make sure the computer and Gear VR device is on the same network

