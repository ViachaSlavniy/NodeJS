const os = require('os');


console.log('Operation System: ', os.platform());

console.log('Architecture processor: ', os.arch());

console.log('Info`s processor: ', os.cpus());

console.log('Free memory: ', os.freemem());

console.log('Total memory: ', os.totalmem());

console.log('Home directory: ', os.homedir());

console.log('System time On (sec): ', os.uptime());