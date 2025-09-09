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
    _courseCount = 1;
    city = "ranchi"; //JS does not enforce readonly — it’s only checked at compile time by TypeScript.
    constructor(email, name) {
        this.email = email;
        this.name = name;
    }
    deleteToken() {
        console.log("Token deleted");
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
const vinit = new User("v@v.com", "vinit");
console.log(vinit);
export {};
/*
Getter (get) → a method that retrieves a property value.
Setter (set) → a method that sets/updates a property value, optionally with validation.
 */
//we getter and setter we access pvt properties not directly
// vinit.courseCount
// vinit.courseCount = 4
// vinit.delete() not accessible
//# sourceMappingURL=index.js.map