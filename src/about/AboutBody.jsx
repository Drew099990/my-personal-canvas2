import img from "../assets/app.jpg";
import img2 from "../assets/eeee.jpg";
import img3 from "../assets/cc.jpg";
import Middle from "../Middle";
import img33 from "../assets/eee.jpg"
import music from "../assets/drewpoem.mp3"
import { RiBodyScanFill } from "react-icons/ri";
import { GiHalfBodyCrawling } from "react-icons/gi";
import { AiOutlineSmile } from "react-icons/ai";
import { LuSmilePlus } from "react-icons/lu";
export default 

function AboutBody(){
const skills = [
    {"language":"java","percentage":"80%"}
   ,{"language":"dart","percentage":80}
   ,{"language":"javascript","percentage":84}
   ,{"language":"python","percentage":95}]
   let myPoem = null;

   const play = () => {
 
           if (myPoem) {
               myPoem.pause();
               myPoem.currentTime = 0; // Reset to start
           
       } 

       myPoem = new Audio(music);
       myPoem.play()
 
   };
function poem(){
 
}
    


    return(<div style={{
        marginTop: "1rem",
        borderRadius:"40px" }} className >
       <h1 style={{
            fontSize:"20rem",
            color:"#6A89A7FF",
            marginleft:"10px"
            }}>about <sub><GiHalfBodyCrawling/>me 
            </sub> </h1>
        <br/> <br/> <br/> <br/> <br/>  <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> 
               <p className="messages" >
                  i am a software engineer, ui/ux designer and freelancer who seeks to bring ones ideas into reality.</p>
        <div id="self" style={{
            backgroundColor:" #BDDDFC", 
            marginLeft:"35%",
            display:"inclassNameine-block",
            height:"auto",borderRadius:"40%",
            borderBottomLeftRadius:"50px"
       ,borderStyle:"dashed",
       borderTopStyle:"solid", 
       marginTop:"3rem",
       borderBottomRightRadius:"50px",
       width:"30.3rem"}}>
        {/* <img  alt="picture of creator of site" src={img3} /> */}
       <img alt="picture of creator of website" id="slSelf" src={img}/> 
       <p className="messages" style={{color:"black"}}>one key at a time</p>
       <img alt="picture of creator of site" id="pic2" style={{paddingLeft:"20px",paddingTop:"15px"}} src={img2} />
        <h2 id="slSelfText">i am</h2>
      
        </div>
         {/* for personal skills */}
        <h1 className="skillss" style={{marginLeft:"5rem",textDecoration:"underline"}}>my personal skills <AiOutlineSmile/></h1>  
        
          <div id="skills-chart" style={{width:"22%",minWidth:"25rem",marginLeft:"10px",color:"#BDDDFC"}}>
          <div>
            <h1 className="titleLanguage">mobile development</h1> 
             <div style={{border:"2px solid #BDDDFC",borderRadius:"40px",textDecoration:"underline"}}><div 
             style={{width:"70%"
              ,border:"7px solid #BDDDFC",display:"inline-block"}}></div> 80% </div>
        </div> 

        <div>
            <h1 className="titleLanguage">web development</h1> 
             <div style={{border:"2px solid #BDDDFC",borderRadius:"40px"}}><div 
             style={{width:"80%"
              ,border:"7px solid #BDDDFC",display:"inline-block"}}></div> 90% </div>
        </div> 

        <div>
            <h1 className="titleLanguage">desktop development</h1> 
             <div style={{border:"2px solid #BDDDFC",borderRadius:"40px"}}><div 
             style={{width:"60%"
              ,border:"7px solid #BDDDFC",display:"inline-block"}}></div> 70% </div>
        </div> 

        <div>
            <h1 className="titleLanguage">automation</h1> 
             <div style={{border:"2px solid #BDDDFC",borderRadius:"40px"}}><div 
             style={{width:"80%"
              ,border:"7px solid #BDDDFC",display:"inline-block"}}></div>  90% </div>
        </div>
        {/* table */}
         <div  style={{border:"3px solid #bdd",
            transform:"translate(600px ,100px)",
            textAlign:"center",
            fontSize:"20px"}}>
            <h1> other skills </h1>
        <table>
      <tr style={{backgroundColor:"#bdd",color:"#344959",}}>
            <th style={{width:"15rem",height:"3rem"}}>command line</th>
            <th style={{width:"15rem",height:"3rem"}}>git and github</th>
            <th style={{width:"15rem",height:"3rem"}}>my sql</th>
            <th style={{width:"10rem",height:"3rem"}}>?</th>
            </tr>
      <tr style={{backgroundColor:"#bdd",color:"#344959"}}>
            <th style={{width:"10rem",height:"3rem"}}>?</th>
            <th style={{width:"10rem",height:"3rem"}}>?</th>
            <th style={{width:"10rem",height:"3rem"}}>?</th>
            <th style={{width:"10rem",height:"3rem"}}>?</th></tr>
</table>
        </div>

          </div>
          {/* for soft skills */}
<div className="skillss" id="soft" style={{marginLeft:"75rem"}}>
          <h1 className="skills" id="s">my soft skills <LuSmilePlus/></h1> 
          <div id="skills-chart" style={{marginleft:"7rem",width:"22%",minWidth:"25rem",marginLeft:"10px",color:"#BDDDFC"}}>
          <div>
            <h1 className="titleLanguage">communication</h1> 
             <div style={{border:"2px solid #BDDDFC",borderRadius:"40px"}}><div 
             style={{width:"70%"
              ,border:"7px solid #BDDDFC",display:"inline-block"}}></div> 80% </div>
        </div> 

        <div>
            <h1 className="titleLanguage">problem solving</h1> 
             <div style={{border:"2px solid #BDDDFC",borderRadius:"40px"}}><div 
             style={{width:"77%"
              ,border:"7px solid #BDDDFC",display:"inline-block"}}></div> 95% </div>
        </div> 

        <div>
            <h1 className="titleLanguage">team player</h1> 
             <div style={{border:"2px solid #BDDDFC",borderRadius:"40px"}}><div 
             style={{width:"80%"
              ,border:"7px solid #BDDDFC",display:"inline-block"}}></div> 100% </div>
        </div>

        <div>
            <h1 className="titleLanguage">continous learning</h1> 
             <div style={{border:"2px solid #BDDDFC",borderRadius:"40px"}}><div 
             style={{width:"80%"
              ,border:"7px solid #BDDDFC",display:"inline-block"}}></div>  100% </div>
        </div> 

        <div>
            <h1 className="titleLanguage">time management</h1> 
             <div style={{border:"2px solid #BDDDFC",borderRadius:"40px"}}><div 
             style={{width:"70%"
              ,border:"7px solid #BDDDFC",display:"inline-block"}}></div>  80% </div>
        </div>  

          <div>
            <h1 className="titleLanguage">visual design</h1> 
             <div style={{border:"2px solid #BDDDFC",borderRadius:"40px"}}><div 
             style={{width:"65%"
              ,border:"7px solid #BDDDFC",display:"inline-block"}}></div>  75% </div>
        </div> 
        
        <div>
            <h1 className="titleLanguage">protoyping</h1> 
             <div style={{border:"2px solid #BDDDFC",borderRadius:"40px"}}><div 
             style={{width:"60%"
              ,border:"7px solid #BDDDFC",display:"inline-block"}}></div>  70% </div>
        </div> 
        </div>
          </div>

          <h1 className="messages" style={{fontStyle:"italic",textDecoration:"double"}}> "if you dont sacrifice for your goals ,your goals become the sacrifice" </h1>
          <hr id="divider" ></hr>


          <h1 className="typed" style={{FontFamily:"'Courier New', Courier, monospace",fontStyle:"italic",color:"#BDDDFC",outline:"none",borderColor:"trasnsparent"}}>as a software engineer and ui/ux designer with extensive experience in my line of work in dart , java , javascript and python  </h1>
         {/* for languages */}
   
          <div id="skills-chart" style={{marginBottom:"0%",width:"22%",minWidth:"25rem",marginLeft:"10px",margin:"6%",color:"#BDDDFC",display:"inline-block"}}>
          <h1  style={{textDecoration:"underline" ,letterSpacing:"3px"}}> languages</h1>  
          <div>
            <h1 className="titleLanguage">java</h1> 
             <div style={{border:"2px solid #BDDDFC",borderRadius:"40px",textDecoration:"underline"}}><div 
             style={{width:"75%"
              ,border:"7px solid #BDDDFC",display:"inline-block"}}></div> 85% </div>
        </div> 

        <div>
            <h1 className="titleLanguage">javascript</h1> 
             <div style={{border:"2px solid #BDDDFC",borderRadius:"40px"}}><div 
             style={{width:"79%"
              ,border:"7px solid #BDDDFC",display:"inline-block"}}></div> 89% </div>
        </div> 

        <div>
            <h1 className="titleLanguage">dart</h1> 
             <div style={{border:"2px solid #BDDDFC",borderRadius:"40px"}}><div 
             style={{width:"70%"
              ,border:"7px solid #BDDDFC",display:"inline-block"}}></div> 80% </div>
        </div> 

        <div>
            <h1 className="titleLanguage">python</h1> 
             <div style={{border:"2px solid #BDDDFC",borderRadius:"40px"}}><div 
             style={{width:"85%"
              ,border:"7px solid #BDDDFC",display:"inline-block"}}></div>  95% </div>
        </div> 

     
          </div>
  
                   
          <div id="skills-chart" style={{width:"22%",minWidth:"25rem",marginTop:"10%",marginBottom:"0%",color:"#BDDDFC",display:"inline-block"}}>
          <h1  style={{textDecoration:"underline" ,letterSpacing:"3px"}}> frameworks </h1>  
          <div>
            <h1 className="titleLanguage">pytorch</h1> 
             <div style={{border:"2px solid #BDDDFC",borderRadius:"40px",textDecoration:"underline"}}><div 
             style={{width:"20%"
              ,border:"7px solid #BDDDFC",display:"inline-block"}}></div> 30% </div>
        </div> 

        <div>
            <h1 className="titleLanguage">flutter</h1> 
             <div style={{border:"2px solid #BDDDFC",borderRadius:"40px"}}><div 
             style={{width:"60%"
              ,border:"7px solid #BDDDFC",display:"inline-block"}}></div> 70% </div>
        </div> 

        <div>
            <h1 className="titleLanguage">django</h1> 
             <div style={{border:"2px solid #BDDDFC",borderRadius:"40px"}}><div 
             style={{width:"75%"
              ,border:"7px solid #BDDDFC",display:"inline-block"}}></div> 85% </div>
        </div> 

        <div>
            <h1 className="titleLanguage">fast api</h1> 
             <div style={{border:"2px solid #BDDDFC",borderRadius:"40px"}}><div 
             style={{width:"80%"
              ,border:"7px solid #BDDDFC",display:"inline-block"}}></div>  90% </div>
        </div> 
      
          </div>
        <div id="skills-chart" style={{width:"22%",minWidth:"25rem",margin:"6%",marginBottom:"0%",color:"#BDDDFC",display:"inline-block"}}>
        <h1  style={{textDecoration:"underline" ,letterSpacing:"3px"}}> libraries </h1>
        <div>
            <h1 className="titleLanguage">react</h1> 
             <div style={{border:"2px solid #BDDDFC",borderRadius:"40px",textDecoration:"underline"}}><div 
             style={{width:"80%"
              ,border:"7px solid #BDDDFC",display:"inline-block"}}></div> 90% </div>
        </div> 
         
       
        <div>
            <h1 className="titleLanguage">pyautogui & playwright</h1> 
             <div style={{border:"2px solid #BDDDFC",borderRadius:"40px"}}><div 
             style={{width:"86%"
              ,border:"7px solid #BDDDFC",display:"inline-block"}}></div> 100% </div>
        </div> 

        <div>
            <h1 className="titleLanguage">os & shutil</h1> 
             <div style={{border:"2px solid #BDDDFC",borderRadius:"40px"}}><div 
             style={{width:"86%"
              ,border:"7px solid #BDDDFC",display:"inline-block"}}></div> 100% </div>
        </div> 

        <div>
            <h1 className="titleLanguage">kivy</h1> 
             <div style={{border:"2px solid #BDDDFC",borderRadius:"40px"}}><div 
             style={{width:"80%"
              ,border:"7px solid #BDDDFC",display:"inline-block"}}></div>  90% </div>
        </div> 

          </div>
          <h1 className="typed" style={{FontFamily:"'Courier New', Courier, monospace",fontStyle:"italic",color:"#BDDDFC",outline:"none",borderColor:"trasnsparent"}}>above is a breakdown of languages im  proficient in to list a few and some frameworks and libraries too </h1>
       
          <hr></hr>
          <div style={{border:"3px solid #BDDDFC",padding:"10px"}}>
          <h1 className="messages" style={{textAlign:"center",fontStyle:"italic",textDecoration:"double"}}> "what drives me ?" </h1>
          <br></br>
          <h1 className="typed"  style={{fontFamily:"'Courier New', Courier",fontStyle:"italic",color:"#BDDDFC",outline:"none",borderColor:"trasnsparent"}}> "The rare oppotunity to be ever to create and express myself through code, for code to i is like a paint brush and the screen is my canvas with each gentle tap of key stroke i am able to create with a gentle smile, for a part of me lives on in each and every one of my creations for they are my finest arts and this is my Canvas"  </h1>
       <h1 id="author"></h1>
       <div style={{textAlign:"center", zIndex:"10px"}}>
        <img alt="picture of creator" src={img33} style={{marginRight:"0%"}}/>

       <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
            <a href="/"><h1 style={{outline:"auto", width:"16rem",fontFamily:"courier",color:"#BDDDFC",fontSize:"1.3rem"}}>request my services</h1>
       </a><button id="poem" onClick={play}> play poem </button> 
       </div></div>
       <br/> <br/> <br/><br/> <br/> <br/><br/> <br/> <br/>
       
</div>
<div/> 
    </div>);
}