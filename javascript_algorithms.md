# Lesson 4 – Algorithms Assignment

## Overview

This assignment focuses on:
- Functions
- Loops
- Arrays
- Algorithms
- Reusable logic
- Conditionals
- Callbacks

---

# Question 1 – convertTemp

### Goal
Convert Celsius temperatures to Fahrenheit.

### Skills Used
- Functions
- Parameters
- Return values
- Arithmetic

### Formula

```javascript id="10f88q"
(celsius * 9 / 5) + 32
```

---

# Question 2 – reverseString

### Goal
Reverse a string using a for loop.

### Skills Used
- Loops
- String manipulation
- Building strings

### Key Idea
Start from the end of the string and move backwards.

---

# Question 3 – tipCalculator

### Goal
Calculate a bill total after adding tip.

### Skills Used
- Multiplication
- Percentages
- Return values

### Formula

```javascript id="h0q17r"
billTotal + (billTotal * tipPercentage)
```

---

# Question 4 – multiplyThese

### Goal
Multiply two numbers together.

### Skills Used
- Parameters
- Multiplication
- Returning values

---

# Question 5 – getAverage

### Goal
Return the average of two numbers.

### Skills Used
- Addition
- Division
- Floating point numbers

### Formula

```javascript id="0snrhy"
(a + b) / 2.0
```

---

# Question 6 – isPrime

### Goal
Determine if a number is prime.

### Skills Used
- Loops
- Conditionals
- Modulus operator
- Algorithmic thinking

### Important Notes
- 0 and 1 are NOT prime
- Prime numbers only divide evenly by:
  - 1
  - themselves

### Key Logic

```javascript id="df2slw"
number % i === 0
```

This checks if a number divides evenly.

---

# Question 7 – getPrimesUpTo

### Goal
Return all prime numbers up to a given number.

### Skills Used
- Arrays
- Loops
- Reusable functions
- push()

### Important Concept
This question reuses the `isPrime()` function.

This is an example of modular programming.

---

# Question 8 – calculateAverage

### Goal
Calculate the average of valid scores in an array.

### Skills Used
- Arrays
- Loops
- Validation
- Preventing errors

### Important Notes
Ignore:
- numbers below 0
- numbers above 100

Also avoid dividing by zero.

---

# Question 9 – getLetterGrade

### Goal
Convert numerical averages into letter grades.

### Grade Scale

| Grade | Range |
|---|---|
| A | 90–100 |
| B | 80–89 |
| C | 70–79 |
| D | 60–69 |
| F | Below 60 |

### Skills Used
- Conditionals
- Range checking

---

# Question 10 – passed

### Goal
Return true if the student passed.

### Passing Grades
- A
- B
- C

### Skills Used
- Boolean logic
- Conditionals

---

# Question 11 – printClassResult

### Goal
Combine all grade functions into one final result.

### Skills Used
- Function orchestration
- Reusable systems
- String formatting

### Example Output

```text id="5tbkj5"
History 101 - Student: Jane Doe, Average: 75.5, Grade: C, Passed: yes
```

---

# Question 12 – buttonPushed

### Goal
Simulate a button being pushed.

### Skills Used
- Functions
- Console logging

### Output

```text id="6m4t1c"
The button was pushed!
```

---

# Question 13 – simulateButtonPush

### Goal
Pass a function into another function using callbacks.

### Important Concept

These are DIFFERENT:

```javascript id="m58gw0"
buttonPushed
```

vs

```javascript id="9vfj0q"
buttonPushed()
```

- `buttonPushed`
  = reference to the function

- `buttonPushed()`
  = runs the function

This is one of the most important concepts in JavaScript callbacks.

---

# Main Takeaways

This lesson helped practice:
- Writing reusable functions
- Breaking problems into steps
- Using loops and conditionals
- Working with arrays
- Combining multiple functions together
- Understanding callbacks

This assignment felt much closer to real programming because it required:
- logical thinking
- organization
- debugging
- modular code structure
- algorithmic problem solving
