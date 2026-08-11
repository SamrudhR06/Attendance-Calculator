# Attendance Calculator

A simple web-based attendance calculator designed to make tracking college attendance quick and convenient. The application calculates the current attendance percentage and helps determine whether a student can afford to miss additional classes while staying above the required attendance percentage.

## Overview

The Attendance Calculator is built as a lightweight daily-use web application using HTML, CSS, and JavaScript. Instead of manually calculating attendance every time, users can enter their attended and total classes and immediately get their current attendance percentage.

The application also provides useful information based on the required attendance percentage, such as how many classes can be skipped while remaining above the minimum requirement or how many consecutive classes need to be attended to recover from a lower attendance percentage.

The application stores the user's attendance information in the browser using `localStorage`, allowing the data to remain available even after closing and reopening the webpage.

## Live Demo

**[Attendance Calculator](https://samrudhr06.github.io/Attendance-Calculator/)**

## Features

* Calculate current attendance percentage from classes attended and total classes held.
* Determine how many additional classes can be missed while maintaining the required attendance percentage.
* Determine how many classes need to be attended consecutively to reach the required percentage when attendance is below the target.
* Save attendance data using browser `localStorage`.
* Automatically restore previously saved attendance data when the application is reopened.
* Reset the application by clearing saved attendance data and returning the input fields and results to their initial state.
* Validate user input to prevent invalid attendance calculations.
* Responsive and clean interface designed to work across different screen sizes.
* Deployed as a web application so it can be accessed from different devices.

## How It Works

The user provides:

* **Classes Attended** — the number of classes the student has attended.
* **Total Classes** — the total number of classes conducted.

The application calculates the attendance percentage using the entered values and compares it with the required attendance percentage.

Based on the result, the application provides a practical recommendation about whether additional classes can be skipped or whether more classes need to be attended to reach the required percentage.

The attendance values are saved locally in the browser so that the user does not have to enter the same information every time the application is opened.

## Technologies Used

* **HTML** — Provides the structure and input elements of the application.
* **CSS** — Handles the layout, styling, and responsive design.
* **JavaScript** — Handles user input, attendance calculations, validation, application logic, and interaction with the webpage.
* **localStorage** — Stores attendance information in the user's browser so it persists between visits.
* **Git & GitHub** — Used for version control and maintaining the project repository.
* **GitHub Pages** — Used to deploy the application as a publicly accessible web application.

## Project Structure

```text
attendance-calculator/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

### `index.html`

Contains the structure of the application, including the attendance input fields, buttons, and areas where calculation results are displayed.

### `style.css`

Contains the styling for the application, including the layout, input fields, buttons, results, and responsive design.

### `script.js`

Contains the application logic, including reading user input, calculating attendance, determining possible skips or required attendance, validating inputs, saving and retrieving data with `localStorage`, and handling the reset functionality.

## Deployment

The application is deployed using GitHub Pages, allowing it to be accessed through a web browser instead of requiring the project files to be run locally.

Since the application uses browser `localStorage` for persistence, attendance data is stored separately on each device and browser. The deployed application itself can be accessed from different devices, while each device maintains its own locally stored attendance data.
