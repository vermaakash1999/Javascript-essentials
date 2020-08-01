n = 0;
localStorage.clear();
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("inputtext").value;
    var t = document.createTextNode(inputValue);

    n++;

    localStorage.setItem(n, inputValue);


    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("list").appendChild(li);
    }

    document.getElementById("inputtext").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
    console.log("Added to localstorage=",localStorage.getItem(n));
}

var myNodelist = document.getElementsByTagName("li");
var i;

for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

function removeelementfromlist() {
    var u = document.querySelector('ul');
    var list = document.getElementsByTagName('li');



    for (i = 0; i < list.length; i++) {

        if (list[i].className === 'checked') {

            //list[i].style.display="none";
            u.removeChild(list[i]);

        }
    }
}