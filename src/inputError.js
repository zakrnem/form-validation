import { emailValidity } from "./mailValidity";
import { countryValidity } from "./countryValidity";
import { zipCodeValidity } from "./zipCodeValidity";
import { passwordValidity } from "./passValidity";
import { passwordConfirm } from "./confirmPass";

export function inputError() {
    const form = document.querySelector("form");

    window.addEventListener("load", () => {
        emailValidity()
        countryValidity()
        zipCodeValidity()
        passwordValidity()
        passwordConfirm()
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
                passwordConfirm()
                break
        }
    });

    form.addEventListener("submit", (event) => {
        let invalidForm = emailValidity() && countryValidity() && zipCodeValidity() && passwordValidity() && passwordConfirm()
        if (!invalidForm) {
            event.preventDefault()
        }
    });
}