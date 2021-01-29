import "reflect-metadata";
import { ApolloServer } from 'apollo-server-lambda';
import { buildSchema } from 'type-graphql';
import { APIGatewayProxyHandler } from 'aws-lambda';
import resolvers from './resolvers';

const createHandler = async () => {
  const schema = await buildSchema({
    resolvers
  });

  const apolloServer = new ApolloServer({
    schema
  });

  return apolloServer.createHandler();
}

export const graphqlHandler: APIGatewayProxyHandler = (event, context, callback) => {
  createHandler().then(handler => {
    return handler(event, context, callback);
  });
};
