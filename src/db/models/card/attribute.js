import Sequelize from "sequelize"
module.exports = (sequelize, DataTypes) => {
  return sequelize.define("card_attribute", {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4
    },
    label: {
      type: DataTypes.STRING,
      allowNull: false,
      underscored: true,
    },
    value:{
      type: DataTypes.TEXT,
      allowNull: false,
    },
  })
}
