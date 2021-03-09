// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    // return an object with each property inside of it
return {
    id: id,
    nameFirst: nameFirst,
    nameLast: nameLast
};
}


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
    
    // addContact(contact) takes a contact object to be added 
    // to the contact-list.
    
        addContact: function(newContact) {
            contacts.push(newContact);
        },
    
    
    // findContact(fullName) takes a full-name String, like 'Max Gaudin', and 
    // returns the contact object if found in the contacts-list, or, 
    // undefined if the fullName does not match any contacts in the list.
     
    
        findContact: function(fullName) {
            // a for loop that loops through the contacts array
           for(let i = 0; i < contacts.length; i++) {
               // a variable that holds the value of nameFirst and nameLast
               var x = `${contacts[i].nameFirst} ${contacts[i].nameLast}`;
               // a conditional statement that returns the contact object if
               //fullName is found in the contacts-list
               if (fullName === x) {
                   return contacts[i];
               }
           }
        }, 
        
    // removeContact(contact) takes a contact object to be removed from 
    // the contact-list.

        removeContact: function(contact) { 
            // a for loop that loops through the contacts array to find 
            // the index of the contact 
            for(var i = 0; i < contacts.length; i++) {
            // if the contact index matches the contact then
               if(contact === contact[i]); {
            // remove the contact object from the contact list
            contacts.splice(i, 1);
            }
            }
        },
    
        
    // printAllContactNames() return a String formated with all the full-names of the separated 
    //  with a line-break
        printAllContactNames: function() {
            
            //create string to add names to
            var string = '';
            
            //for loop to get access to each contact in the array
             for(let i = 0; i < contacts.length; i++) {
            // the LAST full name shouldn't have a line break after it!
            if (i === contacts.length - 1) {
                var fullName = `${contacts[i].nameFirst} ${contacts[i].nameLast}`;
            } else {
            //get nameFirst and nameLast from each object
                var fullName = `${contacts[i].nameFirst} ${contacts[i].nameLast}\n`;
            //concat the nameFirst and nameLast strings to make 1 string with
            //a line break between each name   
                }
                string += fullName;
            }
            //print the new string to the console
           
           
            return string;
        }
};
    
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
