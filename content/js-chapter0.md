---
title: 'The Web Development Tutorial I Wish I Had | 0'
description: 'Getting started with javascript'
date: '2023-07-23'
---

# What this tutorial is
I learned programming by bashing my head against the wall. While I do belive that that is the best to learn, I wish I had some sort of formal guide to follow. Through this series of articles, I wish to take someone with no programming experience to being able to create website with react.  

If you have any problems throughout this course, feel free to send me a message `@firesquid6` on discord.

# Getting your environment set up
## VSCode
This will probably be the hardest part of the entire tutorial. First you're going to need to install [VSCode](https://code.visualstudio.com/). This will be your primary "workbench" for editing code. 

VSCode has a lot of customization options for themes, icons, and extensions, but I won't be going into those.

If you have another text editor you'd rather use (such as vim, neovim, emacs, or sublime) you can feel free to use that instead.

## Some sort of Terminal
I'd like to note that whenever I or another tutorial refers to 'running' something, they typically mean on the command line. The command line is a place average PC users don't visit, however it will have to become your home as a programmer.

The command line is basically like minecraft slash commands but for your computer. Don't worry too much about them, you'll get the hang of it.

On windows, I would recommend using the [Windows Terminal](https://apps.microsoft.com/store/detail/windows-terminal/9N0DX20HK701) application, since the provided Command Prompt and PowerShell are a bit lacking in my opinion.

I've never used Mac, so I can't recommend anything. It does come with the Terminal application in launchpad, so you just use that.

Right now I use [kitty](https://sw.kovidgoyal.net/kitty/) on Linux Mint, although it can run on almost any linux or mac .

## nvm 
To actually run code, you'll need a program called Node.js. However, node.js has lots of different versions, so we will be installing Node Version Manager as a tool to install Node.js.

Freecodecamp has a [good tutorial on installing](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/) this since how you install it depends on your operating system.

Confirm that nvm is installed properly by running:
```
nvm -v
```
If your terminal outputs a version (for me it was `0.39.3`), you have successfully installed it. You may need to close and reopen your terminal for it to work properly

## node.js
Installing node js is simple with nvm. You can just run `nvm install 18` in your terminal, and then run `nvm use 18`. 

For this tutorial I will be using node version 18, although a more modern version may be out by the time you're reading this. I'd recommend just sticking with version 18, since switching to a different version can cause annoying problems.

# Writing Your First Lines of Code
## Hello World
If you made it this far, either thank the god of programming for encountering no issues in the installation or congradulate yourself on defeating the errors.

I would recommend creating a "projects" or "source" folder somewhere easy to access, such as your desktop or home folder, and putting all of your projects in that folder.

Now, open a new folder in VSCode. Once you're in the folder, you should see an Icon looking like this at the top left.

![new file button location](/images/new-file.png)

Press it, and create a new file. Name this file `main.js`. In this file, write:
```js
console.log("hello world")
```
Note that VSCode has special features that autocompletes parenthesis, quotes, etc. This will come in handy.

This line of code will print "hello world" to the console when run. Don't worry exactly how or why, we'll get there.

To run this code, press `ctrl+` ` (it's at the top left of your keyboard, typically just below escape, or just to the right of it). This will open up an integrated terminal at the bottom of VSCode.

To run a javascript file, you run:
```
node <name-of-the-file>
```
so in this case, we'd run:
```
node main.js
```
You should get the output `hello world`. Congradulations! You have written your first program.

## About semicolons
In many languages, semicolons (;) are used to end a line of code. Javascript allows you to use them, but doesn't require them. Whether it's "better" to is a fierce debtate, so do what you want. I'm not going to use semicolons in this tutorial, because I'm writing it in markdown and will forget them.

## Do It Yourself
You aren't going to learn anything by just copying and pasting from this tutorial (in fact, I recommend you manually type everything out). Before moving on to the next chapter, write a program that prints `Hello, <your-name>`