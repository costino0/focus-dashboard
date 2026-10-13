const clock = document.querySelector('#clock')
const greeting = document.querySelector('#greeting')

function updateClock() {
    const date = new Date
    const time = date.toLocaleString(undefined, {
        hour: '2-digit', 
        minute: '2-digit', 
        hour12: false
    })

    clock.textContent = time
}

function updateGreeting() {
    const date = new Date
    const hour = date.getHours()
    
    if (hour < 12) {
        greeting.textContent = "Good morning"
    } else if (hour < 18) {
        greeting.textContent = "Good afternoon"
    } else {
        greeting.textContent = "Good evening"
    }
}

setInterval(function() {
    updateClock()
    updateGreeting()
}, 1000)
