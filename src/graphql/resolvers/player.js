// import {requiresAuth,requiresAdmin} from '../../acl/permission'
export default {
  Query: {
    allPlayers:async (parent,args,{Player})=>{
      try{
        const allP = new Player();
        return await allP.Players();
      }
      catch(e){
        throw new Error('not found')
      }
    },
    getPlayer :async (parent, {playerID}, {Player})=>{
      try{
        const getP = new Player();
        return await getP.getPlayer(playerID);
      }
      catch(e){
        throw new Error('error')
      }
    },
  },
  Mutation:{
    createProfile :async(parent, {name,names,titles,images}, {Player})=>{
      try {
        const add = new Player()
        add.playerName = name
        return await add.createPlayer(names,titles,images)
      }
      catch (e) {
        throw new Error(e);
      }
    }
  }
}
