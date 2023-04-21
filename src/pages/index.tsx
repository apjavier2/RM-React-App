import classes from "../styles/index.module.css";
// import CharacList from '@/store/queries/charactersList';
import CharacList from "../components/characList";
import { Col, Divider, Row } from "antd";

export default function Home() {
  return (
    <main>
      <Divider orientation="center" className={classes.h2}>
        <h2>Rick and Morty</h2>
      </Divider>
      <Row>
        <CharacList />
      </Row>
    </main>
  );
}
