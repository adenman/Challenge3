const addEmployeesBtn = document.querySelector('#add-employees-btn'); 

let employeesArray = [];


function collectEmployees() {
    while (true) {
        let firstName = prompt("Enter employee's first name:");
        let lastName = prompt("Enter employee's last name:");
        let salaryInput = prompt("Enter employee's salary:");

        
        let salary = parseFloat(salaryInput);
        if (isNaN(salary)) {
            salary = 0; 
        }

        
        let employee = {
            firstName: firstName,
            lastName: lastName,
            salary: salary
        };

        
        employeesArray.push(employee);

       
        let addAnother = confirm("Do you want to add another employee? ");
        if (addAnother == false) {
            break; 
        }
    }

    return employeesArray;
}


function displayAverageSalary(employees) {
    let totalSalary = employees.reduce((sum, employee) => sum + employee.salary, 0);
    let averageSalary = employees.length === 0 ? 0 : totalSalary / employees.length;
    console.log(`The average salary between our ${employees.length} employee(s) is $${averageSalary.toFixed(2)}`);
}

function getRandomEmployee(employees) {
    let randomIndex = Math.floor(Math.random() * employees.length);
    let randomEmployee = employees[randomIndex];
    console.log(`Congrats to ${randomEmployee.firstName} ${randomEmployee.lastName} for winning our random selection`);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData); {
  
}
