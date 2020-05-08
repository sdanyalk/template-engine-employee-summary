/** 
 * This module is the starting point of the program.
 * */

const Manager = require("./lib/Manager");

const managerHelper = require("./lib/helper/managerHelper");
const teamHelper = require("./lib/helper/teamHelper");

const startApp = async () => {
    // Get manager info first.
    const managerInfo = await managerHelper.askForManagerInfo();

    // Add manager info to the global array.
    teamHelper.addToTeam(
        new Manager(
            managerInfo.managerName,
            managerInfo.managerId,
            managerInfo.managerEmail,
            managerInfo.managerOfficeNumber));

    // Create rest of the team.
    teamHelper.createTeam();
}

// Start the app.
startApp();