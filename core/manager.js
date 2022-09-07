//modules
const express = require("express"),
    path = require("path"),
    Sequelize = require("sequelize"),
    cors = require("cors"),
    hbs = require("express-handlebars");

//init
const app = express();

//path
const base_dir = path.resolve();

//templateEngine
app.engine("hbs", hbs.engine({ extname: ".hbs" }));

// app.set("views", base_dir + "/edu/templates"); //adding templates dirs
app.set("view engine", "hbs");

//staticfiles
app.use("/static", express.static(path.join(base_dir, "/static")));

//databaseConnection
let sequelize = new Sequelize("", "", "", {
    dialect: "sqlite",
    storage: path.join(base_dir, "/database.sqlite3"),
    logging: false,
});

//for other db
// const sequelize = new Sequelize("databasename", "username", "password", {
//     dialect: "nameOfDatabase(example: mysql)",
//     host: "localhost",
//     port: "1433"
//   });

//cross-disable
app.use(cors());

//or
// app.use((req, res, next) => {
//     res.append("Access-Control-Allow-Origin", ["*"]);
//     res.append("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
//     res.append("Access-Control-Allow-Headers", "Content-Type");
//     next();
// });

//express label disabled
app.disable("x-powered-by");

//exports
module.exports = { app, base_dir, sequelize };

//local modules
require("./urls");

//add your models
// require("../edu/models");
sequelize.sync();
