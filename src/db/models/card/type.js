import Sequelize from "sequelize"
module.exports = (sequelize, DataTypes) => {
  return sequelize.define("card_type", {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      underscored: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  })
}
