export function newFormInput(userInput) {
    let inputText = userInput.replace(/[^\w\s]/gi, " ")
    .replace(/^\w/, (c) => c.toUpperCase())
    const inputContainer = document.createElement('div')
    inputContainer.className = userInput + '-input'
        const inputLabel = document.createElement('label')
        inputLabel.setAttribute('for', userInput)
        inputLabel.textContent = inputText + ':'

        const newInput = document.createElement('input')
        newInput.type = userInput.includes('password') ? 'password' : 'text'
        newInput.id = userInput
        
        const inputError = document.createElement('span')
        inputError.className = 'error'
        inputError.setAttribute('aria-live', 'polite')

        inputContainer.append(inputLabel, newInput, inputError)
    return inputContainer
}
