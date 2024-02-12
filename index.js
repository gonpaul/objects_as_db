const EmployeeDB = {
  employees: [
    { name: 'John', job: 'lead manager', department: 'Sales' },
    { name: 'Mike', job: 'cloud practitioner', department: 'IT' },
    { name: 'Oliver', job: 'recruiter', department: 'HR' },
  ],
  addEmployee(employee) {
    this.employees.push(employee);
  },
  getEmploees() {
    return this.employees;
  },
  capitilizeNames() {
    return this.employees.map(employee => {
      return {
        ...employee,
        name: employee.name.toUpperCase()
      }
    });
  },
  lowerCaseDepartments() {
    return this.employees.map(employee => {
      return {
        ...employee,
        department: employee.department.toLowerCase()
      }
    });
  },
  deleteEmployee(name) {
    this.employees = this.employees.filter(employee => employee.name !== name);
    // or use delete syntax which is not recommended because it will leave a hole in the array
    // delete this.employees[id];
  },
  updateEmployee(name, updatedEmployee) { // updatedEmployee is an object
    this.employees = this.employees.map(employee => {
      if (employee.name === name) {
        return {
          ...employee,
          ...updatedEmployee
        }
      }
      return employee;
    });
  },
  cloneEmployeeDB() {
    return Object.assign({}, this);
  },
  mergeDatabases(db1, db2) { // dbs should be lists
    return [...db1, ...db2];
  },
  showUniqueDepartments() {
    const departments = new Set();
    for (const { department } of this.employees) { // I use for of as my db is represented as a list
      departments.add(department);
    }
    return departments; // as a set
  },
  compareEmployees(employee1, employee2, ...fields) {
    const answer = fields.every(field => {
      return employee1[field] === employee2[field];
    });
    return answer;
  }
};


// if two variables refer to the same object,
// they are indeed considered equal because they point to the same memory location,
//  i.e., they are two references to the same object

export default EmployeeDB;