// import fs from "fs";

// const LOG_FILE = "__logging__";

// self.addEventListener('message', (event) => {
//     const {
//       status,
//       message,
//       filePath
//     } = event.data;

//     const logMessage = 
//     `${status} >> ${message} >> ${filePath} >> ${new Date()}\n`;


//     fs.writeFile(LOG_FILE, logMessage, {flag: "a"}, (err) => {
//       if (err) throw err;
//       console.log('LOGGING >> '+ status);
//    });
// });