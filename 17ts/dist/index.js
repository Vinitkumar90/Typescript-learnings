/*
class User {
    public email:string
    name:string
    city: string = ""
    private readonly country: string = "India"

    constructor(email:string, name:string){
        this.email = email;
        this.name = name;
    }
}

const vinit = new User("v@vk.com", "vinit")

// vinit.city  = 123 work directly in js in ts can be changed to a string only
// vinit.country  cant access marked as private (public and private modifier...everything u dont mark is public )

*/
class User {
    email;
    name;
    city = "ranchi"; //JS does not enforce readonly — it’s only checked at compile time by TypeScript.
    constructor(email, name) {
        this.email = email;
        this.name = name;
    }
}
const vinit = new User("v@v.com", "vinit");
console.log(vinit);
export {};
//TypeScript prevents access to userId outside the class at compile time.
//But in compiled JS, all properties are public — there’s no real privacy unless you use special JS features.
/*
Real private in modern JavaScript
ES2020 introduced true private fields using #:

class User {
  #userId: string;
  constructor(id: string) {
    this.#userId = id;
  }
}

const u = new User("123");
console.log(u.#userId); // ❌ JS error: private field


Variables starting with # are actually private at runtime.
TypeScript supports this syntax too.
 */ 
//# sourceMappingURL=index.js.map