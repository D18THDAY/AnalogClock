
setInterval(setClock, 1000);

let hourHand = document.getElementById('hours')
let minuteHand = document.getElementById('minutes')
let secondHand = document.getElementById('seconds')


let setClock = function(){
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds()/60
    const minutesRatio = (secondsRatio + currentDate.getMinutes())/60
    const hoursRatio = (minutesRatio + currentDate.getHours())/12
    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)
    alert(secondsRatio);
}

let setRotation = function(element, rotationMethod){
    element.style.setProperty('--rotation', rotationMethod * 360)
} 

