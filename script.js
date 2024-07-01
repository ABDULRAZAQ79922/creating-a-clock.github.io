
function myUpdateClock() {
    
    let myNow = new Date();

   
    let myHours = myNow.getHours();
    let myMinutes = myNow.getMinutes();
    let mySeconds = myNow.getSeconds();

  
    myMinutes = myMinutes < 10 ? '0' + myMinutes : myMinutes;
    mySeconds = mySeconds < 10 ? '0' + mySeconds : mySeconds;

    let myTimeString = myHours + ':' + myMinutes + ':' + mySeconds;

    document.getElementById('myClock').textContent = myTimeString;

  
    setTimeout(myUpdateClock, 1000);
}

myUpdateClock();

