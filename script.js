var main = document.getElementById('main');
var show = document.getElementById('show');
var mix = document.getElementById('mix');


const currentTime = new Date();
const startTime = 20; // 8:00p
const endTime = 4; // 4:00am

if (currentTime.getHours() + currentTime.getMinutes()/60 >= startTime || currentTime.getHours() + currentTime.getMinutes()/60 < endTime) {
  main.style.display="block";
  show.style.display="none";
  // Page is available
} else {
  show.style.display="block";
  main.style.display="none";
  // Page is not available
}


function pageload(){
  document.getElementById('load').style.display="none";
  document.getElementById('container').style.display="flex";
}


function btnclick(){
  document.getElementById('btn').style.display="none";
  document.getElementById('img-box').style.display="block";
  mix.play();
  setTimeout(()=>{
    document.getElementById('ghost').style.display="block";
  },5500);
}



  // Set the date we're counting down to
  var countDownDate = new Date("Jan 1, 2030 20:00:00");

  // Update the count down every 1 second
  var timer = setInterval(function() {
    // Get today's date and time
    var now = new Date();
    
   // if (now > countDownDate) {
    //  countDownDate.setDate(countDownDate.getDate() + 1);
   // }
 
    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes, and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    if (hours <10){
      hours = "0" + hours;
    }
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    if (minutes <10){
      minutes = "0" + minutes;
    }
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    if (seconds <10){
      seconds = "0" + seconds;
    }

    // Display the result in the element with the ID "timer
  
    document.getElementById("time").innerHTML = hours + ":" + minutes + ":" + seconds ;

    // If the count down is finished
    if (distance < 0) {
      clearInterval(timer);
      document.getElementById("time").innerHTML = "Finished";
      location.reload();
    }
  }, 1000);