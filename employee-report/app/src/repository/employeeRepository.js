const Employee = require("../models/employee");
const sqlite3 = require("sqlite3").verbose();
class EmployeeRepository {
  constructor() {}

  connect() {
    if (!EmployeeRepository.client) {
      const db = new sqlite3.Database(`${__dirname}/db/employees.db`,  sqlite3.OPEN_READONLY,  (err) => {
        if (err) {
          console.error(err.message);
        }
        console.log('Connected to database.');
      });
      EmployeeRepository.client = db;
    }

    return EmployeeRepository.client;
  }

  findEmployees() {
    return new Promise((resolve, reject) => {
      this.connect().all("SELECT * FROM EMPLOYEES", [], (err, rows) => {
        let employees = [];
        if (err) {
          console.log("Error", err);
          return reject(err);
        }

        rows.map(row => {
          employees.push(new Employee(row.name,row.age));
        });
        return resolve(employees);
      });
      
    });
  }
}
module.exports = new EmployeeRepository();
