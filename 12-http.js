const http = require('http')

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
       
        res.end('Welcome to our home page')

    }
    if(req.url === '/about'){
       
        res.end('Here is a short history about us')

    }

    // res.end(`<h1>Page is unavilable!</h1>`)
    
})


server.listen(5000)