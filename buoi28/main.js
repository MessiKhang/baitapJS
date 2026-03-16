// Task 1
const partTime = {
    id: 2,
    name: "Binh",
    salary: 20,
    hoursWorked: 40,
};
const newPartTime = {
    ...partTime,
    hoursWorked: 45,
};
console.log(newPartTime);
// Task 2
// =======2.1
class FullTimeEmployee {
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    getSalary() {
        return this.salary;
    }
}
new FullTimeEmployee(1, "Khang", 1000);
// ========2.2
class PartTimeEmpLoyee {
    constructor(id, name, salary, hoursWorked) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.hoursWorked = hoursWorked;
    }
    getSalary() {
        return this.salary * this.hoursWorked;
    }
}
// =======2.3
function calculateTotalSalary(employees) {
    let total = 0;
    for (const emp of employees) {
        total += emp.getSalary();
    }
    return;
}
//=======2.4
const emp1 = new FullTimeEmployee(1, "khang", 1000);
const emp2 = new PartTimeEmpLoyee(2, "chi", 2000);
const employees = [emp1, emp2];
const TotalSalary = calculateTotalSalary(employees);
console.log("Total Salary", TotalSalary);

const employeesNew = [
    new FullTimeEmployee(1, "An", 1000),
    new PartTimeEmployee(2, "Binh", 20, 40),
    new PartTimeEmployee(3, "Cuong", 15, 30),
];
const emp = employees.find((e) => e.id === 2);
// let emp = null
// for (let i= 0; i<employees.length;i++)
//      if(employees[i].id ===2){
//       emp = employees[i]
//         break
// }

// for(const e of employees){
//      if(e.id === 2){
//      emp = e
// }
// }

// let emp = null
// let i = 0
// while (i < employees.length){
//  if(employees[i].id === 2){
// emp = employees[i]
// break
// }
// i++
// }

const result = employees.filter((e) => e.getSalary() > 800);
const salaries = employees.map((e) => e.getSalary);
console.log(emp);
console.log(result);
console.log(salaries);
