const Employee = require('../src/models/employee');


it('should return a new instance of Employee', () => {    
    const employee = new Employee('Raul',18);
    expect(employee.name).toBe('Raul');
})

it('should return "true" when greater than 18 years old', () => {    
    const employee = new Employee('Raul',18);
    const response = employee.isGreaterThan18();
    expect(response).toBeTruthy();
})

it('should return "false" when less than 18 years old', () => {
    const employee = new Employee('Raul',17);
    const response = employee.isGreaterThan18();
    expect(response).toBeFalsy();
})