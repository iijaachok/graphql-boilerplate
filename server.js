const { ApolloServer } = require("apollo-server");
const { schema } = require("./graphql");

const server = new ApolloServer({
  schema,
  introspection: true,
  playground: true
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
