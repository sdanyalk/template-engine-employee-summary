/**
 * This is a subclass from base class Employee. In addition to inherited properties from base class,
 * Intern class has school property, that holds employee's school name.
 * */

const Employee = require("./Employee");

class Intern extends Employee {

    constructor(name, id, email, school) {
        super(name, id, email);

        this.school = school;
    }

    getRole() {
        return "Intern";
    }

    getSchool() {
        return this.school;
    }

}

module.exports = Intern;
