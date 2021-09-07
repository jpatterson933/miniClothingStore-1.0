const graphql = require('graphql');
const _ = require('lodash');

const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema
} = graphql;

// dummy data
var tshirts = [
    { shirtType: 'Polo', size: 'XS', color: 'Blue', upc: 00001, id: '1' },
    { shirtType: 'Henley', size: 'M', color: 'Black', upc: 00002, id: '2' },
    { shirtType: 'V-neck', size: 'L', color: 'White', upc: 00003, id: '3' },
    { shirtType: 'Striped', size: 'XL', color: 'Grey', upc: 00004, id: '4' },
    { shirtType: 'Graphic', size: 'XXL', color: 'Green', upc: 00005, id: '5' },
    { shirtType: 'Pocket', size: 'XS', color: 'Red', upc: 00010, id: '6' },
    { shirtType: 'Solid/Plain', size: 'M', color: 'Orange', upc: 00020, id: '7' },
    { shirtType: 'Hooded', size: 'L', color: 'Purple', upc: 00030, id: '8' },
    { shirtType: 'Crew Neck', size: 'XL', color: 'Green', upc: 00040, id: '9' },
    { shirtType: 'U Neck/Scoop Neck', size: 'XXL', color: 'Blue', upc: 00050, id: '10' }
]

const TshirtType = new GraphQLObjectType({
    name: 'Tshirt',
    fields: () => ({
        id: { type: GraphQLID },
        shirtType: { type: GraphQLString },
        size: { type: GraphQLString },
        color: { type: GraphQLString },
        upc: { type: GraphQLInt }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        tshirt: {
            type: TshirtType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                // code to get data from db / other source
                return _.find(tshirts, { id: args.id });
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});