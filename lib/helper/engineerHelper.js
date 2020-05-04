/** 
 * This module consists of inquirer questions related to engineer information.
 * */

const inquirer = require("inquirer");
const GlobalVariable = require("../GlobalVariable");

/** 
 * This function will prompt inquirer questions to gather information about engineer employee. It also
 * consists of ID validation to make sure it is not re-used.
    @param - none
    @return - Promise object
 */
const askForEngineerInfo = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "What is your engineer's name? (Natasha Romanoff)",
            default: "Natasha Romanoff",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter at least one character.";
            }
        },
        {
            type: "input",
            name: "engineerId",
            message: "What is your engineer's id?",
            default: "2",
            validate: answer => {
                const pass = answer.match(
                    /^[1-9]\d*$/
                );
                if (pass) {
                    if (GlobalVariable.idArray.includes(answer)) {
                        return "This ID is already taken. Please enter a different number.";
                    } else {
                        return true;
                    }
                }
                return "Please enter a positive number greater than zero.";
            }
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "What is your engineer's email? (natasha.romanoff@avengers.com)",
            default: "natasha.romanoff@avengers.com",
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
            name: "engineerGithub",
            message: "What is your engineer's GitHub username? (nromanoff)",
            default: "nromanoff",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter at least one character.";
            }
        }
    ])
};

module.exports = {
    askForEngineerInfo: askForEngineerInfo
};