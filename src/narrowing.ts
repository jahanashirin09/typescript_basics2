function detecttype(val:number|string){
    if(typeof val==="string"){
        return val.toLowerCase()
    }
    return val+3
}
function provideid(id:string|null){
    if(!id){
        console.log("please provide id");
        return
    }
    id.toLowerCase()
}
//another example

function printall(str:string|string[]|null){
    if(str){
        if(typeof str==="object"){
            for(const s of str){
                console.log(s);
            }
        }
        else if(typeof str==="string"){
            console.log(str)
        }
    }
}

interface user{
    name:string,
    email:string
}
interface admin{
    name:string,
    email:string,
    isadmin:boolean
}
function isadminaccount(account:user|admin){
    if("isadmin" in account){
        return account.isadmin
    }
}
//instance of

function logvalue(x:Date|string){
    if(x instanceof Date){
        console.log(x.toUTCString());

    }else{
        console.log(x.toUpperCase())
    }

}


//type predicate

type fish={swim:()=> void};
type bird={fly:()=>void};
function isfish(pet:fish|bird):pet is fish{
    return (pet as fish).swim!== undefined
}
function getfood(pet:fish|bird){
    if(isfish(pet)){
        pet
        return "fish food"
    }else{
        pet 
        return "bird food"
    }
}

//discrimated union


interface circle{
    kind:"circle",
    radius:number
}
interface sqaure{
    kind:"square"
    side:number
}
interface rectangle{
    kind:"rectangle"
    length:number,
    width:number
}
type shape=circle|sqaure|rectangle
function gettruesquare(shape:shape){
    if(shape.kind ==="circle"){
        return Math.PI * shape.radius**2
    }
    return shape.side*shape.side
}
function getarea(shape:shape){
    switch(shape.kind){
        case "circle":
            return Math.PI*shape.radius**2
        case "square":
            return shape.side*shape.side
        case "rectangle":
            return shape.length*shape.width
        default:
            const defaultshape:never=shape
            return defaultshape

    }
}