import img from "./assets/process.jpg";
import { FaHouseChimney } from "react-icons/fa6";
export default

    function Body() {
    return (<> <div id="left" className="bb" style={{boxShadow:"3px 7px 100px black",border:"5px solid #1D3122FF" }}>
        <p id="welcome" style={{ fontSize: "10rem", paddingTop: "5rem", paddingLeft: "5rem" }}><b>welcome</b></p>
        <p id="home" style={{ fontSize: "13em", paddingLeft: "30px" }}><b>h<p id="dying" style={{ display: "inline" }}>o</p>me  <div style={{display:"inline"}} id="homeSign"><FaHouseChimney /></div> </b></p></div>
      
        <div id="right" style={{}}>
            <div className="do" > This is a website dedicated to showcase my work as software engineer
                and ui/ux designer , it stands to also aid as a bridge to my
                thought process during my creative process .
                <img id="process" src={img} height={300} width={300} style={{}} />
                <p>-sleepy panda</p>
            </div>
          <div style={{margin:"20px",marginTop:"60px",  color: "#BDDDFC"}}>
          <div style={{fontFamily:"monospace", width: "71rem",fontSize:"1.25rem" }}>   <h id="wow">I believe in being able to bring forward a simple but yet unique creative designs .</h>
            </div>
            <div style={{zIndex:"10", width: "83rem",fontFamily:"monospace" }}>   <h1 className="personal" id="wow">To best meet you needs  feel free to take a look around and I hope you find something you like ;)</h1>
            </div>
            <h1 style={{fontFamily:"monospace"}}>-sleepy panda</h1>
          </div>
        </div>
    </>)

}