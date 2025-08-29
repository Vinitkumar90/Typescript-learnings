const User = {
    name: "vinit",
    email: "vinit@gmail.com",
    isActive: true
}

function createUser({name:string, isPaid: boolean}){}

// createUser({name:"vinit", isPaid:true,email:"f@gmail.com"})  this gives swiggly for email as not defined but... a bad behaviour

let newUser = {name:"vinit", isPaid:true, email:"vinit@hotmail.com"}
createUser(newUser)


function createCourse(): {name:string, price:number} {   //so it should return a object with key name type string, key price type number
    return {name:"reactjs", price:399}
}



export {}