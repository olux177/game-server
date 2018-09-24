import Sequelize from "sequelize"
module.exports = (sequelize, DataTypes) => {
  return sequelize.define("card", {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      underscored: true,
    },
    image: {
      type: DataTypes.STRING,
    }
  })
}
