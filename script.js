//Generate a random password with user inputs
var passwordEl = document.getElementById('display');
var generateBtn = document.getElementById('generate');
var copyBtn = document.getElementById('copy');
var message = document.getElementById("message")

//Variables
var lowerCaseEl,
    upperCaseEl,
    numberEl,
    symbolEl,
    lengthEl,
    length,
    lowercase,
    uppercase,
    symbol,
    number;

    var masterPassword = [];
    var lowerCaseArray = ['abcdefghijklmnopqrstuvxyz'];
    var upperCaseArray = ['ABCDEFGHIJKLMNOPQRSTUVWYZ'];
    var symbolArray = ['!@#$%^&*()_+-{}[]~|<>;:?/='];
    var numberArray = '0123456789';


        //Click generate for random password with user inputs
        generateBtn.addEventListener('click', generatePassword);

    function generatePassword() {
        //Prompts user desire password length
        var lengthEl = prompt("Choose a number between 8 and 128 for your password length");
        var length = parseInt(lengthEl);
        if(lengthEl >= 8 && lengthEl <= 128) {
            console.log(parseInt(length));
        } else {
            generatePassword();
        }

        //Prompts user for lowercase letters
        var lowerCaseEl = confirm("Would you like lower-case characters?");
        var lowercase = lowerCaseEl;
            if(lowerCaseEl) {
                masterPassword += lowerCaseArray.slice(0,8);
                console.log(lowercase)
            }
         

        //Prompts user for uppercase letters
        var upperCaseEl = confirm("Would you like upper-case characters?");
        var uppercase = upperCaseEl;
            if(upperCaseEl) {
                masterPassword += upperCaseArray.slice(0,8);
                console.log(upperCaseEl);
            }

        //Prompts user for symbols
        var symbolEl = confirm("Would you like symbols?");
        var symbol = symbolEl;
        if(symbolEl) {
            masterPassword += symbolArray
            console.log(symbol);
        }

        //Prompts user for numbers
        var numberEl = confirm("Would you like numbers?")
        var number = numberEl;
        if(numberEl) {
            masterPassword += numberArray.slice(0,8);
            console.log(number)
        }

        //User must choose 1 option for password generation
        if (!lowerCaseEl && !upperCaseEl && !numberEl && !symbolEl) {
            alert("You must select at least 1 option for password creation.")
            generatePassword();
        };

        //document.getElementById("display").masterPassword = generatePassword;

        passwordEl = newPassword(length, masterPassword);       
    }

    //Password Generation Function
    newPassword = function (length, masterPassword) {
        var passwordEl = document.getElementById("display");
        //Initialize final password as blank string
        let userPassword = '';

        //Apend random character form masterPassword
        for (let i = 0; i < length; i++) {
            userPassword += masterPassword.charAt(Math.floor(Math.random() * masterPassword.length))
        };
        passwordEl.innerHTML = userPassword;
    }

    //Copy to Clipboard function
    function copyClip() {
        //Grabs text in area
        var copyBtn = document.getElementById("display");

        //Selects textarea
        copyBtn.select();
        copyBtn.setSelectionRange(0, 99999);

        //Copies textarea
        document.execCommand("copy");

    //Logic to display message
    if (copyBtn.innerHTML === '') {
        setMessage("You must generate a password first!", "red")
    } else
        setMessage("Copied to clipboard", "green")
    };

    //Flashes alert if copied to clipboard or failed
    function setMessage(msg, color) {
        message.style.color = color
        message.textContent = msg;
    }
