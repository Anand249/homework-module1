// Create a time data funtion
function currentTime() {
  // declare varables
  var d = new Date(); //Get current date
  var hr = d.getHours(); //Get current hours
  var min = d.getMinutes(); //Get current minutes
  var sec = d.getSeconds(); //Get current seconds
  var utchr = d.getUTCHours(); //Get current Greenwich Mean Time (GMT)
  var ampm; //Declare empty variable to store AM or PM
  var timeDiff; //To store time difference coverted to positive number
  var adjTimeDiff; //To store time difference coverted to positive number
  var timeZone; //To store the 4 time zones (PT, MT, CT, ET)

  // add 0 to single digit for seconds
  if (sec < 10) {
    sec = "0" + sec;
  }

  // add 0 to single digit for minutes
  if (min < 10) {
    min = "0" + min;
  }

  //determine AM or PM string
  if (hr == 12) {
    ampm = "PM"; //Set to PM
  } else if (hr > 12) {
    hr -= 12; //Deduct 12 from hours greater than 12 (military time)
    ampm = "PM"; //Set to PM
  } else {
    ampm = "AM"; //Set to AM
  }

  // Time difference between GMT and Local Time
  timeDiff = utchr - hr;

  // Check which time zone based on the converted time difference between GMT Hour and Local Hour
  if (timeDiff == 4) {
    timeZone = "ET";
  } else if (timeDiff == 5) {
    timeZone = "CT";
  } else if (timeDiff == 6) {
    timeZone = "MT";
  } else {
    timeZone = "PT";
  }

  //Assemble time format to display
  var time = hr + ":" + min + ":" + sec + " " + ampm;

  //Display current local time and time zone on HTML elements
  document.getElementById("clock").innerText = time; //adding time
  document.getElementById("timeZone").innerText = timeZone; //adding time

  //Run time data funtion every 1 second
  setInterval(currentTime, 1000); //setting timer
}

//Initial run of time date funtion
currentTime();
