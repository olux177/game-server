import sequelize from '../../db/connection';

const db = {
  Card:sequelize.import('../../db/models/card/prop'),
  CardTag:sequelize.import('../../db/models/card/tag'),
  CardType:sequelize.import('../../db/models/card/type'),
  CardAttribute:sequelize.import('../../db/models/card/attribute'),
  CardTagged:sequelize.import('../../db/models/card/tagged'),
};

const {
  Card,
  CardType,
  CardTag,
  CardAttribute,
  CardTagged
} = db;

Card.Attributes = Card.hasMany(CardAttribute, {as:'attributes', foreignKey: 'cardID'})
CardTag.belongsToMany(Card,{as:"cards", through: CardTagged, foreignKey:'tagID'})
Card.belongsToMany(CardTag, {as:"tags",through: CardTagged,foreignKey:'cardID'})

db.sequelize = sequelize;
export default db;