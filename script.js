$("document").ready(function() {

  var startmins = 25;
  var startsecs = "0";
  var mins = startmins;
  var secs = startsecs;

  $(".minus").on("click", function() {
    startmins = startmins - 1;
    $(".display").html(startmins + " : " + startsecs);
    mins = startmins;
    secs = startsecs;
  })
  $(".plus").on("click", function() {
    startmins = startmins + 1;
    $(".display").html(startmins + " : " + startsecs);
    mins = startmins;
    secs = startsecs;
  })
  mins = startmins;
  secs = startsecs;
  $(".display").html(mins + " : " + secs);
  var start;
  var stop;
  var x = 0;
  console.log(x);
  
    $(".start").on("click", function() {
      x += 1;
      console.log(x);
      if(x==1){
      stop = window.setInterval(function() {
        if ($(".display").html() != "0 : 0") {
          secs = secs - 1;
          if (secs == -1) {
            secs = 59;
            mins = mins - 1;
          }
         
          start = mins + " : " + secs;
          $(".display").html(start);
        } else if ($(".display").html() == "0 : 0") {
          window.clearInterval(stop);
          alert("Go on break!");
        }
      }, 1000)
      }
    })
 
  $(".stop").on("click", function() {
    x = 0;
    window.clearInterval(stop);
  })
  $(".reset").on("click", function() {
    x = 0;
    window.clearInterval(stop);
    $(".display").html(startmins + " : " + startsecs);
    mins = startmins;
    secs = startsecs;
  })
})