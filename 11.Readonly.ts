//Readonly and optional

//defining a type
type User = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
    readonly heroes: string[]
    cardDetails?: number
}

let myUser: User = {
    _id : "132",
    name:"vinit kumar",
    email:"vinit@hotmail.com",
    isActive: false,
    heroes: ["iron","spidy"]
}

myUser.email = "v@v.com";
// myUser._id = "1323123" swiggly (cause it was readonly)
//myUser.heroes = ["hi","hello"]   swiggly cannot assign as it is readonly value


type cardNumber = {
    cardNumber: string
}

type cardDate = {
    cardDate: string
}

//this must follow cardNumber cardDate and {cvv:number}
type cardDetails = cardNumber & cardDate & {
    cvv : number
}


export {}