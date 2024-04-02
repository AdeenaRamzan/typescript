// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

function car(manufacturer: string, model: string, ...options:{[key:string]:any}[] ) {
  const car : {manufacturer: string, model: string, options:{[key:string]:any}} = {
    manufacturer,
    model,
    options: {} 
  };
  for ( let option of options) {
    for (let key in option) {
      car.options[key] = option[key];
    }
}
return car;
}
console.log(car('Toyota', 'Corolla', {color: 'red', year: 2005}));
console.log(car('Honda', 'Civic', {color: 'blue', year: 2006}));
console.log(car('Ford', 'Mustang', {color: 'yellow', year: 2007}));