        $(function init(){
            $("#btnAdd").click(onBtnAddClick);
            $("#btnRemoveCompleted").click(onBtnRemoveCompletedClick);
            $("#olTaskList").on("click", "li:eq(1)", onTaskItemClick);
            $("#headProfessional").click(function(){
                $("#olProfessionalTaskList").toggle();
            });
        });
        function onTaskItemClick(){
            $(this).toggleClass("completed");
        }
        function onBtnAddClick(){
            $("<li>")
                .html($("#txtTask").val())
                .appendTo("#olTaskList");
        }
        function onBtnRemoveCompletedClick(){
            $("#olTaskList > li.completed").remove();
        }
