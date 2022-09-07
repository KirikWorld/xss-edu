const manager = require("./manager");
const express = require("express");
const edu = require("../edu/urls");

// to register ur routes write:
// const app = require("./someapp");
//manager.app.use('/mainroute', app);

manager.app.use("/", edu.router);