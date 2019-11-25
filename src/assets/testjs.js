function khai(){
  var baitest = document.getElementById('baitest');
  var starttest = document.getElementById('starttest');
  baitest.style.display="block";
  starttest.style.display="none";
function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);

  return {
    'total': t,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var timetest = document.getElementById('timetest');
    var t = getTimeRemaining(endtime);
    var final = document.getElementById('buttonfinal2')
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total < 0) {
      clearInterval(timeinterval);
      alert('đã hết thời gian làm bài');
      timetest.innerHTML = "5:00";
      final.click();
    }
    
    document.getElementById('buttonfinal2').onclick = (function(){
      clearInterval(timeinterval);
      timetest.innerHTML = ('0'+ (4 - t.minutes)).slice(-2) + ":" +('0' + (60 - t.seconds)).slice(-2) ;
    })
    
    
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
  
  
}

  

var deadline = new Date(Date.parse(new Date()) + 5* 60 * 1000);

initializeClock('clockdiv', deadline);

}




