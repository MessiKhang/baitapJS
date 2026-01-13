function isPrime(n) {
    if (n <= 1) return false;

    for (let i = 2; i <= n ** 0.5; i++) {
        if (n % i === 0) {
            console.log(n + " not a prime number");
            return false;
        }
    }
    console.log(n + " is a prime number");

    return true;
}
console.log(isPrime(2));
console.log(isPrime(7));
console.log(isPrime(9));
console.log(isPrime(1));

// Test 2=============================================================
function isPerfectNumber(n) {
    if (n <= 1) return false;

    let sum = 0;

    for (let i = 1; i <= n / 2; i++) {
        if (n % i === 0) {
            sum += i;
        }
    }

    return sum === n;
}
console.log(isPerfectNumber(6));
console.log(isPerfectNumber(28));
console.log(isPerfectNumber(12));
