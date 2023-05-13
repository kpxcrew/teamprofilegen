const generateHTML = require(`./src/generateHTML`);
const Manager = require(`./lib/Manager`);
const Engineer = require(`./lib/Engineer`);
const Intern = require(`./lib/Intern`);
const fs = require(`fs`);
const path = require('path');
const inquirer = require(`inquirer`);
const employeeArray = [];

inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "What's the name of the manager?",
    },
    {
      type: "input",
      name: "ID",
      message: "What's their ID?",
    },
    {
      type: "input",
      name: "email",
      message: "Manager's email address?",
    },
    {
      type: "input",
      name: "officenumber",
      message: "What's their office number?",
    },
  ])
  .then((answers) => {
    const manager = new Manager(
      answers.name,
      answers.ID,
      answers.email,
      answers.officenumber
    );
    employeeArray.push(manager);
    createTeam();
  });

const addIntern = () => {
  inquirer.prompt([
    {
      type: "input",
      name: "internName",
      message: "What's the name of the Inter?",
    },
    {
      type: "input",
      name: "internID",
      message: "What's their ID?",
    },
    {
      type: "input",
      name: "internEmail",
      message: "What's their email address?",
    },
    {
      type: "input",
      name: "internSchool",
      message: "What school did they attend?",
    },
  ])
  .then((answers) => {
    const intern = new Intern(
      answers.internName,
      answers.internID,
      answers.internEmail,
      answers.internSchool
    );
    employeeArray.push(intern);
    createTeam();
  });
}


const addEngineer = () => {

  inquirer.prompt([
    {
      type: "input",
      name: "engineerName",
      message: "What's the engineer's name?",
    },
    {
      type: "input",
      name: "engineerID",
      message: "What's their ID?",
    },
    {
      type: "input",
      name: "engineerEmail",
      message: "What's their email?",
    },
    {
      type: "input",
      name: "engineerGithub",
      message: "What's their github?",
    },
  ])
  .then((answers) => {
    const engineer = new Engineer(
      answers.engineerName,
      answers.engineerID,
      answers.engineerEmail,
      answers.engineerGithub
    );
    employeeArray.push(engineer);
    createTeam();
  });

};

const createTeam = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "choice",
        message: "Which type of team member would you like to add next?",
        choices: ["add an engineer", "add an intern", "I'm donezo."],
      },
    ])
    .then((answer) => {
      if (answer.choice === "add engineer") {
        addEngineer();
      } else if (answer.choice === "add intern") {
        addIntern();
      } else {
        fs.writeFileSync(
          path.join(__dirname, "/dist", "team.html"),
          generateHTML(employeeArray)
        );
      }
    });
  }
