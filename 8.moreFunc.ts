/* 
function getValue(myVal: number): boolean{
    if(myVal > 5){
        return true;
    }
    return "200 OK"
}

problemetic in cases with two different return types

*/

const getHello = (s: string): string => {
  return ""
}


const heros = ["thor","spidy","ironman"]
//const heros = [1,2,3,4]  either way hero infer the type

//but this is better when writing code with the team!
heros.map((hero): string => {
    return `hero is ${hero}`
})

function consoleError(errmsg: string): never{
    throw new Error(errmsg)
}





export {}