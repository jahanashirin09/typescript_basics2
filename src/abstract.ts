abstract class takephoto{
    constructor(
        public cameramode:string,
        public filter:string
    ){}
    abstract getsapia():void
    getreeltime():number{
        return 8
    }
}
class instagrams extends takephoto{
    constructor(public cameramode:string,
        public filter:string,
        public burst:number
    ){
        super(cameramode,filter)
    }
    getsapia(): void {
        console.log("sapia")
    }
   

}
const hc=new instagrams("kvhbvsk","djygaduy",3)
hc.getreeltime()