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
let tshirts = [
    { shirtType: 'Polo', size: 'XS', color: 'Blue', upc: 00001, id: '1' },
    { shirtType: 'Henley', size: 'S', color: 'Black', upc: 00002, id: '2' },
    { shirtType: 'V-neck', size: 'M', color: 'White', upc: 00003, id: '3' },
    { shirtType: 'Striped', size: 'XL', color: 'Grey', upc: 00004, id: '4' },
    { shirtType: 'Polo', size: 'XXL', color: 'Green', upc: 00005, id: '5' },
    { shirtType: 'Henley', size: 'XS', color: 'Red', upc: 00010, id: '6' },
    { shirtType: 'V-neck', size: 'M', color: 'Orange', upc: 00020, id: '7' },
    { shirtType: 'Hooded', size: 'L', color: 'Purple', upc: 00030, id: '8' },
    { shirtType: 'Crew Neck', size: 'XL', color: 'Green', upc: 00040, id: '9' },
    { shirtType: 'Crew Nec', size: 'XXL', color: 'Blue', upc: 00050, id: '10' }
]

let clothingSize = [
    { name: 'Extra Small', id: '1' },
    { name: 'Small', id: '2' },
    { name: 'Medium', id: '3' },
    { name: 'Large', id: '4' },
    { name: 'Extra Large', id: '5' },
    { name: 'Extra Extra Large', id: '6' },
]

let pants = [
    { pantType: 'Baggy Pants', size: 'XS', color: 'Black', upc: 10000, id: '1' },
    { pantType: 'Bell Bottoms', size: 'S', color: 'Blue', upc: 20000, id: '2' },
    { pantType: 'Culottes', size: 'M', color: 'Green', upc: 30000, id: '3' },
    { pantType: 'Fatigue Trousers', size: 'L', color: 'Red', upc: 40000, id: '4' },
    { pantType: 'Jeans', size: 'XL', color: 'Dark Green', upc: 50000, id: '5' },
    { pantType: 'Harem Pants', size: 'XXL', color: 'Dark Blue', upc: 60000, id: '6' },
    { pantType: 'Hot Pants', size: 'M', color: 'Beige', upc: 70000, id: '7' },
    { pantType: 'Jodhpurs', size: 'L', color: 'Brown', upc: 80000, id: '8' },
    { pantType: 'Sweat Pants', size: 'XS', color: 'Grey', upc: 90000, id: '9' },
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

const PantType = new GraphQLObjectType({
    name: 'Pant',
    fields: () => ({
        id: { type: GraphQLID },
        pantType: { type: GraphQLString },
        size: { type: GraphQLString },
        color: { type: GraphQLString },
        upc: { type: GraphQLInt }
    })
});

const SizeType = new GraphQLObjectType({
    name: 'Size',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString }
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
        },

        pant: {
            type: PantType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                // code to get data from db / other source
                return _.find(pants, { id: args.id });
            }
        },
        size: {
            type: SizeType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                // code to get data from db / other source
                return _.find(clothingSize, { id: args.id })
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});