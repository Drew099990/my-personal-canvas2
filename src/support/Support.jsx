import Title from "../Title";
import Header from "../Header";
import Footer from "../Footer";
import img from "../assets/A.gif"
import img2 from "../assets/ccc.jpg"
import Body from "./Body";

export default

function Support(){
    return(<div>
      
      <Title value="true" contact={true}/>
      <Header  pic={img} pic2={img2} value={true} contact={true}/>
      <Body/>
      <Footer/>

    </div>);
}