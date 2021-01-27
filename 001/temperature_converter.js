const kelvin = 293;

let celsius = kelvin - 273;

// To fahhrenheit
let fahrenheit = celsius * (9/5) + 32;

fahrenheit = Math.floor(fahrenheit);

// To Newton 
let newton = celsius * (33/100);

newton = Math.floor(newton);

console.log(`The temperature is ${fahrenheit} degrees fahrenheit`);
console.log(`The temperature is ${newton} degrees newton`);

