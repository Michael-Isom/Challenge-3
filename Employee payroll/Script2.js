const addEmployeesBtn = document.querySelector('.btn');
const employeesFirstName = [];
const employeesLastName = [];
const employeesSalary = [];



addEmployeesBtn.addEventListener("click", function() {
    let continueAdding = true;

    while (continueAdding) {
        let EmployeesFirstName = prompt("First Name of Employee");
        let EmployeesLastName = prompt("Last Name of Employee");
        let EmployeesSalary = prompt("What is the Employee's Salary");

        employeesFirstName.push([EmployeesFirstName]);
        employeesLastName.push([EmployeesLastName]);
        employeesSalary.push([EmployeesSalary]);

        continueAdding = confirm("Would you like to add another employee?");
    }

    alert("Thank you for your submission");
});


