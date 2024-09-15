// ASSIGNMENT NO 01
// Building Your Friend List:

type Friend = {
     firstName: string;
     lastName: string;
     id?: number;
}
let friend1: Friend = {
        firstName: "Hiba",
        lastName: "Khan",
        id: 765,
    }
    let friend2: Friend = {

        firstName: "Ali",
        lastName: "Zafar",
        id: 765
    }

    let friend3: Friend = {
        firstName: "Sana",
        lastName: "Javed",
        id: 765
    }
let people = {
    friends: [friend1, friend2, friend3]}
console.log(people);


// ASSIGNMENT NO 02
// Manipulating an Array: Rearranging Words:


const scrambledArray =["student", "of", true, 123, "am", "a", "GIAIC", "I"]
scrambledArray.splice(2,2)
scrambledArray.pop()
scrambledArray.unshift("I")
scrambledArray[1] = "am";
scrambledArray[2] = "a";
scrambledArray[3] = "student";
scrambledArray[4] = "of";
scrambledArray[5] = "GIAIC";
console.log(scrambledArray.join(" "));


// ASSIGNMENT NO 03
// Company Product Catlalog:


type Products = {
    name: string;
    model: number;
    cost: number;
    quantity: number;
}

let product: Products= {
    name: "Adidas",
    model: 2024,
    cost: 5000,
    quantity: 5,
}
let product1: Products = {
    name: "Mac",
    model: 2024,
    cost: 4000,
    quantity: 7,
}
let product2: Products = {
    name: "Nike",
    model: 2024,
    cost: 6000,
    quantity: 4,
}
let inventory = {
    Product : [product,product1,product2]
}
console.log("Quantity of the third product:", inventory.Product[2].quantity) ;

let product3: Products = {
    name: "Nestle",
    model: 2023,
    cost: 2000,
    quantity: 3,
}
inventory.Product.push(product3)
console.log("Name of the fourth product:", inventory.Product[3].name);
console.log("Cost of the first product:", inventory.Product[0].cost);


// ASSIGNMENT NO 04
// Student List Organizer:


interface student {
    name: string,
    senior_status: boolean,
    completedassignments: boolean,
};


let students: student[] = [
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


    


    

