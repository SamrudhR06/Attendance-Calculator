// Step 1: Grab references to the elements we need from the HTML
const calculateBtn = document.getElementById("calculateBtn");
const attendedInput = document.getElementById("attended");
const totalInput = document.getElementById("total");
const requiredInput = document.getElementById("required");
const resultDiv = document.getElementById("result");

// Step 2: Detect the button click
calculateBtn.addEventListener("click", function () {

  // Step 3: Read the values entered by the user (these are TEXT/strings)
  // .trim() removes leading/trailing whitespace so "   " counts as blank
  const attendedValue = attendedInput.value.trim();
  const totalValue = totalInput.value.trim();
  const requiredValue = requiredInput.value.trim();

  /*
    ------------------------------------------------
    VALIDATION BLOCK
    ------------------------------------------------
    
  */

  // Check 1: Blank / whitespace-only input boxes
  if (attendedValue === "" || totalValue === "" || requiredValue === "") {
    resultDiv.textContent = "Error: Please fill in all fields.";
    return;
  }

  // Convert to numbers to we can validate them properly
  const attended = Number(attendedValue);
  const total = Number(totalValue);
  const required = Number(requiredValue);

  // Check 2: Non-numeric input (e.g., letters, symbols) -> Number() gives NaN
  if (isNaN(attended) || isNaN(total) || isNaN(required)) {
    resultDiv.textContent = "Error: Please enter valid numbers only.";
    return;
  }

  // Check 3: Negative numbers
  if (attended < 0 || total < 0 || required < 0) {
    resultDiv.textContent = "Error: Negative numbers are not allowed.";
    return;
  }

  // Check 4: Decimal values for attended/total (these should be whole numbers)
  if (!Number.isInteger(attended) || !Number.isInteger(total)) {
    resultDiv.textContent = "Error: Classes attended and total classes must be whole numbers.";
    return;
  }

  // Check 5: Total classes = 0 (avoids division by zero)
  if (total === 0) {
    resultDiv.textContent = "Error: Total classes conducted cannot be zero.";
    return;
  }

  // Check 6: Attended greater than total
  if (attended > total) {
    resultDiv.textContent = "Error: Classes attended cannot be greater than total classes.";
    return;
  }

  // Check 7: Required % out of realistic range (0-100)
  if (required < 0 || required > 100) {
    resultDiv.textContent = "Error: Required attendance % must be between 0 and 100.";
    return;
  }

  /*
    ------------------------------------------------
    All validations passed - proceed with calculation
    ------------------------------------------------
  */

  // Step 5: Apply the formula -> Attendance % = (Attended / Total) * 100
  const attendancePercentage = (attended / total) * 100;

  // Step 6: Round off the result (Ex: 89.47512 -> 89)
  const roundedPercentage = Math.round(attendancePercentage);

  /*
    Module 5: Skip / Must-Attend Calculator
    ------------------------------------------------
    This section calculates how many more classes a student can skip or must attend
  */

  let extraMessage = "";

  if (attendancePercentage >= required) {

    // SAFE TO SKIP: keep increasing total classes (simulating skipped classes)
    // while attended stays the same, using PRECISE values throughout
    let simulatedAttended = attended;
    let simulatedTotal = total;
    let skipCount = 0;

    // Keep skipping as long as the PRECISE percentage stays >= required
    while (((simulatedAttended / (simulatedTotal + 1)) * 100) >= required) {
      simulatedTotal = simulatedTotal + 1;
      skipCount = skipCount + 1;
    }

    extraMessage = "You can skip " + skipCount + " more class(es) and still maintain " + required + "% attendance.";

  } else {

    // NOT SAFE: keep increasing both attended and total (simulating attending classes)
    // using PRECISE values throughout
    let simulatedAttended = attended;
    let simulatedTotal = total;
    let mustAttendCount = 0;

    // Keep attending as long as the PRECISE percentage stays below required
    while (((simulatedAttended + 1) / (simulatedTotal + 1)) * 100 < required) {
      simulatedAttended = simulatedAttended + 1;
      simulatedTotal = simulatedTotal + 1;
      mustAttendCount = mustAttendCount + 1;
    }

    // Add the one final class that pushes it to meet/exceed the required %
    mustAttendCount = mustAttendCount + 1;

    extraMessage = "You must attend " + mustAttendCount + " class(es) in a row to reach " + required + "% attendance.";

  }

  // Step 7: Display the calculated attendance % and extra message in the result section
  resultDiv.textContent = "Your current attendance is: " + roundedPercentage + 
  "% | Required: " + required + "% | " + extraMessage;

  // (Keeping this for debugging reference)
  console.log("Attended:", attended);
  console.log("Total:", total);
  console.log("Required %:", required);
  console.log("Calculated Attendance %:", roundedPercentage);
  console.log(extraMessage);
  
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