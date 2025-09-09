const score: Array<number> = [];
const names: Array<number> = [];

//surely how many OR are we going to use
function spider(val:boolean | number) : boolean | number{
    return val;
}

function batman(val:any):any {
    return val;
}

//whatever we will pass its type will be locked
//generic function ironman<Type>
  
function ironman<Type>(val:Type):Type{
    return val;
}
//ironman(true)  now its return type is boolean cause true is infered as boolean

//another syntax
function wonder<T>(val:T):T{
    return val;
}

interface Bootle{
    brand: string,
    type: number
}

function wanda<T extends Bootle>(val:T):T{
    console.log(`Bootle brand is ${val.brand} and type is ${val.type}`);
    return val;
}


function getSearchProducts<T>(products: T[]): T | undefined{
    //do some database operations
    const myIndex = 3
    return products[myIndex];
}

//incase index 3 is empty then it cannot give string product at that index, in such case it would return undefined
// so add undefined for return red swiggly

// <T,> not and ordinary tag like html or jsx tag
const getProductId = <T,>(product: T[]): T | undefined => {
    const myIndex = 3;
    return product[myIndex];
}


interface Database {
    connection: string,
    username: string,
    password: string
}

//all though u are definig generic but u are still restricting it => it should be a type of database

/* 
T → can be anything.
U → must be a subtype of Database (so it must at least have connection, username, and password
*/

function anotherFunction<T,U extends Database>(valOne:T,valTwo:U):object {
    return{
        valOne,
        valTwo
    }
}


// anotherFunction(3,{})


// generic class
//in this class t is generic 
class Sellabe<T>{
    public cart: T[] = []

    addToCart(product: T){
        this.cart.push(product)
    }
}


const numberCart = new Sellabe<number>();
numberCart.addToCart(10);
numberCart.addToCart(20);


const stringCart = new Sellabe<string>();
stringCart.addToCart("iphone");
stringCart.addToCart("shoes")

interface Product {
    name: string;
    price : number;
}

const productCart = new Sellabe<Product>();
productCart.addToCart({name:"Laptop", price:1000});
productCart.addToCart({name:"Headphone", price:2000})
// productCart.addToCart("rafdfa") swiggly