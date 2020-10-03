let express = require('express');
let app = express();
let port = 3000;
let ans[];

app.get('/', function(req,res){
    res.send(ans[Math.floor(Math.random()*3)]);
});

app.listen(port, ()=> console.log("Starting on port:" + port));