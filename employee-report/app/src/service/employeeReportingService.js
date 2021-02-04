const compare = require('../util/compare');
class EmployeeReportingService{
    constructor(repository){
        this.repository = repository;
    }

    async generateReport(){
        //try {
            const employees = await this.repository.findEmployees();
            const employeesOver18 = employees.filter(employee => employee.isGreaterThan18());
            return employeesOver18.sort((obj1,obj2) => compare(obj1.name,obj2.name));
        /*} catch (error) {
            console.log('Error in generateReport ',error)
            return Promise.reject(error);
        }*/
        
    }

}

module.exports = EmployeeReportingService;