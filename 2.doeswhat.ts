//what typescript does : static checking ✅ as we try to write it 
//eg: so adding two number but one is string so it will give a swiggly line -> without even running the code and getting the potential errors during the runtime

// lol sometimes 50 lines of ts converts to 10 - 20 lines of js

// ts code -> converted -> js code
// ts is a development tool -> production still has the js code

// let user = {
//     name:"vinit",
//     age:21
// }

// console.log(user.email)  <- this gives a red swiggly -> still it will produce the js code

//npm install -g typescript -> global sysytem install  -> converts(ts->js) tsc filename
//npm install --save-dev typescript -> installs the package for that project  npx tsc

//tsc → whatever global TypeScript version is installed (if any).
//npx tsc → always uses your project’s local TypeScript version (preferred for projects).