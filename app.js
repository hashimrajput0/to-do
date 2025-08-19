

const tasklist = document.querySelector("#tasklist");
const inputtext = document.querySelector("#inputText");
const innerbutton = document.querySelector("#inputButton");
const empty = document.querySelector("#empty");

const addingtask = () => {
    const newtask = document.createElement("li");
    const removebutton = document.createElement("button");
    const innervalue = inputtext.value;
    if (innervalue != "") {
        tasklist.append(newtask);

        newtask.textContent = innervalue;
        newtask.append(removebutton);
        removebutton.innerText = "Remove"
                empty.innerText = "";
        const removingtask = () => {
            newtask.remove();
            removebutton.remove();
        }
        removebutton.addEventListener("click",removingtask);
    } else {
        empty.innerText = "First, Please write your Task";
    }
    inputtext.value = "";
}

innerbutton.addEventListener("click", addingtask);










