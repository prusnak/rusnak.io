---
layout: post
title: LÖVE (Love2D) on Android
---

Almost two years ago I blogged about my [Global Game Jam](http://globalgamejam.org/) entry called [Hexoboros](/global-game-jam-2012-hexoboros/). This year's approaching GGJ reminded me that I wanted to port this game to Android. Back then it turned out to be quite hard and results were not very satisfying.

I knew that [SDL](http://libsdl.org/) 2.0 was released in August 2013 bringing Android support out of the box.
What I didn't know was that [LÖVE](http://love2d.org/) 0.9.0 was released in December as well, building on top of SDL2.
I was pretty excited, because I felt that LÖVE on Android will became a real thing soon.

And I was right. [Martin Felis](http://www.fysx.org/) is working on [love-android-sdl2](https://bitbucket.org/MartinFelis/love-android-sdl2) repo,
which combines all these efforts into one easy to build Android package.

After fixing some minor issues in Martin's and mine code I ended up with this result:

![hexoboros-android](/assets/hexoboros-android.jpg)

Great! Now I'm convinced that I'll be using LÖVE again during Global Game Jam this year.

Some notes:

* love-android-sdl2 loads LÖVE resources from `/sdcard/lovegame/` directory (this is useful for debugging)
* if you zip your LÖVE resources to a file named `game.love` and add this file to `assets` directory of Android project, you end up with APK that bundles LÖVE with your game (this is great for deploying final game)
* never force fixed resolution in your LÖVE code; rather update your code so it works with any given resolution and aspect ratio (i.e. don't hardcode sizes and positions of rendered objects)
* you can test you got that right by putting `t.window.resizable = true` in your `conf.lua` and using something like this in your `main.lua` code:

~~~lua
function love.resize(w, h)
  width, height = w, h
  scale = height / 1024
end

function love.load()
  love.resize(love.window.getWidth(), love.window.getHeight())
  ...
~~~
