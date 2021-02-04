const employeeRepository = require('./repository/employeeRepository');
const EmployeeReportingService = require('./service/employeeReportingService');




const employeeService = new EmployeeReportingService(employeeRepository);
employeeService.generateReport()
.then(resp=>{
    console.log('#### Employee Report over  18 years old #####')
    resp.map(item => console.log(`Name => ${item.name} , Age => ${item.age}`))
})
.catch(err => console.log(err));
