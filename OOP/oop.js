class University {
  constructor(name) {
    this.name = name;
    this.departments = [];
  }

  addDepartment(dept) {
    if (dept && !this.departments.includes(dept)) {
      this.departments.push(dept);
    }
  }

  removeDepartment(dept) {
    this.departments = this.departments.filter(d => d !== dept);
  }

  displayDepartments() {
    const list = document.getElementById("deptList");
    list.innerHTML = "";

    if (this.departments.length === 0) {
      list.innerHTML = "<li>No departments available</li>";
      return;
    }

    this.departments.forEach(dept => {
      const li = document.createElement("li");
      li.textContent = dept;
      list.appendChild(li);
    });
  }
}

// Create University object
const uni = new University("My University");

// Button functions
function addDept() {
  const input = document.getElementById("deptInput");
  uni.addDepartment(input.value.trim());
  input.value = "";
  uni.displayDepartments();
}

function removeDept() {
  const input = document.getElementById("deptInput");
  uni.removeDepartment(input.value.trim());
  input.value = "";
  uni.displayDepartments();
}
