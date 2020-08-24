const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLList,
  GraphQLString,
  GraphQLInt
} = require("graphql");
const { BookType, AuthorType } = require("./types");
const { Author, Book } = require("../models");

module.exports = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addAuthor: {
      type: AuthorType,
      args: {
        name: {
          type: GraphQLString
        },
        age: {
          type: GraphQLInt
        }
      },
      resolve(parent, args) {
        const author = new Author({
          name: args.name,
          age: args.age
        });

        return author.save();
      }
    }
  }
});
