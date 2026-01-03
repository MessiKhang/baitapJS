// Task 1
const classA = ["An", "Binh", "Chi"];
const classB = classA;
classB[0] = "An Updated";
console.log(classB);
console.log(classA);

// Task 2
let x = "10";
let y = 2;
console.log(x + y); // Result 1
console.log(x - y); // Result 2
console.log(x * "3"); // Result 3
console.log("Hello" - y); // Result 4
// kết quả 1 là khi phép cộng js sẽ ưu tiên số nếu chuỗi thì sẽ nối nhau
// "10" + "2" = "102"

//  kết quả 2 thì phép trừ luôn luôn chuỗi đó phải là number
// 10 -2 = 8

// kết quả là 30 cả 2 sẽ bị ép thành số để tính toán nếu đó không phải là phép tính +

// kết quả là NaN vì chuỗi "Hello" không phải là kiểu số
// Task 3
let age = 9;
let mathScore = 10;
let isVIP = false;

let canEnter = (age >= 10 && mathScore > 7) || isVIP;

const laptop = {
    brand: "Dell",
    price: 1000,
    spec: { ram: "8GB", ssd: "256GB" },
};
const myLaptop = laptop;
myLaptop.brand = "Apple";
const mySpec = laptop.spec;
mySpec.ram = "16GB";
console.log(laptop.brand);
console.log(laptop.spec.ram);
// myLaptop = laptop
// → myLaptop và laptop cùng trỏ tới một object trong bộ nhớ.
// → Khi thay đổi myLaptop.brand, giá trị laptop.brand cũng bị thay đổi.
//
// mySpec = laptop.spec
// → mySpec và laptop.spec cùng trỏ tới object spec lồng bên trong.
// → Khi thay đổi mySpec.ram, giá trị laptop.spec.ram cũng thay đổi theo.
//
// 👉 Vì object trong JavaScript được gán theo địa chỉ bộ nhớ (reference), không phải bản sao,
// nên mọi thay đổi thông qua biến khác đều ảnh hưởng đến object gốc.
