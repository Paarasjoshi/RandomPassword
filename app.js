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

function generatePassword() {
    const length = parseInt(document.getElementById('total-char').value, 10);
    const useUpper = document.getElementById('upper-case').checked;
    const useLower = document.getElementById('lower-case').checked;
    const useNumber = document.getElementById('numbers').checked;
    const useSymbol = document.getElementById('symbols').checked;

    const selectedTypes = [useUpper, useLower, useNumber, useSymbol].filter(Boolean).length;

    if (length < selectedTypes) {
        alert(`Password length must be at least ${selectedTypes} to include all selected character types.`);
        return;
    }
    if (length > 32) {
        alert("Password length must not exceed 32.");
        return;
    }

    let password = "";
    while (password.length < length) {
        if (useUpper) {
            password += getRandomData(upperSet)
        }
        if (useLower) {
            password += getRandomData(lowerSet)
        }
        if (useNumber) {
            password += getRandomData(numberSet)
        }
        if (useSymbol) {
            password += getRandomData(symbolSet)
        }
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


