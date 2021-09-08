const express = require('express');
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();


mongoose.connect(process.env.DB_STORE);
mongoose.connection.once('open', () => {
    console.log('connected to mongoose database');
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(3000, () => {
    console.log('now listening for requests on port 3000');
});