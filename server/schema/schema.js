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
    { shirtType: 'Polo', color: 'Blue', upc: 00001, id: '1', sizeId: '1' },
    { shirtType: 'Henley', color: 'Black', upc: 00002, id: '2', sizeId: '2' },
    { shirtType: 'V-neck', color: 'White', upc: 00003, id: '3', sizeId: '3' },
    { shirtType: 'Striped', color: 'Grey', upc: 00004, id: '4', sizeId: '5' },
    { shirtType: 'Polo', color: 'Green', upc: 00005, id: '5', sizeId: '6' },
    { shirtType: 'Henley', color: 'Red', upc: 00010, id: '6', sizeId: '1' },
    { shirtType: 'V-neck', color: 'Orange', upc: 00020, id: '7', sizeId: '3' },
    { shirtType: 'Hooded', color: 'Purple', upc: 00030, id: '8', sizeId: '4' },
    { shirtType: 'Crew Neck', color: 'Green', upc: 00040, id: '9', sizeId: '5' },
    { shirtType: 'Crew Nec', color: 'Blue', upc: 00050, id: '10', sizeId: '6' }
]

let clothingSize = [
    { name: 'Extra Small', id: '1' },
    { name: 'Small', id: '2' },
    { name: 'Medium', id: '3' },
    { name: 'Large', id: '4' },
    { name: 'Extra Large', id: '5' },
    { name: 'Extra Extra Large', id: '6' },
]

let colors = [
    { name: 'white', id: '1'},
    { name: 'black', id: '2'},
    { name: 'beige', id: '3'},
    { name: 'tan', id: '4'}
]

let pants = [
    { pantType: 'Baggy Pants', colorId: '1', upc: 12345, id: '1', sizeId: '1' },
    { pantType: 'Bell Bottoms', colorId: '2', upc: 22345, id: '2', sizeId: '2' },
    { pantType: 'Culottes', colorId: '3', upc: 32345, id: '3', sizeId: '3' },
    { pantType: 'Fatigue Trousers', colorId: '4', upc: 42345, id: '4', sizeId: '4' },
    { pantType: 'Jeans', colorId: '1', upc: 52345, id: '5', sizeId: '5' },
    { pantType: 'Harem Pants', colorId: '2', upc: 62345, id: '6', sizeId: '6' },
    { pantType: 'Hot Pants', colorId: '3', upc: 72345, id: '7', sizeId: '3' },
    { pantType: 'Jodhpurs', colorId: '4', upc: 82345, id: '8', sizeId: '4' },
    { pantType: 'Sweat Pants', colorId: '5', upc: 92345, id: '9', sizeId: '1' },
]



const TshirtType = new GraphQLObjectType({
    name: 'Tshirt',
    fields: () => ({
        id: { type: GraphQLID },
        shirtType: { type: GraphQLString },
        upc: { type: GraphQLInt },
        size: {
            type: SizeType,
            resolve(parent, args){
                console.log(parent);
                return _.find(clothingSize, { id: parent.sizeId});
            }
        },
        color: {
            type: ColorType,
            resolve(parent, args){
                console.log(parent);
                return _.find(colors, { id: parent.colorId})
            }
        }
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

const ColorType = new GraphQLObjectType({
    name: 'Color',
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
        },
        color: {
            type: ColorType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                // code to get data from db / other source
                return _.find(colors, { id: args.id })
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});