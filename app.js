const Manager = require("./lib/Manager");

const managerHelper = require("./lib/managerHelper");
const teamHelper = require("./lib/teamHelper");

const startApp = async () => {
    const managerInfo = await managerHelper.askForManagerInfo();

    teamHelper.addToTeam(
        new Manager(
            managerInfo.managerName,
            managerInfo.managerId,
            managerInfo.managerEmail,
            managerInfo.managerOfficeNumber));

    teamHelper.createTeam();
}

startApp();