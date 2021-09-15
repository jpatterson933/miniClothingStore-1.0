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

// FIRST - we construct this query that is below
// same query structure as graphql //
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

// FIRST - we construct this query that is below
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
// after mutation you can name the mutation 
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

export {
    getPantsQuery,
    getTshirtsQuery,
    getSizeColorQuery,
    addTshirtMutation,
    addPantMutation
};