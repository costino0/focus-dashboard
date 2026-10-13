// Clock selectors
const clock = document.querySelector('#clock')
const greeting = document.querySelector('#greeting')

// Greeting / user name selectors
const nameForm = document.querySelector('#name-form')
const nameInput = document.querySelector('#name-input')

let userName = localStorage.getItem('focus-userName') ?? ""
nameInput.value = userName

// Focus selectors
const focusForm = document.querySelector('#focus-form')
const focusInput = document.querySelector('#focus-input')
const focusDisplay = document.querySelector('#focus-display')
const focusCompleted = document.querySelector('#focus-completed')

const savedFocus = localStorage.getItem('focus-dailyFocus') ?? ""
focusCompleted.disabled = !savedFocus
focusInput.value = savedFocus
focusDisplay.textContent = savedFocus || "No focus set yet."

const savedCompleted = localStorage.getItem('focus-completed') === "true"
focusCompleted.checked = Boolean(savedFocus) && savedCompleted
focusDisplay.classList.toggle('is-completed', focusCompleted.checked)

// Listen for focus completed change event
focusCompleted.addEventListener('change', () => {
    focusDisplay.classList.toggle('is-completed', focusCompleted.checked)

    localStorage.setItem('focus-completed', focusCompleted.checked)
})

// Listen for focus submit
focusForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const focus = focusInput.value.trim()

    if (!focus) return

    focusCompleted.disabled = false
    focusCompleted.checked = false
    focusDisplay.classList.remove('is-completed')
    focusDisplay.textContent = focus
    focusInput.value = focus

    localStorage.setItem('focus-completed', 'false')
    localStorage.setItem('focus-dailyFocus', focus)
})

// Insert the user name inside the greeting
nameForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const name = nameInput.value.trim()

    if (!name) return

    userName = name
    nameInput.value = name

    localStorage.setItem('focus-userName', userName)

    updateGreeting()
})

// Create and update the clock
function updateClock() {
    const date = new Date
    const time = date.toLocaleString(undefined, {
        hour: '2-digit', 
        minute: '2-digit', 
        hour12: false
    })

    clock.textContent = time
}

// Assign the greeting message and update it
function updateGreeting() {
    const date = new Date
    const hour = date.getHours()
    const message = hour < 12 ? "Good morning" 
        : hour < 18 ? "Good afternoon" 
        : "Good evening"

    greeting.textContent = !userName ? message : message + `, ${userName}.`
}

updateClock()
updateGreeting()

setInterval(function() {
    updateClock()
    updateGreeting()
}, 1000)
