$(document).ready(function() {
    var currentDay = dayjs().format("MMMM DD YYYY");
    var currentTime = dayjs();
    var currentHour = dayjs().format("H");
$("#currentDay").text(currentDay);

// $(".timeblock").each(function() {
//     var blockTime = parseInt($(this).attr("id"));

//     if (blockTime< currentHour){
//         $(this).addClass("past");
//     }else if (blockTime==currentHour){
//         $(this).addClass("present");
//     }else {
//         $(this).addClass("future");
//     }
// })

// Get the current hour using Day.js
var currentHour = dayjs().format("H");

// Loop through each timeblock
$(".timeblock").each(function() {
  // Get the hour of the timeblock
  var blockHour = parseInt($(this).attr("id"));

  // Compare the blockHour with the currentHour
  if (blockHour < currentHour) {
    // Timeblock is in the past
    $(this).addClass("past");
  } else if (blockHour == currentHour) {
    // Timeblock is in the present
    $(this).addClass("present");
  } else {
    // Timeblock is in the future
    $(this).addClass("future");
  }
});



console.log("hello")
})

