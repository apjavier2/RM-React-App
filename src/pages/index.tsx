// import style from "@/styles/index.module.css";
import CharacList from "./charPages";
import { Row } from "antd";


export default function Home() {
  return (
    <main>
      <Row>
        <CharacList />
      </Row>
    </main>
  );
}
