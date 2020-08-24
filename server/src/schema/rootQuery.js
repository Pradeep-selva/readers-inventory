const { GraphQLObjectType, GraphQLID, GraphQLList } = require("graphql");
const { BookType, AuthorType } = require("./types");
const { Author, Book } = require("../models");

module.exports = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: {
        id: {
          type: GraphQLID
        }
      },
      resolve(parent, args) {
        return null;
      }
    },
    author: {
      type: AuthorType,
      args: {
        id: {
          type: GraphQLID
        }
      },
      resolve(parent, args) {
        return null;
      }
    },
    books: {
      type: GraphQLList(BookType),
      resolve(parent, args) {
        return null;
      }
    },
    authors: {
      type: GraphQLList(AuthorType),
      resolve(parent, args) {
        return null;
      }
    }
  }
});
