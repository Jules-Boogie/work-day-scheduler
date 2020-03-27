// generate current day and append it to $("#currentDay")

//console.log(moment().format("dd Do,MM,YYYY"));


let updateDay = function(){
    currentDay = moment().format("LLLL");
    $("#currentDay").text(currentDay);
    

}
updateDay(); //call function
setInterval(updateDay,1000); //refresh time every 1000ms


//time blocks for standard business hours
//9am to 5pm = 8hrs = 9 rows? and three columns in each row

//configure the buttons, event information is stored to local storage when button is clicked

$(".saveBtn").on("click", function(){
    //get info from textarea 
    var eventText = $(this).sibling("#info").val();
    console.log(userInput);

    var eventTime = $(this).parent().attr("#id");
    console.log(eventTime);

    
    
    localStorage.setItem(eventTime, eventText);




})

var currentTime = [9,10,11,12,13,14,15,16,17]

//configure forms
for(var i = 0; i < currentTime.length; i++){
   
    
}



