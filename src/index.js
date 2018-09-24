import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import {ApolloServer, gql} from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import Player from './game/player/index'
import Card from './game/card/index'
import typeDefs from './graphql/typedefs';
import resolvers from './graphql/resolvers';
                   
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

const app = express();
const PORT = 8000
const SECRET = "secret";
app.use(cors())

const server = new ApolloServer({  
  schema,
  context:{
    SECRET,
    Player,
    Card
  }
});

server.applyMiddleware({ app,path:'/graphql'});

app.get('/', function (req, res) {
 res.send('Hello World!')
});

// app.use('/graphql', 
//   bodyParser.json(),
//   graphqlExpress((req) =>
//   ({
//     schema,
//     context:{
//       SECRET,
//       Player
//     }
//   })
// ));

app.listen(PORT, function () {
 console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`)
//  console.log(`Opening server ${PORT}`)
});