/* *********************************************************** */
console.log(`\nQuestion 1`);
arr = [];
var char = 'y';
while (char == 'y') {
    num = Number(prompt("Enter any positive number :\nTo get result press Enter blank"));
    //console.log("You entered:", num);
    arr.push(num)
    char = num ? 'y' : 'n'
    if (num == "") {
        break;
    }
}
arr.pop();
//console.log(arr);

oddcube = arr.filter(el => el % 2 != 0).map(el => el ** 3);
console.log("Array of cube of odd numbers :", oddcube);

/* *********************************************************** */
console.log(`\nQuestion 2`);

class User {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.luCoins = 0;
        this.courses = [];
    }

    login() {
        console.log(`${this.name} has logged in.`);
        return this;
    }
    logout() {
        console.log(`${this.name} has logged out`);
        return this;
    }

    getDetails() {
        console.log(`Name is ${this.name}, email is ${this.email}, age is ${this.age}, my courses are ${this.courses}, my coins = ${this.luCoins}`);
        return this;
    }

}

class Moderator extends User {
    constructor(name, age, email, role) {
        super(name, age, email);
        this.role = role;
    }
    addCoins(user) {
        user.luCoins++;
        console.log("Coins added.")
        console.log(`${user.name} has ${user.luCoins} coins`);
        return this;
    }
    removeCoins(user){
        user.luCoins--;
        console.log("Coins decremented.")
        console.log(`${user.name} has ${user.luCoins} coins`);
        return this;
    }

}

class Admin extends Moderator {
    addCourse(user, course) {
        user.courses.push(course);
        console.log("Course added=",course);
    }

    removeCourse(user, course) {
        user.courses.pop(course);
        console.log("Course removed=",course);
    }
}

let user1=new User('Abc',20,'abc@gmail.com')
let user2=new User('Xyz',21,'xyz@gmail.com')
let mod1=new Moderator('Pqr',25,'pqr@gmail.com','Senior')
let mod2=new Moderator('Stu',22,'stu@gmail.com','Junior')
let admin=new Admin('Admin',30,'admin@gmail.com')

user1.login().getDetails();
admin.login();
admin.addCourse(user1,'Javascript');
admin.addCourse(user2,'Python');
mod1.login();
mod1.addCoins(user1);
admin.logout();
user1.getDetails();
mod1.logout();
user1.logout();
/* *********************************************************** */
console.log(`\nQuestion 3`);

async function gettodo(){
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();

    console.log(data);
}
gettodo();
/* *********************************************************** */