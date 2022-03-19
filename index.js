const os=require("os");
// console.log(os.cpus());
// console.log(os.homedir());
// console.log(os.hostname());
// console.log(os.platform());
// console.log(os.type());
// console.log(os.uptime());
const http=require('http');
const PORT=8000;
http.createServer((req,res)=>{
    res.writeHeade(200,{'Content-Type':'text/html'});
    res.write('<h1>Hello World</h1>');
    res.end();
}).listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});
