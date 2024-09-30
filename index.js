
function calculateTime(){
    var date=new Date();
   var dayNumber=date.getDay();
   var hour =date.getHours();
    var minuate=date.getMinutes();
    var sec= date.getSeconds();
    var ampm=hour>=12 ? 'PM' :'AM';
    var dayNames=["SUN","MON","TUE","WED","THU","FRI","SAT"];

  hour = hour%12;
  hour = hour? 12 :'12';
  hour = hour<10 ? '0'+hour: hour;
  minuate =minuate<10 ?'0'+ minuate :minuate;

  document.getElementById("day").innerHTML=dayNames[dayNumber];
  document.getElementById("hour").innerHTML=hour ;
  document.getElementById("minuates").innerHTML= minuate;
  document.getElementById("second").innerHTML= sec;
  document.getElementById("ampm").innerHTML= ampm;
}
calculateTime();

setInterval(calculateTime,1000); 


