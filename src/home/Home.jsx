import React from 'react';
import img from "../assets/sleepy.jpg";
import { LuPawPrint } from 'react-icons/lu';
import { GiBaseballGlove, GiFigurehead } from 'react-icons/gi';
import { useEffect } from 'react';
export default function Home() {
    function warning(){ alert("[FLASHING LIGHT DISCLAIMER!!!] you are adviced to view website in fullscreen if on desktop for full experience");
    } 
     
    useEffect(()=>{ const timer = setTimeout(warning,3000);return ()=> clearTimeout(timer);})

    return (
        <div 
            id='homeS'
            style={{ 
                backgroundImage: `url(${img})`,
                height: "100vh",
                width: "100vw",
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "absolute",
                top: 0,
                left: 0
            }}
        >
            <p style={{ 
                color: "white",
                textAlign: "left",
                paddingTop: "20px",
                fontSize: "10rem",
                paddingLeft: "4rem"
            }}> 
                <b>sleepy panda</b>
            </p>
            <p style={{ 
                color: "white",
                textAlign: "left",
                paddingTop: "5px",
                fontSize: "2.5rem",
                paddingLeft: "14rem",
                fontFamily: "courier"
            }}> 
                <b id='hello'>creating your vision through </b>
            </p>
            <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", marginTop: "6rem",flexWrap:"wrap" }}>
                <a className='no' href='/home'>
                    <div className='homeB' id="z"> 
                        <p>portfolio <LuPawPrint/></p>
                    </div>
                </a>
                <a className='no' href='/designs'>
                    <div id='y' className='homeB'> 
                        <p >designs <GiFigurehead/></p>
                    </div>
                </a>
                <a  style={{textDecoration:"none"}} href='https://api.whatsapp.com/send/?phone=%2B260777290515&text&type=phone_number&app_absent=0&wame_ctl=1'>
                    <div className='homeB' id='x'> 
                    <p>hire services<GiBaseballGlove/></p> 
                    </div>
                </a>
            </div>
        </div>
    );
}