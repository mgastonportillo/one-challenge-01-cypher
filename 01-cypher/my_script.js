const textToEncrypt = document.getElementById("inputArea");
const encryptButton = document.getElementById("encrypt");
const decryptButton = document.getElementById("decrypt");
const displayResult = document.getElementById("output");
const bottomPanel = document.querySelector(".bottomPanel");
// Regex accepts range from a to z, ñ, spaces and linebreaks
const filter = "^[a-z ñ\r\n]+$";

// Auxiliary variable for scrollDown() proper behaviour
let scrollAuxiliar = 0;
// Scrolling on click event
function scrollDown() {
    if (scrollAuxiliar === 1) {
        window.scrollTo(0, document.body.scrollHeight);
    } else {
        null;
    }
}

function scrollUp() {
    window.scrollTo(0, 0);
}

// Resize input text according to content
function adjustHeight() {
    if (textToEncrypt.value === "") {
        textToEncrypt.style.height = "60px";
    } else {
        textToEncrypt.style.height = (textToEncrypt.scrollHeight > textToEncrypt.clientHeight) ? `${textToEncrypt.scrollHeight}px` : `${textToEncrypt.offsetHeight - 4}px`;
    }
}

// Copy to clipboard
function confirmCopy(msgCopied) {
    const copyExists = document.querySelector(".copied");
    if(!copyExists) {
        const copiedContainer = document.getElementById("copyConfirm");
        const copiedDiv = document.createElement('div');
        copiedDiv.classList.add("copied");
        copiedDiv.textContent = msgCopied;            
        copiedContainer.appendChild(copiedDiv);
        setTimeout(() => {copiedDiv.remove();}, 4000);
    }
}

function copyText() {
    const copiedMsg = displayResult.innerHTML;
    navigator.clipboard.writeText(copiedMsg);
    confirmCopy("Text successfully copied to your clipboard!");
}

// Error notification
function showError(errorMsg) {
    const errorExists = document.querySelector(".error");
    if(!errorExists) {
        const errorContainer = document.getElementById("errorMsg");
        const errorDiv = document.createElement('div');
        errorDiv.classList.add("error");
        errorDiv.textContent = errorMsg;            
        errorContainer.appendChild(errorDiv);
        setTimeout(() => {errorDiv.remove();}, 4000);
    }
}

// Unhide bottomPanel when there's an outcome
function unhideBottom() {
    if (displayResult.innerHTML != "") {
        bottomPanel.classList.remove("hide");
    } else {
        bottomPanel.classList.add("hide");
    }
}

// Main functions
function encryptText() {
    displayResult.innerHTML = "";
    let text = textToEncrypt.value
    if (text == "") {
        showError("Try typing something?");
        if (scrollAuxiliar === 1) {
            scrollAuxiliar--;
        }
    } else if (text.match(filter) != null) {
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
        if (scrollAuxiliar === 1) {
            null;
        } else {
            scrollAuxiliar++;
        }
    } else {
        showError("Remember: only lowercase, no accentuation nor other special characters!");
        if (scrollAuxiliar === 1) {
            scrollAuxiliar--;
        }
    }
    unhideBottom();
    // scrollAuxiliar tracking
    console.log(scrollAuxiliar);
    return scrollAuxiliar;
}

function decryptText() {
    displayResult.innerHTML = "";
    let text = textToEncrypt.value
    if (text == "") {
        showError("Try typing something?");
        if (scrollAuxiliar === 1) {
            scrollAuxiliar--;
        }
    } else if (text.match(filter) != null) {
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
        if (scrollAuxiliar === 1) {
            null;
        } else {
            scrollAuxiliar++;
        }
    } else {
        showError("Remember: only lowercase, no accentuation nor other special characters!");
        if (scrollAuxiliar === 1) {
            scrollAuxiliar--;
        }
    }
    unhideBottom();
}

// Easter Egg (It's Sherlock Time!)
