// test 1
function classifyScore(score) {
    if (score < 0 || score > 10) {
        console.log("Điểm không hợp lệ");
        return;
    }

    if (score >= 9) {
        console.log("Xuất sắc");
    } else if (score >= 8) {
        console.log("Rất tốt");
    } else if (score >= 6.5) {
        console.log("Khá");
    } else if (score >= 5) {
        console.log("Trung bình");
    } else {
        console.log("Yếu");
    }
}

classifyScore(8.5);
// test 2
function daysInMonth(month) {
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            console.log("31 ngày");
            break;

        case 4:
        case 6:
        case 9:
        case 11:
            console.log("30 ngày");
            break;

        case 2:
            console.log("28 ngày");
            break;

        default:
            console.log("Tháng không hợp lệ");
    }
}

daysInMonth(6);
daysInMonth(7);
daysInMonth(15);

// test 3
let n = 8;
let result = n % 2 === 0 ? "Chẵn" : "Lẻ";

console.log(result);

// Test 4
let age = 15;
let ticketPrice = age < 13 ? 100000 * 0.5 : 100000;

console.log(ticketPrice);

// Test 5
function celsiusToFahrenheit(celsius) {
    return celsius * 1.8 + 32;
}

console.log(celsiusToFahrenheit(25));
