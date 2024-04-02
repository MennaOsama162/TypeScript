//Q1
let arr:number[];
arr=[1,2,3]



//Q2
let arr2:(number|string)[]
arr2=[1,2,"menna"]
arr2.forEach(element => {
    console.log(element);
});



//Q3
let x:number|boolean
x=3
x=true


//Q4
function call(a?:number,b?:number):void{

}
call()


//Q5
interface IEmployee {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
}

class Employee implements IEmployee {
    id: number;
    name: string;
    private _username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };

    constructor(data: IEmployee) {
        this.id = data.id;
        this.name = data.name;
        this._username = data.username;
        this.email = data.email;
        this.address = data.address;
    }

    get username(): string {
        return this._username;
    }
    updateUsername(newUsername: string): void {
        this._username = newUsername;
    }
}
const employeeData: IEmployee = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: { lat: "-37.3159", lng: "81.1496" },
    },
};

const employee = new Employee(employeeData);




//Q6
class manager extends Employee{
   display():void {
        console.log(this.address);
    }
}


//Q7
class Account 
{
    AccNo:Number
    Balance:number

    constructor(AN:number ,B:number){
        this.AccNo=AN;
        this.Balance=B;
   

    }
    DebitAccount(){
        console.log("Hi From DebitAccount")
    }

    CreditAccount(){
        console.log("Hi From CreditAccount")

    }

    GetBalance(){
        console.log("Hi From GetBalance")

    }
}


interface IAccount {
    DateOfOPening:Date
    addCustomer()
    RemoveCustomer()
}


class CurrentAccount extends Account implements IAccount{
  
    InterestRate:number 
    DateOfOPening:Date
    constructor(IR:number ,AN:number ,B:number){
        super(AN,B);
        this.InterestRate=IR;
        
    }
    DebitAccount():void{
        console.log("Hi From DebitAccount")
    }
    addCustomer():void{
        console.log("Hi From addCustomer")

    }
    RemoveCustomer():void{
        console.log("Hi From RemoveCustomer")

    }


}

class SavingAccount extends Account implements IAccount{
  
    MInBalance:number 
    DateOfOPening:Date
    constructor(IR:number ,AN:number ,B:number){
        super(AN,B);
        this.MInBalance=IR;
        
    }
    DebitAccount():void{
        console.log("Hi From DebitAccount")
    }
    addCustomer():void{
        console.log("Hi From addCustomer")

    }
    RemoveCustomer():void{
        console.log("Hi From RemoveCustomer")

    }


}