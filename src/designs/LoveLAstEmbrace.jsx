import "./designs.css";
import img from "../assets/headB.jpg";
import img2 from "../assets/ll1.jpg";
import img3 from "../assets/ll2.jpg";
import img4 from "../assets/ll3.jpg";
import img5 from "../assets/ll4.jpg";
const cardStyle = {
    backgroundImage: `url(${img})`,
    height: "100vh",  
    width: "100vw",
    backgroundSize: "cover",
    backgroundPosition: "center",
    textAlign: "center",
    color: "#f2f2f2",
    
};

export default function LLE() {
    return (
        <div >
            <div className="card">
                <div style={cardStyle}>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "center",
                    }}>
                        <p style={{ fontSize: "15rem" }}>love's    <p style={{ fontSize: "3rem" }}>last</p> <p style={{ fontSize: "6rem" }}>embrace</p></p>
                     
                        
                    </div>
                </div>
            </div>

      
            <div className="card">
                <div style={cardStyle}>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "center",
                    }}>
                        <img src={img2} style={{
                                transform:"translate(-20rem,200px)"
                        }}/>
                        <h1 id="remarks" style={{display:"flex",
                        flexWrap:"wrap",
                            width:"15rem",transform:"translate(18rem,80px)"}}> 
                          For once we we're young
                            <h1 style={{fontSize:"1rem",width:"12rem"}}>-yours</h1>
                        </h1>
                    </div>
                </div>
            </div>

            <div className="card">
                <div style={cardStyle}>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "center",
                    }}>
                         <img src={img3} style={{
                                transform:"translate(20rem,70px)"
                        }}/>
                        <h1 id="remarks" style={{display:"flex",
                                    flexWrap:"wrap",
                                    width:"40px",
                                    transform:"translate(-15rem,-190px)"}}> 
                                   twice we lived
                            <h1 style={{fontSize:"1rem",width:"12rem"}}>-yours</h1>
                        </h1>
                    </div>
                </div>
            </div>
            <div className="card">
                <div style={cardStyle}>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        paddingTop:"30rem"
                    }}>
                        
                        <h1 id="remarks" style={{display:"flex",
                            flexWrap:"wrap",
                            justifyContent:"center",
                            alignItems:"center",
                            width:"40px",
                        }}> 
                           For may we never depart from what thrice we conquered
                            <h1 style={{fontSize:"1rem",width:"12rem"}}>-yours</h1>
                        </h1>
                    </div>
                </div>
            </div>

            <div className="card">
                <div style={cardStyle}>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "center",
                    }}>
                        <img src={img5} style={{
                                transform:"translate(-20rem,200px)"
                        }}/>
                        <h1 id="remarks" style={{display:"flex",flexWrap:"wrap",width:"40px",transform:"translate(50px,-190px)"}}> Like a bright light we shined together I kiss you good bye once more
                            <h1 style={{fontSize:"1rem",width:"12rem"}}>-yours</h1>
                        </h1>
                    </div>
                </div>
            </div>
            <div className="card">
                <div style={cardStyle}>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        padding:"20rem"
                    }}>
                        <img src={img4} style={{margin:"30px",border:"2px solid #fefefe"}}/>
                        <h1 id="remarks"> 
                            Here at love's last embrace we seek to give your loved ones a gentle send off to heavens embrace and to encapusulate their memory,if you'd like to to arrange for our service's please kindly</h1>
                        <a href="/"><div style={{color:"#f2f2f2" ,fontSize:"2rem",outline:"auto"}}>-contact us-</div></a>
                    </div>
                </div>
            </div>
        </div>
    );
}