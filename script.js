const buttons = document.querySelectorAll(".button");
let button;

let displayText = document.querySelector("#displayContent")
displayText.textContent = "";

let result

let isResultDisplayed = false;

function updateSymbols () {
    displayText.textContent = displayText.textContent.replace("×", "*").replace("÷", "/")
    return;
}

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        if (button.id !== "equal" && button.id !== "ac") {
            if (!isResultDisplayed) {
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
        } else if (button.id === "ac") {
            displayText.textContent = "";
            isResultDisplayed = false;
        } else if (button.id === "equal") {
            updateSymbols ();
            count ();
            displayText.textContent = result;
            isResultDisplayed = true;   


        }
    });
});

function count () {
    result = eval(displayText.textContent);
}