---
title: "How to Exit Vim"
description: "No-nonsense guide to getting unstuck"
tags:
  - "vim"
  - "TDD"
date: "2024/02/15"
---

# Situation: I don't care just get me out of here

Press the following keys in order:

`ESC : q ! ENTER`

alternatively, close your terminal if that isn't working. Once you have exited, use something like nano to make your edits.

# Situation: I made edits successfully and want to save them

You're probably in insert mode, which allows you to actually type. You need to go back into normal mode to exit. Press:
`ESC : w q ENTER`

Escape brings you back to normal mode, : brings you into command mode, and wq is the command for writing and quitting.

# I want to learn more about vim

[this guide is pretty good](https://www.linuxfoundation.org/blog/blog/classic-sysadmin-vim-101-a-beginners-guide-to-vim)
