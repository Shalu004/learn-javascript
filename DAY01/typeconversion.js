let num=33
console.log(typeof num)    //number
console.log(typeof(num))    //number


let name="shalu"
console.log(typeof name)          //string
console.log(typeof(name))         //string

let nameInNumber=Number(name)                 //capital n
console.log(typeof nameInNumber)              //number
console.log(typeof nameInNumber)               //number

let nameInBool=Boolean(name)
console.log(typeof nameInBool)                //boolean
console.log(nameInBool)                       //true


let random="ab12c"
console.log(typeof random)               //string
/*
 let random=ab12c  =>undefined , NAN
 */

let randomInstring=String(random)
let randomInnumber=Number(random)
let randomInBoolean=Boolean(random)

console.log(typeof randomInstring)          //string
console.log(typeof randomInnumber)           //number
console.log(typeof randomInBoolean)           //boolean
