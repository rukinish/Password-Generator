const inputSlider = document.getElementById('inputSlider');
const sliderValue = document.getElementById('sliderValue');
const passBox = document.getElementById('passBox');
const lowercaseEl = document.getElementById('lowercase');
const uppercaseEl = document.getElementById('uppercase');
const numberEl = document.getElementById('numbers');
const symbolEl = document.getElementById('symbols');
const generateBtn = document.getElementById('getBtn');

const copyIcon = document.getElementById('copyIcon');

const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+{}[]|:;<>,.?/~';

sliderValue.textContent = inputSlider.value; //currrent value
inputSlider.addEventListener('input', () => {
    sliderValue.textContent = inputSlider.value; //update value
});

generateBtn.addEventListener('click', () => {
    passBox.value = generatePassword(); // call the function
});

function generatePassword() {
    const len = inputSlider.value; //slider value
    let characters = ''; // the characters that will be used to generate the password
    let password = '';

    characters += lowercaseEl.checked ? lowercaseLetters : '';
    characters += uppercaseEl.checked ? uppercaseLetters : '';
    characters += numberEl.checked ? numbers : '';
    characters += symbolEl.checked ? symbols : '';

    for (let i = 0; i < len; i++) {
        //returns the character , getting positve numbers, 
        password += characters.charAt(Math.floor(Math.random() * characters.length));
        console.log(password);
    }
    return password;
}

copyIcon.addEventListener('click', () => {
    if (passBox.value != '' || passBox.value.length >=10) {
        navigator.clipboard.writeText(passBox.value);
        copyIcon.innerText = 'check';

        //make it availale to copy again 
        setTimeout(() => {
            copyIcon.innerText = 'content_copy';
        }, 3000);
    }
});
