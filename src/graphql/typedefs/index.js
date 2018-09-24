import {ApolloServer, gql} from 'apollo-server-express';
import path from 'path'
import {fileLoader,mergeTypes} from 'merge-graphql-schemas'

const typesArray = fileLoader(path.join(__dirname, './'), { recursive: true })

export default gql`${mergeTypes(typesArray, { all: true })}`;
