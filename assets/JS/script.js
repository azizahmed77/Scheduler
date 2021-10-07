
let saveBtn = $(".saveBtn");
var currentTime = moment().hour();


// loads time and schedule items

function setSchedule() {

    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

    $(".time-block").each(function () {
        let id = $(this).attr("id");
        let data = localStorage.getItem(id);

        if (data !== null) {
            $(this).children(".data").val(data);
        }
    });
};

// saves schedule items

saveBtn.on("click", function () {
    let time = $(this).parent().attr("id");
    let data = $(this).siblings(".data").val();

    localStorage.setItem(time, data);
});



function timeTracker() {
  

    // loop over time blocks
    $(".time-block").each(function () {
        var blockTime = parseInt($(this).attr("id"));

        switch (true) {
            case (blockTime < currentTime):
                $(this).addClass("past");
                break;

            case (blockTime === currentTime):
                $(this).addClass("present");
                break;

            default:
                $(this).addClass("future");
        }
    })
};




setSchedule();
timeTracker();

