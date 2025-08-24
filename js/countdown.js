// Set the target date
var countDownDate = new Date("Nov 7, 2025 12:00:00").getTime();
// Update the countdown every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();
  // Find the distance between now and the targetdate
  var distance = countDownDate - now;
  // Time calculations for days, hours, minutes, and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  // Display the result
  document.getElementById("countdown").innerHTML =
    days +
    "<span style='color:#000000'> Tage &nbsp;</span>" +
    hours +
    "<span style='color:#000000'> Std. &nbsp;</span>" +
    minutes +
    "<span style='color:#000000'> Min. &nbsp;</span>";
  // + seconds + "<span style='color:#000000'> Sek. &nbsp;</span>";
  // If the countdown is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Es geht los!";
  }
}, 1000);
