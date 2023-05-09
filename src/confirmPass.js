export function passwordConfirm() {
    const password = document.getElementById('password')
    const passConfirm = document.getElementById('password-confirm')
    const passConfirmError = document.querySelector('#password-confirm + span.error')
    let passConfirmValidity = false

    if (passConfirm.value.length === 0) {
        passConfirm.className = 'invalid'
        passConfirmError.className = 'error active'
        passConfirmError.textContent = 'You need to confirm the password.'
    } else if (passConfirm.value !== password.value) {
        passConfirm.className = 'invalid'
        passConfirmError.className = 'error active'
        passConfirmError.textContent = 'Passwords do not match.'
    } else {
        passConfirm.className = 'valid'
        passConfirmError.textContent = ''
        passConfirmError.className = 'error'
        passConfirmValidity = true
    }
    return passConfirmValidity
}