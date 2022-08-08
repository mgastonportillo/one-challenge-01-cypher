// Main block
const textToEncrypt = document.getElementById("inputArea");
const encryptButton = document.getElementById("encrypt");
const decryptButton = document.getElementById("decrypt");
const displayResult = document.getElementById("output");
// Regex accepts range from a to z, ñ and linebreaks
const filter = "^[a-z ñ\r\n]+$";
// Auxiliary variable for scrolling proper behaviour
let auxiliar = 0;

// Resize input text according to content
function adjustHeight(textToEncrypt){
    if (textToEncrypt.value === "") {
        textToEncrypt.style.height = "60px"
    } else {
        textToEncrypt.style.height = (textToEncrypt.scrollHeight > textToEncrypt.clientHeight) ? `${textToEncrypt.scrollHeight}px` : `${(textToEncrypt.offsetHeight - 4)}px`;
    }
}

function scrollUp() {
    window.scrollTo(0, 0);
}

function scrollDown() {
    if (auxiliar === 1) {
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
        if (auxiliar === 1) {
            null;
        } else {
            auxiliar++;
        }
    } else {
        alert("Remember: only lowercase, no special characters.");
        if (auxiliar === 1) {
            auxiliar--;
        }
    }
    // auxiliar tracking
    console.log(auxiliar);
    return auxiliar;
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
            word = word.replaceAll("ufat", "u");
            postWords.push(word);
        }
        let outcome = postWords.join(" ");
        displayResult.innerHTML = outcome;
        if (auxiliar === 1) {
            null;
        } else {
            auxiliar++;
        }
    } else {
        alert("Remember: only lowercase characters, no accentuation allowed.");
        if (auxiliar === 1) {
            auxiliar--;
        }
    }
}

function copyText() {
    const copiedMessage = displayResult.innerHTML;
    navigator.clipboard.writeText(copiedMessage);
    alert("Message successfully copied to your clipboard!");
}

// Easter Egg (It's Sherlock Time!)
