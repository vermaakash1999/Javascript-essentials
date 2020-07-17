console.log("Question 1");
let x=Number(prompt("Enter the number="));
if(x%2==0){
	console.log(`Number= ${x} is even.`);
}
else{
	console.log(`Number= ${x} is odd.`);
}

 
console.log("Operating System");
let os=prompt("Enter Operating System=");
split_string = os.split(" ");
var len=split_string.length;
console.log(len);
//console.log(split_string)
console.log("The os name is " + split_string[0] + " and Version is " + split_string[len-1]);


var marks = prompt('Enter your % to check your grade=');
if (marks>=90 && marks<=100){
    console.log(`Your grade is A`);
}
else if (marks>=75 && marks<90){
    console.log(`Your grade is B`);
}
else if (marks>=60 && marks<75){
    console.log(`Your grade is C`);
}
else if (marks>=45 && marks<60){
    console.log(`Your grade is D`);
}
else if (marks>=30 && marks<45){
    console.log(`Your grade is E`);
}
else{
    console.log(`You are failed.`);
}