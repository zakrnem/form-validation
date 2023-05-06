export function newFormInput(userInput) {
    let inputText = userInput.replace(/[^\w\s]/gi, " ")
    .replace(/^\w/, (c) => c.toUpperCase())
    const inputContainer = document.createElement('div')
    inputContainer.className = userInput + '-input'
        const inputLabel = document.createElement('label')
        inputLabel.setAttribute('for', userInput)
        inputLabel.textContent = inputText + ':'

        const newInput = document.createElement('input')
        newInput.type = 'text'
        newInput.id = userInput
        inputContainer.append(inputLabel, newInput)
    return inputContainer
}
