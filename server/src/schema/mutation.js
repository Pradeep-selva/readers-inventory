const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull
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
          type: GraphQLNonNull(GraphQLString)
        },
        age: {
          type: GraphQLNonNull(GraphQLInt)
        }
      },
      resolve(parent, args) {
        const author = new Author({
          name: args.name,
          age: args.age
        });

        return author.save();
      }
    },
    addBook: {
      type: BookType,
      args: {
        name: {
          type: GraphQLNonNull(GraphQLString)
        },
        genre: {
          type: GraphQLNonNull(GraphQLString)
        },
        authorID: {
          type: GraphQLNonNull(GraphQLString)
        }
      },
      resolve(parent, args) {
        const book = new Book({
          name: args.name,
          genre: args.genre,
          authorID: args.authorID
        });

        return book.save();
      }
    }
  }
});
