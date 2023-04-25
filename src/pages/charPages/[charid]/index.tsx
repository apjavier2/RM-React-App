import { Col, Row, Descriptions } from "antd";
import { useGetCharacInfo } from "@/store/api-hooks/useGetCharacInfo";
import { useRouter } from "next/router";
import loadingSpinner from "@/components/spinner";
import style from "@/styles/characInfo.module.css";
import StatCon from "@/components/statusCondition";

export default function CharacInfo() {
  const router = useRouter();
  const { charid } = router.query;

  const { error, loading, data } = useGetCharacInfo(
    parseInt(charid! as string)
  );

  if (error) return <h3>Error!{error.message}</h3>;
  if (loading) return loadingSpinner();

  return (
    <div className={style.body}>
      <Row>
        <Col span={12} className={style.image}>
          <Descriptions.Item className={style.image}>
            <img src={data.character.image} alt={data.character.name} />
          </Descriptions.Item>
        </Col>
        <Col span={12} className={style.content}>
          <Descriptions title="Character Info">
            <Descriptions.Item label="Name">
              {data.character.name}
            </Descriptions.Item>
            <Descriptions.Item label="Species">
              {data.character.species}
            </Descriptions.Item>
            <Descriptions.Item label="Status">
            <StatCon />      {/* data.character.status /> */}
            </Descriptions.Item>
            <Descriptions.Item label="Created">
              {data.character.created}
            </Descriptions.Item>
            <Descriptions.Item label="Location">
              {data.character.location.name}
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </div>
  );
}