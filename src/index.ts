//for projects command tsc --init it will produce tsconfig.json
//then later npm init -y it will produce package.json
//mkdir src dist produce two directeries
//create index.ts file in src and index.js file in dist
//in tsconfig file un comment the outDir and mention the ouput directory
//tsc -w produce te file in watch mode to any changes in ts file will change in index.js file also.
console.log("typscript is here")
// class user{
//     email:string
//     name:string
//     city:string=""
//     constructor(email:string,name:string){
//         this.email=email;
//         this.name=name
//     }
// }
// const hitesh=new user("jhfh","sjhvuDGWY")
// hitesh.city="KFHBAE"

class user{
    readonly city:string="jaipur"
    constructor(
        public email:string,
        public name:string,
        private userid:string
    ){}
}
const hitesh=new user("hsvhv","fhvuyv","fegye")
//hitesh.name