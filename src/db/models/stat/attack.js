import Sequelize from "sequelize"
module.exports = (sequelize, DataTypes) => {
  return sequelize.define("stat_attack", {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4
    },
    attack: {
      type: DataTypes.SMALLINT,
      allowNull: false
    }
  })
}