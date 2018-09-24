import Sequelize from "sequelize"
module.exports = (sequelize, DataTypes) => {
  return sequelize.define("game_prop", {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: 'ongoing'
    },
    winner:{
      type: DataTypes.STRING,    
    }
  })
}
