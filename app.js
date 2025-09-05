const addBtn = document.querySelector(".add-btn");
let Input = document.querySelector(".user-input");
let msg = document.querySelector("#msg");
const list = document.querySelector("ul");



window.addEventListener("DOMContentLoaded", () => {
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    createnotes(notes);
});







addBtn.addEventListener("click", () => {
    let userInput = Input.value;
    if (userInput == ""){
msg.innerText = "First Enter your Task!!"
        } else {
            msg.innerText = ""
    saveinput(userInput);
    Input.value = "";
    }
});
function saveinput(userInput) {
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.push(userInput);
    localStorage.setItem("notes", JSON.stringify(notes));
    createnotes(notes);
}
function createnotes(notes) {
list.innerHTML = "";
notes.forEach((note, index) => {
let box = document.createElement("li");
let p = document.createElement("p");
let del_btn = document.createElement("button");
list.appendChild(box);
box.appendChild(p);
box.appendChild(del_btn);
del_btn.innerText = "Delete";
p.innerText = note;


del_btn.addEventListener("click", () => {
    notes.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notes));
    createnotes(notes);
});

});
}
