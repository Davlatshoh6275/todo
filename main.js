const inputBox = document.querySelector("#inputBox")
const listConteiner = document.querySelector("#listConteiner")

function addTask(){
    if(inputBox.value === '') {
        alert("You must write something!")
    } else {
        let li = document.createElement("li")
        li.innerHTML = inputBox.value;
        listConteiner.appendChild(li)
    }
    console.log(inputBox.value);
}