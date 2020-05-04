/**
 * This is a subclass from base class Employee. In addition to inherited properties from base class,
 * Engineer class has github property, that holds employee's github username.
 * */

const Employee = require("./Employee");

class Engineer extends Employee {

    constructor(name, id, email, github) {
        super(name, id, email);

        this.github = github;
    }

    getRole() {
        return "Engineer";
    }

    getGithub() {
        return this.github;
    }

}

module.exports = Engineer;
