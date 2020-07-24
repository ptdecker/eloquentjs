# Eloquent JavaScript

This repository presents solutions to the excercises in the third edition of Marijn Haverbeke's *Eloquent JavaScript* ([ISBN 978-1-59327-950-9](https://read.amazon.com/kp/embed?asin=B07C96Q217&preview=newtab&linkCode=kpe&ref_=cm_sw_r_kb_dp_fxZ.EbDN7B1DB)).

## Installing

To use this repository, you will need to clone it to your local computer.  You will also need to have [Node.js](nodejs.org) installed along with the [Express](https://expressjs.com/) framework.  There are numerous online tutorials and training materials for how to accomplish this so I won't duplicate that information here.

## Running Solutions

As mentioned, these solutions were written to be run within the [Node.js](nodejs.org) runtime environment.

### Running Chapter 1 through 12 Exercises

After installing Node.js and downloading this repository, to run an excercise simply run node with the excercise name as a parameter from a terminal prompt after changing the directory to where you locally installed the repository.  For example, assuming you are using Mac OS and have it installed on a folder called `elequentjs` under a folder called `code`, you would:

````bash
$ cd ~/code/elequentjs
$ node chapter01/helloworld.js 
````

### Running Chapter 13 through XX Exercises

The exercises for Chapter 13 through XX utilize a NodeJS server and the Express framework.  To support running these exercises, there a basic web server is provided in the resources directory.
To use this server to run an exercise, first use the following:

````bash
$ cd ~/code/elequentjs
$ node resources/serve chapter13/helloworld 
````

Then browse to http://localhost:6502 in your favorite browser to view the exercise solution. When done running the exercise, terminate the server by pressing 'Ctrl-C' in the terminal.

## Notes

The excercise solutions attempt to only use the concepts that have been introduced up to that
point in the book.  For example, chapter one solutions to not use functions since functions
are introduced in chapter two.

## Solutions

### Chapter One - Values, Types, and Operators

* helloworld.js - A bonus since chapter one does not have any exercises. But, we might as well say, "Hello!"

### Chapter Two - Program Structure

* triangle.js - Outputs a triangle to the console
* fizzbuzz.js - Outputs the classic [Fizz buzz game](https://en.wikipedia.org/wiki/Fizz_buzz) and [FizzBuzz programming interview question](https://blog.codinghorror.com/why-cant-programmers-program/) for numbers from 1 to 100
* chessboard.js - Outputs an NxN [chessboard](https://en.wikipedia.org/wiki/Chessboard) pattern to the console

### Chapter Three - Functions

* minimum.js - Implement min(), a basic Math.min function
* recursion.js - Demonstrates recursion by using a recursive isEven() function to determine if a number is even
* beancount.js - Implements a function, countLetters(), to count letters in a string and a second function, countBs(), to count the number of uppercase letter 'B's in a string

### Chapter Four - Data Structures: Objects and Arrays

* deepcompare.js - Implements a deep comparision of equality between two objects
* list.js - Implements functions to manipulate a list data structure (single linked)
* range.js - Implements functions to create a range of numbers and sum and array
* reverse.js - Reverses the elements of an array using two approaches

### Chapter Five -- Higher-Order Functions

* flatten.js - Flattens arrays into a single array
* loop.js - A custom loop that tests and updates while processing
* every.js - Tests to see if all elements in an array pass a test
* dominant.js - Determines the dominant writting direction in a string of text

### Chapter Six -- The Secret Life of Objects

* vector.js - Defines a vector class
* groups.js - Defines a 'groups' data structure that is similar to the standard JavaScript set data structure
* iterable.js - Extends 'groups' so that it is iterable
* borrow.js - Illustrates how to borrow a method from another object

### Chapter Seven -- Project: A Robot

* measure.js - Compares the performance of two robots
* efficient.js - Defines a more efficent robot
* persistent.js - Defines a persistent group

### Chapter Eight -- Bugs and Errors

* retry.js - Implements a retry capability to retry a failing function until it succeeds
* lockbox.js - Handles accessing a box while preserving its states

### Chapter Nine -- Regular Expressions

* regexgolf.js - Short regex for selected string tests
* quotestyle.js - Single to double quote replacement
* numbers.js - JavaScript number matching

### Chapter Ten -- Modules

* modulerobot.js - A discussion of module orgainzation of the robot project
* roads.js - CommonJS Module for the array of roads.  Also includes an ES6 style version as a block comment
* circular.js - circular dependencies

### Chapter Eleven -- Asynchronous Programming

* crowscalpel.js - Implements ansyn 'locateScalpel' function
* promiseall.js - A promise that waits for all theother promises to succeed

### Chapter Twelve -- Project: A Programming Language

* eggsamples.js - Text provided sample programs using the base Egg interpreter
* arrays.js - Addes support of arrays to the base Egg interpreter
* closure.js - Explains how closures work in the base Egg interpreter
* comments.js - Adds comment support to the base Egg interpreter
* fixedscope.js - Adds a new 'set' special form

### Chapter Thirteen - JavaScript and the Browser

Chapter thirteen has no excercises.  The solution here lays groundwork for the browser-based solutions going forward by providing a Node-based web server to serve the HTML, CSS, and JavaScript
files along with any other assets.

* hello/ - Another "Hello World" to illustrate using the node web server provided for viewing web-based exercises

### Resources

The sources in this section are mostly direct copies from the book and are used
to support some of the presented solutions. Where they are different, it is out
of style changes mainly.  There are some things that I prefer over Marijn's
approach. But, who am I to know which is best.  :-)

* scripts.js - leveraged by dominant.js
* meadowfield.js - implementation of the robot project from chapter 7 made into a module for usage by chapter 7 solutions
* egg.js - The base implementation of the Egg language
* crowtech.js - resources needed for chapter 11 exercises