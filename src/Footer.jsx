import { FaWhatsapp } from "react-icons/fa";
import { FaHandHoldingHand, FaHandHoldingHeart, FaMicrophone, FaOpencart } from "react-icons/fa6";
export default

function Footer(){
    return(<>
    <hr></hr>
    <footer id="bottom" >
        <div>    </div>
      <div className="dd" style={{ backgroundColor: "rgb(109, 184, 105)",padding:"10px", textAlign:"center"}}>
       <b> <p style={{fontSize:"1rem",color:"#384959"}}>DREW'S CABINET</p> </b>  
       <a href="/show"><h3>showcase  <div  style={{borderLeft:"2px solid #384959 " ,backgroundColor: "#BDDDFC",padding:"10px"}}><FaOpencart/></div></h3></a>
        <a href="/brain"><h3>brainstorm <div  style={{borderLeft:"2px solid #384959 " ,backgroundColor: "#BDDDFC",padding:"10px"}}><FaMicrophone /></div></h3></a>
        <a href="/support"><h3>support  <div  style={{borderLeft:"2px solid #384959 " ,backgroundColor: "#BDDDFC",padding:"10px"}}><FaHandHoldingHeart /></div></h3></a>
        <a style={{}} href="https://api.whatsapp.com/send/?phone=%2B260777290515&text&type=phone_number&app_absent=0&wame_ctl=1"><h3 style={{height:"auto" ,}}>instant access <div  style={{borderLeft:"2px solid #384959 " ,backgroundColor: "#BDDDFC",padding:"10px"}}><FaWhatsapp /></div></h3></a>
        <a style={{textDecoration:"none"}} ><h4 style={{border:"2px solid #384959 ",color:"#384959" ,backgroundColor: "#BDDDFC",padding:"10px"}}> © 2025 - {new Date().getFullYear() > 2025? new Date().getFullYear():""} All rights reserved</h4>
        </a></div>
</footer></>);
}