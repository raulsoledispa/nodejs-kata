const Employee = require("../../models/employee");

class EmployeeRepository{
    data = [
        new Employee('Sepp',18 ),
        new Employee('Nina',15),
        new Employee('Mike',51),
        new Employee('Max',17)
    ];

    constructor(){
    }

    findEmployees(){
        return this.data;
    }
}

module.exports = EmployeeRepository;