// 1. Khởi tạo 3 biến:
let name = "Trần Chí Khang";
let age = 21;
let isStudent = true;

console.log("Name: " + name);
console.log("Age: " + age);
console.log("Is student: " + isStudent);

let a = 5;
let b = 10;

a = 15;
b = 20;

console.log(a);
console.log(b);

//  Phần 2: const / let / var
// const khác let ở điểm nào?
// let có thể gán giá trị thay đổi
//  const không thể gán giá trị khác
// Khi nào nên dùng const?
const x = 10;
x = 20;
//  sai vì const đang gán x không thay đổi x = 10 thì không thể gán lại x = 
//  bài 3
100                 // number
"100"               // string
true                // boolean
[1, 2, 3]           // array (object)
{ name: "An", age: 20 } // object
null                // null (object)
undefined           // undefined

const student = {
    name: "An",
    age: 20,
    scores: [8, 7, 9]
};

console.log(student);

//  b4
let c = Number("1000");
console.log(c, typeof c); 

let d = String(1000);
console.log(d, typeof d);

let e = String(true);
console.log(e, typeof e);
// b5
Boolean(0)        // false
Boolean(1)        // true
Boolean("")       // false
Boolean("hello")  // true
Boolean(null)     // false
Boolean([])       // true
// b6
const numbers = [4, 3, 1, 5, 1];

console.log(numbers[0]);                  // Phần tử đầu tiên → 4
console.log(numbers[numbers.length - 1]); // Phần tử cuối cùng → 1
// Array là kiểu object
// Biến không lưu dữ liệu, mà lưu địa chỉ vùng nhớ
// numbers giữ địa chỉ RAM của mảng
// Khi gán a = numbers:
// a copy địa chỉ
// KHÔNG tạo mảng mớ