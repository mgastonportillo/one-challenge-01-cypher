const textToEncrypt = document.getElementById("inputArea");
// Clears the input field to prevent cache issues on display
textToEncrypt.value = "";
const encryptButton = document.getElementById("encrypt");
const decryptButton = document.getElementById("decrypt");
const displayResult = document.getElementById("output");
const bottomPanel = document.querySelector(".bottomPanel");
const encryptLogo = document.querySelector(".rightLogos");
const cloneEncryptLogo = encryptLogo.cloneNode(true);
cloneEncryptLogo.id = "clonedEncrypt";
const outputContainer = document.getElementById("outputDisplay");
// Regex accepts range from a to z, ñ, spaces and linebreaks
const filter = "^[a-z ñ\r\n]+$";
// Auxiliary variable for scrollDown() proper behaviour
let scrollAuxiliar = 0;


// Scrolling on click event
function scrollDown() {
    if (scrollAuxiliar === 1) {
        window.scrollTo(0, document.body.scrollHeight);
    }
}

function scrollUp() {
    window.scrollTo(0, 0);
}


// Windows resize tracking
let xAxis = window.innerWidth;
let yAxis = window.innerHeight;

if (xAxis >= 1024) {
    const logos = document.querySelector(".rightLogos");
    outputContainer.appendChild(cloneEncryptLogo);
    logos.classList.add("hide");
    displayResult.classList.add("hide");
} else {
    cloneEncryptLogo.classList.add("hide");
}

function reportWindowSize() {
    xAxis = window.innerWidth;
    yAxis = window.innerHeight;
}

window.addEventListener('resize', function(event) {
    reportWindowSize();
    unhideBottom();
}, true);


// Resize input text according to content
function adjustHeight() {
    if (textToEncrypt.value === "") {
        textToEncrypt.style.height = "auto";
    } else {
        textToEncrypt.style.height = (textToEncrypt.scrollHeight > textToEncrypt.clientHeight) ? `${textToEncrypt.scrollHeight}px` : `${textToEncrypt.offsetHeight - 4}px`;
    }
}


// Fix mobile screen issues
function calculateVh() {
    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
}
// Initial calculation
calculateVh();
// Re-calculate on resize
window.addEventListener("resize", calculateVh);
// Re-calculate on device orientation change
window.addEventListener("orientationchange", calculateVh);


// Copy to clipboard
function confirmCopy(msgCopied) {
    const copyExists = document.querySelector(".copied");
    if(!copyExists) {
        const copiedContainer = document.getElementById("copyConfirm");
        const copiedDiv = document.createElement('div');
        copiedDiv.classList.add("copied");
        copiedDiv.textContent = msgCopied;            
        copiedContainer.appendChild(copiedDiv);
        setTimeout(() => {copiedDiv.remove();}, 3000);
    }
}

function copyError(errorMsg) {
    const errorExists = document.querySelector(".copyError");
    if(!errorExists) {
        const errorContainer = document.getElementById("copyConfirm");
        const errorDiv = document.createElement('div');
        errorDiv.classList.add("copyError");
        errorDiv.textContent = errorMsg;            
        errorContainer.appendChild(errorDiv);
        setTimeout(() => {errorDiv.remove();}, 3000);
    }
}

function copyText() {
    if (scrollAuxiliar === 1) {
        const copiedMsg = displayResult.innerHTML;
        navigator.clipboard.writeText(copiedMsg);
        confirmCopy("Text successfully copied to your clipboard!");
    } else {
        copyError("Uhhh... there's nothing to copy...");
    }
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
        setTimeout(() => {errorDiv.remove();}, 3000);
    }
}

// Unhide bottomPanel when there's an outcome
function unhideBottom() {
    if (xAxis >= 1024 && scrollAuxiliar === 0) {
        const logos = document.querySelector(".rightLogos");
        logos.classList.add("hide");
        outputContainer.appendChild(cloneEncryptLogo);
        displayResult.classList.add("hide");
        cloneEncryptLogo.classList.remove("hide");
        bottomPanel.classList.remove("hide");
    } else if (xAxis >= 1024 && scrollAuxiliar === 1) {
        const logos = document.querySelector(".rightLogos");
        logos.classList.add("hide");
        outputContainer.appendChild(cloneEncryptLogo);
        displayResult.classList.remove("hide");
        cloneEncryptLogo.classList.add("hide");
        bottomPanel.classList.remove("hide");
    } else if (xAxis < 1024 && scrollAuxiliar === 0) {
        const logos = document.querySelector(".rightLogos");
        logos.classList.remove("hide");
        displayResult.classList.remove("hide");
        cloneEncryptLogo.classList.add("hide");
        bottomPanel.classList.add("hide");
    } else {
        bottomPanel.classList.remove("hide");
    }
}


// MAIN FUNCTIONS


function encryptText() {
    displayResult.innerHTML = "";
    if (xAxis >= 1024) {
        displayResult.classList.add("hide");
        cloneEncryptLogo.classList.remove("hide");
    } else {
        displayResult.classList.remove("hide");
        cloneEncryptLogo.classList.add("hide");
    }
    if (textToEncrypt.value.trim() == "") {
        showError("Try typing something?");
        textToEncrypt.value = "";
        adjustHeight();
        if (scrollAuxiliar === 1) {
            scrollAuxiliar--;
        }
    } else if (textToEncrypt.value.match(filter) != null) {
        let words = textToEncrypt.value.split(" ");
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
    return scrollAuxiliar;
}

function decryptText() {
    displayResult.innerHTML = "";
    if (xAxis >= 1024) {
        displayResult.classList.add("hide");
        cloneEncryptLogo.classList.remove("hide");
    } else {
        displayResult.classList.remove("hide");
        cloneEncryptLogo.classList.add("hide");
    }
    if (textToEncrypt.value.trim() == "") {
        showError("Try typing something?");
        textToEncrypt.value = "";
        adjustHeight();
        if (scrollAuxiliar === 1) {
            scrollAuxiliar--;
        }
    } else if (textToEncrypt.value.match(filter) != null) {
        let words = textToEncrypt.value.split(" ");
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
    return scrollAuxiliar;
}