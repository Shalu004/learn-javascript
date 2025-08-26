// memory in javascript
/*
primitive=>stack  & Non-primitive=> heap
stack=> copy of original value is given to another variable, when copied value is changed then original value is not affected
heap=> direct reference to original value is give which mean if any change is committed in copied value then original value also changes
*/

//----------------

let name1="ghost"
let name2=name1
console.log(name1, name2)

name2="pretty ghost"
console.log(name1, name2)          //only name2 will change

//-------------------

let user1={
    namee:"abc",
    email:"abc@gamil.com",
}

let user2=user1
console.log(user1, user2)

user1.email="bca@gamil.com"             //both user1 and user2 email will be updated
console.log(user1, user2)