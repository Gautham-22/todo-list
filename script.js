var input,html,notcompleted,completed,deleteTask,addTaskToCompleted;
input = document.querySelector(".text");
notcompleted = document.querySelector(".notcomp");
completed = document.querySelector(".comp");

// refresh
(function(){
    input.value = "";
})();

// adding task
input.addEventListener("keypress",function(event){
    if((event.keyCode == 13 || event.which == 13) && input.value != ""){
        html = '<div class="task">'+input.value+'<i class="fas fa-trash-alt"></i><i class="fas fa-check tick"></i></div>';
        notcompleted.insertAdjacentHTML("beforeend",html);
        input.value = "";
    }
});

// deleting task
deleteTask = function(task){
    task.parentNode.parentNode.removeChild(task.parentNode);
};

// adding to completed
addTaskToCompleted = function(event){
    html = '<div class="task">'+event.parentNode.textContent+'<i class="fas fa-trash-alt"></i></div>';
    completed.insertAdjacentHTML("beforeend",html);
};

// not completed : del and tick
document.querySelector(".notcomp").addEventListener("click",function(event){
    if(event.target.className == "fas fa-trash-alt"){
        deleteTask(event.target);
    }else if (event.target.className == "fas fa-check tick"){
        addTaskToCompleted(event.target);
        deleteTask(event.target);
    }
});

// completed : del
document.querySelector(".comp").addEventListener("click",function(event){
    if(event.target.className == "fas fa-trash-alt"){
        deleteTask(event.target);
    }
});