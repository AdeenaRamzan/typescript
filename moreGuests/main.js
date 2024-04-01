"use strict";
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
Object.defineProperty(exports, "__esModule", { value: true });
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
let guestList = ["Adeena", "Hadia", "Rameen"];
let canNotAttend = "Hadia";
let newGuest = "Ayesha";
let index = guestList.indexOf(canNotAttend);
guestList[index] = newGuest;
console.log("Good news !We have got a Bigger table");
guestList.unshift("Sana");
guestList.splice(guestList.length / 2, 0, "Ayesha");
guestList.push("Huzaifa");
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]}, I would like to invite you to dinner at my place on Saturday night`);
}
