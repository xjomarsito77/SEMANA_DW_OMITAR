const countdown = document.querySelector(".countdown")

const days = countdown.querySelector("#days")
const hours = countdown.querySelector("#hours")
const minutes = countdown.querySelector("#minutes")
const seconds = countdown.querySelector("#seconds")

setInterval(() => {
    var difference = 1704085199999 - Date.now()
    
    const time = {
        days    : Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours   : Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes : Math.floor((difference / 1000 / 60) % 60),
        seconds : Math.floor((difference / 1000) % 60),
    };

    days.innerHTML = time.days
    hours.innerHTML = time.hours
    minutes.innerHTML = time.minutes
    seconds.innerHTML = time.seconds
}, 1000)