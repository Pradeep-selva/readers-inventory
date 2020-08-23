const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList
} = require("graphql");
const _ = require("lodash");
const config = require("./tempconfig");

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    author: {
      type: AuthorType,
      resolve(parents, args) {
        return _.find(config.authors, { id: parents.authorID });
      }
    }
  })
});

const AuthorType = new GraphQLObjectType({
  name: "Author",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    books: {
      type: GraphQLList(BookType),
      resolve(parent, args) {
        return _.filter(config.books, { authorID: parent.id });
      }
    }
  })
});

const RootQuery = new GraphQLObjectType({
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
        return _.find(config.books, { id: args.id });
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
        return _.find(config.authors, { id: args.id });
      }
    },
    books: {
      type: GraphQLList(BookType),
      resolve(parent, args) {
        return config.books;
      }
    },
    authors: {
      type: GraphQLList(AuthorType),
      resolve(parent, args) {
        return config.authors;
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
