export function passwordValidity() {
    const password = document.getElementById("password");
    const passwordError = document.querySelector("#password + span.error");

    let passwordValidity = false
    const passwordRegExp =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).{4,}$/ 
    const isValid = passwordRegExp.test(password.value)
    let minLength = 10

        if (password.value.length === 0) {
            password.className = "invalid"
            showError('value-missing')
        }
        else if (!isValid) {
            password.className = "invalid"
            showError('type-mismatch')
        } 
        else if (password.value.length < minLength) {
            password.className = 'invalid'
            showError('too-short')
        }
        else {
            password.className = "valid"
            passwordError.textContent = ""
            passwordError.className = "error"
            passwordValidity = true
        }

    function showError(error) {            
        if (error === 'value-missing') {
            passwordError.textContent = "You need to enter an password.";
        } else if (error === 'type-mismatch') {
            passwordError.textContent = "Use a strong password with lowercase, uppercase, number, and special character.";
        } else if (error === 'too-short') {
            passwordError.textContent = `Password should be at least ${minLength} characters; you entered ${password.value.length}.`;
        }
    
        passwordError.className = "error active";
    }
    return passwordValidity
}