// write models here
const manager = require("../core/manager");
const Sequelize = require("sequelize");

let TestModel = manager.sequelize.define("test", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

//exports
module.exports = {TestModel};
