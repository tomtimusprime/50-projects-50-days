const password = document.getElementById('password');

function generatePassword() {
    const chars = 'abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()-=+_[]{}|\/ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const passwordLength = 12;
    let password = '';
    for (let i = 0; i < passwordLength; i++){
        let randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
    }
    document.getElementById('password').value = password;
}

function copyPassword(){
    let copyText = document.getElementById('password');
    copyText.select();
    copyText.setSelectRange(0, 999);
    copyText.execCommand('copy');
}