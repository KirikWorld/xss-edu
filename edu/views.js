//write views here
const path = require("path");
const templates = path.join(__dirname, "/templates");

function index(req, res){
    res.sendFile(path.join(templates, "/index.html"));
}

function onReg(req, res){
    if(req.query.login.match(/[<>]/gm)){res.send(`<h1>Welcome, ${req.query.login}</h1>
    <button onclick=(window.location.replace("/"))>Back</button>
    <p>flag{simpleXSS}</p>
    `)}
    res.send(`<h1>Welcome, ${req.query.login}</h1>
    <button onclick=(window.location.replace("/"))>Back</button>
    `)
}

function testtemplate(req, res){
    res.render("home", {
        title: "Hello hbs!",
        layout: false, //or path to frame
    });
}

//exports
module.exports = {index, testtemplate, onReg}
