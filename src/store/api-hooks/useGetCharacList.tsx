import { GET_CHARAC_LIST } from "../queries/charactersList";
import { useQuery } from '@apollo/client';

export const useGetCharacList = ()=> {
    const { error, loading, data } = useQuery(GET_CHARAC_LIST);
    
    return {
        error,
        loading, 
        data
    };
};