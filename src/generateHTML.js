const generateHTML = (emparray) => {
    return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>HTML 5 Boilerplate</title>
        <link rel="stylesheet" href="style.css" />
      </head>
      <body>
        <header>
          <nav class="navbar">
            <container class="navbar-title">Team Profile</container>
          </nav>
        </header>
        <main>
          <div class="container">
            <div id="team-cards">
            ${generateTeam(emparray)}
        </div>
    </div>
        </main>
        <script src="index.js"></script>
      </body>
    </html>
    `
}

const generateTeam = (emparray) => {
    let html = ""
    for (let i = 0; i < emparray.length; i ++) {
        if (emparray[i].getRole() === "Manager") {
            html += `<div class="card-title">
            <h2>${emparray[i].getName()}</h2>
            <h3>Manager</h3>
          </div>
          <div class="card-body">
            <p class="id">ID: ${emparray[i].getId()}</p>
            <p class="email">Email: ${emparray[i].getEmail()}</p>
            <p class="office-number">Office Number: ${emparray[i].getOfficeNumber()}</p>
          </div>`
        }else if (emparray[i].getRole() === "Engineer") {
            html += `<div class="card-title">
            <h2>${emparray[i].getName()}</h2>
            <h3>Engineer</h3>
          </div>
          <div class="card-body">
            <p class="id">ID: ${emparray[i].getId()}</p>
            <p class="email">Email: ${emparray[i].getEmail()}</p>
            <p class="github">GitHub: ${emparray[i].getGithub()}</p>
          </div>`
        } else {
            html += `<div class="card-title">
            <h2>${emparray[i].getName()}</h2>
            <h3>Intern</h3>
          </div>
          <div class="card-body">
            <p class="id">ID: ${emparray[i].getId()}</p>
            <p class="email">Email: ${emparray[i].getEmail()}</p>
            <p class="school">School: ${emparray[i].getSchool()}</p>
          </div>`
        }
    } return html 
}
 module.exports = generateHTML