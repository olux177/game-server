import Sequelize from "sequelize"
module.exports = (sequelize, DataTypes) => {
  return sequelize.define("stat_health", {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4
    },
    health: {
      type: DataTypes.SMALLINT,
      allowNull: false
    }
  })
}