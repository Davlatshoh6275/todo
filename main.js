const inputBox = document.querySelector("#inputBox")
const listConteiner = document.querySelector("#listConteiner")


function addTask() {

    if (inputBox.value === '') {
        alert("you must write something!")
    } else {
        let li = document.createElement("li")
        li.innerHTML = inputBox.value
        listConteiner.appendChild(li)

        // delete btn
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)

    }

    // after we will clear input 
    inputBox.value = ''

    saveData()

}

// delete todo

listConteiner.onclick = (e) => {
    if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove()
        saveData()
    }
}

function saveData() {
    localStorage.setItem("data", listConteiner.innerHTML)
}

function showTask() {
    listConteiner.innerHTML = localStorage.getItem("data")
}

showTask()
