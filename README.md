# Challenge-3
Employee Tracker Application

Overview

This application, developed as part of a coding bootcamp challenge, serves as an Employee Tracker. It enables users to manage employee details such as first name, last name, and salary, providing a straightforward interface to log and view employee data.
Features
	•	Employee Management: Easily log employees’ names and salaries.
	•	Interactive Prompts: Automatically prompts users to enter employee details in a loop until canceled.
	•	Data Display: Displays logged employees in a list format.
	•	Additional Tools (via console):
	•	Calculate the average salary of all employees.
	•	Randomly select an employee for a reward.
    Setup

No installation is necessary! You can access the deployed application directly by visiting Employee Tracker Website.
How to Use
	1.	Open the provided link to access the application.
	2.	Enter employee details when prompted (full name and salary).
	3.	Choose whether to add another employee or stop. This process loops until canceled.
	4.	View the list of employees on the screen.
	5.	If desired, click the “Add Employees” button to log more employees.

Additional features, such as salary averaging and random employee selection, are accessible via the browser console.
Code Example

Below is a sample of the script that handles employee data entry. It uses a loop to prompt users for details and stores the data in arrays.
const collectEmployees = function () {
  let row = document.createElement("tr");
  
  while (redo === true) {
    // Prompt for the user's name
    let person = prompt("Please enter your first and last name!");

    // Split name into first and last, then store in respective arrays
    const fullname = person.split(" ", 2);
    employee.firstName.push(fullname[0]);
    employee.lastName.push(fullname[1]);

    // Prompt user for salary
    let salaryP = prompt("Please enter your salary.");
    employee.salary.push(parseInt(salaryP));

    // Increment employee count
    empLength++;

    redo = confirm("Would you like to log another employee?");
  }

  // Reset for the next session
  redo = true;

  return employee;
};
Tools & Technologies
	•	Visual Studio Code: For writing, debugging, and version controlling the code.
	•	Google Chrome: For testing and debugging via the browser console.
	•	GitBash: To log changes and manage the repository.
	•	GitHub: For hosting the application and version control.
    