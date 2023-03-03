var main = document.getElementById('main');
var show = document.getElementById('show');
var mix = document.getElementById('mix');


var now = new Date();
var start = new Date();
start.setHours(4,0,0)
var end = new Date();
end.setHours(20,0,0)

if ( now > start && now < end ) {
  show.style.display="block";
  main.style.display="none";
  // Page is not available
} else {
  main.style.display="block";
  show.style.display="none";
  // Page is available
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
  setTimeout(function(){
    location.reload();
  }, 12000);
}



  // Set the date we're counting down to
  var countDownDate = new Date().setHours(20,0,0);

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
    }
  }, 1000);
  
  tm = new Date();
  
  var h1 = tm.getHours();
  if(h1>12){
    h1 = h1-12;
  }
  if(h1<10){
    h1 = "0"+h1;
  }
  var m1 = tm.getMinutes();
  if(m1<10){
    m1 = "0"+m1;
  }
  var s1 = tm.getSeconds();
  if(s1<10){
    s1 = "0"+s1;
  }
  
  function dblclick(){
    document.getElementById('box').style.display="flex"
    document.getElementById('text').style.filter="blur(50px)";
  }
  function cancel(){
    document.getElementById('box').style.display="none";
    document.getElementById('text').style.filter="blur(0)";
    document.getElementById('text').style.transition=".2s";
  }
  function check(){
  var input = document.getElementById('password').value;
  var pass1 = h1+m1;
  var pass2 = 'i12fqu';
  
  if(input=== pass1 || input=== pass2){
    show.style.display="none";
    main.style.display="block";
    setTimeout(function(){
     // window.open("https://www.google.com");
    }, 2000);
    
    swal({
	    icon: "success",
	    title: "Successful!",
	    text: "Signed in Successfully",
	    timer: 2500
	  });
  }
  else{
    swal({
	    icon: "error",
	    title: "Incorrect!",
	    text: "Your password is wrong",
	    timer: 2500
	  });
  }
  }