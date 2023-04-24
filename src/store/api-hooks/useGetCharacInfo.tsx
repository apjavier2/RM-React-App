import { useQuery } from '@apollo/client';
import { GET_CHARAC_INFO } from '../queries/charactersInfo';


export const useGetCharacInfo = (id: number)=> {
    const { error, loading, data } = useQuery(GET_CHARAC_INFO, {
        variables: {
            id
        }
    });

    return {
        error,
        loading,
        data
    } 
}