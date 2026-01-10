// Test 1
function checkTriangle(a, b, c) {
    if (a + b <= c || a + c <= b || b + c <= a) {
        return "Không phải là tam giác";
    }
    if (a === b && b === c) {
        return "Tam giác đều";
    }

    let sides = [a, b, c].sort((x, y) => x - y);
    if (sides[2] ** 2 === sides[0] ** 2 + sides[1] ** 2) {
        return "Tam giác vuông";
    }

    if (a === b || a === c || b === c) {
        return "Tam giác cân";
    }

    return "Tam giác thường";
}
console.log(checkTriangle(3, 4, 5));
console.log(checkTriangle(2, 2, 2));
console.log(checkTriangle(2, 2, 3));
console.log(checkTriangle(2, 3, 4));

// Test 2
function isPerfectSquare(a) {
    if (a < 0) {
        return false;
    }

    let sqrt = Math.sqrt(a);
    return Number.isInteger(sqrt);
}
console.log(isPerfectSquare(4));
console.log(isPerfectSquare(9));
console.log(isPerfectSquare(16));
console.log(isPerfectSquare(8));
console.log(isPerfectSquare(-4));
