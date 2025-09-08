
// let hero:boolean; red swiggly
let hero;
//what will it turn out -> infer -> so it put it as any(dont wana do the typechecking for it)  just do let hero: string and 
//now if u return true ...will have red swiggly for hero assigned to function call

function getHero(){
    //return true
    return "thor"
}

hero = getHero();