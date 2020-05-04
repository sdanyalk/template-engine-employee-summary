/** 
 * This module consists of inquirer questions related to intern information.
 * */

const inquirer = require("inquirer");
const GlobalVariable = require("../GlobalVariable");

/** 
 * This function will prompt inquirer questions to gather information about intern employee. It also
 * consists of ID validation to make sure it is not re-used.
    @param - none
    @return - Promise object
 */
const askForInternInfo = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "What is your intern's name? (Peter Parker)",
            default: "Peter Parker",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter at least one character.";
            }
        },
        {
            type: "input",
            name: "internId",
            message: "What is your intern's id?",
            default: "3",
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
            name: "internEmail",
            message: "What is your intern's email? (peter.parker@avengers.com)",
            default: "peter.parker@avengers.com",
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
            name: "internSchool",
            message: "What is your intern's school? (Midtown High School)",
            default: "Midtown High School",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter at least one character.";
            }
        }
    ]);
}

module.exports = {
    askForInternInfo: askForInternInfo
};