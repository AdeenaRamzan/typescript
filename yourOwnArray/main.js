"use strict";
//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
Object.defineProperty(exports, "__esModule", { value: true });
let cars = ["BMW", "Sportage", "Civic", "Revo"];
for (let i = 0; cars.length > i; i++) {
    console.log("I would like to own " + cars[i]);
}
