const clock = document.querySelector('#clock')
const greeting = document.querySelector('#greeting')

const nameForm = document.querySelector('#name-form')

const nameInput = document.querySelector('#name-input')

let userName = localStorage.getItem('focus.userName') ?? ""
nameInput.value = userName

nameForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const name = nameInput.value.trim()

    if (!name) return

    userName = name
    nameInput.value = name

    localStorage.setItem('focus.userName', userName)

    updateGreeting()
})

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
    const message = hour < 12 ? "Good morning" 
        : hour < 18 ? "Good afternoon" 
        : "Good evening"

    greeting.textContent = !userName ? message : message + `, ${userName}`
}

updateClock()
updateGreeting()

setInterval(function() {
    updateClock()
    updateGreeting()
}, 1000)
