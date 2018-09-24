export default {
  Query:{
    allCards:async (parent,args,{Card})=>{
      try{
        const all = new Card();
        return await all.allCards();
      }
      catch(e){
        throw new Error('not found')
      } 
    },
    getCard:async (parent,{id},{Card})=>{
      try{
        const card = new Card();
        return await card.getCard(id);
      }
      catch(e){
        throw new Error('not found')
      }
    },
    getCardByName:async (parent,{name},{Card})=>{
      try{
        const card = new Card();
        return await card.getCardByName(name);
      }
      catch(e){
        throw new Error('not found')
      }
    },
    allCardTypes:async (parent,args,{Card})=>{
      try{
        const card = new Card();
        return await card.allTypes();
      }
      catch(e){
        throw new Error('not found')
      }
    },
    getCardType:async (parent,{id},{Card})=>{
      try{
        const card = new Card();        
        return await card.getCardType(id);
      }
      catch(e){
        throw new Error('not found')
      }
    },
  },
  Mutation:{
    createCard:async (parent,{name,image,tags,attributes},{Card})=>{
      try{        
        const add = new Card();
        add.cardName = name;
        add.cardImage = image;
        return await add.create(tags,attributes);
      }
      catch(e){
        throw new Error(e)
      }
    },
    updateCard:async (parent,{id,name,image},{Card})=>{
      try{        
        const card = new Card();
        card.cardID = id;
        card.cardData = {name,image};
        return await card.update();
      }
      catch(e){
        throw new Error(e)
      }
    },
    deleteCard:async (parent,{id},{Card})=>{
      try{        
        const card = new Card();
        card.cardID = id;
        return await card.delete();
      }
      catch(e){
        throw new Error(e)
      }
    },
    updateCardAttribute:async (parent,{id,label,value},{Card})=>{
      try{        
        const card = new Card();
        card.attrID = id;
        card.attrData = {label,value};
        return await card.updateAttribute();
      }
      catch(e){
        throw new Error(e)
      }
    },
    deleteCardAttribute:async (parent,{id},{Card})=>{
      try{        
        const card = new Card();
        card.attrID = id;
        return await card.deleteAttribute();
      }
      catch(e){
        throw new Error(e)
      }
    },
    updateCardTag:async (parent,{id,label,value},{Card})=>{
      try{        
        const card = new Card();
        card.attrID = id;
        card.attrData = {label,value};
        return await card.updateTag();
      }
      catch(e){
        throw new Error(e)
      }
    },
    deleteCardTag:async (parent,{id},{Card})=>{
      try{        
        const card = new Card();
        card.attrID = id;
        return await card.deleteTag();
      }
      catch(e){
        throw new Error(e)
      }
    },
  }
}