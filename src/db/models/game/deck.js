import Sequelize from "sequelize"
module.exports = (sequelize, DataTypes) => {
  return sequelize.define("game_deck", {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      underscored: true,
    }
  })
}
