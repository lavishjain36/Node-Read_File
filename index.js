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
    res.writeHeader(200,{'Content-Type':'text/html'});
    // let data=`
    // <div>
    // <h1>Hello</h1>
    // <h2>Welcome</h2>
    // <h3>TO</h3>
    // <h4>NodeJS</h4>
    // </div>
    
    // `

    let data=[
        {user:"Lavish"},
        {user:"Kushal"}
    ]
    res.write(JSON.stringify(data));
}).listen(PORT,()=>{
    console.log('Listening to',PORT);
});
