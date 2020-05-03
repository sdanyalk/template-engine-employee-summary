const inquirer = require("inquirer");
const engineerHelper = require("./engineerHelper");
const internHelper = require("./internHelper");
const GlobalVariable = require("./GlobalVariable");
const Engineer = require("./Engineer");
const Intern = require("./Intern");

const createTeam = async () => {
    try {
        const { memberChoice } = await askForTeamMember();

        switch (memberChoice) {
            case "Engineer":
                const engineerInfo = await engineerHelper.askForEngineerInfo();
                addToTeam(
                    new Engineer(
                        engineerInfo.engineerName,
                        engineerInfo.engineerId,
                        engineerInfo.engineerEmail,
                        engineerInfo.engineerGithub));
                createTeam();
                break;
            case "Intern":
                const internInfo = await internHelper.askForInternInfo();
                addToTeam(
                    new Intern(
                        internInfo.internName,
                        internInfo.internId,
                        internInfo.internEmail,
                        internInfo.internSchool));
                createTeam();
                break;
            default:
                process.exit();
        }
    } catch (e) {
        console.log(e);
    }
};

const addToTeam = (employee) => {
    GlobalVariable.teamMembers.push(employee);
    GlobalVariable.idArray.push(employee.id);
};

const askForTeamMember = () => {
    return inquirer.prompt([
        {
            type: "list",
            name: "memberChoice",
            message: "Which type of team member would you like to add?",
            choices: [
                "Engineer",
                "Intern",
                "I don't want to add any more team members"
            ]
        }
    ])
};

module.exports = {
    addToTeam: addToTeam,
    createTeam: createTeam
};