const operations = ["×", "÷", "+", "-"]
const buttons = document.querySelectorAll(".button");

let displayText = document.querySelector("#displayContent")
displayText.textContent = "";

let isResultDisplayed = false;

function updateSymbols () {
    displayText.textContent = displayText.textContent.replace("×", "*").replace("÷", "/")
    return;
}

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        if (button.id === "ac") {
            displayText.textContent = "";
            isResultDisplayed = false;
        } else if (button.id === "equal") {
            updateSymbols ();
            count ();
            displayText.textContent = count();
            isResultDisplayed = true;   
        } else {
            const lastSymbolIndex = displayText.textContent.length -1;
            if (operations.includes(button.textContent) && operations.includes(displayText.textContent[lastSymbolIndex])) {
                displayText.textContent = displayText.textContent.substring(0,lastSymbolIndex) + button.textContent;
            } else if (!isResultDisplayed) {
                displayText.textContent += button.textContent;
                isResultDisplayed = false;
            } else {
                if (button.classList.contains("number")) {
                    displayText.textContent = button.textContent;
                    isResultDisplayed = false;
                } else {
                    displayText.textContent += button.textContent;
                    isResultDisplayed = false;
                }
            }
        }
    });
});

function count () {
    return eval(displayText.textContent);
}