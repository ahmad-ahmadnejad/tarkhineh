import { DeleteOutlined } from "@ant-design/icons";
import { Card } from "antd";

const CardItem = ({data,deleteFoodHandler}) => {
    console.log(data,'data');
    return ( <>
     <Card style={{direction:'rtl'}}>
    <Card.Grid style={{width:'33%'}}>
        <img width={150} src={`/images/foods/${data?.id}.png`} />
         </Card.Grid>
    <Card.Grid  style={{width:'33%'}}> 
    <div className="flex flex-col justify-between items-center h-full">
        <div>{data?.title}</div>
        <div>غذای محبوب ما</div>
        <div>ستاره و..</div>
    </div>
    </Card.Grid>
    <Card.Grid  style={{width:'33%'}}> 
    <div className="flex flex-col justify-between items-center  h-full">
        <div className="cursor-pointer"><DeleteOutlined onClick={deleteFoodHandler} /></div>
        <div>{data?.discountedPrice} تومان  </div>
        <div>{data?.price} تومان </div>
    </div>
    </Card.Grid>
  </Card>
    </> );
}
 
export default CardItem;