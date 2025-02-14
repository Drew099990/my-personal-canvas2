import Header from "../Header";
import Body from "../Body";
import Footer from "../Footer";
import Title from "../Title";
import Middle from "../Middle";
import AboutBody from "./AboutBody";
import img from "../assets/A.gif"
import img2 from "../assets/ccc.jpg"


export default 

function About(){
    return(<div  >
        <Title contact={true} />
    <AboutBody />
    <Footer/>
    
    </div>);
}