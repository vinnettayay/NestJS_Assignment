let nama: string = "Fanyeaa";
let age: number = 16;
let isActive: boolean = true;

console.log(nama, age, isActive);

function login(username : string, password : string) : boolean
{
    return username == "admin" && password === "admin";
}

console.log(login("admin", "admin"));

interface User
{
    id : number;
    nama : string;
    role : string;
}
const user : User = 
{
    id : 1,
    nama : "Netta",
    role : "Programmer",
};
console.log(user)

interface Buku
{
    id : number;
    title : string;
    writer? : string;
}
const buku1 : Buku = 
{
    id : 1,
    title : "How to do Backend"
};
console.log(buku1);