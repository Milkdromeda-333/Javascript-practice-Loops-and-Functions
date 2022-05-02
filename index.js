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
  
  // 2
