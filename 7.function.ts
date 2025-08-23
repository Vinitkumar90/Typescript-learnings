
/*

function addTwo(num){
    return num+2;
}

addTwo(5)

*/

//so typeInference is not good for functions like simple variable ...hower over addTwo it has addTwo(num: any): any
// so before return num+2 we can easily to num.toUpperCase() which should not be allowed ❌

function addTwo(num: number){
    // return num+2;
    return "hello"  //still this is allowed ..need more accuracy
}
addTwo(5)

function getUpper(val:string){
    return val.toUpperCase();
}
getUpper("vinit");
// getUpper(5) red swiggs


function signUpUser(name:string, email:string, isPaid:boolean){

}
signUpUser("vint","vinit@hotmail.com",false)

let loginUser = (name:string,email:string,isPaid:boolean = false) => {

}
loginUser("vinit","v@k.com")

export {}