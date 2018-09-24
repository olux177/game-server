import Sequelize from "sequelize"
module.exports = (sequelize, DataTypes) => {
  return sequelize.define("player", {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  })
}
