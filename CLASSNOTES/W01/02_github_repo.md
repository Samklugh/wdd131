# W01 Setup: Tools – Hosting – GitHub Repository

## Overview

The purpose of this setup activity is to establish a remote repository that will render and serve web pages to clients. This class uses the GitHub platform to host your coursework and the GitHub Pages service to render your work as a normal, client-requested website.

GitHub Official Logo
GitHub is a web-based platform used for version control and collaboration. It offers the distributed version control and source code management functionality of Git, along with its own additional features.

## Instructions

A GitHub account is required, but you do NOT need a separate GitHub account for this class if you already have one.

1. If you already have a GitHub account, sign in. Your GitHub account can host many repositories and projects.
1. On GitHub, create a new repository named "wdd131" (all lowercase, no quotes). You will use this repository for all of your coursework.

Video Demonstration: ▶️ Create a GitHub Repository – [ 1:16 minutes ]

Verify that you have Git installed on your computer. You can check this by using a command line interface and typing
git --version
1. If you do not have Git installed on your computer, go to Getting Started – Installing Git and follow the directions for your operating system.
1. Verify that your git global username and email are configured on your local system.

git config --list
Git Configuration if needed
Use your GitHub username and BYU-Pathway email address for your Git configuration. If you have not configured your Git username and email, use the following commands to set them up. Within the empty quotes, enter your GitHub username and BYU-Pathway email address.

git config --global user.name ""
git config --global user.email ""
If you enter these commands correctly, nothing will output, otherwise you will get an error message.

Set the git configuration file to NOT ignore case changes/renaming in file and folder names.
git config --global core.ignorecase false
Clone the repository to your local system.
Video Demonstration: ▶️ Cloning a GitHub Repository – [ 9:25 minutes ]

1. The local repository folder is your working repository from which you will build, test, edit, commit, and then finally deploy/upload when you are ready.
1. Publishing Process: Open the repository folder in VS Code and test that you can make additions and changes, commit those changes, and push (upload) to your wdd131 remote GitHub Pages repository.

Video Demonstration: ▶️ Publishing Workflow – [ 5:16 minutes ]

This workflow demonstration video is from WDD 130 and references that course. However, the principles are the same. Do not blindly follow the instructions in the video. Instead, learn and then apply the underlying principles—an essential skill in software and web development.

<https://video.byui.edu/media/t/1_nxkai797>

<https://video.byui.edu/media/t/1_lrlsiu8m>

<https://video.byui.edu/media/t/1_e5b2fhs8>
