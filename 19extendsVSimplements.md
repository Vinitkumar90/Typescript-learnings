# 🔹 extends

- Used with interfaces, types, and generics.

- It means "this type must follow/contain another type".

- Works for type relationships, not actual code.

Example:
```ts
interface Database {
  connection: string;
  username: string;
  password: string;
}

// Generic constraint using `extends`
function anotherFunction<T extends Database>(val: T) {
  console.log(val.connection);
}
```

- Here, any T must at least have the properties of Database.

# 🔹 implements

- Used only with classes.

- It means "this class must provide real implementations for all properties/methods defined in the interface/type".

Example:
```ts
interface Database {
  connection: string;
  username: string;
  password: string;
}

class MySQLDatabase implements Database {
  connection: string = "mysql://localhost";
  username: string = "root";
  password: string = "1234";
}
```

- Here, MySQLDatabase implements Database by giving actual values.

✅ So in your example:
```ts
function anotherFunction<T, U extends Database>(valOne:T,valTwo:U):object {
    return{
        valOne,
        valTwo
    }
}
```

- U extends Database is correct → it restricts U to follow the Database structure.

- You cannot use implements here because you’re not writing a class, you’re just restricting a generic type.

👉 Rule of thumb:

- Use extends when you’re talking about type relationships (interfaces, types, generics).

- Use implements only when a class promises to fulfill an interface/type.