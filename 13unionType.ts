//union type
//not pretty sure what type of data will come... better than ANY

let score: number | string = 33; //it might be number or string (use it wisely be strict)

score = 44;
score = "55"; //no problem at all

type User = {
  name: String;
  id: number;
};

type Admin = {
  username: String;
  id: number;
};

let vinit: User | Admin = {
  name: "vinit",
  id: 23432,
};

vinit = { username: "vk", id: 23432 };

//really helpful for function ...which can return or get multiple value 

function getDbId(id: number | string){
    //making some api calls
    console.log(`DB id is: ${id}`);
}
getDbId(3)
getDbId("3")

/*
function getDb(id: number | string){
    id.toLowerCase(); this is giving red swiggly line under .toLowerCase cause id can end up to either number or string
    so we have to be very strict here
    smart ts knows 
}
*/

function getDb(id:number | string){
    if(typeof id === "string"){
        id.toLowerCase();              //here we are 100% sure that if line 44 executes then id is string
    }
}


//array

const data : number[] = [1,2,3]
const data2 : string[] = ["1","2","3"]
//const data3 : string[] | number[] = [1,2"3"] this is still not allowed no mix match
const data3 : (string | number)[] = [1,2,"3"] 

//allow number to be very strict  literal assignment
let pi:3.14  = 3.14;


let seatAllotment : "aisle" | "middle" | "window"

seatAllotment = "aisle"
// seatAllotment = "crew" swiggly

export {};
