// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.


interface Car{
    make: string,
    model: string,
    year: number
}

let Car = {
    make: "Toyota",
    model: "Camry",
    year: 2020
}
console.log(`Car make ${Car.make} of model ${Car.model} launched in year ${Car.year}`);
    