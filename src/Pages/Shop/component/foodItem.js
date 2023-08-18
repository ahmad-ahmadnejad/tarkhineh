import { HeartOutlined,StarOutlined } from '@ant-design/icons';
import { Badge, Button, Card } from 'antd';


const FoodItem = ({buyFoodHandler,foodImage,title,starCount,scoreCount,price,hasDiscount,discountedPrice,discountedPercent}) => {
   console.log(hasDiscount,'hasDiscount');
   return ( <>
      <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src={foodImage} />}
  >
    <div className='flex flex-col justify-center items-center gap-4 pb-4  p-2 '>
        <h2 className='text-2xl'>{title}</h2>
        <div className='flex flex-row justify-between items-center w-full'>
        <div style={{visibility:hasDiscount?'visible':'hidden'}}> 
        <Badge style={{background:'#FFF2F2',color:'red'}} className='mr-' count={`${discountedPercent}%`} />
            <span  className='text-xs line-through '>{discountedPrice}</span>
            </div>

            <div> <span className='text-xs hidden md:inline'>افزودن به علاقمندی</span>
            <HeartOutlined className='pl-2'/>
            </div>
        </div>
        <div className='flex flex-row justify-between items-center w-full text-xs'>
        <div  >{price}</div>

            <div className='flex flex-row gap-2' > 
            <span className='hidden md:inline'>(امتیاز {scoreCount} )</span>
            <span>{starCount}</span>

            <StarOutlined />

                 </div>
        </div>        
        <div className='w-full'>
            <Button onClick={buyFoodHandler}  className='bg-[#417F56] text-white w-full '> افزودن به سبد خرید</Button>
            </div>

    </div>
  
  </Card>
    </> );
}
 
export default FoodItem;