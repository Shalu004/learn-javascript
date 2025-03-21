const name="Learn"
const tries= 28
// STRING INTERPOLATION****
console.log(`While trying to ${name} js, I have tried it ${tries} times by now.`)

const gamename= new String("Alphaprex")  // another way to declair a string as an object. here, new=object feature and we are giving string in the string constructor
console.log(gamename[0])                 // accessing 0th element 
console.log(gamename.__proto__)          // accessing the object features of string using double underscore proto

console.log(gamename.length)
console.log(gamename.toUpperCase())      // using the uppercase function
console.log(gamename.charAt(4))          // char at 4th index
console.log(gamename.indexOf('p'))       // char at any index

const word ="Supportive"
const newstring= word.substring(0,5)   
console.log(newstring)   //using ***substring**** to get part of the string

const newstring2= word.slice(-9, 5)      // In ***slicing*** we can pass negative index as well, so here it will start from the last index
console.log(newstring2)

const anothername="    random    "
console.log(anothername)
console.log(anothername.trim())         //***trim*** removes extra white scpaces in between/

console.log(anothername.replace('an', 'om'))    //**replace***/

console.log(anothername.includes('rand'))       //***includes? ***/

// readmore about string-----https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String