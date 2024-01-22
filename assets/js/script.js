$(document).ready(function() {
    var currentDay = dayjs().format('DD MMM YYYY [at] hh:mm:ss a');
    var currentHour = dayjs().format("H");
    var timeBlocks = $(".time-block")

    $("#currentDay").text(currentDay);

    function timeDisplay(){
        var currentDay = dayjs().format('DD MMM YYYY [at] hh:mm:ss a');
        $("#currentDay").text(currentDay);
    }

    timeBlocks.each(function() {
        var blockTime = parseInt($(this).attr("id"));

        if (blockTime< currentHour){
            $(this).addClass("past");
        }else if (blockTime==currentHour){
            $(this).addClass("present");
        }else {
            $(this).addClass("future");
        }
    })

    timeBlocks.each(function() {
        var textarea = $(this).find(".description");
        var timeBlockId = $(this).attr("id")
        var savedText = localStorage.getItem(timeBlockId);
        textarea.val(savedText)
        $(this).find(".saveBtn").on("click", function() {
            var inputText = textarea.val();
            localStorage.setItem(timeBlockId, inputText)
        })
    })


    setInterval(timeDisplay, 1000)
    console.log("hello")
})

