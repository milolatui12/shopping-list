let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");

function inputlength() {
    return input.value.length;
}

function createListElement() {
    let li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = "";
}

function addListAfterClick() {
    if (inputlength() > 0)
        createListElement();
}

function addListAfterKeypress(event) {
    if (inputlength() > 0 && event.keyCode === 13)
        createListElement();
}

button.addEventListener("click", addListAfterClick)

input.addEventListener("keypress", addListAfterKeypress)