import Header from "../Header";
import Footer from "../Footer";
import Title from "../Title";
import img from "../assets/A.gif"
import img2 from "../assets/ccc.jpg"
import Body from "./Body";
export default 

function Contact(){
    return(<div>
    <Title value={true} contact={false}/>
    <Header pic={img} pic2={img2} value={true} contact={false}/>
    <Body/>
    <Footer/>
    </div>);
}