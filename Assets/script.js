$(function () {


// current day
var currentDay = dayjs();
$('#currentDay').text(currentDay.format('dddd, MMMM D YYYY'))
console.log(currentDay)

// Current time
var hour = dayjs().hour();
  console.log(hour);


$(document).ready(function () {
  var saveButtons = $(".saveBtn");
  // Add a click event listener to each save button
  saveButtons.on("click", function (event) {
  // `this`  refers to the element that was clicked
    var saveButton = $(this);
  // Find the time-block element that contains the save button
    var timeBlock = saveButton.closest(".time-block");
  //  id for time-block element
  var id = timeBlock.attr("id");
    // value of the description input field
    var description = timeBlock.find(".description").val();
    // local storage to save
    localStorage.setItem(id, JSON.stringify(description));
  });
});

// need to figure out the time block and retrieve from local storage
$('.time-block').each(function() {
  var id = $(this).attr("id");
  var description = localStorage.getItem(id);
  if (description) {
    $(this).find('.description').val(JSON.parse(description));
  }
});
// past, present, future
function trackTime() {
  let currentHour = new Date().getHours();
  let timeBlocks = $(".time-block");
 

  timeBlocks.each(function () {
    let time = $(this).attr("id").split("hour")[1];
    if (currentHour == time) {
      $(this).addClass("present");
    } else if (currentHour < time) {
      $(this).removeClass("present");
      $(this).addClass("future");
    } else if (currentHour > time) {
      $(this).removeClass("future");
      $(this).addClass("past");
    }
  });
}
trackTime();

});



// move the TODO down and keeping it for references

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
// TODO: Add code to display the current date in the header of the page.