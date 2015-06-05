$(function init(){
    $("#btnAdd").click(onBtnAddClick);
    $("#btnRemoveCompleted").click(onBtnRemoveCompletedClick);
    $(document.body).on("click", "h3", function(){
        $("ol.taskList").slideUp('slow');
        $(this).siblings("ol.taskList").slideDown();
    });
    $(document.body).on("click", "ol.taskList > li", onTaskItemClick);
});
function onTaskItemClick(){
    $(this).toggleClass("completed");
}
function onBtnAddClick(){
    var sectionTemplate = "<div><h3></h3><ol class='taskList'></ol></div>";
    var category = $("#selectCategory").val();
    var sectionSelector = "div." + category;
    if ($(sectionSelector).length === 0){
        $(sectionTemplate)
            .addClass(category)
            .find("h3").html(category)
            .end()
            .appendTo(document.body)
    }
    var taskName = $("#txtTask").val()
    var listSelector = sectionSelector + " > ol";
    $("<li>")
        .html(taskName)
        .hide()
        .appendTo(listSelector)
        .fadeIn();

    displayMessage("A new task is added");
}
function onBtnRemoveCompletedClick(){
    $("ol.taskList > li.completed:visible").fadeOut(function(){
        $(this).remove();
    });
    displayMessage("Zero or more completed tasks are removed");
}
function displayMessage(message){
    $("<div class='message'></div>")
        .html(message)
        .hide()
        .appendTo("#divMessages")
        .slideDown()
        .delay(4000)
        .fadeOut(function(){
            $(this).remove();
        });
}
