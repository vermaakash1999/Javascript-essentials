/* *********************************************************** */

console.log(`Question 1`);

for (i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
        console.log(`i=${i} : fizz`);
    }
    if (i % 5 == 0) {
        console.log(`i=${i} : buzz`);
    }
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(`i=${i} : fizzbuzz`);
    }
}

/* *********************************************************** */

console.log(`\nQuestion 2`);

const student = {
    name: "Helsinki",
    age: 24,
    projects: {
        diceGame: "Two player dice game using JavaScript",
    }
};

let {
    name,
    age,
    projects: { diceGame },
} = student;
console.log(name, age, diceGame);

/* *********************************************************** */

console.log(`\nQuestion 3`);

shoppingList = ['A', 'B', 'C', 'D', 'E'];
console.log("Items bought:", shoppingList);
shoppingBasket = [...shoppingList, 'X', 'Y', 'Z'];
shoppingBasket.push('P', 'Q', 'R');
console.log("New shopping list:", shoppingBasket);

/* *********************************************************** */

console.log(`\nQuestion 4`);
console.log("Calculator");
console.log(`Choose:
1.Addition
2.Subtraction
3.Multiplication
4.Division
5.Square root
6.Percentage
`);
let input = Number(prompt("Choose from menu to use calculator:"));
c = 'y';
while (c == 'y') {
    switch (input) {
        case 1: {
            console.log("Performing Addition:");
            n1 = Number(prompt("Enter number="));
            n2 = Number(prompt("Enter number="));
            console.log("Answer=", n1 + n2);
            break;
        }
        case 2: {
            console.log("Performing Subtraction:");
            n1 = Number(prompt("Enter number="));
            n2 = Number(prompt("Enter number="));
            console.log("Answer=", n1 - n2);
            break;
        }
        case 3: {
            console.log("Performing Multiplication:");
            n1 = Number(prompt("Enter number="));
            n2 = Number(prompt("Enter number="));
            console.log("Answer=", n1 * n2);
            break;
        }
        case 4: {
            console.log("Performing Division:");
            n1 = Number(prompt("Enter number="));
            n2 = Number(prompt("Enter number="));
            console.log("Answer=", n1 / n2);
            break;
        }
        case 5: {
            console.log("Performing Square root:");
            n1 = Number(prompt("Enter number="));
            console.log("Answer=", Math.sqrt(n1));
            break;
        }
        case 6: {
            console.log("Performing Percentage:");
            n1 = Number(prompt("Enter number="));
            n2 = Number(prompt("Enter number="));
            console.log("Answer=", (n1 * n2) / 100);
            break;
        }
        default: {
            console.log("Invalid input.");
            break;
        }
    }
    c = prompt("Do you want to use calculator again (y,n) =");
    if (c == 'y') {
        input = Number(prompt("Choose from menu to use calculator:"));
    }

}

/* *********************************************************** */

console.log(`\nQuestion 5`);

var sales = prompt("Enter your sales amount.");
var comm = 0;
if (sales > 0 && sales <= 5000) {
    comm = sales * 0.02;
}
else if (sales > 5000 && sales <= 10000) {
    comm = 5000 * 0.02 + (sales - 5000) * 0.05;
}
else if (sales > 10000 && sales <= 20000) {
    comm = 5000 * 0.02 + 5000 * 0.05 + (sales - 10000) * 0.07;
}
else if (sales > 20000) {
    comm = 5000 * 0.02 + 5000 * 0.05 + 10000 * 0.07 + (sales - 20000) * 0.1;
}
console.log("Total commision earned by him =", comm);

/* *********************************************************** */

console.log(`\nQuestion 6`);

var char = 'y';
while (char == 'y') {
    num = Number(prompt("Enter number greater than 100:"));
    console.log("You entered:", num)
    char = (num < 101) ? 'y' : 'n'
}
/* *********************************************************** */

console.log(`\nQuestion 7`);

n = Number(prompt("Enter number to print primes="));
flag = 0;
for (i = 2; i <= n; i++) {
    flag = 0;
    for (j = 2; j <= i / 2; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }
    if (flag == 0) {
        console.log(i)
    }
}
/* *********************************************************** */

console.log(`\nQuestion 8`);
ask = (question, yes, no) => {
    if (confirm(question)) yes();
    else no();
};

ask(
    "Do you agree?",
    function () {
        alert("You agreed.");
    },
    function () {
        alert("You canceled the execution.");
    }
);
/* *********************************************************** */