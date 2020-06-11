const { BrowserWindow, BrowserView } = require('electron').remote

const elements = {
    switcher: id('switcher'),
    btnClose: id('btnClose'),
    tabLog: id('tabLogin'),
    tabReg: id('tabRegister'),
    btnLog: id('btnLogin'),
    btnReg: id('btnRegister')
}

elements.btnClose.addEventListener('click', () => {
    BrowserWindow.getFocusedWindow().close()
})

elements.switcher.addEventListener('click', () => {
    /* Switch from login/register to register/login */
    switch (elements.switcher.innerHTML) {
        case 'Register':
            elements.tabLog.style = 'display: none;'
            elements.tabReg.style = ''
            elements.switcher.innerHTML = 'Login'
            break
        default:
            elements.tabReg.style = 'display: none;'
            elements.tabLog.style = ''
            elements.switcher.innerHTML = 'Register'
    }
})

elements.btnLog.addEventListener('click', () => {
    console.log('login')
    /*let username = ...
    let password = ...
    get(`http://webserver.com/login?usr=${username}&psw=${password}`, (err, res, body) => {
        // Do something
    })*/
})

elements.btnReg.addEventListener('click', () => {
    console.log('register')
    /*let username = ...
    let email    = ...
    let password = ...
    post(`http://webserver.com/register?usr=${username}&mail=${email}&psw=${password}`, (err, res, body) => {
        // Do something
    })*/
})