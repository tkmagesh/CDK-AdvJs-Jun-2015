        $(function init(){
            $("#btnAdd").click(onBtnAddClick);
            $("#btnRemoveCompleted").click(onBtnRemoveCompletedClick);
            $(document.body).on("click", "h3", function(){
                $("ol.taskList").hide();
                $(this).siblings("ol.taskList").show();
            });
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
                .appendTo(listSelector);
        }
        function onBtnRemoveCompletedClick(){
            $("ol.taskList > li.completed").remove();
        }
