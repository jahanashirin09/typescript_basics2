//implementing roles through interfaces
interface takephoto{
    cameramode:string
    filter:string
    burst:number
}
interface story{
    cratestory():void
}
class instagram implements takephoto{
    constructor(
        public cameramode:string,
        public filter:string,
        public burst:number
    ){

    }
}
class youtube implements takephoto{
    constructor(
        public cameramode:string,
        public filter:string,
        public burst:number,
        public short:string
    ){

    }
    createstrory():void{
        console.log("story was created")
    }
}