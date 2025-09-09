//tuples
//tuples are a type of array of known length adn where the differnt elements may have different types
//specific things to push in your array

// const user : (string | number) [] = [1,"vk"]
//even order matters here in tuples
let tuser: [string,number,boolean]

tuser = ["vinit",12,true]

// let rgb: [number, number, number] = [255, 123, 112,0] swiggly

let rgb: [number, number, number] = [255, 123, 112]

type User = [number,string] //anyone having type user needs to follow this tuple

const newUser: User = [112, "example@hotmail.com" ]
newUser[1] = "vinit.site"
// newUser.push(true); now it is not allowed 


export{}