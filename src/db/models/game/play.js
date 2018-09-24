import Sequelize from "sequelize"
module.exports = (sequelize, DataTypes) => {
  return sequelize.define("game_play", {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4
    },
    attack: {
      type: DataTypes.MEDIUMINT,
      allowNull: false,
    },
    defence: {
      type: DataTypes.MEDIUMINT,
      allowNull: false,
    },
    health: {
      type: DataTypes.MEDIUMINT,
      allowNull: false,
    },
  })
}