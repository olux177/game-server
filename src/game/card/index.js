import models from './schema';
import Sequelize from "sequelize";
const Op = Sequelize.Op
  
export default class Content{
  constructor(){
    models.sequelize.sync()
  }
  
  allCards(){
    return models.Card.findAll({      
      include: [
        {
          model: models.CardTag,
          as:'tags',
        },{
          model: models.CardAttribute,
          as:'attributes',
        }
      ]
    })
    .then(res=>{
      return res
    })
  }
  
  getCard(id){
    return models.Card.findOne({
      where:{id},
      include:[
        {
          model: models.CardTag,
          as:'tags',
        },{
          model: models.CardAttribute,
          as:'attributes',
        }
      ]
    })
    .then((card)=>{     
      return card;
    })
  }
  
  getCardByName(name){
    return models.Card.findOne({
      where:{name},
      include:[
        {
          model: models.CardTag,
          as:'tags',
        },{
          model: models.CardAttribute,
          as:'attributes',
        }
      ]
    })
    .then((card)=>{     
      return card;
    })
  }
  
  allTypes(name){
    return models.CardTag.findAll({
      include:[
        {
          model: models.Card,
          as:'cards',
          include:[
            {
              model: models.CardAttribute,
              as:'attributes',
            },
            {
              model: models.CardTag,
              as:'tags',
            }
          ]
        }
      ]
    })
    .then((card)=>{
      return card;
    })
  } 
  
  getCardType(id){    
    return models.CardTag.findOne({
      where:{id},
      include:[
        {
          model: models.Card,
          as:'cards',
          include:[
            {
              model: models.CardAttribute,
              as:'attributes',
            },
            {
              model: models.CardTag,
              as:'tags',
            }
          ]
        }
      ]
    })
    .then((card)=>{
      return card;
    })
  } 

  create(tags=[],attributes=[]){    
      return models.Card.findOrCreate({
          where:{name:this.cardName},
          defaults:{image:this.cardImage}
        })
        .spread((n,cardCreated)=>{   
          const card = n.get({plain:true});
          attributes.map(item =>{
            models.CardAttribute.findOrCreate({
              where:{
                label:item.label,
                value:item.value,
                cardID:card.id,
              }           
            })
          })

          tags.map(item =>{
            models.CardTag.findOrCreate({
              where:{name:item.name},
              defaults:{description:item.desc},
            })
            .spread((t,created)=>{
              const tag = t.get({plain:true})
              models.CardTagged.findOrCreate({
                where:{
                  tagID:tag.id,
                  cardID:card.id
                }
              })
            })
          })
          return{
            msg:`card ${this.cardName} is created`
          }
        })
  }

  update(){    
    return models.Card.update(
      this.cardData,
      {where:{id:this.cardID}}
    )
    .then(con=>{
      return {
        msg:"Card is updated",
        id:this.cardID
      } 
    })
  }

  delete(){
    return models.Card.delete(
      {where:{id:this.cardID}}
    )
    .then(con=>{
      return {
        msg:"Card is delete",
        id:this.cardID
      } 
    })
  }

  updateAttribute(){    
    return models.CardAttribute.update(
      this.attrData,
      {where:{id:this.attrID}}
    )
    .then(res=>{
      return {
        msg:"Attribute is updated",
        id:this.attrID
      } 
    })
  }

  deleteAttribute(){
    return models.CardAttribute.delete(
      {where:{id:this.attrID}}
    )
    .then(res=>{
      return {
        msg:"Card is delete",
        id:this.attrID
      } 
    })
  }

  updateTag(){    
    return models.CardTag.update(
      this.tagData,
      {where:{id:this.tagID}}
    )
    .then(res=>{
      return {
        msg:"Attribute is updated",
        id:this.attrID
      } 
    })
  }

  deleteTag(){
    return models.CardTag.delete(
      {where:{id:this.tagID}}
    )
    .then(res=>{
      return {
        msg:"Card is delete",
        id:this.tagID
      } 
    })
  }
}