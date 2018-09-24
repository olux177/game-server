import sequelize from '../../db/connection';

const db = {
  Player:sequelize.import('../../db/models/player/prop'),
  PlayerName:sequelize.import('../../db/models/player/name'),
};

const {
  Player,
  PlayerName,
} = db;

Player.Names = Player.hasMany(PlayerName, {as:'names', foreignKey: 'playerID'});

db.sequelize = sequelize;
export default db;