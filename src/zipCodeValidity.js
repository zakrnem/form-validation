export function zipCodeValidity() {
    const zipCode = document.querySelector('#zip-code')
    const zipCodeError = document.querySelector("#zip-code + span.error")
    let zipCodeValidity = false
    
    if (zipCode.value.length === 0) {
        zipCode.className = 'invalid'
        zipCodeError.className = 'error active'
        zipCodeError.textContent = 'You need to enter a zip code.'
    } else {
        zipCode.className = 'valid'
        zipCodeError.textContent = ''
        zipCodeError.className = 'error'
        zipCodeValidity = true
    }
    return zipCodeValidity
}