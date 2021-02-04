const employeeRepository = require('../src/repository/employeeRepository');
const EmployeeReportingService = require('../src/service/employeeReportingService');
let employeeService = Object.create(null);
//jest.mock('../src/repository/employeeRepository');

beforeEach(() => {
    employeeService = new EmployeeReportingService(employeeRepository);
});

it('should generate the report of employees than 18 years', async () => {
    const employees = await employeeService.generateReport();
    expect(employees).toHaveLength(2);
})

it('should generate the report of employees than 18 years and sorted by their name', async () => {
    const employees = await employeeService.generateReport();
    expect(employees[0].name).toEqual('Mike');
})