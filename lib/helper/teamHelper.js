/** 
 * This module consists of functions that help adding employees to team.
 * */

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

/** 
 * This function will add an Employee object to the static global array, and static global id array.
 * This is also a "public" function, which means that this function can be accessed outside this module.
    @param - Employee
    @return - void
 */
const addToTeam = (employee) => {
    GlobalVariable.teamMembers.push(employee);
    GlobalVariable.idArray.push(employee.id);
};

/** 
 * This function will ask inquirer questions for Engineer or Intern. This is also a "public" function, which means
 * that this function can be accessed outside this module.
    @param - none
    @return - void
 */
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

/** 
 * This function will ask inquirer choice to add Engineer or Intern. This is also a "private" function, which means
 * that this function is NOT accessible outside this module.
    @param - none
    @return - void
 */
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

/** 
 * This function will write all the data to file. I'm using sync versions fs methods, for the ease of use. 
 * My program is writing small amount of data so there won't be any performance hit by using sync versions vs 
 * async versions of fs module.
 * This is also a "private" function, which means that this function is NOT accessible outside this module.
    @param - none
    @return - void
 */
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