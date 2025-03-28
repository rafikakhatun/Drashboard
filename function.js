// Sorting function
document.getElementById("sortOptions").addEventListener("change", function() {
    let selectedValue = this.value;

    if (selectedValue === "id") {
        employees.sort((a, b) => a.id - b.id);
    }
     else if (selectedValue === "name") {
        employees.sort((a, b) => a.name.localeCompare(b.name));
    } 
    else if (selectedValue === "salary-high") {
        employees.sort((a, b) => a.salary - b.salary);
    }
     else if (selectedValue === "salary-low") {
        employees.sort((a, b) => b.salary - a.salary);
    }
     else if (selectedValue === "experience-high") {
        employees.sort((a, b) => b.experience - a.experience);
    } 
    else if (selectedValue === "experience-low") {
        employees.sort((a, b) => a.experience - b.experience);
    }

    displayEmployees(); // Update table after sorting
});

// Initial display
displayEmployees();
