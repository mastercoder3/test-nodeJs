import "reflect-metadata";
import { GraphQLServer } from 'graphql-yoga';
// import { importSchema } from 'graphql-import';
import { resolvers } from './resolver';


// const typeDefs = importSchema('schema.graphql');
 
const server = new GraphQLServer({ typeDefs: 'src/schema.graphql', resolvers })
server.start(() => console.log('Server is running on localhost:4000')) 