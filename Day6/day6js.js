/* *********************************************************** */
console.log(`\nQuestion 1`);
color=['red','yellow','skyblue','purple','orange']
var i=0;


/* *********************************************************** */
console.log(`\nQuestion 2`);
num=Number(prompt("Enter number to show table="));
tab=document.querySelector('.table');
for(j=1;j<=10;j++){
    tab.innerHTML+=`${num} x ${j} = ${num*j}<br>`;
}
/* *********************************************************** */
console.log(`\nQuestion 3`);
name=prompt("Enter your name:");
document.querySelector('#name').innerHTML=`Hello ${name}, Welcome to my page.`;
t=document.querySelector('#time');
dmode=document.querySelector('#btn')
dmode.onclick=function(){
    document.body.classList.toggle('colo');
   
}
function clock(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    t.innerText = time;
}
setInterval(clock,1000);
/* *********************************************************** */
function changeColor(){
    
    document.querySelector('#q1').style.backgroundColor = color[i];
    i++;
    if (i==5){
        i=0;
    }
   
}
setInterval(changeColor,5000);

