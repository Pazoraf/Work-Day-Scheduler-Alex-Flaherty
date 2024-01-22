$(document).ready(function() {
    var currentDay = dayjs().format('DD MMM YYYY [at] hh:mm:ss a');
    var currentHour = dayjs().format("H");

    $("#currentDay").text(currentDay);

    function timeDisplay(){
        var currentDay = dayjs().format('DD MMM YYYY [at] hh:mm:ss a');
        $("#currentDay").text(currentDay);
    }

    $(".time-block").each(function() {
        var blockTime = parseInt($(this).attr("id"));

        if (blockTime< currentHour){
            $(this).addClass("past");
        }else if (blockTime==currentHour){
            $(this).addClass("present");
        }else {
            $(this).addClass("future");
        }
    })




    setInterval(timeDisplay, 1000)
    console.log("hello")
})

