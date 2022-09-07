const fs = require("fs");
const path = require("path");
const manager = require("./core/manager");
let dir;

try {
    dir = process.argv[2].toString();
} catch (err) {
    const error = new Error("Check for the app name");
    console.log(error);
}

try {
    if (!fs.existsSync(path.join(manager.base_dir, dir))) {
        fs.mkdirSync(dir);
        fs.writeFileSync(
            path.join(manager.base_dir, dir) + "/urls.js",
            "//write urls here\n" +
            "//To use routes u can use next example:\n" +
            "// const router = express.Router();\n" +
            
            "// router.get('/someroute', (req, res) => { \n" +
            "//     res.send('some'); \n" +
            "// }); \n" +
            "//module.exports = router; \n" +
            
            "//Write it to core urls: \n" +
             "//const yourapp = require('../yourapp/urls');\n" + 
             "// manager.app.use('/mainroute', someapp); \n"
            
        );
        fs.writeFileSync(
            path.join(manager.base_dir, dir) + "/views.js",
            "//write views here"
        );
        fs.writeFileSync(
            path.join(manager.base_dir, dir) + "/admin.js",
            "//write admin panel here"
        );
        fs.writeFileSync(
            path.join(manager.base_dir, dir) + "/models.js",
            "//write models here"
        );
    } else {
        console.log("App already exists");
    }
} catch (err) {
    console.error(err);
}
