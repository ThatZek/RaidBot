const Discord = require("discord.js");
const fs = require('fs');
const Sequelize = require('sequelize');
const database = require('../database.js')

module.exports = database.define('')

module.exports.properties = {
    name = "servers",
    enabled = "true",
}