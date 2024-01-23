//jQuery ready method to make function available after document has loaded.
$(document).ready(function() {
    //Variables to utilise the dayjs date utility library
    var currentDay = dayjs().format('DD MMM YYYY [at] hh:mm:ss a');
    var currentHour = dayjs().format("H");
    var timeBlocks = $(".time-block")
    //Display current date and time
    $("#currentDay").text(currentDay);
    //Function to update time every second
    function timeDisplay(){
        var currentDay = dayjs().format('DD MMM YYYY [at] hh:mm:ss a');
        $("#currentDay").text(currentDay);
    }
    //Takes timeblock id and parses it into a number, compares number id to current time to detemine time tense.
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
    //Function to pull any text inputs saved to local storage, and to also save text inputs to local storage when save button is clicked.
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
    //Clear button to empty all text inputs and clear local storage.
    $(".clearBtn").on("click", function(){
        $(".description").val("");
        localStorage.clear();
    })
    //Function to update time every second
    setInterval(timeDisplay, 1000)
})

