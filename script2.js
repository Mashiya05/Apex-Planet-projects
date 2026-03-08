



document.getElementById("contactForm").addEventListener("submit", function(e){

    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    let valid = true;

    
    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("messageError").innerText = "";

    if(name === ""){
        document.getElementById("nameError").innerText = "Name is required";
        valid = false;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(email === ""){
        document.getElementById("emailError").innerText = "Email is required";
        valid = false;
    }
    else if(!email.match(emailPattern)){
        document.getElementById("emailError").innerText = "Invalid Email Format";
        valid = false;
    }

    if(message === ""){
        document.getElementById("messageError").innerText = "Message is required";
        valid = false;
    }

    if(valid){
        alert("Form Submitted Successfully!");
        document.getElementById("contactForm").reset();
    }
});




document.getElementById("addBtn").addEventListener("click", addTask);

function addTask(){

    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if(taskText === ""){
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = taskText + 
        "<button onclick='removeTask(this)'>X</button>";

    document.getElementById("taskList").appendChild(li);

    taskInput.value = "";
}

function removeTask(button){
    button.parentElement.remove();
}