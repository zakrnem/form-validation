import { newFormInput } from "../newFormInput"

export function homepage() {
    console.log('Hey')
    const content = document.querySelector('#content')

    const form = document.createElement('form')
    form.id = 'registration-form'

        const formTitle = document.createElement('h3')
        formTitle.textContent = 'Registration form:'
        formTitle.className = 'form-title'

        const mail = newFormInput('mail')
        const country = newFormInput('country')
        const zipCode = newFormInput('zip-code')
        const password = newFormInput('password')
        const passwordConfirm = newFormInput ('password-confirm')
        
        const submit = document.createElement('button')
        submit.id = 'submit'
        submit.textContent = 'Register now'

        form.append(formTitle, mail, country, zipCode, password, passwordConfirm, submit)

    content.append(form)
}