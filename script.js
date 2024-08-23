const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const output = document.getElementById('results-div');

checkBtn.addEventListener("click", () => {
    // Validate
    var input = userInput.value?.trim();

    if(!userInput.value || input === "") {
        window.alert("Please provide a phone number");
    }

    const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s.-]?\d{3}[\s.-]?\d{4}$/;
    
    if(regex.test(input)){
        output.innerText= "Valid US number: " + input;
    }
    else{
        output.innerText = "Invalid US number: " + input;
    }
});

clearBtn.addEventListener('click', () => {
    output.innerText = "";
});

/*
 * 1 555-555-5555
 * 1 (555) 555-5555
 * 1(555)555-5555
 * 1 555 555 5555
 * 5555555555
 * 555-555-5555
 * (555)555-5555
 * Note that the area code is required. 
 * Also, if the country code is provided, you must confirm that the country code is 1.
 */