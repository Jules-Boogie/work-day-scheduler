**Author:**
Juliet George



**Project Scope**
This project is to create a work day planner for a busy person. The day starts at 9am and ends at 5pm. When a user inputs an event and clicks the save button, the event is stored in the localStorage and still appears after the page has been refreshed. 


**Contact:**
[LinkedIn](https://www.linkedin.com/in/juliet-george-864950b8/)

**Built With**
https://www.w3schools.com/jsref/prop_button_value.asp

https://www.geeksforgeeks.org/jquery-set-the-value-of-an-input-text-field/

https://www.w3schools.com/jsref/jsref_push.asp

https://developer.mozilla.org/en-US/docs/Web/API/History_API

https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

https://medium.com/@monica1109/scheduling-settimeout-and-setinterval-ca2ee50cd99f

**Resources Used to Build**
[Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[Jquery](https://jquery.com/)
[Bootstrap 4](https://getbootstrap.com/docs/4.4/getting-started/introduction/)
[HTML](https://html.com/)
[CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
[GitPages](https://pages.github.com/)
[Git](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control)

**Code Snippet**
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

**Page Snippet**

https://github.com/Jules-Boogie/work-day-scheduler/blob/master/Assets/Capture.PNG



Live Deployed Site:
https://jules-boogie.github.io/work-day-scheduler/


## License
Licensed under MIT License

