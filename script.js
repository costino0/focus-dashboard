const clock = document.querySelector('#clock')

function updateClock() {
    const date = new Date
    const time = date.toLocaleString(undefined, {
        hour: '2-digit', 
        minute: '2-digit', 
        hour12: false
    })

    clock.textContent = time
}

updateClock()
setInterval(updateClock, 1000)