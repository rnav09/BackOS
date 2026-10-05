# BackOS

This is my Stardance Hackclub project based on the mission WebOS1.


## About

BackOS is a Backrooms-themed webOS that can run on your browser. There are 7 apps to explore and gather clues from, to eventually unlock a keypad and find what's hiding behind it. Everything was coded in HTML, CSS and JS. 




## Features

BackOS has 7 unique apps each themed around the backrooms.

### notes.exe
notes.exe is a simple notes app that I designed to resemble manilla folder tabs. You can find the journal of a previous explorer on the app, which has clues to the keypad puzzle.


### photos.exe
photos.exe is a photo gallery cnsisting of 12 photos whose design was inspired by film contact sheets. The photos are in a 4x3 grid and each have their own descriptions.

### tapes.exe
tapes.exe is a cassette player with 6 tapes, a progress bar and spinning tapes.

### terminal.exe
terminal.exe is a command line app. You can type 'help' to get started.

### settings.exe
settings.exe can be used to change the wallpaper (level 0, level 37, level Fun), brightness, reduce motion, or reset everything.

### desmiler.exe
desmiler is like minesweeper but with smilers (monsters in the backrooms) instead of mines.
Left-click  : Search a tile
Right-click : Chalk-mark a tile

### keypad.exe
A locked 4-digit padlock with something hiding inside.

### welcomeScreen
Its a simple welcome screen with a slideshow of a couple of pictures of levels from the backrooms that pops up when BackOS is booted up.


### topbar
The top bar has a glitchy clock and an infinity symbol that reopens the welcome screen

## Design
BackOS is meant to feel like an old computer stuck in time. Like if it were sitting in an empty office for years.

## Retro desktop
The aesthetic is based on early-2000s Windows (raised 3d buttons, .exe app names, desktop icons in a column on the left etc.)

## Backrooms colors
I mainly used mono yellow, beige, mustard and tan since those colors are most associated with the backrooms.

## Pixel font
Everything uses VT323.

## Glowing screens
The boot up screen and terminal glow amber while the keypad display glow green and desmilers counters glow red.

## Glitches
The clock and version number(0.0.∞) and the ntoe dates keep scrambling since time doesnt function normally in the backrooms.

## App Icons
I used a 3D cartoony style for the app Icons. I dont know what an accurate term would be for the style but yeah.

## Moving wallpapers
The level 0 wallpaper pans left to right since I wanted to emulate walking down an endless hallway.
The level 37 wallpaper is a looping video and the level fun wallpaper drifts back and forth.

## Built with
HTML, CSS, and JS.
VT323 from Google Fonts
localStorage to save your notes


# AI usage
I used AI to help tutor me when I was going through the 5 jams. It explained extra concepts too like how keyframes work, loops and if/else, and how the math behind minesweeper(not the rules of minesweeper but that math that goes on bts) work during the development process. I also used its help when debugging when I just could not locate/understand the error.

Parts that were mostly AI-written were:
The loading animation for when you enter the right password in the keypad app
The scrambleText function






# Credits
Inspired by the backrooms ofc.
Songs: All 6 songs on the cassette player are from:
The Caretaker-Everywhere At The End of Time
Photos: The photos in the camera app are from Kane Pixel's backrooms found footage series on yt.
Most of the other photos are from the backrooms wiki.

<details>
<summary>Spoilers</summary>


2 Is revealed when you beat desmiler
4 is since you are the 4th user (whoami and settings footer and its on the bootup screen)
6 since the 6th image on the photos app is circled and user 3 mentions it in their notes
8 since user 3 mentions the infinite symbol in the topbar to resemble a flipped over 8.

The gibberish in READ_ME is a caesar cipher (hint: caesar salad). Photo 12 says "count us". There are 12 photos so shift by 12 and it decodes to "arrange in ascending order".


Password for the keypad: 2468

After entering the right password the screen goes black and text types out line by line how you are actaully meant to escape before it begins to glow white and the OS restarts, this time, greeting user 5.
</details>

