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

export { getPantsQuery, getTshirtsQuery, getSizeColorQuery };