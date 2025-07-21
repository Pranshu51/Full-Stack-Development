const path = require('path');
const os = require('os');
// console.log(path.sep);
// console.log(process.env.PATH); //process are seperated by colons on Unix and semicolons on Windows
// console.log(path.delimiter); //path.delimiter is used to get the separator used in the PATH environment variable
// const currentfilepath = __filename;
// console.log(currentfilepath);
// let result =path.basename(currentfilepath);
// console.log(result); //basename returns the last portion of a path
// result = path.dirname(currentfilepath);
// console.log(result); //dirname returns the directory name of a path
// let basenamewithoutext = path.basename(currentfilepath, '.js');
// console.log(basenamewithoutext); //basename with extension removed
// console.log('ext1>', path.extname(currentfilepath)); //extname returns the extension of a path
// let pathToFile = path.format({
//   dirname: 'path-module/html', 
//   base: 'index.js'}); //
  
//   console.log('pathToFile>',pathToFile);
//   console.log('isasolute', path.isAbsolute()); //isAbsolute returns true if the path is absolute
  console.log('hostname: '+ os.hostname()); //hostname returns the hostname of the operating system