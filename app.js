const inquirer = require('inquirer');

inquirer
.prompt([
  {
    type: 'input',
    name: 'name',
    message: 'What is your name?'
  }
])
.then(answers => console.log(answers));

// const fs = require("fs");

// const generatePage = require('./src/page-template.js');



// fs.writeFile("index.html", generatePage(name, github), (err) => {
//   if (err) throw err;


// });






// const printProfileData = profileDataArr => {
//     // This...
//   for (let i = 0; i < profileDataArr.length; i += 1) {
//     console.log(profileDataArr[i]);
//   }

//   console.log('================');

//   // Is the same as this...
//   profileDataArr.forEach((profileItem) => {
//     console.log(profileItem)
//   });
// };

// printProfileData(profileDataArgs);