"use strict";
/*

function addTwo(num){
    return num+2;
}

addTwo(5)

*/
Object.defineProperty(exports, "__esModule", { value: true });
//so typeInference is not good for functions like simple variable ...hower over addTwo it has addTwo(num: any): any
// so before return num+2 we can easily to num.toUpperCase() which should not be allowed ❌
function addTwo(num) {
    return num + 2;
}
addTwo(5);
function getUpper(val) {
    return val.toUpperCase();
}
getUpper("vinit");
// getUpper(5) red swiggs
function signUpUser(name, email, isPaid) {
}
signUpUser("vint", "vinit@hotmail.com", false);

var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
loginUser("vinit", "v@k.com");
