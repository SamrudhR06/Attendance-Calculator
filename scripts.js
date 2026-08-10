// Step 1: Grab references to the elements we need from the HTML
const calculateBtn = document.getElementById("calculateBtn");
const attendedInput = document.getElementById("attended");
const totalInput = document.getElementById("total");
const requiredInput = document.getElementById("required");
const resultDiv = document.getElementById("result");

// Show result messages with suitable styling
function showResult(message, type) {
  resultDiv.textContent = message;
  resultDiv.className = "result";

  if (type) {
    resultDiv.classList.add(type);
  }
}

// Step 2: Detect the button click
calculateBtn.addEventListener("click", function () {

  // Step 3: Read the values entered by the user
  const attendedValue = attendedInput.value.trim();
  const totalValue = totalInput.value.trim();
  const requiredValue = requiredInput.value.trim();

  // Check 1: Blank input boxes
  if (attendedValue === "" || totalValue === "" || requiredValue === "") {
    showResult("Please fill in all fields.", "error");
    return;
  }

  // Convert values into numbers
  const attended = Number(attendedValue);
  const total = Number(totalValue);
  const required = Number(requiredValue);

  // Check 2: Non-numeric input
  if (isNaN(attended) || isNaN(total) || isNaN(required)) {
    showResult("Please enter valid numbers only.", "error");
    return;
  }

  // Check 3: Negative numbers
  if (attended < 0 || total < 0 || required < 0) {
    showResult("Negative numbers are not allowed.", "error");
    return;
  }

  // Check 4: Decimal values for attended/total
  if (!Number.isInteger(attended) || !Number.isInteger(total)) {
    showResult("Classes attended and total classes must be whole numbers.", "error");
    return;
  }

  // Check 5: Total classes cannot be zero
  if (total === 0) {
    showResult("Total classes conducted cannot be zero.", "error");
    return;
  }

  // Check 6: Attended cannot exceed total classes
  if (attended > total) {
    showResult("Classes attended cannot be greater than total classes.", "error");
    return;
  }

  // Check 7: Required percentage range
  if (required > 100) {
    showResult("Required attendance % must be between 0 and 100.", "error");
    return;
  }

  // Calculate attendance percentage
  const attendancePercentage = (attended / total) * 100;
  const roundedPercentage = Math.round(attendancePercentage);

  let extraMessage = "";

  // Attendance is safe
  if (attendancePercentage >= required) {

    if (required === 0) {
      extraMessage = "You can skip any number of classes and still maintain 0% attendance.";
    } else {
      let simulatedAttended = attended;
      let simulatedTotal = total;
      let skipCount = 0;

      while (((simulatedAttended / (simulatedTotal + 1)) * 100) >= required) {
        simulatedTotal = simulatedTotal + 1;
        skipCount = skipCount + 1;
      }

      extraMessage = "You can skip " + skipCount +
        " more class(es) and still maintain " + required + "% attendance.";
    }

    showResult(
      "Great! Your current attendance is " + roundedPercentage +
      "%. Required: " + required + "%. " + extraMessage,
      "safe"
    );

  } else {
    let simulatedAttended = attended;
    let simulatedTotal = total;
    let mustAttendCount = 0;

    while (((simulatedAttended + 1) / (simulatedTotal + 1)) * 100 < required) {
      simulatedAttended = simulatedAttended + 1;
      simulatedTotal = simulatedTotal + 1;
      mustAttendCount = mustAttendCount + 1;
    }

    mustAttendCount = mustAttendCount + 1;

    extraMessage = "You must attend " + mustAttendCount +
      " class(es) in a row to reach " + required + "% attendance.";

    showResult(
      "Your current attendance is " + roundedPercentage +
      "%. Required: " + required + "%. " + extraMessage,
      "below"
    );
  }

  // Save values to Local Storage
  localStorage.setItem("attended", attended);
  localStorage.setItem("total", total);
  localStorage.setItem("required", required);
});

const resetBtn = document.getElementById("resetBtn");

resetBtn.addEventListener("click", function () {
  attendedInput.value = "";
  totalInput.value = "";
  requiredInput.value = "";

  resultDiv.textContent = "";
  resultDiv.className = "result";

  localStorage.removeItem("attended");
  localStorage.removeItem("total");
  localStorage.removeItem("required");

  attendedInput.focus();
});

// Load saved data when the page opens
function loadSavedAttendance() {
  const savedAttended = localStorage.getItem("attended");
  const savedTotal = localStorage.getItem("total");
  const savedRequired = localStorage.getItem("required");

  if (savedAttended !== null && savedTotal !== null && savedRequired !== null) {
    attendedInput.value = savedAttended;
    totalInput.value = savedTotal;
    requiredInput.value = savedRequired;

    calculateBtn.click();
  }
}

loadSavedAttendance();