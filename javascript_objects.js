//----------------------------------
// LESSON 3 OBJECTS
//----------------------------------

// ---------- QUESTION 1 ----------
let myPet = {
    name: "Teddy",
    species: "dog",
    color: "brown"
};

console.log("Q1 object: ", myPet);
console.log("Q1 name: ", myPet.name);
console.log("Q1 species: ", myPet.species);
console.log("Q1 color: ", myPet.color);


// ---------- QUESTION 2 ----------
myPet.name = "Henry";

console.log("Q2 updated object: ", myPet);


// ---------- QUESTION 3 ----------
for (let key in myPet) {
    console.log("Q3: " + key + ":", myPet[key]);
}


// ---------- QUESTION 4 ----------
myPet.describe = function () {
    return `${this.name} is a ${this.color} ${this.species}.`;
};

console.log("Q4: ", myPet.describe());


// ---------- QUESTION 5 ----------
delete myPet.color;

console.log("Q5", "Color property deleted:", !myPet.hasOwnProperty("color"));


// ---------- QUESTION 6 ----------
const pets = [
    { name: "WillBe", species: "bird", color: "gray" },
    { name: "Oshie", species: "cat", color: "multi" },
    { name: "Sunny", species: "dog", color: "black" }
];

function printPets(petsArray) {
    petsArray.forEach(pet => {
        console.log(pet);
    });
}

console.log("Q6:");
printPets(pets);


// ---------- QUESTION 7 ----------
function Dog(name, breed, age) {
    this.name = name;
    this.breed = breed;
    this.age = age;
}

let dog1 = new Dog("Kroger", "greyhound", 8);
let dog2 = new Dog("Destiny", "shepherd", 14);

console.log("Q7:", dog1);
console.log("Q7:", dog2);


// ---------- QUESTION 8 ----------
function areObjectsEqual(obj1, obj2) {
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (let key of keys1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }

    return true;
}

let dog3 = { name: "Kroger", breed: "greyhound", age: 8 };
let dog4 = { name: "Kroger", breed: "greyhound", age: 8, color: "brown" };

console.log("Q8: Are objects equal - different values:", areObjectsEqual(dog1, dog2));
console.log("Q8: Are objects equal? - same key and values:", areObjectsEqual(dog1, dog3));
console.log("Q8: Are objects equal? - different keys:", areObjectsEqual(dog1, dog4));


// ---------- QUESTION 9 ---------
let currentDate = new Date();

console.log("Q9: Current Date:", currentDate);


// ---------- QUESTION 10 ----------
let year = currentDate.getFullYear();
let month = currentDate.getMonth();
let day = currentDate.getDate();

console.log("Q10 Year:", year);
console.log("Q10 Month:", month);
console.log("Q10 Day:", day);
