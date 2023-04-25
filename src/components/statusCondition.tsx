import { Typography } from "antd";
import statusCondition from '@/common/constants/status.constant';
import { useGetCharacInfo } from "@/store/api-hooks/useGetCharacInfo";
import { useRouter } from "next/router";
import loadingSpinner from "@/components/spinner";

const { Text } = Typography;

const StatCon = ()=> {

    const router = useRouter();
    const { charid } = router.query;
    
    const { error, loading, data } = useGetCharacInfo(
      parseInt(charid! as string)
    );
    
    if (error) return <h3>Error!{error.message}</h3>;
    if (loading) return loadingSpinner();

    return <div>
    {(data.character.status === statusCondition.Alive && (
            <Text type="success">{data.character.status}</Text>
        )) ||
            (data.character.status === statusCondition.Unknown && (
            <Text type="warning">{data.character.status}</Text>
            )) ||
            (data.character.status === statusCondition.Dead && (
            <Text type="secondary">{data.character.status}</Text>
            ))}
</div>
}

export default StatCon;