const inquirer = require("inquirer");
const engineerHelper = require("./engineerHelper");
const internHelper = require("./internHelper");

const createTeam = async () => {
    try {
        const { memberChoice } = await askForTeamMember();

        switch (memberChoice) {
            case "Engineer":
                const engineerInfo = await engineerHelper.askForEngineerInfo();
                createTeam();
                break;
            case "Intern":
                const internInfo = await internHelper.askForInternInfo();
                createTeam();
                break;
            default:
                process.exit();
        }
    } catch (e) {
        console.log(e);
    }
};

const addToTeam = () => {
    
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
    createTeam: createTeam
};