export function homepage() {
    console.log('Hey')
    const content = document.querySelector('#content')

    const form = document.createElement('form')
    form.id = 'registration-form'

        const formTitle = document.createElement('h3')
        formTitle.textContent = 'Registration form:'
        formTitle.className = 'form-title'

        const mail = document.createElement('div')
        mail.className = 'mail-input'
            const mailLabel = document.createElement('label')
            mailLabel.for = 'mail'
            mailLabel.textContent = 'Mail:'

            const mailInput = document.createElement('input')
            mailInput.type = 'text'
            mailInput.id = 'mail-input'


        form.append(formTitle, mail)

    content.append(form)
}