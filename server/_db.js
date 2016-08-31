'use strict';

var Sequelize = require('sequelize');
var sooperspecial = require('../private/private.json')
var databaseURI = sooperspecial.databaseURI;

var db = new Sequelize(databaseURI, {
  define: {
    timestamps: false,
    underscored: true
  }
});

module.exports = db;
