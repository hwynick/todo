var taskInput=document.getElementById
("new-task");//Add a new task.
var addButton=document.getElementsByTagName
("button") [0]; //first button
var
incompleteTaskHolder=document.getElementById
("incomplete-tasks");//ul of incomeplete -tasks
var
completedTaskHolder=document.getElementById


var createNewTaskElement= function(taskString){

    var listItem=document.createElement("li");

    //input (checkbox)
    var checkBox=document.createElement
    ("input");//checkbx
    //label
    var lable=document.createElement("label");
    //label
    //input (text)
    var editInput=document.createElement ("input");//text
    //button.edit
    var editButton=document.createElement
    ("button");//edit button

    //button.delete
    var deleteButton=document.createElement
    ("button");//delete button

    lable.innerText=taskString;

    //Each element, needs appending 
    checkBox.type="checkbox";
    editInput.type="text";

    editButton.innerText="Edit";//innerTextencodes special characters, HTML does not.
    deleteButton.innerText="delete";
    // creating a class in HTML called delete class= "delete
    deleteButton.className="delete";

    //and appending
    //which allows the elements we create to appear on your web page or app
    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    listItem.appendChild(editinput);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
    return listItem;



}



var addTask=funtion(){
    console.log(Add task...);

    var listItem=createNewTaskElement
    (taskInput.value);

    //Append listItem to incompleteTaskHolder 
    console.log(listItem);

    incompleteTaskHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskComplete);

    taskInput.value"";


}

//Edit an existing task

var editTask=function(){
console.log("Edit Task...");
console.log("change 'edit' to 'save'");

var listItem=this.parentNode;

var editInput=listItem.querySelector('input [type=text');

var label=listItem.querySelector("label");
var containsClass=listItem.classList.contains
("editMode");

        //If class of the parent is .editmode
        if(containsClass){

            //switch to ,editmode
            //label becomes the inputs value.
                label.innerText=editInput.value;
}else{
    editInput.value=label.innerText;
}

            //toggle.editmode on the parent.
            //This method toggles between hide and show for the selected element
            listItem.classList.toggles("editMode")


            //delete task
            var deleteTask=function(){
                console.log("delete task...")

                var listItem= this.parentNode;
                var ul=listItem.parentNode;
                //Remove the parent list item from the ul.

                ul.removeChild(listItems);

            }



// mark task completed
var taskComplete=function(){
    console.log("complete Task...");

    //Append the task list Item to the #completed-tasks
    var listItem=this.parentNode;
    completedTaskHolder.appendChild(listItem);
        bindTaskEvents(listItem,
            taskIncomplete);
            //bind lets you

            var listItem=this.parentNode,
            incompleteTaskHolder.appendChild
            (listItem);
            blindTaskEvents(listItem,taskCompleted);


}

var ajaxRequst=function(){
    console.log("AJAX request");


}
addButton.addEventListener("click",addTask);
addButton.addEventListener("click",ajaxRequst);

var bindTaskEvents=function(taskListItem,checkBoxEventHandler){

    console.log("bind list item events");

    var checkBox=taskListItem.querySelector
    ("input[type=checkbox]");
    var editButton=taskListItem.querySelector
    ("button.edit");
    var deleteButton=taskListItem.querySelector
    ("button.delete");


                    //Bind editTask to edit button 
                    editButton.onclick=editTask;
                    //bind deletedTask to delete button 
                    deleteButton.onclick=deleteTask

                    checkBox.onchange=checkBoxEventHandler;



}


for (var i=0; i<incompleteTaskHolder.children.length;++){
    bindTaskEvents(incompleteTaskHolder.children[1], taskCompleted);
}}

for(var i=0; i<completedTaskHolder.children.length; i++{
    bindTaskEvents(completedTaskHolder.children[i], taskIncomplete);
})

