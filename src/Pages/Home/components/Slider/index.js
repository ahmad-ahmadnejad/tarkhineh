// import { useState } from 'react';
// import { Zoom } from 'react-slideshow-image';
// import 'react-slideshow-image/dist/styles.css';
// import { CheckCircleOutlined } from '@ant-design/icons'
// const Slider  = () => {
//     const [cuurentImage,setCurrentImage] = useState(0)

import { Carousel } from "antd";

//     const indicators = (index) => (<div  className="indicator">{index === cuurentImage ? <CheckCircleOutlined style={{color:'green'}}  />:<CheckCircleOutlined color='gray' />}</div>);
//     return ( 
// <div>
//         <Zoom onChange={(e)=>setCurrentImage(e)} autoplay={false} indicators={indicators} scale={1.4}>
            
//             <img width={'100%'} style={{maxHeight:'200px'}} src='/images/slider.jpg'/>  
//              <img width={'100%'} style={{maxHeight:'200px'}} src='/images/slider.jpg'/>
//              <img width={'100%'} style={{maxHeight:'200px'}} src='/images/slider.jpg'/>

//         </Zoom>
//     </div>
//      );
// }
 
// export default Slider ;
const contentStyle = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
const Slider = () => {

    return (  <Carousel  arrows prevArrow={<div>قبلی</div>} nextArrow={<div>بعدی</div>} >
        <div>
          <h3 style={contentStyle} >1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel> );
}
 
export default Slider;