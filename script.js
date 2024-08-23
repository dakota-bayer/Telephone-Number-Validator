const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");

checkBtn.addEventListener("click", () => {
    // Validate
    var input = userInput.value?.trim();

    if(!userInput.value || input === "") {
        window.alert("Please provide a phone number");
    }
});
