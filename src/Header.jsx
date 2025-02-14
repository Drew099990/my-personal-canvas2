import img from "./assets/A.gif"
import img2 from "./assets/ccc.jpg"


export default function Header(props) {
  return (
      <div style={{
          border: '4px solid rgb(106, 137, 167)',
          display: 'flex',
          backgroundColor: 'rgb(189, 221, 252)',
          width: '100%',
          borderRadius: '25px',
          marginBottom: '6rem',
          boxShadow: 'rgb(102, 184, 105) 1px 5px 10px'
      }}>
          <div style={{ padding: '10px' ,display:"absolute" }}  >
          <img 
                  id="k"
                  src={img}
                  alt="image" 
                  style={{
                    opacity:"0.4",
                    marginLeft:"30px",
                      borderRadius: '50%', 
                      width: '210px', 
                      height: '210px', 
                  }} 
              />
               <img 
                  id="j"
                  src={img2}
                  alt="image" 
                  style={{
                    marginLeft:"10px",
                      borderRadius: '50%', 
                      width: '220px', 
                      height: '220px', 
                      border: '5px solid rgb(52, 73, 89)',
                  transform:"translate(-232px,5px)"}} 
              />
              <div>
                  <a href="/about" style={{textDecoration:"none"}}>
                      <h1 style={{marginLeft:"30px",fontFamily:"monospace",letterSpacing:"2px"}}>About</h1>
                  </a>
              </div>
             
          </div>

      </div>
  );
}