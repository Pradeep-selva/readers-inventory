const app = require("express")();
const dotenv = require("dotenv");
const { graphqlHTTP } = require("express-graphql");
const mongoose = require("mongoose");
const schema = require("./schema");
const cors = require("cors");

app.use(cors());

dotenv.config();

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.connection.once("open", () =>
  console.log(`connected to ${process.env.MONGODB_URL}`)
);

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(process.env.PORT, () =>
  console.log(`running on ${process.env.PORT}`)
);
