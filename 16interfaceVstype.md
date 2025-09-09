1) Basic usage
// with type
```
type UserType = {
  name: string;
};


// with interface

interface UserInterface {
  name: string;
}


const u1: UserType = { name: "Vinit" };       // ✅
const u2: UserInterface = { name: "Vinit" };  // ✅
```

- Both enforce “must be an object with name: string”.

2) Differences

a) Extension

- interface → extendable (like inheritance).

- type → use intersections (&).

```
interface Person {
  name: string;
}
interface Student extends Person {
  roll: number;
}

type PersonType = { name: string };
type StudentType = PersonType & { roll: number };
```

- Both result in { name: string; roll: number }.

b) Merging

- Interface can merge declarations automatically.

- Type cannot.

```
interface Box { width: number; }
interface Box { height: number; }

// After merging 👇
const b: Box = { width: 10, height: 20 }; // ✅ works

type Shape = { width: number };
// type Shape = { height: number }; // ❌ Error: duplicate identifier
```
c) Non-object stuff

- type can alias primitive, union, tuple, etc.

- interface can only describe objects / callable types / class contracts.
```
type ID = string | number; // ✅
interface ID = string | number; // ❌ Error (not allowed)
```
3. Rule of thumb

- If you’re modeling objects / classes → interface (extendable, mergeable).

- If you need union / primitives / more flexibility → type.