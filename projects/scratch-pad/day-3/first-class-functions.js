// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
 
   return function (given) {
        if(given > base) {
            return true;
        }
        else {
            return false;
        }
   };
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
 
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    return function (given) {
        if(given < base) {
            return true;
        }
        else {
            return false;
        }
    };
    
    
    // YOUR CODE ABOVE HERE //
} 

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
     return function (string) {
        if(startsWith.toLowerCase() === string[0].toLowerCase()) {
            return true;
        }
        else {
            return false;
        }
     
    };
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    
     return function (string) {
        if(endsWith.toLowerCase() === string[string.length - 1].toLowerCase()) {
            return true;
        }
        else {
            return false;
        }
     
    };
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
   // declare an arr set to array that will be returned 
    var arr = [];
    
    //loop through the array to get access to each value in the array
    for (var i = 0; i < strings.length; i++) {
    // pass each string in the array through the modify function set to a variable modifiedStr
       var modifiedStr = modify(strings[i]);
       arr.push(modifiedStr);
    }
    //call the modify function on each value in the array and put the new value into the arr array
    
    //return arr
     return arr;
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, 
 * return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    
    // create a for loop to loop through the strings in the strings array
    for(var i = 0; i < strings.length; i++) {
     // test each string to see if it passes or not 
        if(test(strings[i]) === false) {
            return false;
        }
    }
    
    return true; 
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}
