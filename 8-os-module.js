const os = require('os')

//System user
const user = os.userInfo()
console.log(user)

//System Uptime
const uptime = os.uptime()
console.log(`The system uptime is: ${uptime} seconds`)

const currentOS = {

    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS)
