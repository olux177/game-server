import Sequelize from "sequelize"
module.exports = (sequelize, DataTypes) => {
  return sequelize.define("stat_defence", {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4
    },
    defence: {
      type: DataTypes.SMALLINT,
      allowNull: false
    }
  })
}