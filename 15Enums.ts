enum seatChoice {
    AISLE  = "aisle",  //enum member  (seatChoice.AISLE = aisle)
    MIDDLE = 22,
    WINDOW, //23
    FOURTH, //24
}
//only numbers are automatically calculated for ...string as a value ..u have to provide for next one

const hcSeat = seatChoice.AISLE

//when we do tsc 15Enum.ts we can see too much of js code created => use const


/**
const enum seatChoice {
    AISLE  = "aisle", 
    MIDDLE = 22,
    WINDOW, //23
    FOURTH, //24
}
const hcSeat = seatChoice.AISLE

when it produces js -> it will just have => const hcSeat = "aisle" /* SeatChoice.AISLE */


export {}