const os = require("os");

function displaySystemInfo(){
    console.log("Operating system info:");
    console.log("OS Type:", os.type());
    console.log("OS platform:", os.platform())
   console.log("OS parallesism:", os.cpus().length)
   console.log("Uptime", os.uptime()/3600, "hours")
}
displaySystemInfo()