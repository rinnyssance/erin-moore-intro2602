# Lesson 3 Objects — Notes & Breakdown

## Overview
This assignment focused on learning how to work with JavaScript objects.  
You practiced:

- Creating objects
- Accessing properties
- Updating values
- Looping through objects
- Adding methods
- Deleting properties
- Working with arrays of objects
- Constructor functions
- Comparing objects
- Using JavaScript Date objects

This lesson is important because objects are one of the most commonly used data structures in JavaScript and web development.

---

# Question 1 — Creating an Object

```javascript
let myPet = {
    name: "Teddy",
    species: "dog",
    color: "brown"
};
```

## What this does
This creates an object called `myPet`.

The object contains three properties:

| Property | Value |
|---|---|
| name | Teddy |
| species | dog |
| color | brown |

---

## Accessing Properties

```javascript
console.log(myPet.name);
```

The `.` notation accesses a property inside an object.

Example:

```javascript
myPet.name
```

means:

> “Go inside the object and get the value stored under `name`.”

---

# Question 2 — Updating an Object

```javascript
myPet.name = "Henry";
```

## What this does
This changes the `name` property from `"Teddy"` to `"Henry"`.

Before:

```javascript
name: "Teddy"
```

After:

```javascript
name: "Henry"
```

Objects in JavaScript are mutable, meaning their values can be changed after creation.

---

# Question 3 — Looping Through an Object

```javascript
for (let key in myPet) {
    console.log(key, myPet[key]);
}
```

## What this does
This loops through every property inside the object.

---

## Important Concept

### `key`
Represents the property name.

Examples:

```javascript
name
species
color
```

---

## Bracket Notation

```javascript
myPet[key]
```

This dynamically accesses the value.

Example:

If:

```javascript
key = "name"
```

then:

```javascript
myPet[key]
```

becomes:

```javascript
myPet["name"]
```

which returns:

```javascript
"Henry"
```

---

# Question 4 — Adding a Method

```javascript
myPet.describe = function () {
    return `${this.name} is a ${this.color} ${this.species}.`;
};
```

## What this does
Adds a function to the object.

Functions inside objects are called **methods**.

---

## The `this` Keyword

```javascript
this.name
```

means:

> “Use the current object’s `name` property.”

So if the object changes, the method still works correctly.

---

## Template Literals

```javascript
`${this.name}`
```

Uses backticks `` ` ``
to insert variables directly into a string.

---

# Question 5 — Deleting a Property

```javascript
delete myPet.color;
```

## What this does
Removes the `color` property from the object completely.

---

## Checking if a Property Exists

```javascript
myPet.hasOwnProperty("color")
```

Returns:

- `true` if the property exists
- `false` if it does not

---

# Question 6 — Arrays of Objects

```javascript
const pets = [
    { name: "WillBe", species: "bird", color: "gray" },
    { name: "Oshie", species: "cat", color: "multi" },
    { name: "Sunny", species: "dog", color: "black" }
];
```

## What this does
Creates an array containing multiple objects.

This is extremely common in real-world programming.

Examples:
- User lists
- Products
- Database records
- API data

---

## `forEach`

```javascript
petsArray.forEach(pet => {
    console.log(pet);
});
```

Loops through every object in the array.

---

# Question 7 — Constructor Functions

```javascript
function Dog(name, breed, age) {
    this.name = name;
    this.breed = breed;
    this.age = age;
}
```

## What this does
Creates a blueprint for making dog objects.

---

## Creating New Objects

```javascript
let dog1 = new Dog("Kroger", "greyhound", 8);
```

The `new` keyword creates a new object using the constructor.

---

## Why Constructor Functions Matter
This allows you to create many similar objects quickly.

Instead of:

```javascript
let dog1 = {...}
let dog2 = {...}
let dog3 = {...}
```

you can reuse the constructor.

---

# Question 8 — Comparing Objects

```javascript
function areObjectsEqual(obj1, obj2)
```

## What this does
Checks if two objects contain the same:
- keys
- values

---

## `Object.keys()`

```javascript
Object.keys(obj1)
```

Returns an array of all property names.

Example:

```javascript
["name", "breed", "age"]
```

---

## Length Check

```javascript
if (keys1.length !== keys2.length)
```

Checks if the objects have the same number of properties.

---

## Value Comparison

```javascript
if (obj1[key] !== obj2[key])
```

Checks whether values are identical.

---

# Question 9 — Creating a Date Object

```javascript
let currentDate = new Date();
```

## What this does
Creates a JavaScript Date object containing:
- current date
- current time

---

# Question 10 — Getting Date Information

```javascript
currentDate.getFullYear();
```

Gets the current year.

---

```javascript
currentDate.getMonth();
```

Gets the month.

⚠️ Important:
JavaScript months start at `0`.

| Number | Month |
|---|---|
| 0 | January |
| 1 | February |
| 11 | December |

---

```javascript
currentDate.getDate();
```

Gets the current day of the month.

---

# Key Concepts Learned

| Concept | Meaning |
|---|---|
| Object | Stores grouped data |
| Property | A value inside an object |
| Method | Function inside an object |
| Dot notation | Access object properties |
| Bracket notation | Dynamic property access |
| for...in loop | Loop through object properties |
| Array of objects | Multiple objects stored together |
| Constructor function | Blueprint for creating objects |
| `this` | Refers to the current object |
| Date object | Stores date/time information |

---

# What I Learned

Through this exercise, I practiced:
- Creating and modifying objects
- Looping through object properties
- Building reusable constructor functions
- Comparing object values
- Working with arrays of objects
- Understanding JavaScript date methods

This lesson helped strengthen my understanding of how JavaScript organizes and manages data using objects.
