
const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerSet = "abcdefghijklmnopqrstuvwxyz"
const numberSet = "1234567890"
const symbolSet = "~!@#$%^&*()_+/"
const passBox = document.getElementById("pass-box")
const totalChar = document.getElementById("total-char")
const upperInput = document.getElementById("upper-case")
const lowerInput = document.getElementById("lower-case")
const numberInput = document.getElementById("numbers")
const symbolInput = document.getElementById("symbols")
const copyMsg = document.querySelector("[data-copyMsg]");
const getRandomData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)]
}

const generatePassword = (password = "") => {
    if (upperInput.checked) {
        password += getRandomData(upperSet)
    }
    if (lowerInput.checked) {
        password += getRandomData(lowerSet)
    }
    if (numberInput.checked) {
        password += getRandomData(numberSet)
    }
    if (symbolInput.checked) {
        password += getRandomData(symbolSet)
    }
    if (password.length < totalChar.value) {
        return generatePassword(password)
    }
    
    if(password.length<12)
    {
        alert("Password should be greater than 12 ");
        return -1;
        
    }
    if(password.length>32)
    {
        alert("Password should be lesser than 32 ");
        return -1;
    }
    passBox.innerText = truncateString(password, totalChar.value);
}
generatePassword();
document.getElementById("btn").addEventListener(
    "click",
    function() {
        generatePassword();
    }
)
function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    } else {
        return str;
    }
}       
function copyms(){
     const copyBtn = document.getElementById('copy-btn');
        const passBox = document.getElementById('pass-box');

        copyBtn.addEventListener('click', () => {
            // Create a temporary input element to copy the text
            const tempInput = document.createElement('input');
            tempInput.value = passBox.textContent;
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand('copy');
            document.body.removeChild(tempInput);

            // Provide user feedback
            alert('Password copied to clipboard!');
        });
}


