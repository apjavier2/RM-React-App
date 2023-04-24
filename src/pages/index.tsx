import CharacList from "./charPages";
import { Row } from "antd";
import { Caveat } from "next/font/google";

const caveat = Caveat({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
})

export default function Home() {
  return (
    <main>
      <div className={`${caveat.className}`} style={{ fontSize: '25px', textAlign: 'center' }}>
        <h2>Rick and Morty</h2>
      </div>
      <Row>
        <CharacList />
      </Row>
    </main>
  );
}
