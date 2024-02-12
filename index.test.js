import EmployeeDB from './index.js';
describe('EmployeeDB', () => {
  let db;
  beforeEach(() => {
    db = Object.create(EmployeeDB);
    db.employees = [
      { name: 'John', job: 'lead manager', department: 'Sales' },
      { name: 'Mike', job: 'cloud practitioner', department: 'IT' },
      { name: 'Oliver', job: 'recruiter', department: 'HR' },
    ];
  });

  // Testing addEmployee function
  describe('addEmployee', () => {
    it('should add an employee to the database', () => {
      const newEmployee = { name: 'Jane', job: 'developer', department: 'IT' };
      db.addEmployee(newEmployee);
      expect(db.employees).toContain(newEmployee);
    });
    // Add more tests here...
  });

  // Testing getEmployees function
  describe('getEmployees', () => {
    it('should return all employees', () => {
      const employees = db.getEmployees();
      expect(employees).toEqual(db.employees);
    });
    // Add more tests here...
  });

  // Testing capitalizeNames function
  describe('capitalizeNames', () => {
    it('should capitalize all employee names', () => {
      const capitalizedEmployees = db.capitalizeNames();
      capitalizedEmployees.forEach(employee => {
        expect(employee.name).toBe(employee.name.toUpperCase());
      });
    });
    // Add more tests here...
  });

  // Testing deleteEmployee function
  describe('deleteEmployee', () => {
    it('should delete an employee from the database', () => {
      const employeeName = 'John';
      db.deleteEmployee(employeeName);
      expect(db.employees.some(employee => employee.name === employeeName)).toBe(false);
    });
    // Add more tests here...
  });

  // Testing updateEmployee function
  describe('updateEmployee', () => {
    it('should update an employee in the database', () => {
      const updatedEmployee = { name: 'John', job: 'developer', department: 'IT' };
      db.updateEmployee('John', updatedEmployee);
      expect(db.employees.find(employee => employee.name === 'John')).toEqual(updatedEmployee);
    });
    // Add more tests here...
  });

  // Testing cloneEmployeeDB function
  describe('cloneEmployeeDB', () => {
    it('should clone the database', () => {
      const clonedDb = db.cloneEmployeeDB();
      expect(clonedDb).toEqual(db);
    });
    // Add more tests here...
  });

  // Testing mergeDatabases function
  describe('mergeDatabases', () => {
    it('should merge two databases', () => {
      const db1 = [{ name: 'John', job: 'developer', department: 'IT' }];
      const db2 = [{ name: 'Jane', job: 'developer', department: 'IT' }];
      const mergedDb = db.mergeDatabases(db1, db2);
      expect(mergedDb).toEqual([...db1, ...db2]);
    });
    // Add more tests here...
  });

  // Testing showUniqueDepartments function
  describe('showUniqueDepartments', () => {
    it('should return unique departments', () => {
      db.employees.push({ name: 'Jane', job: 'developer', department: 'IT' }); // Adding another IT department
      const uniqueDepartments = db.showUniqueDepartments();
      expect(uniqueDepartments.size).toBe(3); // Sales, IT, HR are the unique departments
    });
    // Add more tests here...
  });

  // Testing compareEmployees function
  describe('compareEmployees', () => {
    it('should compare employees based on given fields', () => {
      const employee1 = { name: 'John', job: 'lead manager', department: 'Sales' };
      const employee2 = { name: 'John', job: 'cloud practitioner', department: 'Sales' };
      const areEqual = db.compareEmployees(employee1, employee2, 'name', 'department');
      expect(areEqual).toBe(true); // Both have same name and department
    });
    // Add more tests here...
  });

  // Continue with the rest of the functions...
});