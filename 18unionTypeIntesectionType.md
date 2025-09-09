# Union types and intersection types in TypeScript.

## Union Types (|)

- A union means a value can be one type OR another.
It’s like saying: "this variable may be either type A or type B."
```ts
let id: string | number;

id = "abc123";  // ✅ ok
id = 101;       // ✅ ok
id = true;      // ❌ error (not string or number)
```

Example with functions:
```ts
function printId(id: string | number) {
  console.log("ID:", id);
}

printId("xyz"); // ✅
printId(123);   // ✅
```

## Intersection Types (&)

- An intersection means a value must satisfy all types at the same time.
It’s like merging multiple types together.

```ts
type Person = { name: string };
type Employee = { employeeId: number };

type Staff = Person & Employee;

const staffMember: Staff = {
  name: "Vinit",
  employeeId: 101
}; // ✅ must have both
```

- So Staff must have both name and employeeId.

## Combining Union + Intersection

- They can be combined for more flexibility.

```ts
type Admin = { role: "admin"; permissions: string[] };
type User = { role: "user"; email: string };

type SuperUser = Admin & User;   // Must have both admin + user fields
type PersonOrAdmin = Person | Admin; // Either a Person OR an Admin


//Example:

const superUser: SuperUser = {
  role: "admin",
  permissions: ["read", "write"],
  email: "vinit@vk.com"
}; // ✅ must satisfy both Admin + User
```
## When to use

- Union (|) → when something can be one of many types (like string | number).

- Intersection (&) → when something should be a combination of multiple types (like merging traits).

👉 Quick analogy:

- Union = "this OR that"

- Intersection = "this AND that"


--- 