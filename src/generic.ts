const score:Array<number>=[]
const names:Array<string>=[]
function identityone(val:boolean|number):boolean|number{
    return val
}
function identitytwo(val:any):any{
    return val

}
function identitythree<Type>(val:Type):Type{
    return val
}
function identityfour<T>(val:T):T{
    return val
}
//user types  types we created
interface bootle{
    brand:string,
    type:number
}
//  identityfour<bootle>({})
function getsearchproducts<T,>(products:T[]):T{
    //do some database operations
    const myindex=3
    return products[myindex]
}
const getmoresearchproducts=<T,>(products:T[]):T =>{
    const myindex=4
    return products[myindex]
}

interface datbase{
    connection:string,
    username:string,
    password:string
}
function anotherfunction<T,U extends number>(valone:T,valtwo:U):object{
    return{
        valone,
        valtwo
    }
}
//anotherfunction(3,{})
interface quiz{
    name:string,
    type:string
}
interface course{
    name:string,
    author:string,
    subject:string
}
class sellable<T>{
    public cart:T[]=[]
    addtocart(product:T){
        this.cart.push(product)
    }
}