# 🔹 extends vs implements in TypeScript
## extends → Type Inheritance (for types, interfaces, classes, generics)

Means: "this type/class builds on top of another type/class".

It’s about structure (copying + adding).

Example with interfaces:
```ts
interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

// Dog now has: { name: string, breed: string }
const d: Dog = { name: "Tommy", breed: "Labrador" };


//Example with classes:

class Animal {
  eat() { console.log("eating"); }
}

class Dog extends Animal {
  bark() { console.log("barking"); }
}

const d = new Dog();
d.eat();  // from Animal
d.bark(); // from Dog
```

👉 Here Dog inherits behavior and properties from Animal.

## implements → Contract Enforcement (for classes only)

- Means: "this class must satisfy the shape defined by an interface/type".

- The class doesn’t inherit code, it just promises to implement all members.

Example:
```ts
interface Animal {
  name: string;
  makeSound(): void;
}

class Dog implements Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  makeSound() {
    console.log("Woof!");
  }
}
```

- 👉 Here, Dog must have name and makeSound() because it implements Animal.
Unlike extends, it doesn’t inherit actual logic — it’s just a check.

## Generics Case (extra power of extends)

- With generics, extends is used for constraints:
```ts
function printName<T extends { name: string }>(obj: T) {
  console.log(obj.name);
}

printName({ name: "Ironman", age: 45 }); // ✅ works
printName({ age: 45 }); // ❌ Error: name missing
```

- 👉 You can’t do this with implements — it’s only for classes.

✅ Rule of Thumb:

- Use extends when you want to reuse structure/logic or restrict a generic type.

- Use implements when you want a class to follow a contract (but still provide its own logic).