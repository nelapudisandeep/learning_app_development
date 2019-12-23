const express = require('express');
const app = express();
const PORT  = process.env.PORT||8080;
const Datastore = require('nedb');

app.use(express.json());
app.use(express.static('public'));

let database = new Datastore("database.db");
database.loadDatabase();

app.post('/uploading',(req,res)=>{
    let content = req.body;
    let timestamp = Date.now();
    content.timeStamp = timestamp;
    database.insert(content);
    res.json({
        status: "success",
        data : content
    });
});


app.get("/database",(req,res)=>{
    database.find({},(err,data)=>{
        if(err){
            res.end();
            return;
        }
        res.json(data);
    });
});

app.listen(PORT,()=>{
    console.log("listening on port : " + PORT);
});