import { gql } from 'apollo-boost';

// FIRST - we construct this query that is below
const getTshirtsQuery = gql`
    {
        tshirts {
            id
            shirtType
            upc
            size {
                name
            }
            color {
                name
            }
        }
    }

`;

const getTshirtQuery = gql`
    query($id: ID){
        tshirt(id: $id){
            id
            shirtType
            color{
                name
            }
            upc
            size{
                name
            }
        }
    }
`;

const getPantsQuery = gql`
    {
        pants {
            id
            pantType
            upc
            size {
                name
            }
            color {
                name
            }
        }
    }
`;

const getPantQuery = gql`
    query($id: ID){
        pant(id: $id){
            id
            pantType
            color{
                name
            }
            upc
            size{
                name
            }
        }
    }
`;

const getSizeColorQuery = gql`
    {
        sizes{
            id
            name
        }
        colors{
            id
            name
        }
    }
`;

const getColorsQuery = gql`
    {
        colors{
            id
            name
        }
    }
`;
// mutations
const addTshirtMutation = gql`
    mutation($shirtType: String!, $colorId: ID!, $upc: Int!, $sizeId: ID!){
        addTshirt(shirtType: $shirtType, colorId: $colorId, upc: $upc, sizeId: $sizeId){
            shirtType
            color{
                name
            }
            upc
            size{
                name
            }
        }
    }
`;
// $ using this size, we create cariable in a () right after we declare mutation and then we can pass thos variable into the mutation itself
const addPantMutation = gql`
    mutation($pantType: String!, $colorId: ID!, $upc: Int!, $sizeId: ID!){
        addPant(pantType: $pantType, colorId: $colorId, upc: $upc, sizeId: $sizeId){
            pantType
            color{
                name
            }
            upc
            size{
                name
            }
        }
    }
`;

const addColorMutation = gql`
    mutation($name: String!){
        addColor(name: $name){
            name
        }
    }
`;

export {
    getPantsQuery,
    getPantQuery,
    getTshirtsQuery,
    getTshirtQuery,
    getSizeColorQuery,
    getColorsQuery,
    addTshirtMutation,
    addPantMutation,
    addColorMutation
};