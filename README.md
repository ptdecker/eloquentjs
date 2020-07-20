# Eloquent JavaScript

This repository presents solutions to the excercises in the third edition of Marijn Haverbeke's *Eloquent JavaScript* ([ISBN 978-1-59327-950-9](https://read.amazon.com/kp/embed?asin=B07C96Q217&preview=newtab&linkCode=kpe&ref_=cm_sw_r_kb_dp_fxZ.EbDN7B1DB)).

## Running Solutions

These solutions were written to be run within the [Node.js](nodejs.org) runtime environment. After installing Node.js and downloading this repository, to run an excercise simply run node with the excercise name as a parameter from the Terminal.  For example:

````bash
$ node chapter01/helloworld.js 
````

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

### Resources

The sources in this section are mostly direct copies from the book and are used
to support some of the presented solutions. Where they are different, it is out
of style changes mainly.  There are some things that I prefer over Marijn's
approach. But, who am I to know which is best.  :-)

* scripts.js - leveraged by dominant.js
* meadowfield.js - implementation of the robot project from chapter 7 made into a module for usage by chapter 7 solutions
* persistent.js - implementation of a persistent group