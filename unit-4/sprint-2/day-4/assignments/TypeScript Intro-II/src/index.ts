let myName: string;
myName = "kartik";

let age: number;
age = 26;

let isFethcing: boolean;
isFethcing = true;

let numbers: number[];
numbers= [1, 2, 3];

let strings: string[];
strings = ['a', 'b', 'c'];

let tuple: [string, boolean];
tuple = ["kartik", true];

const enum Users{
    User,
    SuperUser,
    Admin,
    SuperAdmin
}

let user = Users.User;

function product(x: number, y: number): number{
    return x*y;
};

product(2, 3);

function divide(x: number, y: number): number{
    return x/y;
};

divide(4, 2);

function User(name: string) : void {
    console.log(name)
}