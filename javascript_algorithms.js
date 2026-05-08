//----------------------------------
// LESSON 4 ALGORITHMS
//----------------------------------

// ---------- QUESTION 1 ----------
// Convert Celsius to Fahrenheit

function convertTemp(celsius) {
    return (celsius * 9 / 5) + 32;
}

// Test cases
console.log("Q1 convertTemp: ", 0, convertTemp(0));
console.log("Q1 convertTemp: ", 25, convertTemp(25));
console.log("Q1 convertTemp: ", 100, convertTemp(100));


// ---------- QUESTION 2 ----------
// Reverse a string using a for loop

function reverseString(str) {
    let reversed = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    return reversed;
}

// Test cases
console.log("Q2 reverseString: ", "HelloWorld", reverseString("HelloWorld"));
console.log("Q2 reverseString: ", "JavaScript", reverseString("JavaScript"));
console.log("Q2 reverseString: ", "", reverseString(""));


// ---------- QUESTION 3 ----------
// Tip calculator

function tipCalculator(billTotal, tipPercentage) {
    const tipAmount = billTotal * tipPercentage;
    return billTotal + tipAmount;
}

// Test cases
console.log("Q3 tipCalculator: ", 50, 0.2, tipCalculator(50, 0.2));
console.log("Q3 tipCalculator: ", 100, 0.15, tipCalculator(100, 0.15));
console.log("Q3 tipCalculator: ", 20, 0.25, tipCalculator(20, 0.25));


// ---------- QUESTION 4 ----------
// Multiply two numbers

let num1 = 10;
let num2 = 10;

function multiplyThese(a, b) {
    return a * b;
}

// Test case
console.log("Q4 multiplyThese: ", num1, num2, multiplyThese(num1, num2));


// ---------- QUESTION 5 ----------
// Get average of two numbers

function getAverage(a, b) {
    return (a + b) / 2.0;
}

// Test cases
console.log("Q5 getAverage: ", 3, 6, getAverage(3.0, 6.0));
console.log("Q5 getAverage: ", 10, 20, getAverage(10.0, 20.0));
console.log("Q5 getAverage: ", 7, 9, getAverage(7.0, 9.0));


// ---------- QUESTION 6 ----------
// Determine if a number is prime

function isPrime(number) {

    if (number <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {

        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

// Test cases
console.log("Q6 isPrime: ", 12, isPrime(12));
console.log("Q6 isPrime: ", 13, isPrime(13));
console.log("Q6 isPrime: ", 1, isPrime(1));
console.log("Q6 isPrime: ", 0, isPrime(0));
console.log("Q6 isPrime: ", 17, isPrime(17));


// ---------- QUESTION 7 ----------
// Return all prime numbers up to a given number

function getPrimesUpTo(limit) {

    let primes = [];

    for (let i = 2; i <= limit; i++) {

        if (isPrime(i)) {
            primes.push(i);
        }
    }

    return primes;
}

// Test cases
console.log("Q7 getPrimesUpTo: ", 13, getPrimesUpTo(13));
console.log("Q7 getPrimesUpTo: ", 20, getPrimesUpTo(20));
console.log("Q7 getPrimesUpTo: ", 5, getPrimesUpTo(5));


// ---------- QUESTION 8 ----------
// Calculate average score

function calculateAverage(scores) {

    let total = 0;
    let count = 0;

    for (let i = 0; i < scores.length; i++) {

        if (scores[i] >= 0 && scores[i] <= 100) {
            total += scores[i];
            count++;
        }
    }

    if (count === 0) {
        return 0;
    }

    return total / count;
}

// Test cases
let scores1 = [90, 80, 85];
let scores2 = [100, 95, 88, -5, 120];
let scores3 = [];

console.log("Q8 calculateAverage: ", calculateAverage(scores1));
console.log("Q8 calculateAverage: ", calculateAverage(scores2));
console.log("Q8 calculateAverage: ", calculateAverage(scores3));


// ---------- QUESTION 9 ----------
// Convert numerical average to letter grade

function getLetterGrade(average) {

    if (average >= 90 && average <= 100) {
        return "A";
    } else if (average >= 80) {
        return "B";
    } else if (average >= 70) {
        return "C";
    } else if (average >= 60) {
        return "D";
    } else {
        return "F";
    }
}

// Test cases
console.log("Q9 getLetterGrade: ", getLetterGrade(95));
console.log("Q9 getLetterGrade: ", getLetterGrade(84));
console.log("Q9 getLetterGrade: ", getLetterGrade(72));
console.log("Q9 getLetterGrade: ", getLetterGrade(58));


// ---------- QUESTION 10 ----------
// Return true if student passed

function passed(letterGrade) {

    if (
        letterGrade === "A" ||
        letterGrade === "B" ||
        letterGrade === "C"
    ) {
        return true;
    }

    return false;
}

// Test cases
console.log("Q10 passed('A'): ", passed('A'));
console.log("Q10 passed('B'): ", passed('B'));
console.log("Q10 passed('D'): ", passed('D'));
console.log("Q10 passed('F'): ", passed('F'));
console.log("Q10 passed('Z'): ", passed('Z'));


// ---------- QUESTION 11 ----------
// Print full class result

function printClassResult(className, student, scores) {

    const average = calculateAverage(scores);
    const grade = getLetterGrade(average);
    const didPass = passed(grade) ? "yes" : "no";

    return `${className} - Student: ${student}, Average: ${average}, Grade: ${grade}, Passed: ${didPass}`;
}

// Test cases
console.log(
    "Q11: ",
    printClassResult(
        "History 101",
        "Jane Doe",
        [60, 70, 85, 87]
    )
);

console.log(
    "Q11: ",
    printClassResult(
        "Math 201",
        "John Smith",
        [90, 92, 88, 95]
    )
);

console.log(
    "Q11: ",
    printClassResult(
        "Science 101",
        "Alex Brown",
        [50, 55, 58]
    )
);


// ---------- QUESTION 12 ----------
// Simulate button push

function buttonPushed() {
    console.log("Q12, Q13: The button was pushed!");
}

// Test call
buttonPushed();


// ---------- QUESTION 13 ----------
// Callback function example

function simulateButtonPush(callback) {
    callback();
}

// Test call
simulateButtonPush(buttonPushed);
