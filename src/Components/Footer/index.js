import  { InstagramOutlined,TwitterOutlined,MailOutlined } from '@ant-design/icons'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { cartContext } from '../../App';
const Footer = () => {
    const navigate = useNavigate();

    const navigateToBlogsHandler = () => { 
        navigate('/blogs')
    }

    const myCart = useContext(cartContext)
console.log(myCart,'myCart');
    return ( 
        <div className=" bottom-0 left-0 w-full flex flex-row-reverse justify-between items-center p-4 text-white " style={{backgroundImage:`url(${'/images/footer_back.jpg'})`}}>

                <div className="flex flex-col justify-center items-center gap-4 min-w-[200px] text-center" >
                    <h2 className="font-bold text-xl">دسترسی آسان</h2>
                    <h4>پرسش های متداول</h4>
                    <h4>قوانین ترخینه</h4>
                    <h4>حریم خصوصی</h4>
                    <div className='flex flex-row justify-center items-center gap-2'>
                    <InstagramOutlined />
                    <TwitterOutlined/>
                    <MailOutlined />
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-4 min-w-[200px] text-center" >
                    <h2 className="font-bold text-xl">دسترسی آسان</h2>
                    <h4>پرسش های متداول</h4>
                    <h4>قوانین ترخینه</h4>
                    <h4 onClick={navigateToBlogsHandler} className='cursor-pointer'>وبلاگ ترخینه </h4>
                    <div className='flex flex-row justify-center items-center gap-2'>
                    <InstagramOutlined />
                    <TwitterOutlined/>
                    <MailOutlined />
                    </div>
                </div>
                <div>
                    <h2>شعبه های ترخینه </h2>
                    <h4> شعبه اکباتان </h4>
                    <h4>شعبه چالوس </h4>
                    <h4>شعبه اقدسیه</h4>
                </div> 
                <div>
                    <h2>شعبه های ترخینه </h2>
                    <h4> شعبه اکباتان </h4>
                    <h4>شعبه چالوس </h4>
                    <h4>{myCart.cartFood.length} تعداد محصولات خریداری شده:</h4>
                </div>               


        </div>
     );
}
 
export default Footer;
