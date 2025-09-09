
abstract class TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string
    ){}

    abstract getSepia():void

    getReelTime(): number{
        //some complex calucution
        return 8
    }
}

//const vinit = new TakePhoto("test","Test") you cannot directly create a object from TakePhoto abstract class (abstract class 
// properties and functions are just for implementation ..u have to implement it)
// in contrast to interface.. abstract class can also have a defined function

class Instagram extends TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){
        super(cameraMode,filter)
    }

    getSepia(): void {
        console.log("Sepia");
    }
}

const vin = new Instagram("test","Test",3) // but u can crete a object from a class which extends that abstract class
vin.getReelTime()