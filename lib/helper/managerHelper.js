const inquirer = require("inquirer");

const askForManagerInfo = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "What is your manager's name? (Tony Stark)",
            default: "Tony Stark",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter at least one character.";
            }
        },
        {
            type: "input",
            name: "managerId",
            message: "What is your manager's id? (1)",
            default: "1",
            validate: answer => {
                const pass = answer.match(
                    /^[1-9]\d*$/
                );
                if (pass) {
                    return true;
                }
                return "Please enter a positive number greater than zero.";
            }
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is your manager's email? (tony.stark@avengers.com)",
            default: "tony.stark@avengers.com",
            validate: answer => {
                const pass = answer.match(
                    /\S+@\S+\.\S+/
                );
                if (pass) {
                    return true;
                }
                return "Please enter a valid email address.";
            }
        },
        {
            type: "input",
            name: "managerOfficeNumber",
            message: "What is your manager's office number? (8001231234)",
            default: "8001231234",
            validate: answer => {
                const pass = answer.match(
                    /^[1-9]\d*$/
                );
                if (pass) {
                    return true;
                }
                return "Please enter a positive number greater than zero.";
            }
        }
    ]);
}

module.exports = {
    askForManagerInfo: askForManagerInfo
};