const http = require('http')


const dataControle = (req, res) =>{
    res.write("Hrllo this is ravi pansuriya");
    res.end()
}

http.createServer(dataControle).listen(4500)



// http.createServer( (req, res) =>{
//     res.write("Hrllo this is anil sidhu");
//     res.end()
// }).listen(4500)