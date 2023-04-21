import { gql } from '@apollo/client';
// import React from 'react';
// import { Card } from 'antd';
// import style from '@/styles/charactersList.module.css';

// const { Meta } = Card;

export const GET_CHARAC_LIST = gql`
    query getCharacters {
        characters {
        results {
            id
            image
            name
            gender
        }
        }
    }  
`;
//     export const useGetCharacList = () => {
//         const { loading, error, data } = useQuery(GET_CHARAC_LIST);

//         return {
//             data, 
//             error,
//             loading
//         };

//     }

// export default function CharacList() {
//     // custom hook
//     const { loading, error, data } = useQuery(GET_CHARAC_LIST);
    
//     if(loading) return <div>Loading...</div>
//     if(error) return <div>Error!{error.message}</div>

//     return <div className={style.charactersList}>
//         {data.characters.results.map((character) => {
//             return   <Card
//             hoverable
//             style={{ width: 340, margin: 20 }}
//             cover={<img alt="example" src={character.image} />}
//           >
//             <Meta title={character.name} description={character.gender} />
//           </Card>
//         })}
//     </div> 
// };


export default { GET_CHARAC_LIST };