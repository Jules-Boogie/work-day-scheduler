// generate current day and append it to $("#currentDay")

//console.log(moment().format("dd Do,MM,YYYY"));
$(document).ready(function(){

let updateDay = function(){
    currentDay = moment().format("LLLL");
    $("#currentDay").text(currentDay);
    

}
updateDay(); //call function
setInterval(updateDay,1000); //refresh time every 1000ms


//time blocks for standard business hours
//9am to 5pm = 8hrs = 9 rows? and three columns in each row

//configure the buttons, event information is stored to local storage when button is clicked
    var eventTime;
    var eventText;
    $(".saveBtn").on("click", function (event) {
        event.preventDefault();
        //get info from textarea 
        eventText = $("textarea").val().trim();

        //get item from row
        eventTime = $(this).parent().attr("data-id");
        console.log(eventTime);


        localStorage.setItem(eventTime, eventText);

        //console.log(eventText);


    })

  

//var calendarTime = ["9","10","11","12","13","14","15","16","17"];
//console.log(parseInt(calendarTime));

var timeofDay = moment().format('H');
refreshPage();

console.log(timeofDay);


function refreshPage(){

$("textarea").each(function(){
    var calendarTime = parseInt($(this).attr("time"));
    if(calendarTime == timeofDay){
        $(this).addClass("present");
    }
    else if(calendarTime > timeofDay){
        $(this).addClass("past");
    } else if(calendarTime < timeofDay){
        $(this).addClass("future");
    }
});
}


//configure forms
$("#9am").val(localStorage.getItem("9am"));
$("#10am").val(localStorage.getItem("10am"));
$("#11am").val(localStorage.getItem("11am"));
$("#12noon").val(localStorage.getItem("12noon"));
$("#1pm").val(localStorage.getItem("13pm"));
$("#2pm").val(localStorage.getItem("14pm"));
$("#3pm").val(localStorage.getItem("15pm"));
$("#4pm").val(localStorage.getItem("16pm"));
$("#5pm").val(localStorage.getItem("17pm"));


})