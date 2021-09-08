const express = require('express');
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema');
const mongoose = require('mongoose');
require('dotenv').config();

// setup our express app routes
const app = express();

// connect to our mongoose database
mongoose.connect(process.env.DB_STORE);
mongoose.connection.once('open', () => {
    console.log('connected to mongoose database');
})

app.use('/graphql', graphqlHTTP({
    // this schema is defining our graph and the object types on that graph
    schema,
    // this lets us test graphql data schemas and queries
    graphiql: true
}));

app.listen(3000, () => {
    console.log('now listening for requests on port 3000');
});