import vid from "../assets/blog.mp4";

export default function Body() {
    return (
        <div style={{
            zIndex:"10",
            margin:"30px",
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center"
        }}>
            <div style={{
                padding:"5rem",
                zIndex:"10",
                backgroundColor: " #1D3122FF",
                margin: "10px",
                display: "block",
                textAlign: "center",
                borderRadius:"40px",
                // borderTopStyle:"dotted #bdd",
                // borderRightStyle:"solid  ",
                // borderBottomStyle:"double bdd",
                border:"2px solid #bdd"
            }}>
                <h1 style={{
                    margin: "10px",
                    color: "#bdd",
                    textDecoration: "underline",
                    fontFamily: "monospace"
                }}>
                    My First Post
                </h1>
                
                <video src={vid} controls width={150} height={300} style={{
                    borderRadius:"15% 44% / 20%",
                    border:"3px solid #bdddfc",
                    backgroundColor:"#bdddfc"}}></video>
                <h1 style={{
                    margin: "10px",
                    color: "#344959",
                    textDecoration: "underline",
                    fontFamily: "monospace"
                }}>
                    <h1 style={{
                    margin: "",
                    color: "#bdd",
                    fontFamily: "courier",
                    fontSize:"1.5rem"
                }}>
                    if you,d like to reach me or leave a message kindly click on the contact button on your screen or instant access button below for direct messaging ,thank you 😁
                </h1>
                  -23/02/2025
                </h1>
            </div>
        </div>
    );
}