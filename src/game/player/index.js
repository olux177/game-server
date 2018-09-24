import models from './schema';
import Sequelize from "sequelize";
const Op = Sequelize.Op
  
export default class Content{
  constructor(){
    models.sequelize.sync()
  }
  
  allPlayers(){
    return models.Content.findOne({
      where:{id:this.id}
    })
    .then(res=>res)
  }
  getPlayer(){
    return models.ContentName.findAll({
      where:{id:this.id},
      include: [{
        model: models.Content,
        as:'contents',
      }]
    })
    .spread((content)=>{     
      return content.get({plain:true});
    })
  }

  createPlayer(names=[],titles=[],images=[]){
    if(this.playerName){
      return models.Player.findOne({
          where:{name:this.playerName}
        })
        .then(n=>{    
          if(!n){
            return models.Player.create({
                name:this.playerName,
                names
              }, {
                include: [{
                  model: models.PlayerName,
                  as:'names'
                }]
              })
              .then(task => {
                return{
                  msg:`player ${this.playerName} is created`
                }
              })
          }
          else{
            return{
              msg:`player ${this.playerName} exist`
            }
          }
        })
    }
    else{
      return{
        msg:'enter player name'
      }
    }
  }

  update(){    
    return models.Content.update(
      {
        value:this.value
      },
      {where:{id:this.id}}
    )
    .then(con=>{
      return {
        msg:"Content is updated",
        id:this.id
      } 
    })
  }
  
  removeContent(){
    
  }

  addToContent(cid){

  }

  delete(){

  }
}