const graphql = require('graphql');
const _ = require('lodash');
const Tshirt = require('../models/tshirt');
const Pant = require('../models/pant');
const Color = require('../models/color');
const Size = require('../models/size');

const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList
} = graphql;

// dummy data
// let tshirts = [
//     { shirtType: 'Polo', colorId: '1', upc: 00001, id: '1', sizeId: '1' },
//     { shirtType: 'Henley', colorId: '2', upc: 00002, id: '2', sizeId: '2' },
//     { shirtType: 'V-neck', colorId: '3', upc: 00003, id: '3', sizeId: '3' },
//     { shirtType: 'Striped', colorId: '4', upc: 00004, id: '4', sizeId: '5' },
//     { shirtType: 'Polo', colorId: '1', upc: 00005, id: '5', sizeId: '6' },
//     { shirtType: 'Henley', colorId: '2', upc: 00010, id: '6', sizeId: '1' },
//     { shirtType: 'V-neck', colorId: '3', upc: 00020, id: '7', sizeId: '3' },
//     { shirtType: 'Hooded', colorId: '4', upc: 00030, id: '8', sizeId: '4' },
//     { shirtType: 'Crew Neck', colorId: '1', upc: 00040, id: '9', sizeId: '5' },
//     { shirtType: 'Crew Nec', colorId: '2', upc: 00050, id: '10', sizeId: '6' }
// ]

// let clothingSize = [
//     { name: 'XS', id: '1' },
//     { name: 'S', id: '2' },
//     { name: 'M', id: '3' },
//     { name: 'L', id: '4' },
//     { name: 'XL', id: '5' },
//     { name: 'XXL', id: '6' }
// ]

// let colors = [
//     { name: 'white', id: '1' },
//     { name: 'black', id: '2' },
//     { name: 'beige', id: '3' },
//     { name: 'tan', id: '4' }
// ]

// let pants = [
//     { pantType: 'Baggy Pants', colorId: '1', upc: 12345, id: '1', sizeId: '1' },
//     { pantType: 'Bell Bottoms', colorId: '2', upc: 22345, id: '2', sizeId: '2' },
//     { pantType: 'Culottes', colorId: '3', upc: 32345, id: '3', sizeId: '3' },
//     { pantType: 'Fatigue Trousers', colorId: '4', upc: 42345, id: '4', sizeId: '4' },
//     { pantType: 'Jeans', colorId: '1', upc: 52345, id: '5', sizeId: '5' },
//     { pantType: 'Harem Pants', colorId: '2', upc: 62345, id: '6', sizeId: '6' },
//     { pantType: 'Hot Pants', colorId: '3', upc: 72345, id: '7', sizeId: '3' },
//     { pantType: 'Jodhpurs', colorId: '4', upc: 82345, id: '8', sizeId: '4' },
//     { pantType: 'Sweat Pants', colorId: '5', upc: 92345, id: '9', sizeId: '1' },
// ]

const TshirtType = new GraphQLObjectType({
    name: 'Tshirt',
    fields: () => ({
        id: { type: GraphQLID },
        shirtType: { type: GraphQLString },
        upc: { type: GraphQLInt },
        size: {
            type: SizeType,
            resolve(parent, args) {
                // return _.find(clothingSize, { id: parent.sizeId });
            }
        },
        color: {
            type: ColorType,
            resolve(parent, args) {
                // return _.find(colors, { id: parent.colorId });
            }
        }
    })
});

const PantType = new GraphQLObjectType({
    name: 'Pant',
    fields: () => ({
        id: { type: GraphQLID },
        pantType: { type: GraphQLString },
        upc: { type: GraphQLInt },
        size: {
            type: SizeType,
            resolve(parent, args) {
                // return _.find(clothingSize, { id: parent.sizeId });
            }
        },
        color: {
            type: ColorType,
            resolve(parent, args) {
                // return _.find(colors, { id: parent.colorId })
            }
        }
    })
});

const SizeType = new GraphQLObjectType({
    name: 'Size',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        tshirts: {
            type: new GraphQLList(TshirtType),
            resolve(parent, args) {
                // return _.filter(tshirts, { sizeId: parent.id })
            }
        }
    })
});

const ColorType = new GraphQLObjectType({
    name: 'Color',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        tshirts: {
            type: new GraphQLList(TshirtType),
            resolve(parent, args) {
                // return _.filter(tshirts, { colorId: parent.id })
            }
        },
        pants: {
            type: new GraphQLList(PantType),
            resolve(parent, args) {
                // return _.filter(pants, { colorId: parent.id })
            }
        }
    })
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addTshirt: {
            type: TshirtType,
            args: {
                shirtType: { type: GraphQLString },
                colorId: { type: GraphQLID },
                upc: { type: GraphQLInt },
                sizeId: { type: GraphQLID }
            },
            resolve(parent, args) {
                let tshirt = Tshirt({
                    shirtType: args.shirtType,
                    colorId: args.colorId,
                    upc: args.upc,
                    sizeId: args.sizeId
                });
                return tshirt.save();
            }
        },
        addPant: {
            type: PantType,
            args: {
                pantType: { type: GraphQLString },
                colorId: { type: GraphQLID },
                upc: { type: GraphQLInt },
                sizeId: { type: GraphQLID }
            },
            resolve(parent, args) {
                let pant = Pant({
                    pantType: args.pantType,
                    colorId: args.colorId,
                    upc: args.upc,
                    sizeId: args.sizeId
                });
                return pant.save();
            }

        },
        addSize: {
            type: SizeType,
            args: {
                name: { type: GraphQLString }
            },
            resolve(parent, args) {
                let size = Size({
                    name: args.name
                });
                return size.save();
            }
        },
        addColor: {
            type: ColorType,
            args: {
                name: { type: GraphQLString }
            },
            resolve(parent, args) {
                let color = Color({
                    name: args.name
                });
                return color.save();
            }
        }
    }
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        tshirt: {
            type: TshirtType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                // code to get data from db / other source
                // return _.find(tshirts, { id: args.id });
            }
        },
        tshirts: {
            type: new GraphQLList(TshirtType),
            resolve(parent, args) {
                // return tshirts;
            }
        },
        pant: {
            type: PantType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                // code to get data from db / other source
                // return _.find(pants, { id: args.id });
            }
        },
        pants: {
            type: new GraphQLList(PantType),
            resolve(parent, args) {
                // return pants;
            }
        },
        size: {
            type: SizeType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                // code to get data from db / other source
                // return _.find(clothingSize, { id: args.id })
            }
        },
        clothingSize: {
            type: new GraphQLList(SizeType),
            resolve(parent, args) {
                // return clothingSize;
            }
        },
        color: {
            type: ColorType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                // code to get data from db / other source
                // return _.find(colors, { id: args.id })
            }
        },
        colors: {
            type: new GraphQLList(ColorType),
            resolve(parent, args) {
                // return colors;
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});