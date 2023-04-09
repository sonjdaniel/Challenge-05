$(function () {


// current day
var currentDay = dayjs();
$('#currentDay').text(currentDay.format('dddd, MMMM D YYYY'))
console.log(currentDay)

// Current time
var hour = dayjs().hour();
  console.log(hour);

// time slot from HTML, trying to figure if there is a way to user the time slots
var slot9 = $('#hour-9');
var slot10 = $('#hour-10');
var slot11 = $('#hour-11');
var slot12 = $('#hour-12');
var slot1 = $('#hour-13');
var slot2 = $('#hour-14');
var slot3 = $('#hour-15');
var slot4 = $('#hour-16');
var slot5 = $('#hour-17');


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
var timeBlockDivs = $('.time-block');
  // The below is done for each of the HTML timeBlockDivs
  timeBlockDivs.each(function() {
    // Ensures that task added by user will keep showing on page even after page is reloaded
    if (task) {
      $(this).children('textarea').val(task)
    }
  })


// To be delete
// $(document).ready(function () {
// // save button to alert time and task. then able to save it to the local storage.
// $('.saveBtn').click(function () {

//   // Alert for time 
//   var time = $(this).parent().attr('id');
//   // alert for Task Description
//   var taskDescription = $(this).siblings('textarea').val()

//   // Local storage template
//   localStorage.setItem(time,taskDescription)

// })

// });

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