/**
 * This class is used to host any global variables that will be used by different modules. I've made use of
 * static properties to make them globally accessible. Static properties are covered in Week-10 Activity-22.
 */
class GlobalVariable {
    constructor() { };
}

/**
 * Static variable idArray is used to hold id for each employee. This will be used to ensure that
 * every employee gets a unique id.
 */
GlobalVariable.idArray = [];

/**
 * Static variable teamMembers will hold all Employee class objects.
 */
GlobalVariable.teamMembers = [];

module.exports = GlobalVariable;