const graphql = require('graphql');

const {
    GraphQLObjectType,
    GraphQlString
} = graphql;

const UserType = new GraphQLObjectType({
    name: 'UserType',
    fields: {
        email: {type: GraphQlString}
    }
});

module.exports = UserType;