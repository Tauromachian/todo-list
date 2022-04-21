const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("todo", "root", "", {
  host: "localhost",
  dialect: "mariadb",
});

const Item = sequelize.define("item", {
  title: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  },
});

module.exports = { sequelize, Item };
