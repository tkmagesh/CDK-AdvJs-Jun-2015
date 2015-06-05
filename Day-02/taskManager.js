        $(function init(){
            $("#btnAdd").click(onBtnAddClick);
            $("#btnRemoveCompleted").click(onBtnRemoveCompletedClick);
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
                    .appendTo(document.body)
                    .find("h3").html(category);
            }
            var taskName = $("#txtTask").val()
            var listSelector = sectionSelector + " > ol";
            $("<li>")
                .html(taskName)
                .appendTo(listSelector);
        }
        function onBtnRemoveCompletedClick(){
            $("ol.taskList > li.completed").remove();
        }
