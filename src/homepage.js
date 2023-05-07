import { newFormInput } from "../newFormInput"
import { footer } from "./footer"

export function homepage() {
    console.log('Hey')
    const content = document.querySelector('#content')

    const form = document.createElement('form')
    form.id = 'registration-form'

        const formTitle = document.createElement('h3')
        formTitle.textContent = 'Registration form:'
        formTitle.className = 'form-title'

        const submit = document.createElement('button')
        submit.id = 'submit'
        submit.textContent = 'Register now'

        const fieldset = document.createElement('fieldset')
        fieldset.className = 'input-container'

            const mail = newFormInput('mail')
            const country = newFormInput('country')
            const zipCode = newFormInput('zip-code')
            const password = newFormInput('password')
            const passwordConfirm = newFormInput ('password-confirm')

        fieldset.append(mail, country, zipCode, password, passwordConfirm)
    
    form.append(formTitle, fieldset, submit)
    content.append(form)
    footer()
}