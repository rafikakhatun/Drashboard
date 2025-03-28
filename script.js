
//step 1

const employees = [
  {
    "id": 101,
    "name": "John Doe",
    "designation": "Software Engineer",
    "salary": 65000,
    "experience": 4
  },
  {
    "id": 102,
    "name": "Jane Smith",
    "designation": "HR Manager",
    "salary": 55000,
    "experience": 6
  },
  {
    "id": 103,
    "name": "Michael Johnson",
    "designation": "Graphic Designer",
    "salary": 48000,
    "experience": 3
  },
  {
    "id": 104,
    "name": "Emily Davis",
    "designation": "Marketing Executive",
    "salary": 47000,
    "experience": 5
  },
  {
    "id": 105,
    "name": "David Wilson",
    "designation": "Software Developer",
    "salary": 60000,
    "experience": 4
  },
  {
    "id": 106,
    "name": "Sarah Brown",
    "designation": "Data Analyst",
    "salary": 62000,
    "experience": 5
  },
  {
    "id": 107,
    "name": "Daniel Martinez",
    "designation": "Network Engineer",
    "salary": 58000,
    "experience": 4
  },
  {
    "id": 108,
    "name": "Olivia Taylor",
    "designation": "Project Manager",
    "salary": 75000,
    "experience": 7
  },
  {
    "id": 109,
    "name": "James Anderson",
    "designation": "System Administrator",
    "salary": 52000,
    "experience": 5
  },
  {
    "id": 110,
    "name": "Sophia Thomas",
    "designation": "UX/UI Designer",
    "salary": 50000,
    "experience": 3
  },
  {
    "id": 111,
    "name": "William Harris",
    "designation": "Software Tester",
    "salary": 47000,
    "experience": 2
  },
  {
    "id": 112,
    "name": "Isabella Lewis",
    "designation": "Content Writer",
    "salary": 45000,
    "experience": 2
  },
  {
    "id": 113,
    "name": "Alexander Young",
    "designation": "SEO Specialist",
    "salary": 48000,
    "experience": 3
  },
  {
    "id": 114,
    "name": "Mia King",
    "designation": "Database Administrator",
    "salary": 61000,
    "experience": 5
  },
  {
    "id": 115,
    "name": "Benjamin Wright",
    "designation": "Cyber Security Expert",
    "salary": 70000,
    "experience": 6
  },
  {
    "id": 116,
    "name": "Charlotte Hall",
    "designation": "Cloud Engineer",
    "salary": 68000,
    "experience": 5
  },
  {
    "id": 117,
    "name": "Ethan Allen",
    "designation": "AI Engineer",
    "salary": 75000,
    "experience": 7
  },
  {
    "id": 118,
    "name": "Amelia Scott",
    "designation": "Blockchain Developer",
    "salary": 77000,
    "experience": 6
  },
  {
    "id": 119,
    "name": "Liam Baker",
    "designation": "Game Developer",
    "salary": 65000,
    "experience": 4
  },
  {
    "id": 120,
    "name": "Emma Carter",
    "designation": "IT Support Specialist",
    "salary": 50000,
    "experience": 3
  },

  {
    "id": 121,
    "name": "David Wilson",
    "designation": "Software Engineer",
    "salary": 60000,
    "experience": 4
  },

  {
    "id": 122,
    "name": "David Wilson",
    "designation": "Software Developer",
    "salary": 60000,
    "experience": 4
  },

  {
    "id": 123,
    "name": "David Wilson",
    "designation": "Software Engineer",
    "salary": 90000,
    "experience": 4
  },
];



const tableBody = document.getElementById("employeeTableBody");


function displayFunction(employees) {

  tableBody.innerHTML = "";


  
  employees.forEach((employee, index) => {

    const tableRow = document.createElement("tr");   // tbody  tr create 
    // uses ternary operator
    tableRow.className = index % 2 === 0 ? "bg-sky-400" : "bg-blue-800";

  

    tableRow.innerHTML = `

  <td>${employee.id}</td>
  <td>${employee.name}</td>
  <td>${employee.designation}</td>
  <td>${employee.salary}</td>
  <td>${employee.experience}</td>
  `;

    //appent section
    tableBody.appendChild(tableRow);

  });

}


//  filtering data table search option
const searchElement = document.getElementById("searchInput");
searchElement.addEventListener("keyup", (data) => {
  const searchValue = data.target.value.toLowerCase();
  const filterEmp = employees.filter(emp => emp.name.toLowerCase().includes(searchValue));
  displayFunction(filterEmp);






});

// function call 
displayFunction(employees);

// sort data table
const newArray = [...employees]; // sperad operator


const sortData = document.getElementById("sortBy");
sortData.addEventListener("change", (data) => {
  const sortValue = data.target.value;



  if (sortValue == "id") {
    newArray.sort((obj1, obj2) => obj2.id - obj1.id)

  }

  else if (sortValue == "name") {
    newArray.sort((obj1, obj2) => obj2.name.localeCompare(obj1.name))



  }

  else if (sortValue == "salary-low") {
    newArray.sort((obj1, obj2) => obj2.salary - obj1.salary)



  }


  else if (sortValue == "salary-high") {
    newArray.sort((obj1, obj2) => obj1.salary - obj2.salary)



  }

  else if(sortValue == "experience-low"){

    newArray.sort((obj1,obj2)=> obj2.experience - obj1.experience)

  }

  else if (sortValue == "experience-high"){
    newArray.sort((obj1,obj2)=> obj1.experience - obj2.experience)

  }
displayFunction(newArray)


});

// filter by designation

var designation = document.getElementById("Designation");
designation.addEventListener("change", (event) => {

  const designationValue = event.target.value.toLowerCase();
  

  // filter method only selected designation value

  const filteredEmployee = employees.filter(emp=>

    designationValue === "" || emp.designation.toLowerCase() === designationValue
    
  );

  

  displayFunction(filteredEmployee);
  console.log("Filtered Employee: ", filteredEmployee);

  
  




  

});
