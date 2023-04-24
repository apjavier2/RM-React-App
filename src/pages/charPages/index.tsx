import { useGetCharacList } from '@/store/api-hooks/useGetCharacList';
import style from '@/styles/charactersList.module.css';
import { Card } from 'antd';
import { characterType } from '@/components/interface';
import { useRouter } from 'next/router';
import  loadingSpinner  from '@/components/spinner';

const { Meta } = Card;

export default function CharacList() {

  const router = useRouter();

    // custom hook
    const { error, loading, data } = useGetCharacList();
    
    if (loading)
    return loadingSpinner();

    if(error) return <div>Error!{error.message}</div>

    return <div className={style.charactersList}>
        {data.characters.results.map((character: characterType) => {
            return   <Card className={style.cardBg}
            onClick={() => router.push(`/charPages/${character.id}`)}
            key={character.id}
            hoverable
            style={{ width: 240, margin: 20, overflow: 'hidden' }}
            cover={<img alt="example" src={character.image} />}
          >
            <Meta className={style.cardFont} title={character.name} description={character.gender} />
          </Card>
        })}
    </div> 
};