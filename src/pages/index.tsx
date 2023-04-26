import { Row, Button } from "antd";
import { Caveat } from "next/font/google";
import { useRouter } from 'next/router';
import { SearchOutlined } from '@ant-design/icons';

const caveat = Caveat({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
})


export default function Home() {
  const router = useRouter();
  return (
    <main>
      <div className={`${caveat.className}`} style={{ fontSize: '25px', textAlign: 'center' }}>
        <h2>Rick and Morty</h2>
      </div>
      <Row>
      <Button style={{marginLeft: '800px', height: '50px', fontSize: '18px'}} onClick={() => router.push(`/charPages`)} icon={<SearchOutlined />}>Browse Characters</Button>
      </Row>
    </main>
  );
}
