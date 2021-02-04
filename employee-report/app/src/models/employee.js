class Employee{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    isGreaterThan18(){
        return this.age >= 18;
    }
}

module.exports = Employee;