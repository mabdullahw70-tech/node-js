const http = require('http');
const fs = require('fs');
const query = require('querystring');

http.createServer((req,res)=>{
    fs.readFile("formHtml.html","utf-8",(err,data)=>{
        if (err) {
            console.log(err);
            res.writeHead(404, { "content-type": "text/html" });
            res.write("<h1>404 page not found</h1>");
            return res.end();
        }
        
         if (req.url === "/") {
            res.writeHead(200, { "content-type": "text/html" });
            res.write(data);
            res.end();

        } 
        
        else if (req.url === "/submit") {
            
            let userData= [];

            req.on("data", (chunk)=>{
                userData.push(chunk);
            })

            
            req.on("end", ()=>{
                let parsedData = Buffer.concat(userData).toString();
                let readableData = query.parse(parsedData);
                fs.appendFile("UserData.txt", "Name: "+readableData.name + " Email: " + readableData.email + "\n", (err)=>{
                    if (err) {
                        console.log(err);
                    }
                });

            })
            
            res.writeHead(200, { "content-type": "text/html" });
            res.write("<h1>Form submitted successfully</h1>");
            res.end();
            
        } else {
            res.writeHead(404, { "content-type": "text/html" });
            res.write("<h1>Endpoint not found</h1>");
            res.end();
        }
        
    });
}).listen(3000 , ()=>{"Server is running on port 3000 http://localhost:3000"});