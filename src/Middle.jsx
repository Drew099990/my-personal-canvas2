import img from "./assets/aaaaa.jpg";
import img2 from "./assets/bb.jpg";

export default function Middle() {
  return (
<div style={{backgroundColor:"#6A89A7 "}}>

<img id="drew" alt="picture of creator" src={img2} style={{borderRadius:"50px"}}/>
<div className="do" id="drewT" style={{width:"500px",height:"800px",backgroundColor:"#BDDDFC",borderRadius:"50px"}}>I believe in being able to bring forward a simple but yet unique creative designs</div>
<img id="drew2" alt="picture of creator" src={img} style={{borderRadius:"50px"}}/>
<div className="do" id="drewT2" style={{fontSize:"3rem",width:"500px",height:"800px",color:"#BDDDFC",borderRadius:"50px"}}>To best meet you needs  feel free to take a look around and I hope you find something you like</div>
 </div> );
}