{/*Replace the code with commented codes if useGetCharacList is called here.*/}
// import { Card } from 'antd';
// import { characterType } from '@/components/interface';
// import style from '@/styles/charactersList.module.css';
// import { useGetCharacList } from '@/store/api-hooks/useGetCharacList';
import style from "@/styles/index.module.css";
import CharacList from "./charPages/characList";
import { Divider, Row } from "antd";

// const { Meta } = Card;

export default function Home() {

  // const { error, loading, data } = useGetCharacList();
    
  //   if(loading) return <div>Loading...</div>
  //   if(error) return <div>Error!{error.message}</div>

  return (
    <main>
      <Divider orientation="center" className={style.h2}>
        <h2>Rick and Morty</h2>
      </Divider>
      <Row>
        <CharacList />
        {/* <div className={style.charactersList}>
        {data.characters.results.map((character: characterType) => {
            return   <Card
            hoverable
            style={{ width: 340, margin: 20 }}
            cover={<img alt="example" src={character.image} />}
          >
            <Meta title={character.name} description={character.gender} />
          </Card>
        })}
    </div> */}
      </Row>
    </main>
  );
}
