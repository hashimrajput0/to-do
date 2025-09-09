const addBtn = document.querySelector(".add-btn");
let Input = document.querySelector(".user-input");
let msg = document.querySelector("#msg");
const list = document.querySelector("ul");



window.addEventListener("DOMContentLoaded", () => {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    createtasks(tasks);
});

addBtn.addEventListener("click", () => {
    let userInput = Input.value;
    if (userInput == "") {
        msg.innerText = "First Enter your Task!!"
    } else {
        msg.innerText = ""
        saveinput(userInput);
        Input.value = "";
    }
});

function saveinput(userInput) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push({ text: userInput, done: false });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    createtasks(tasks);
}

function createtasks(tasks) {
    list.innerHTML = "";
    tasks.forEach((task, index) => {
        let box = document.createElement("li");
        let p = document.createElement("p");
        let del_btn = document.createElement("button");
        let tickBox = document.createElement("input");
        tickBox.type = "checkbox";

        tickBox.checked = task.done;
        if (task.done) {
             p.style.textDecoration = "line-through";
             p.style.textDecorationColor = "red"
             p.style.textDecorationThickness = "2px"
        }

        del_btn.innerText = "Delete";
        p.innerText = task.text;

        tickBox.addEventListener("change", () => {
            tasks[index].done = tickBox.checked;
            localStorage.setItem("tasks", JSON.stringify(tasks)); // ✅ save
            createtasks(tasks);
        });


        list.prepend(box);
        box.appendChild(p);
        box.appendChild(tickBox);
        box.appendChild(del_btn);


        del_btn.addEventListener("click", () => {
            tasks.splice(index, 1);
            localStorage.setItem("tasks", JSON.stringify(tasks));
            createtasks(tasks);
        });

    });
}
