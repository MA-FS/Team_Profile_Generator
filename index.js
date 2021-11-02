// const inquirer = require('inquirer');

const Employee = require('./lib/Employee')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')

const emp = new Employee('Mike', 23, 'ss@gmail.com')

emp.getEmail()

const manage = new Manager('Boss', 46, 'manager@gmail.com', '08 9254 8745')

manage.getRole()
manage.getName()
manage.getId()
manage.getEmail()
