import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import Title from "./Title";
import Middle from "./Middle";
import { useEffect } from "react";
import img from "./assets/A.gif"
import img2 from "./assets/ccc.jpg"

function App() {
 
return (
<div style={{borderTopRightRadius:"25%",
            
}}>  


      <Title value={true} contact={true}/>
      <Header pic={img} pic2={img2} value={true} contact={true}/>
    
      <Body/>   

      <Footer/>
</div>
  );
}

export default App
