// Update user's input on the document

document.addEventListener('DOMContentLoaded', ()=> {

    let fnameInput = document.getElementById('fullName');
    fnameInput.addEventListener('input', () => {
        document.querySelector('.fullname').innerHTML =  fnameInput.value
    } );

    let codeInput = document.getElementById('agent-code');
    codeInput.addEventListener('input', () => {
        document.querySelector('.agent-code').innerHTML =  codeInput.value
    } );

    let phoneInput = document.querySelector('input[name=phone]');
    phoneInput.addEventListener('input', () => {
        document.querySelector('.phone').innerHTML = phoneInput.value
    } );

})