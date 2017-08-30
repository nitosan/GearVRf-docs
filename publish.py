#!/usr/bin/env python

import os
import shutil


def main():
    # Generate site with mkdocs
    from subprocess import call
    call(['mkdocs','build'])
    print '==> Generating Documentation site'
    # Copy api_reference and replace the placeholder api_reference in site
    if os.path.isdir('site'):
        if os.path.isdir('site/api_reference'):
            shutil.rmtree('site/api_reference')
        shutil.copytree('api_reference', 'site/api_reference')
        print '==> Add API reference'

if __name__ == "__main__":
    main()
