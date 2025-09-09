//type aliases

type User = {
    name: string,
    email: string,
    isActive: boolean
}

function createUser(user:User): User{
    return user;
}

createUser({name:"", email:"", isActive:true})

/*
type X = { someField: string };

const a: X = { someField: "hello" }; // ✅ works
const b: X = "hello";                // ❌ Error (string is not an object with someField)
const c: X = [ "hello" ];            // ❌ Error (array doesn't match shape)

also...

type can define anything (not just objects).
For example:

type ID = string | number;   // ✅ union
type Age = number;           // ✅ alias
type User = { name: string } // ✅ object type

*/


export {}