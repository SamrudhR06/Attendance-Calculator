// Step 1: Grab references to the elements we need from the HTML
const calculateBtn = document.getElementById("calculateBtn");
const attendedInput = document.getElementById("attended");
const totalInput = document.getElementById("total");
const requiredInput = document.getElementById("required");
const resultDiv = document.getElementById("result");

// Step 2: Detect the button click
calculateBtn.addEventListener("click", function () {

  // Step 3: Read the values entered by the user (these are TEXT/strings)
  const attendedValue = attendedInput.value;
  const totalValue = totalInput.value;
  const requiredValue = requiredInput.value;

  // Step 4: Convert text values to actual NUMBERS before doing any math
  // Number() converts a string like "46" into the number 46
  const attended = Number(attendedValue);
  const total = Number(totalValue);
  const required = Number(requiredValue);

  // Step 5: Apply the formula -> Attendance % = (Attended / Total) * 100
  const attendancePercentage = (attended / total) * 100;

  // Step 6: Round off the result (Ex: 89.47512 -> 89)
  const roundedPercentage = Math.round(attendancePercentage);

  // Step 7: Display the calculated attendance % in the result section
  resultDiv.textContent = "Your current attendance is: " + roundedPercentage + 
  "% | Required: " + required + "%";

  // (Keeping this for debugging reference)
  console.log("Attended:", attended);
  console.log("Total:", total);
  console.log("Required %:", required);
  console.log("Calculated Attendance %:", roundedPercentage);
  
});

const resetBtn = document.getElementById("resetBtn");

resetBtn.addEventListener("click", function () {

  // Clear all three input boxes
  attendedInput.value = "";
  totalInput.value = "";
  requiredInput.value = "";

  // Clear the result section
  resultDiv.textContent = "";

});