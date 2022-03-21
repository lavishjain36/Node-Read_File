
const http=require('http');
const fs=require('fs');
const PORT=8000;
fs.writeFileSync('sample.txt',"Welcome")
http.createServer((req,res)=>{
    
    fs.readFile('sample.txt',(err,data)=>{
        res.writeHeader(200,{'Content-Type':'text/html'});
        res.write(data);
        res.end();
    })
}).listen(PORT,()=>{
    console.log('Listening to',PORT);
});
