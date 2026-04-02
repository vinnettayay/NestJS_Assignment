//TUGAS 1 : INTERFACE SISWA
var student1 = {
    id: 7,
    studentName: "VinnettaYay",
    studentClass: "11-A",
    birthYear: 2009
};
console.log(student1);
//TUGAS 2 : FUNCTION HITUNG UMUR
function AgeCount(birthYear) {
    return 2026 - birthYear;
}
console.log(student1.studentName, AgeCount(student1.birthYear), student1.studentClass);
