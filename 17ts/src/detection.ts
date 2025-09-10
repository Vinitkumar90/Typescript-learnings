//type narrowing

function printAll(strs: string | string[] | null) {
  if (strs) {
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
  }
}

//in operator narrowing

interface User {
  name: string;
  email: string;
}

interface Admin {
  name: string;
  email: string;
  isAdmin: boolean;
}

function isAdminAccount(account: User | Admin) {
  if ("isAdmin" in account) {
    return account.isAdmin;
  }
}

//istanceof checks if it is the instance of that class
//values that can be constructed with new keyword
/* 
instanceof checks whether a value was created by a specific class using new.
Example:
const d = new Date();
*/
function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}

//using type predicates

type Fish = {
  swim: () => void;
};
type Bird = {
  fly: () => void;
};

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

// If you wrote:

// function isFish(pet: Fish | Bird) {
//   return (pet as Fish).swim !== undefined;
// }
// then the return type is just boolean.
// TS has no idea what true means here.

// if (isFish(pet)) {
//   // ❌ pet is still Fish | Bird (not narrowed)
//   return "fish food";
// }

function getFood(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet;
    return "fish food";
  } else {
    pet;
    return "bird food";
  }
}

/* 
In the if branch → pet is Fish.
In the else branch → pet is Bird.
*/

/*
A type predicate is a special return type for a function that tells TypeScript:
👉 “If this function returns true, then I promise the argument has a more specific type.”
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}
pet is Fish → this is the predicate.
It means: if isFish(pet) returns true, then pet is guaranteed to be a Fish.
*/


//Discriminated union with never type and exhaustive check

interface Circle{
    kind:"circle",
    radius: number
}

interface Square {
    kind: "square",
    side: number
}

interface Rectangle{
    kind:"rectangle",
    length: number,
    width: number
}

type Shape = Circle | Square | Rectangle;

function getArea(shape: Shape): number {
    switch(shape.kind){
        case "circle":
            return Math.PI*shape.radius**2;
        case "square":
            return shape.side * shape.side;
        case "rectangle":
            return shape.length * shape.width;
        default:
            const _defaultforshape : never = shape
            return _defaultforshape
    }
}

/* 
The never trick in default ensures exhaustive checking — if you add a new shape later, 
TS will throw an error unless you handle it.
*/