export function emailValidity() {
    const email = document.getElementById("mail");
    const emailError = document.querySelector("#mail + span.error");

    let mailValidity = false
    const emailRegExp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    const isValid = emailRegExp.test(email.value)
    const emailMinLength = 8

        if (email.value.length === 0) {
            email.className = "invalid"
            showError('value-missing')
        }
        else if (!isValid) {
            email.className = "invalid"
            showError('type-mismatch')
        } 
        else if (email.value.length < emailMinLength) {
            email.className = 'invalid'
            showError('too-short')
        }
        else {
            email.className = "valid"
            emailError.textContent = ""
            emailError.className = "error"
            mailValidity = true
        }

    function showError(error) {            
        if (error === 'value-missing') {
            emailError.textContent = "You need to enter an email address.";
        } else if (error === 'type-mismatch') {
            emailError.textContent = "Entered value needs to be an email address.";
        } else if (error === 'too-short') {
            emailError.textContent = `Email should be at least ${emailMinLength} characters; you entered ${email.value.length}.`;
        }
    
        emailError.className = "error active";
    }
    return mailValidity
}