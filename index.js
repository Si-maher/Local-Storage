const storageInput = document.querySelector('.storage')
const text = document.querySelector('.text')
const button = document.querySelector('.btn')
const storedInput = localStorage.getItem('textInput')

if(storageInput){
    text.textContent = storedInput
}

storageInput.addEventListener('input', userInput => {
text.textContent = userInput.target.value
})

const saveToStorage = () => {
    localStorage.setItem('textInput', text.textContent)
}
button.addEventListener('click', saveToStorage)