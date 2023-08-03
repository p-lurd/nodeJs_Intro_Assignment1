// ASSIGNMENT 1
const process = require('process');
const path = require('path');
const os = require('os');


// Print out the current working directory
const currDir = process.cwd();
process.stdout.write(currDir);


// Print out the separator of a given file path
const separator = path.sep;
process.stdout.write(separator);


// Print out the extension name of a file path
const extName = path.extname('/Users/admin/Documents/personal_projects/practice/appendFile.js');
console.log(extName);


// Print out the process id of the current running process
const pid = process.pid;
console.log(pid);


// Print out the user information of the os
const userInfo = os.userInfo();
console.log(userInfo);


// Print out the platform of an operating system
const platform = os.platform();
console.log(platform);