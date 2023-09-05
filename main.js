const inputBox = document.querySelector("#inputBox")
const listConteiner = document.querySelector("#listConteiner")

let tasks = []
let task = ""

inputBox.onchange = (e) => {
    task = e.target.value
}



function addTask() {


    // let obj = {
    //     status: false,
    //     task,
    //     id: Math.random()
    // }
    // tasks.push(obj)

    // task = ''
    // inputBox.setAttribute("value", '')

    // console.log(tasks);

    // const arr = tasks.map((item, index) => (`<li>${item.task}</li>`))

    // for (let i of arr) {
    //     listConteiner.innerHTML += i
    // }
}



