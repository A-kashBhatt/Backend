const express = require('express');
const Router = express.Router();

const controllers = require("../controller");

Router.get('/', controllers.home);
Router.post('/add-contact', controllers.addContact);
Router.get('/delete-contact', controllers.deleteContact);


module.exports = Router;