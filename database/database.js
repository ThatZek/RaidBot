const Discord = require("discord.js");
const fs = require('fs');
const Sequelize = require('sequelize');

modules.export = new Sequelize({
    dialect: 'sqlite',
    logging: false,
    storage: 'database.sqlite',
})