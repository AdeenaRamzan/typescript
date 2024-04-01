"use strict";
// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
Object.defineProperty(exports, "__esModule", { value: true });
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted
let current_users = ['ali', 'hadia', 'ayesha', 'mohammad', 'adeena'];
let new_users = ['ali', 'hassan', 'laiba', 'mohammad', 'Mohammad'];
new_users.forEach(new_user => {
    if (current_users.some(current_user => current_user.toLowerCase() === new_user.toLowerCase())) {
        console.log(`${new_user} is already in use, please enter a new username.`);
    }
    else {
        console.log(`${new_user} is available.`);
    }
});
