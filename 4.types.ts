//types -> Number String Boolean Null Undefined Void Object Array Tuples Any Never Unknown ....

/*
By default, TypeScript is not a runtime enforcer, it’s only a static type checker.
It helps you during development (red squiggles).
But it will still generate JS so your code runs (even if incorrect).


You can enforce "noEmitOnError" in your tsconfig.json:
{
  "compilerOptions": {
    "noEmitOnError": true
  }
}
Now if there are type errors, no JS file will be generated.

*/



/*
    What TypeScript does

TypeScript is a static type checker.
It helps developers at compile-time by:
Catching type errors before running the code.
Making code more predictable and maintainable.
Giving better IntelliSense / autocomplete in editors.

Example:

function add(a: number, b: number): number {
  return a + b;
}

add(2, "3"); // ❌ Error at compile time

At runtime (in JavaScript), this check doesn’t exist — TypeScript has already compiled down to plain JS.
🔹 What TypeScript does NOT do
It doesn’t validate or sanitize data at runtime.
If a client sends you malicious or invalid JSON in an API request, TypeScript won’t stop it.
Example:

app.post("/user", (req, res) => {
  const user = req.body as { name: string, age: number };
  console.log(user.age + 1); 
});


If someone sends { "name": "Alice", "age": "hacked" },
TypeScript assumes it’s a number because you told it so — but at runtime it will fail.

🔹 What you need for APIs

For REST APIs, you need runtime validation & sanitization, because you cannot trust client input.
Common solutions:

Zod (very popular with TS):

import { z } from "zod";

const UserSchema = z.object({
  name: z.string(),
  age: z.number().min(0),
});

app.post("/user", (req, res) => {
  const result = UserSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json(result.error);
  }
  // Now result.data is type-safe AND validated
});


Joi, Yup, or even express-validator also work.

✅ So your statement is right:

TypeScript = helps devs write safe code during development.
Data sanitation/validation = separate layer at runtime.

*/