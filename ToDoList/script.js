var nextColor = 0;

function toggleTaskColor(event){
    var listItem = event.target;
    listItem.classList.toggle("task-item-clicked");
}

function displayTask(){
    var inputElement = document.getElementById("input");
    var taskText = inputElement.value.trim();
    if (taskText !== ""){
        var listItem = document.createElement("li");
        listItem.classList.add(nextColor % 2 === 0 ? "task-item-even" : "task-item-odd");
        listItem.addEventListener("click", toggleTaskColor);
        listItem.textContent = taskText;
        listItem.classList.add("task-item")
        var taskList = document.getElementById("taskList");
        taskList.appendChild(listItem);
        inputElement.value = "";
        nextColor++;
    }
}

