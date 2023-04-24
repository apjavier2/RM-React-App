import { Descriptions } from 'antd';
import  { useGetCharacInfo }  from '@/store/api-hooks/useGetCharacInfo';
import { useRouter } from 'next/router';

export default function CharacInfo () {
    const router = useRouter();
    const { charid } = router.query;
    
    const { error, loading, data } = useGetCharacInfo(parseInt(charid! as string));
   
    if(error) return <h3>Error!{error.message}</h3>
    if(loading) return <h3>Loading...</h3>
 
    return <div>
        <Descriptions title="Character Info">
        <Descriptions.Item><img src={data.character.image}></img></Descriptions.Item>    
        <div></div>
        <div></div>
        <Descriptions.Item label="Name">{data.character.name}</Descriptions.Item>
        <Descriptions.Item label="Species">{data.character.species}</Descriptions.Item>
        <Descriptions.Item label="Status">{data.character.status}</Descriptions.Item>         
        <Descriptions.Item label="Created">{data.character.created}</Descriptions.Item>
        <Descriptions.Item label="Location">{data.character.location.name}</Descriptions.Item>
        </Descriptions> 
</div> 
};