let addBtn = document.getElementById("addBtn")
let title=$("#taskTitle")
let toDo=$("#toDoList")
let done=$("#doneList")
addBtn.addEventListener('click',function(){
    let finish = $("<input>")
    finish.attr("type","checkbox")
    //finish.attr("checked",false)
    finish.addClass("doneBtn")
    let li = $("<li>")
    let removeBtn =$("<button>Remove</button> ")
    removeBtn.addClass("removeBtn")
    removeBtn.click(function(){
        $(this).parent().remove()
    })
    li.html(title.val())
    li.addClass("displayList")
    
    li.prepend(finish)
    li.append(removeBtn)
    toDo.append(li)
    document.getElementById("taskTitle").value = ""
    finish.change(function(){
    let ischecked =$(this).get(0).checked
         if (ischecked)
             {done.append(li)
             console.log(title.val() +" was selected")}
         else
             {toDo.append(li)}
    })

})


toDo.sortable();
done.sortable();




