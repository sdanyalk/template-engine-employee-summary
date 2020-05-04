const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const engineerHelper = require("./engineerHelper");
const internHelper = require("./internHelper");
const GlobalVariable = require("../GlobalVariable");
const Engineer = require("../Engineer");
const Intern = require("../Intern");
const render = require("./htmlRenderer");

const OUTPUT_DIR = path.resolve(__dirname, "../../output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const addToTeam = (employee) => {
    GlobalVariable.teamMembers.push(employee);
    GlobalVariable.idArray.push(employee.id);
};

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
                buildTeam();
                break;
        }
    } catch (e) {
        console.log(e);
    }
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

const buildTeam = () => {
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR);
    }
    fs.writeFileSync(outputPath, render(GlobalVariable.teamMembers), "utf-8");
};

module.exports = {
    addToTeam: addToTeam,
    createTeam: createTeam
};