
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function showTasks() {
    let list = document.getElementById("list");
    list.innerHTML = "";

    tasks.forEach((task, index) => {
        let li = document.createElement("li");
        li.innerHTML = task + " <button onclick='deleteTask(" + index + ")'>X</button>";
        list.appendChild(li);
    });
}

function addTask() {
    let task = document.getElementById("task").value;

    if (task === "") return;

    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    document.getElementById("task").value = "";
    showTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    showTasks();
}

showTasks();



let items = [
    {name: "Shoes", price: 300},
    {name: "Watch", price: 800},
    {name: "Bag", price: 400}
];

function showProducts(data) {
    let list = document.getElementById("productList");
    list.innerHTML = "";

    data.forEach(item => {
        let li = document.createElement("li");
        li.innerText = item.name + " - ₹" + item.price;
        list.appendChild(li);
    });
}

function filterProducts(type) {
    let filtered;

    if (type === "low") {
        filtered = items.filter(i => i.price < 500);
    } else if (type === "high") {
        filtered = items.filter(i => i.price >= 500);
    } else {
        filtered = items;
    }

    showProducts(filtered);
}

function sortProducts() {
    items.sort((a, b) => a.price - b.price);
    showProducts(items);
}

showProducts(items);