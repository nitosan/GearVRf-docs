# Documentation for GearVR Framework

GearVR framework documentation is generated with [mkdocs](http://www.mkdocs.org/)

## Install

To view and publish the documentation, you have to install mkdocs first

1. Install [Python](https://www.python.org/)
2. Install [pip](https://pip.pypa.io/en/stable/installing/)
3. Install [mkdocs](http://www.mkdocs.org/) and [mkdocs-material](http://squidfunk.github.io/mkdocs-material/) using following command
```
pip install mkdocs
pip install mkdocs-material
```

## Editing

You can edit GearVR framework documentation with any editor and review it with any browser.


1. Start a local server by
```
mkdocs serve
```
2. Open http://127.0.0.1:8000/ in a browser
3. Edit the file of your choice and the browser will auto update based on your edits


## Deployment
Use the following command to publish document to live
```
mkdocs gh-deploy --clean
```