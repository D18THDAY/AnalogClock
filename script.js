
setInterval(setClock, 1000)

let hourHand = document.querySelector('[data-hour-hand]')
let minuteHand = document.querySelector('[data-minute-hand]')
let secondHand = document.querySelector('[data-second-hand]')


let setClock = function(){
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds()/60
    const minutesRatio = (secondsRatio + currentDate.getMinutes())/60
    const hoursRatio = (minutesRatio + currentDate.getHours())/12
    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio);
}

let setRotation = function(element, rotationMethod){
    element.style.setProperty('--rotation', rotationMethod * 360)
} 

