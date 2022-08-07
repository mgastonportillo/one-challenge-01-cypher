// Main block
const textToEncrypt = document.getElementById("inputArea");
const encryptButton = document.getElementById("encrypt");
const decryptButton = document.getElementById("decrypt");
const displayResult = document.getElementById("outcomeDisplay");
const filter = "^[a-z !ñ]+$";
let error = 0;

function scrollUp() {
    window.scrollTo(0, 0);
}

function scrollDown() {
    if (error === 1) {
        window.scrollTo(0, document.body.scrollHeight);
    } else {
        null;
    }
}

function encryptText() {
    displayResult.innerHTML = "";
    let text = textToEncrypt.value
    if (text.match(filter) != null) {
        let words = text.split(" ");
        let postWords = [];
        for (let word of words) {
            word = word.replaceAll("e", "enter");
            word = word.replaceAll("i", "imes");
            // Moved a under i, otherwise there's an issue
            word = word.replaceAll("a", "ai");
            word = word.replaceAll("o", "ober");
            word = word.replaceAll("u", "ufat");
            postWords.push(word);
        }
        let outcome = postWords.join(" ");
        displayResult.innerHTML = outcome;
        if (error === 1) {
            null;
        } else {
            error++;
        }
    } else {
        alert("Remember: only lowercase characters, no accentuation allowed.");
        if (error === 1) {
            error--;
        }
    }
    console.log(error);
    return error;
}

function decryptText() {
    displayResult.innerHTML = "";
    let text = textToEncrypt.value
    if (text.match(filter) != null) {
        let words = text.split(" ");
        let postWords = [];
        for (let word of words) {
            word = word.replaceAll("enter", "e");
            word = word.replaceAll("imes", "i");
            word = word.replaceAll("ai", "a");
            word = word.replaceAll("ober", "o");
            word = word.replaceAll("ufat"), "u";
            postWords.push(word);
        }
        let outcome = postWords.join(" ");
        displayResult.innerHTML = outcome;
        if (error === 1) {
            null;
        } else {
            error++;
        }
    } else {
        alert("Remember: only lowercase characters, no accentuation allowed.");
        if (error === 1) {
            error--;
        }
    }
}

function copyText() {
    const copiedMessage = displayResult.innerHTML;
    navigator.clipboard.writeText(copiedMessage);
    alert("Message successfully copied to your clipboard!");
}