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
    GraphQLList,
    GraphQLNonNull
} = graphql;

// dummy data


const TshirtType = new GraphQLObjectType({
    name: 'Tshirt',
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLID) },
        shirtType: { type: GraphQLNonNull(GraphQLString)},
        upc: { type: GraphQLNonNull(GraphQLInt) },
        size: {
            type: SizeType,
            resolve(parent, args) {
                // return _.find(clothingSize, { id: parent.sizeId });
                return Size.findById(parent.sizeId);
            }
        },
        color: {
            type: ColorType,
            resolve(parent, args) {
                // return _.find(colors, { id: parent.colorId });
                return Color.findById(parent.colorId);
            }
        }
    })
});

const PantType = new GraphQLObjectType({
    name: 'Pant',
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLID) },
        pantType: { type: GraphQLNonNull(GraphQLString) },
        upc: { type: GraphQLNonNull (GraphQLInt) },
        size: {
            type: SizeType,
            resolve(parent, args) {
                // return _.find(clothingSize, { id: parent.sizeId });
                return Size.findById(parent.sizeId);
            }
        },
        color: {
            type: ColorType,
            resolve(parent, args) {
                // return _.find(colors, { id: parent.colorId })
                return Color.findById(parent.colorId);
            }
        }
    })
});

const SizeType = new GraphQLObjectType({
    name: 'Size',
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLNonNull (GraphQLString) },
        tshirts: {
            type: new GraphQLList(TshirtType),
            resolve(parent, args) {
                // return _.filter(tshirts, { sizeId: parent.id })
                return Tshirt.find({sizeId: parent.id });
            }
        },
        pants: {
            type: new GraphQLList(PantType),
            resolve(parent, args) {
                // return _.filter(pants, { colorId: parent.id })
                return Pant.find({sizeId: parent.id });
            }
        }
    })
});

const ColorType = new GraphQLObjectType({
    name: 'Color',
    fields: () => ({
        id: { type: GraphQLNonNull (GraphQLID) },
        name: { type:  GraphQLNonNull(GraphQLString) },
        tshirts: {
            type: new GraphQLList(TshirtType),
            resolve(parent, args) {
                // return _.filter(tshirts, { colorId: parent.id })
                return Tshirt.find({colorId: parent.id });
            }
        },
        pants: {
            type: new GraphQLList(PantType),
            resolve(parent, args) {
                // return _.filter(pants, { colorId: parent.id })
                return Pant.find({colorId: parent.id });
            }
        }
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
                // return _.find(tshirts, { id: args.id });
                return Tshirt.findById(args.id);
            }
        },
        tshirts: {
            type: new GraphQLList(TshirtType),
            resolve(parent, args) {
                // return tshirts;
                return Tshirt.find({});
            }
        },
        pant: {
            type: PantType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                // code to get data from db / other source
                // return _.find(pants, { id: args.id });
                return Pant.findById(args.id);
            }
        },
        pants: {
            type: new GraphQLList(PantType),
            resolve(parent, args) {
                // return pants;
                // this is how we return all pants
                return Pant.find({});
            }
        },
        size: {
            type: SizeType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                // code to get data from db / other source
                // return _.find(clothingSize, { id: args.id })
                return Size.findById(args.id);
            }
        },
        sizes: {
            type: new GraphQLList(SizeType),
            resolve(parent, args) {
                return Size.find({});
            }
        },
        color: {
            type: ColorType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                // code to get data from db / other source
                // return _.find(colors, { id: args.id })
                return Color.findById(args.id);
            }
        },
        colors: {
            type: new GraphQLList(ColorType),
            resolve(parent, args) {
                // return colors;
                return Color.find({});
            }
        }
    }
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addTshirt: {
            type: TshirtType,
            args: {
                shirtType: { type: GraphQLNonNull(GraphQLString) },
                colorId: { type: GraphQLNonNull(GraphQLID) },
                upc: { type: GraphQLNonNull(GraphQLInt) },
                sizeId: { type: GraphQLNonNull(GraphQLID) }
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
                pantType: { type: GraphQLNonNull(GraphQLString) },
                colorId: { type: GraphQLNonNull(GraphQLID) },
                upc: { type: GraphQLNonNull(GraphQLInt) },
                sizeId: { type: GraphQLNonNull(GraphQLID) }
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
            description: 'Add a size',
            args: {
                name: { type: GraphQLNonNull(GraphQLString) }
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
            description: 'Add a color',
            args: {
                name: { type: GraphQLNonNull(GraphQLString) }
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


module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});