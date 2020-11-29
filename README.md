# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @ramya_adimoolam/lotide`

**Require it:**

`const _ = require('@ramya_adimoolam/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function assertArraysEqual()`: Used to console the assertion message whether the two given arrays are equal or not.
* `function assertEqual()`: Used to console the assertion message for primitive data type.
* `function assertObjectsEqual()`: Used to console the assertion message whether the two given objects are equal or not description.
* `function countLetter()`: Used to count the occurence of each letter in a given phrase.
* `function countOnly()`: Takes an array of strings that we need to look through and an object specifying what to count and returns the count of the items.
* `function eqArrays()`: Used to compare two arrays and return true if the given arrays are equal.
* `function eqObjects()`: Used to compare two objects and return true if the given arrays are equal.
* `function findKey()`: Takes an object and a function describes the find condition, returns the key of when condition is truthy.
* `function findKeyByValue()`: Takes an object and a string, returns key of value matching the string.
* `function head()` : Take an array and return the first element of array.
* `function letterPositions()`: Returns indices of all elements of a string.
* `function map()`: Imitates map() method of Array.
* `function middle()`: Returns the mid elements of an array.
* `function tail()`: Returns all the elements of the array expect for first element.
* `function takeUntil()`: Returns subset of an array until the condition in the callback function is met.
* `function without()`: Returns a subset array by removing the unwanted items.
