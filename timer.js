var timerId;
var minleft = 5;
var secleft= 0;
var hleft=0;

function startTimer() {
    displayTime();
	// start timer
	timerId = setInterval(countdown, 1000);
}

function countdown() {
	if (hleft==0 && minleft == 0 && secleft==0) {
		stopTimer();
        return;
		
	}
    if( minleft==0 && secleft==0)
    {
        hleft-=1;
        minleft=59;
        secleft=60;
    }
    else if (secleft==0){
        minleft-=1;
        secleft=60;
    }
    secleft--;

    displayTime();

}

function stopTimer() {
	// stop timer
	clearInterval(timerId);
     
}
function add_min() {
    minleft+=1; 
    if(minleft==60)
    {
        minleft=0;
        hleft=1;
    }
   displayTime();
}

function decrease_min(){
    if(hleft>0 && minleft==0)
    {
        hleft-=1;
        minleft=60;
    }
    else if (minleft==0)
      return;

    minleft-=1;
    displayTime();
    
}

function reset(){
    minleft = 5;
    secleft= 0;
    document.getElementById("countdown").innerHTML = "0" + minleft + ":"+ "0" + secleft ;
}
function displayTime()
{

    if (hleft==0)
    {
      if(minleft<10 && secleft<10)
      document.getElementById("countdown").innerHTML = "0" + minleft + ":"+ "0" + secleft ;
      else if (minleft<10)
	  document.getElementById("countdown").innerHTML = "0" + minleft + ":"+ secleft ;
      else if (secleft<10)
      document.getElementById("countdown").innerHTML =  minleft + ":" + "0" + secleft ;
      else 
      document.getElementById("countdown").innerHTML =  minleft + ":"+  secleft ;
    }

    else 
    {
        if(minleft<10 && secleft<10)
        document.getElementById("countdown").innerHTML = "0" +hleft +":"+ "0" + minleft + ":"+ "0" + secleft ;
        else if (minleft<10)
        document.getElementById("countdown").innerHTML = "0" +hleft +":"+ "0" + minleft + ":"+ secleft ;
        else if (secleft<10)
        document.getElementById("countdown").innerHTML = "0" +hleft +":"+ minleft + ":" + "0" + secleft ;
        else 
        document.getElementById("countdown").innerHTML = "0" +hleft +":"+ minleft + ":"+  secleft ;  
    }

}



