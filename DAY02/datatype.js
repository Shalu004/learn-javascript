//primitive and non primitive: on the basis of data how data is stored ab=nd accessed in the memory

/*
primitive:
7types: string, boolean, number, null, undefined, symbol, bigint

undefined=> whwn a variable is declaried but not initialized

symbol=>gived uinque id to each value (even if the values are the same)
eg; 
const sym1=symbole("123")
const sym2=symbol("123")
but,  
sym1===sym2  //false


let num=1234566788999
since it is too big so automatically it will be stored in bigint
or 
manually--->add 'n' at the end
let num=12345678999n

*/

//(Reference) Non primitve data type
/*
Object, array , function
*/

const fruit=["apple","orange", "grapes", "guava"]

let info={
    name:'shalu',
    Age:19,
    gender:'Female',
}
console.log(info)
console.log(fruit)

const prop=function(){
    console.log("Hello!")
}


