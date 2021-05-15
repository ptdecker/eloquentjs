# Eloquent JavaScript

This repository presents solutions to the excercises in the third edition of Marijn Haverbeke's _Eloquent JavaScript_ ([ISBN 978-1-59327-950-9](https://read.amazon.com/kp/embed?asin=B07C96Q217&preview=newtab&linkCode=kpe&ref_=cm_sw_r_kb_dp_fxZ.EbDN7B1DB)).

## Installing

### Cloan This Repository

Cloan this GitHub repo to your development commputer.  Refer to [GitHub tutorials](https://duckduckgo.com/?q="clone github repository tutorial"&kp=1&kl=us-en) as there are several ways to do this.

While working on this project, I used [Visual Studio Code](https://code.visualstudio.com) as my code editor and cloned the repo using [VSCode's built-in GitHub integration](https://code.visualstudio.com/docs/editor/github).

Whichever editor you use, these instructions assume you clone this repository to a `code` subdirectory of your user home directory (i.e. `~/code`). If you use a different subdirectory, you will need to change `~/code` in the example commands to the path to which you cloned the repo where neccessary.

### Install NodeJS (along with NPM)

If you haven't already done so, you will also need to have [Node.js](nodejs.org) installed. While some of these examples could in theory be run from the console in any browser, using Node lets us easily also run a small web server for the Chapter 13 excercises and beyond.  There are [numerous online tutorials and training materials](https://duckduckgo.com/?q="node installation tutorial"&kp=1&kl=us-en) for how to install NodeJS so I won't duplicate that information here.  Installing NodeJS should also automatically install the Node Package Manager ([NPM](https://nodejs.org/en/knowledge/getting-started/npm/what-is-npm/)).

### Check Your Installation

Once you have cloaned the repo and installed NodeJS along with NPM, you can check your installation.  From a shell command prompt, you should be able to execute something like this (although the version numbers may differ):

```bash
$ cd ~/code/eloquentjs
$ node --version
v14.17.0
$ npm --version
v6.14.13
```

### Install Package Dependencies

Now that you know NodeJS and NPM are both installed, you need to install a few JavaScript package dependencies.  These examples assume the [Express](https://express.js/) framework is installed along with one or two additional packages.  The `package.json` file tells NPM what packages to install, so installing the packages is as simple as:

```bash
$ npm install
```

## Running Solutions

As mentioned, these solutions were written to be run within the [Node.js](nodejs.org) runtime environment.  Once you have cloaned this repository and installed NodeJS and the Express framework, you should be able to run the excercise solutions.

### Running Chapter 1 through 12 Exercises

After installing Node.js and downloading this repository, to run an excercise simply run node with the excercise name as a parameter from a terminal prompt after changing the directory to where you locally installed the repository. For example, assuming you are using Mac OS and have it installed on a folder called `elequentjs` under a folder called `code`, you would:

```bash
$ cd ~/code/elequentjs
$ node chapter01/helloworld.js
Hello World!
```

### Running Chapter 13 through XX Exercises and Extras

The exercises for Chapter 13 through XX utilize a NodeJS server and the Express framework. To support running these exercises, there a basic web server is provided in the resources directory.
To use this server to run an exercise, first use the following:

```bash
$ cd ~/code/elequentjs
$ node resources/serve chapter13/hello
Browse to http://localhost:6502 to see the exercise solution "chapter13/hello"
To exit, press 'Ctrl-C'
```

Then browse to http://localhost:6502 in your favorite browser to view the exercise solution. When done running the exercise, terminate the server by pressing 'Ctrl-C' in the terminal.

## Notes

The excercise solutions attempt to only use the concepts that have been introduced up to that
point in the book. For example, chapter one solutions to not use functions since functions
are introduced in chapter two. So, if you're an expert and think "there is a better way" when looking at a solution please keep in mind that your concept might not have been introduced to the reader yet.

## Solutions

### Chapter One - Values, Types, and Operators

- helloworld.js - A bonus since chapter one does not have any exercises. But, we might as well say, "Hello!"

### Chapter Two - Program Structure

- triangle.js - Outputs a triangle to the console
- fizzbuzz.js - Outputs the classic [Fizz buzz game](https://en.wikipedia.org/wiki/Fizz_buzz) and [FizzBuzz programming interview question](https://blog.codinghorror.com/why-cant-programmers-program/) for numbers from 1 to 100
- chessboard.js - Outputs an NxN [chessboard](https://en.wikipedia.org/wiki/Chessboard) pattern to the console (the dimension is coded into the program)

### Chapter Three - Functions

- minimum.js - Implement min(), a basic Math.min function
- recursion.js - Demonstrates recursion by using a recursive isEven() function to determine if a number is even
- beancount.js - Implements a function, countLetters(), to count letters in a string and a second function, countBs(), to count the number of uppercase letter 'B's in a string

### Chapter Four - Data Structures: Objects and Arrays

- deepcompare.js - Implements a deep comparision of equality between two objects
- list.js - Implements functions to manipulate a list data structure (single linked)
- range.js - Implements functions to create a range of numbers and sum and array
- reverse.js - Reverses the elements of an array using two approaches

### Chapter Five -- Higher-Order Functions

- flatten.js - Flattens arrays into a single array
- loop.js - A custom loop that tests and updates while processing
- every.js - Tests to see if all elements in an array pass a test
- dominant.js - Determines the dominant writting direction in a string of text

### Chapter Six -- The Secret Life of Objects

- vector.js - Defines a vector class
- groups.js - Defines a 'groups' data structure that is similar to the standard JavaScript set data structure
- iterable.js - Extends 'groups' so that it is iterable
- borrow.js - Illustrates how to borrow a method from another object

### Chapter Seven -- Project: A Robot

- measure.js - Compares the performance of two robots
- efficient.js - Defines a more efficent robot
- persistent.js - Defines a persistent group

### Chapter Eight -- Bugs and Errors

- retry.js - Implements a retry capability to retry a failing function until it succeeds
- lockbox.js - Handles accessing a box while preserving its states

### Chapter Nine -- Regular Expressions

- regexgolf.js - Short regex for selected string tests
- quotestyle.js - Single to double quote replacement
- numbers.js - JavaScript number matching

### Chapter Ten -- Modules

- modulerobot.js - A discussion of module orgainzation of the robot project
- roads.js - CommonJS Module for the array of roads. Also includes an ES6 style version as a block comment
- circular.js - circular dependencies

### Chapter Eleven -- Asynchronous Programming

- crowscalpel.js - Implements ansyn 'locateScalpel' function
- promiseall.js - A promise that waits for all theother promises to succeed

### Chapter Twelve -- Project: A Programming Language

- eggsamples.js - Text provided sample programs using the base Egg interpreter
- arrays.js - Addes support of arrays to the base Egg interpreter
- closure.js - Explains how closures work in the base Egg interpreter
- comments.js - Adds comment support to the base Egg interpreter
- fixedscope.js - Adds a new 'set' special form

### Chapter Thirteen - JavaScript and the Browser

Chapter thirteen has no excercises. The solution here lays groundwork for the browser-based solutions going forward by providing a Node-based web server to serve the HTML, CSS, and JavaScript
files along with any other assets.

- hello/ - Another "Hello World" to illustrate using the node web server provided for viewing web-based exercises

### Chapter Fourteen - The Document Objectd Model

- examples/ - Compilation html, css, and scripts for the examples in each of the text sections for reference
- table/ - Dynamically builds a table of mountains
- elements/ - Manual implementation of document.getElementsByTagName
- catshat/ - The cat and the hat

### Chapter Fifteen - Handling Events

- ballon/ - Displays a baloon that can be inflated and deflated with arrow keys but don't over inflate
- mousetrail/ - Mouse trails following the mouse
- tabs/ - Simple tabbed interface

### Chapter Sixteen - Project: A Platform Game

- lightblue/ - EloquentJS's version of [Thomas Palef's Dark Blue](http://www.lessmilk.com/game/dark-blue/) game by leveraging author's provided code as modules
- gameover/ - Implements a life maximum and game ends when all lives are lost
- gamepause/ - Implements the ability to pause a game [Not yet working!!]

### Resources

The sources in this section, with the exception of the web server, are mostly direct copies from the book and are used to support some of the presented solutions. Where they are different, it is out of style changes mainly. There are some things that I prefer over Marijn's approach. But, who am I to know which is best. :-)

- scripts.js - leveraged by dominant.js
- meadowfield.js - implementation of the robot project from chapter 7 made into a module for usage by chapter 7 solutions
- egg.js - The base implementation of the Egg language
- crowtech.js - resources needed for chapter 11 exercises
- serve.js - A minimalist Express framework based web server for chapter 13 and beyond exercises
- template/ - Blank index.html, style.css, and scripts.js template files for starting new exercise projects
- blueengine/ - Contains all the author provided code made into modules for usage by chapter 16 solutions

### Extras

Bonus things developed while working through the exercises

- tictactoe/ - BONUS: A basic Tic-Tac-Toe implementation [Not yet working!!]
