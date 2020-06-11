const { ipcRenderer } = require('electron')
const { BrowserWindow, BrowserView } = require('electron').remote

const elements = {
    switcher: id('switcher'),
    btnClose: id('btnClose'),
    tabLog: id('tabLogin'),
    tabReg: id('tabRegister'),
    btnLog: id('btnLogin'),
    btnReg: id('btnRegister'),
    username: id('username'),
    password: id('password'),
    passwordConfirm: id('passwordConfirm'),
    email: id('email')
}

elements.btnClose.addEventListener('click', () => {
    BrowserWindow.getFocusedWindow().close()
})

elements.switcher.addEventListener('click', () => {
    // Switch between register and login pages
    if (elements.switcher.innerHTML === 'Register') {
        elements.tabLog.setAttribute('style', 'display: none;')
        elements.tabReg.setAttribute('style', '')
        elements.switcher.innerHTML = 'Login'
    } else {
        elements.tabReg.setAttribute('style', 'display: none;')
        elements.tabLog.setAttribute('style', '')
        elements.switcher.innerHTML = 'Register'
    }
})

elements.btnLog.addEventListener('click', () => {
    ipcRenderer.send('login', { username: 'Bob', password: 'nimda' })
})

ipcRenderer.on('status', (event, arg) => {
    if (arg === StatusCode.LOGIN_DOESNT_EXIST) {
        updateServerMessage('Login does not exist')
        return
    }

    if (arg === StatusCode.LOGIN_WRONG_PASSWORD) {
        updateServerMessage('Wrong password')
        return
    }

    if (arg === StatusCode.LOGIN_SUCCESS) {
        updateServerMessage('Login successful!')
    }
})

elements.btnReg.addEventListener('click', () => {
    console.log('register')
})

const validateLogin = () => {
    return [
        verifyUsername(elements.username),
        verifyPassword(elements.password)
    ].every(v => v)
}

const validateRegister = () => {
    return [
        verifyEmail(elements.email),
        verifyUsername(elements.username),
        verifyPassword(elements.password),
        verifyConfirmPassword(elements.password, elements.confirmPassword)
    ].every(v => v)
}