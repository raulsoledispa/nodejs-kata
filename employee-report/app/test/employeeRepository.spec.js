const repository = require('../src/repository/employeeRepository');
//jest.mock('../src/repository/employeeRepository')

it('should return all employees', async () => {
    //const repository = new EmployeeRepository();
    const response = await repository.findEmployees();
    expect(response).toHaveLength(4);
})