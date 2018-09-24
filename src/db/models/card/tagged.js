import Sequelize from "sequelize"
module.exports = (sequelize, DataTypes) => {
  return sequelize.define("tagged_card", {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4
    }
  })
}
