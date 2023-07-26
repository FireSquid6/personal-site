---
title: 'Automatically publishing node apps'
description: 'A python script I made to automatically publish my node app'
date: '2023-07-23'
---
# What it does
I've been working on an SDK to encapsulate the API for a project I'm working on, and I was sick of changing the version in `package.json`, making a commit, and running `npm publish`, so I made a script to do it automatically. I could've written a github action to do this, but then I still had to commit and create a release on github, and I was too lazy to do that. 

Now all I have to do is run `./publish.py <major | minor | patch>`, and it automatically increments the corresponding version number and publishes it to npm! I might improve it in the future and make it create a github release.

# The script
Feel free to copy this if you'd like! You can also view it in a [github gist](https://gist.github.com/FireSquid6/ee82f8675982636eeea8e806ab827ff8)
```python
#!/bin/python3
import os
from sys import argv
import subprocess
import json


def main():
    print(os.getcwd())
    version = []
    package = {}

    with open('./package.json', 'r') as f:
        package = json.load(f)
        version = package['version'].split('.')
        version = [int(i) for i in version]

        if len(argv) < 2:
            print("Please add the argument 'major' 'minor' or 'path'")
            exit(1)

        match argv[1]:
            case 'major':
                version[0] += 1
                version[1] = 0
                version[2] = 0
            case 'minor':
                version[1] += 1
                version[2] = 0
            case 'patch':
                version[2] += 1
            case _:
                print("Please add the argument 'major' 'minor' or 'path'")
                exit(1)

        print(version)

    with open('./package.json', 'w') as f:
        package['version'] = '.'.join([str(i) for i in version])
        json.dump(package, f, indent=2)

    version_string = '.'.join([str(i) for i in version])

    commit(version_string)
    push()
    publish()


def commit(version):
    subprocess.run(['git', 'add', '.'])
    subprocess.run(
        ['git', 'commit', '-m' + f"Release {version}"])


def publish():
    subprocess.run(['npm', 'publish'])


def push():
    subprocess.run(['git', 'push'])


if __name__ == "__main__":
    main()

```