import { Card } from "antd";

const CardItem = ({title,description}) => {
  const { Meta } = Card;
    return ( 
        <Card
        hoverable
        style={{
          width: 240,
        
        }}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
      >
        <Meta title={title} description={description} />
      </Card>
     );
}
 
export default CardItem;