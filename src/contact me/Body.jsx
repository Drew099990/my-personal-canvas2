import img from "../assets/linked.webp"
import img2 from "../assets/youtube.webp"
import img3 from "../assets/whatsapp.webp"


export default

function Body(){
    return(<div style={{display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center"}}>
      <div>   
      <div style={{width:"400px",
      border:"5px solid #344959", 
      height:"400px", 
      backgroundColor:" #B1D6B7FF", 
        margin:"15px"}}>j 
      <a href="https://linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=andrew-muyunda-725a98312"><img src={img} width="380px" height="380px"/></a>
      
      </div>
      <div style={{border:"5px solid #344959", width:"400px", height:"400px", backgroundColor:" #B1D6B7FF", margin:"15px"}}>j 
      <a href="http://www.youtube.com/@Artisanofthought"><img src={img2} width="380px" height="380px"/></a>
      
      </div>
      <div style={{border:"5px solid #344959", width:"400px", height:"400px", backgroundColor:" #B1D6B7FF", margin:"15px"}}>j 
      <a href="https://api.whatsapp.com/send/?phone=%2B260777290515&text&type=phone_number&app_absent=0&wame_ctl=1"><img src={img3} width="380px" height="380px"/></a>
      
      </div>
      </div>
      <h1 style={{color:"#bdddfc"}}> or </h1>
<div  style={{display:"flex",
  flexDirection:"column",
  justifyContent:"flex-start",
  alignItems:"center",
  width:"30rem",
  height:"30rem"
  ,backgroundColor: " #1D3122FF",
  color:"#bdddfc",
  border:"3px solid #bdddfc",
  marginBottom:"5rem"}}>
    <h1 style={{
                marginBottom:"4rem"
    }}>leave a message</h1>
  <label for="email" > EMAIL:</label>
  <br/>
    <input id="email" type="email"></input>
    <br/>
    <label for="messageSent" > MESSAGE:</label>
    <br/>
    <textarea id="messageSent" style={{height:"10rem",width:"20rem"}}/>


</div>
  </div>);
}