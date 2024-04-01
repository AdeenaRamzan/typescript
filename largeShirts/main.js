"use strict";
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
Object.defineProperty(exports, "__esModule", { value: true });
let make_shirt = (size, message) => {
    console.log(`Size: ${size} \n${message}`);
};
make_shirt(40, "I love TypeScript");
make_shirt(38, "I love TypeScript");
make_shirt(39, "I love TypeScript");
