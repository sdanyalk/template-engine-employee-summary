/**
 * This is a subclass from base class Employee. In addition to inherited properties from base class,
 * Manager class has office number property, that holds employee's office phone number.  
 * */

const Employee = require("./Employee");

class Manager extends Employee {

    constructor(name, id, email, officeNumber) {
        super(name, id, email);

        this.officeNumber = officeNumber;
    }

    getRole() {
        return "Manager";
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

}

module.exports = Manager;
