// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

let guestList: string[] = ["Adeena", "Hadia", "Rameen"];

let canNotAttend: string = "Hadia";
let newGuest: string = "Ayesha";
let index: number = guestList.indexOf(canNotAttend);
guestList[index] = newGuest;
console.log("Good news !We have got a Bigger table");
guestList.unshift("Sana");
guestList.splice(guestList.length/2, 0, "Ayesha");
guestList.push("Huzaifa");

for (let i = 0; i < guestList.length; i++) {
  console.log(
    `Dear ${guestList[i]}, I would like to invite you to dinner at my place on Saturday night`
  );
}
console.log("Sorry just found out that your new dinner table won’t arrive in time for the dinner, so i can invite only two guests for dinner");
while (guestList.length > 2) {
  console.log(`Sorry ${guestList.pop()} we can't invite you to dinner`);
}

console.log("Here are the list of 2 guests who can attend the dinner");
for (let i = 0; i < guestList.length; i++) {
  console.log(`Dear ${guestList[i]}, you are still invited to dinner`);
}
guestList.pop();
guestList.pop();
console.log(`Empty List:${guestList}`);
