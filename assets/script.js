

$(document).ready(function () {


    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var times = $(this).parent().attr("id");

        localStorage.setItem(times, text);
    })

    $("#hr7 .description").val(localStorage.getItem("hr7"));
    $("#hr8 .description").val(localStorage.getItem("hr8"));
    $("#hr9 .description").val(localStorage.getItem("hr9"));
    $("#hr10 .description").val(localStorage.getItem("hr10"));
    $("#hr11 .description").val(localStorage.getItem("hr11"));
    $("#hr12 .description").val(localStorage.getItem("hr12"));
    $("#hr13 .description").val(localStorage.getItem("hr13"));
    $("#hr14 .description").val(localStorage.getItem("hr14"));
    $("#hr15 .description").val(localStorage.getItem("hr15"));
    $("#hr16 .description").val(localStorage.getItem("hr16"));
    $("#hr17 .description").val(localStorage.getItem("hr17"));
    $("#hr18 .description").val(localStorage.getItem("hr18"));
    $("#hr19 .description").val(localStorage.getItem("hr19"));
    $("#hr20 .description").val(localStorage.getItem("hr20"));
    $("#hr21 .description").val(localStorage.getItem("hr21"));
    $("#hr22 .description").val(localStorage.getItem("hr22"));
    $("#hr23 .description").val(localStorage.getItem("hr23"));
    $("#hr24 .description").val(localStorage.getItem("hr24"));

    $("#currentDay").text(moment().format("MMMM Do YYYY"));


    function hrTrack() {
        
        var presentHr = moment().hour(); 
        for (var i =1;i<=24;i++){
            var register= $("#hr"+i)
            
            if (i<presentHr){
                register.addClass("bg-secondary")
            }

            if (i==presentHr){
            register.addClass("bg-danger")
            }
        }

        
        $(".time-block").each(function () {
            var timeBox = parseInt($(this).attr("id").split("hour")[1]);
            
            if (timeBox < presentHr) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            else if (timeBox === presentHr) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }

    hrTrack(); 
})

