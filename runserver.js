const manager = require("./core/manager");
const port = 3000;

manager.app.listen(
    port,
    console.log(
        "TIP: can use command 'nodemon runserver' to enable auto reboot\n" +
            `Project was found on "${manager.base_dir}"\n` +
            `Server running on http://127.0.0.1:${port}/\n` +
            "Press ctrl+c to shutdown"
    )
);
