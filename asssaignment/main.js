// ASSIGNMENT NO 01
// Building Your Friend List:
var friend1 = {
    firstName: "Hiba",
    lastName: "Khan",
    id: 765,
};
var friend2 = {
    firstName: "Ali",
    lastName: "Zafar",
    id: 765
};
var friend3 = {
    firstName: "Sana",
    lastName: "Javed",
    id: 765
};
var people = {
    friends: [friend1, friend2, friend3]
};
console.log(people);
// ASSIGNMENT NO 02
// Manipulating an Array: Rearranging Words:
var scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];
scrambledArray.splice(2, 2);
scrambledArray.pop();
scrambledArray.unshift("I");
scrambledArray[1] = "am";
scrambledArray[2] = "a";
scrambledArray[3] = "student";
scrambledArray[4] = "of";
scrambledArray[5] = "GIAIC";
console.log(scrambledArray.join(" "));
var product = {
    name: "Adidas",
    model: 2024,
    cost: 5000,
    quantity: 5,
};
var product1 = {
    name: "Mac",
    model: 2024,
    cost: 4000,
    quantity: 7,
};
var product2 = {
    name: "Nike",
    model: 2024,
    cost: 6000,
    quantity: 4,
};
var inventory = {
    Product: [product, product1, product2]
};
console.log("Quantity of the third product:", inventory.Product[2].quantity);
var product3 = {
    name: "Nestle",
    model: 2023,
    cost: 2000,
    quantity: 3,
};
inventory.Product.push(product3);
console.log("Name of the fourth product:", inventory.Product[3].name);
console.log("Cost of the first product:", inventory.Product[0].cost);
;
var students = [
    {
        name: "Maria",
        senior_status: true,
        completedassignments: true,
    },
    {
        name: "Samir",
        senior_status: false,
        completedassignments: true,
    },
    {
        name: "Danish",
        senior_status: true,
        completedassignments: false,
    },
];
console.log(students);
