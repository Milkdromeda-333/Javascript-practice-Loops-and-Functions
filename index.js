// 1 This program takes an array and makes a new array with the word baby to the beginning of each item in the prototype array. I was restricted from using the .map() method
function convertToBaby(arrayName){
  let newArray = []
  for(let i = 0; i < arrayName.length; i++){ // this iterates through the array and adds the new string to the array.
    newArray.push("baby " + arrayName[i])
  };
  return newArray
}

const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

console.log(convertToBaby(animals))

 /*returns [ 'baby panda',
  'baby turtle',
  'baby giraffe',
  'baby hippo',
  'baby sloth',
  'baby human' ]*/
  
  // 2 This challenge has me to write a program that iterates through an array and calls a function for each iteration. Also, to write a function that iterates through an array.
const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];
const politelyDecline = (veg) => {
      console.log('No ' + veg + ' please.');
}
let declineEverything = arrayName =>{ // this iterates through each item in the array and calls the politelyDecline function
     arrayName.forEach(politelyDecline)
 
}
const acceptEverything = arrayName =>{ // this iterates through each item in the array and applies the added changes and logs it.
  for(let i = 0; i < arrayName.length; i++){
    console.log(`Ok, I guess I will eat some ${arrayName[i]}.`)
  };
}

const acceptEverythingAlso = arrayName =>{  // this iterates through each item in the array and applies the added changes and logs it.
  arrayName.forEach(name => console.log(`Ok, I guess I will eat some ${name}.`))
}

declineEverything(veggies);
/* outputs
Output:
No broccoli please. I will have pizza with extra cheese.
No spinach please. I will have pizza with extra cheese.
No cauliflower please. I will have pizza with extra cheese.
No broccoflower please. I will have pizza with extra cheese.*/
acceptEverythingAlso(veggies);
/* Outputs
Ok, I guess I will eat some broccoli.
Ok, I guess I will eat some spinach.
Ok, I guess I will eat some cauliflower.
Ok, I guess I will eat some broccoflower.*/

//3  This challenge hs to write a function that squares each number inside of an array using .map() method.
const numbers = [2, 7, 9, 171, 52, 33, 14]
const squareNums = arrayName =>{ // this takes an array and uses he .map() method to create a new array from the result of multiplying each number by itself.
  newArray = arrayName.map(x => x * x);
  return newArray;
}

console.log(squareNums(numbers)); 
// logs [ 4, 49, 81, 29241, 2704, 1089, 196 ]

// 4 This challenge has me write a function that returns a new array by iterating through another array and using .toUpperCase() method.
const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];
const shoutGreetings = arrayName =>{
  let newArray = []
  for (let i = 0; i < arrayName.length; i++){
    newArray.push(arrayName[i].toUpperCase() + "!")
  }
  return newArray
}
console.log(shoutGreetings(greetings));
// outputs [ 'HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!' ]

//5
