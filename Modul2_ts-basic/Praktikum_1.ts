//TUGAS 1 : INTERFACE SISWA

interface Student
{
    id : number;
    studentName : string;
    studentClass : string;
    birthYear : number;
}
const student1 : Student =
{
    id : 7,
    studentName : "VinnettaYay",
    studentClass : "11-A",
    birthYear : 2009

}
console.log(student1);

//TUGAS 2 : FUNCTION HITUNG UMUR

function AgeCount(birthYear : number) : number
{
    return 2026 - birthYear;
}

console.log(student1.studentName, AgeCount(student1.birthYear), student1.studentClass);


//QnA
// 1. JS vs TS : JS Dynamic Code & for browser, TS lebih teliti;
// 2. Bagian paling membantu TS : codingannya(mirip js, namun bisa dibilang bukan yang se-websiters seperti html css);
// 3. Bagian yg bingung : funfact? perbanyak latihan;