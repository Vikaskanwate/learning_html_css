function addTask(){
    const input = document.getElementById("taskInput");

    let taskText = input.value.trim();

    if(taskText === "") return;

    const li = document.createElement("li");
    li.textContent = taskText;

    const ul = document.querySelector('ul');
    ul.appendChild(li);

    const deleteBtn = document.createElement("span");
    deleteBtn.classList.add('delete-btn')
    deleteBtn.textContent = "X"
    // li.appendChild(deleteBtn)
    // document.getElementById("taskList").appendChild(li);

    deleteBtn.onclick = function (){
        li.remove();
        updateTaskCount();
    }

    li.appendChild(deleteBtn)
    document.getElementById("taskList").appendChild(li);

    input.value = "";
    updateTaskCount();

}

function updateTaskCount(){
    const count = document.getElementById("taskList").children.length;

    document.getElementById('taskCount').textContent = `Total Task: ${count}`
}