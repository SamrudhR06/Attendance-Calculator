// Step 1: Grab references to the elements we need from the HTML
const calculateBtn = document.getElementById("calculateBtn");
const attendedInput = document.getElementById("attended");
const totalInput = document.getElementById("total");
const requiredInput = document.getElementById("required"); // NEW: required % input
const resultDiv = document.getElementById("result");

// Step 2: Detect the button click
calculateBtn.addEventListener("click", function () {

  // Step 3: Read the values entered by the user
  // (Note: these come out as TEXT/strings right now, not numbers.
  // We'll convert them to numbers properly as we progress building the app(in next step))
  const attendedValue = attendedInput.value;
  const totalValue = totalInput.value;
  const requiredValue = requiredInput.value; 

  // Step 4: Just print these values for now to confirm everything works
  console.log("Attended:", attendedValue);
  console.log("Total:", totalValue);
  console.log("Required %:", requiredValue);

  // Also show them on the screen inside the result section
  resultDiv.textContent = 
    "Attended: " + attendedValue + 
    " | Total: " + totalValue + 
    " | Required %: " + requiredValue; 

});