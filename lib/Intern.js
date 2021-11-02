// Require Employee class
const Employee = require('./Employee')
// Intern constructor
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school
    }

    getSchool() {
        return this.school
    }

    getRole() {
        return 'Intern'
    }

}
// Export the Intern class
module.exports = Intern