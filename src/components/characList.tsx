import { useGetCharacList } from '@/store/api-hooks/useGetCharacList';
import style from '@/styles/charactersList.module.css';
import React from 'react';
import { Card } from 'antd';


const { Meta } = Card;

export default function CharacList() {
    // custom hook
    const { error, loading, data } = useGetCharacList();
    
    if(loading) return <div>Loading...</div>
    if(error) return <div>Error!{error.message}</div>

    return <div className={style.charactersList}>
        {data.characters.results.map((character) => {
            return   <Card
            hoverable
            style={{ width: 340, margin: 20 }}
            cover={<img alt="example" src={character.image} />}
          >
            <Meta title={character.name} description={character.gender} />
          </Card>
        })}
    </div> 
};
