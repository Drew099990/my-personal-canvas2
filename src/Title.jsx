import { RiSketching } from "react-icons/ri";
import { Gi3dMeeple, GiPawHeart, GiWrappedHeart } from "react-icons/gi";
import { GiTechnoHeart } from "react-icons/gi";
import { FaPaw } from "react-icons/fa";
import { LuPawPrint } from "react-icons/lu";
export default function Title( props) {
    return (
        <div style={{marginLeft:"30px" }} className="">
           
           <div> 
        { props.value?  <h1  id="sleep" style={{ color: "#BDDDFC" ,maxWidth:"240px" ,}}>
            ________sleepy panda.
            </h1>:<></>}
          { props.value? <h1  id="andrew" style={{ color: "#BDDDFC" ,letterSpacing:"2px",visibility:"hidden",maxWidth:"255px"}}>
               --andrew.m.muyunda.
            </h1>:<h1  id="andrewNormal" style={{ color: "#BDDDFC" ,letterSpacing:"2px",visibility:"hidden",maxWidth:"255px"}}>
               --andrew.m.muyunda.
            </h1>}
            </div>
            
            <h1  className="personal" style={{ color: "#BDDDFC",letterSpacing:"2px", fontSize: "50px" ,maxWidth:"44rem",display:"absolute"}} >
                MY PERSONAL CANVAS <LuPawPrint/> 
            </h1>
        {props.contact? <a href="/contact"><h1 style={{mixBlendMode:"difference",
          letterSpacing:"2px",
          color:"#D5D6CDFF", 
          position:"fixed",
          right:"25px", 
          top:"0px",
          outline:"auto",
          fontSize:"1.7rem"}}>-contact me-</h1></a>
            :<></>}   
        </div>
    );
}