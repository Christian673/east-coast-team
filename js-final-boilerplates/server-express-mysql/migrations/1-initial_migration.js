'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "stock", deps: []
 *
 **/

var info = {
    "revision": 1,
    "name": "initial_migration",
    "created": "2021-10-07T18:53:10.327Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "createTable",
    params: [
        "stock",
        {
            "itemType": {
                "type": Sequelize.STRING(45),
                "field": "itemType",
                "primaryKey": true,
                "allowNull": false
            },
            "small": {
                "type": Sequelize.INTEGER,
                "field": "small",
                "allowNull": true
            },
            "medium": {
                "type": Sequelize.INTEGER,
                "field": "medium",
                "allowNull": true
            },
            "large": {
                "type": Sequelize.INTEGER,
                "field": "large",
                "allowNull": true
            },
            "createdAt": {
                "type": Sequelize.DATE,
                "field": "createdAt",
                "allowNull": false
            },
            "updatedAt": {
                "type": Sequelize.DATE,
                "field": "updatedAt",
                "allowNull": false
            }
        },
        {}
    ]
}];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};
