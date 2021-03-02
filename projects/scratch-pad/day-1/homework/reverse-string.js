// #!/usr/bin/env node

'use strict';

/**
 * 1: reverseString()
 *
 *  a. Create a function called reverseString that takes a 
 *  String as its only input and returns a new String 
 *  representing the input String reversed.  For example:
 *  
 *      reverseString('hello');  // => 'olleh'
 * 
 * TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best? How do you know 
 *     when to stop looping?
 *  c. how do you access individual characters of a String?
 *  d. how do you concatenate Strings? What operator do we use?
 */

function reverseString(input) {
    // YOUR CODE GOES BELOW HERE //
     let x = input.split(''); // initializing a local variable x with the value of the input string as an array
    let b = []; // initializing an array literal named b
    let i; // a for loop that will loop backwards through the values in the transformed input array named x
    for(i = input.length -1; i > -1 ; i--) {
      let c = input[i]; // initializing a local variable c to store the values from the loop
      b.push(c); //pushing the values stored in variable c into the array literal 
    }
    let d = b.join(''); // turning array b into a string using the join method and saving that string to a local variable d
   return d;  // return the values stored inside variable d
    
    // YOUR CODE GOES ABOVE HERE //
}




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports.reverseString = reverseString;
}