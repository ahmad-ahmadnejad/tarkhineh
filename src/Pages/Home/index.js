import Branches from "./components/Branches";
import Slider from "./components/Slider";

const Home = () => {
    return ( 
        <div style={{minHeight:'700px',height:'800px'}}>
        {/* Clean Code */}
        <Slider/>
        <Branches/>
        </div>
     );
}
export default Home;