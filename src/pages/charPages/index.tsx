import { useGetCharacList } from '@/store/api-hooks/useGetCharacList';
import style from '@/styles/charactersList.module.css';
import { Card } from 'antd';
import { characterType } from '@/components/interface';
import { useRouter } from 'next/router';


const { Meta } = Card;

export default function CharacList() {

  const router = useRouter();

    // custom hook
    const { error, loading, data } = useGetCharacList();
    
    if(loading) return <div>Loading...</div>
    if(error) return <div>Error!{error.message}</div>

    return <div className={style.charactersList}>
        {data.characters.results.map((character: characterType) => {
            return   <Card
            key={character.id}
            hoverable
            style={{ width: 340, margin: 20 }}
            cover={<img alt="example" src={character.image} />}
          >
            <Meta title={character.name} description={character.gender} />
            <button type="button" onClick={() => router.push(`/charPages/${character.id}`)}>
                View More
            </button>
          </Card>
        })}
    </div> 
};
