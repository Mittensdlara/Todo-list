document.querySelector('#task-submit').onclick = function(){
    if(document.querySelector('#new-task #task-input').value.length == 0){
        alert("Please Enter a Task")
    }
    else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="task-name">
                    ${document.querySelector('#new-task #task-input').value}
                </span>
                <button class="delete"> Delete
                    
                </button>
            </div>
        `;
         


        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }

        }

        document.querySelector("#new-task input").value = "";
    }
}

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = "imporatnt";
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }