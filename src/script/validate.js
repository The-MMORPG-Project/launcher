/*const createMessage = (id, appendID, titleText, subtitleText) => {
    // Create elements
    const div = document.createElement('div')
    const title = document.createElement('p')
    const subtitle = document.createElement('p')

    div.setAttribute('id', id)
    div.setAttribute('class', 'message')

    title.setAttribute('class', 'title')
    subtitle.setAttribute('class', 'subtitle')

    div.appendChild(title)
    div.appendChild(subtitle)

    title.innerText = titleText
    subtitle.innerHTML = subtitleText

    const container = document.getElementById(appendID)
    container.appendChild(div)
}

const resetClasses = (formElements) => {
    formElements.forEach(element => {
        if (element.classList.contains('invalid')) {
            element.classList.remove('invalid')
        }
    })
}*/

const updateServerMessage = (text) => {
    const element = document.getElementById('serverMessage')
    element.style.visibility = 'visible'
    element.innerHTML = text
}

const verifyEmail = (element) => {
    if (!/^\S+@\S+$/.test(element.value) || element.value === '') {
        //createMessage('notifyEmail', 'container-email', 'Please provide a valid email', 'The email is invalid')
        //element.classList.add('invalid')
        return false
    }

    if (element.value.length < 6 || element.value.length > 50) {
        //createMessage('notifyEmail', 'container-email', 'Please provide a valid email', 'Must be between 6 and 50 characters')
        //element.classList.add('invalid')
        return false
    }

    return true
}

const verifyUsername = (element) => {
    if (!/[a-zA-Z0-9_]/.test(element.value) || element.value === '') {
        //createMessage('notifyUsername', 'container-username', 'Please provide a valid username', 'Only alphanumeric characters')
        //element.classList.add('invalid')
        return false
    }

    if (element.value.length < 3 || element.value.length > 15) {
        //createMessage('notifyUsername', 'container-username', 'Please provide a valid username', 'Must be between 3 to 15 characters')
        //element.classList.add('invalid')
        return false
    }

    return true
}

const verifyPassword = (element) => {
    if (element.value === '' || element.value.length < 5 || element.value.length > 30) {
        //createMessage('notifyPassword', 'container-password', 'Please provide a valid password', 'Must be between 5 to 30 characters')
        //element.classList.add('invalid')
        return false
    }

    return true
}

const verifyConfirmPassword = (password, confirmPassword) => {
    if (password.value !== confirmPassword.value || confirmPassword.value === '') {
        //createMessage('notifyPasswordConfirm', 'container-password-confirm', 'Please provide a valid password', 'Passwords do not match')
        //confirmPassword.classList.add('invalid')
        return false
    }

    return true
}