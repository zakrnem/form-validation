import { emailValidity } from "./mailValidity";
import { countryValidity } from "./countryValidity";
import { zipCodeValidity } from "./zipCodeValidity";

export function inputError() {
    const form = document.querySelector("form");

    window.addEventListener("load", () => {
        emailValidity()
        countryValidity()
        zipCodeValidity()
    });

    document.addEventListener("input", (e) => {
        switch (true) {
            case (e.target.id === 'mail'):
                emailValidity()
                break
            case (e.target.id === 'country'):
                countryValidity()
                break
            case (e.target.id === 'zip-code'):
                zipCodeValidity()
                break
            case (e.target.id === 'password'):
                passwordValidity()
                break
            case (e.target.id === 'password-confirm'):
                passwordValidity()
                break
        }
        
    });

    form.addEventListener("submit", (event) => {
        if (!emailValidity() &&
        !countryValidity) {
            emailValidity()
            countryValidity()
            zipCodeValidity()
            event.preventDefault()
        }
    });
}








 /* // This defines what happens when the user tries to submit the data
    form.addEventListener("submit", (event) => {
        event.preventDefault();
      
        const isValid = email.value.length === 0 || emailRegExp.test(email.value);
        if (!isValid) {
          email.className = "invalid";
          error.textContent = "I expect an email, darling!";
          error.className = "error active";
        } else {
          email.className = "valid";
          error.textContent = "";
          error.className = "error";
        }
    }); */

   /*  email.addEventListener("input", (event) => {
    // Each time the user types something, we check if the
    // form fields are valid.

    if (email.validity.valid) {
        // In case there is an error message visible, if the field
        // is valid, we remove the error message.
        emailError.textContent = ""; // Reset the content of the message
        emailError.className = "error"; // Reset the visual state of the message
    } else {
        // If there is still an error, show the correct error
        showError();
    }
    }); */