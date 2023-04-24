import { gql } from '@apollo/client';

export const GET_CHARAC_INFO =gql`
    query getCharacters($id: ID!) {
        character(id: $id) {
        id
        image
        name
        species
        status
        created
        location {
            name
        }
        }
    }
`;

export default { GET_CHARAC_INFO };