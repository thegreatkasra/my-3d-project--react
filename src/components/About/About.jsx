import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./About.css";
import webflow from "./svg/webflow.svg";
import AE from "./svg/AE.svg";
import Ai from "./svg/Ai.svg";
import Figma from "./svg/Figma.svg";
import PS from "./svg/PS.svg";
import Spline from "./svg/Spline.svg";
import XD from "./svg/XD.svg";


gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  

  useEffect(() => {
    const aboutSection = aboutRef.current;
    const skillsContainer = skillsRef.current;
    


    if (!aboutSection || !skillsContainer) return;

    ScrollTrigger.refresh(); 


    gsap.from(skillsContainer.children, {
      y: 50,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: aboutSection,
        start: "top 75%",
        toggleActions: "play reverse play reverse",
      }
    });


    gsap.utils.toArray(".about--skills-container div").forEach((img) => {
      img.addEventListener("mouseenter", () =>
        gsap.to(img, { scale: 1.2, duration: 0.3 })
      );
      img.addEventListener("mouseleave", () =>
        gsap.to(img, { scale: 1, duration: 0.3 })
      );
    });

  }, []);

  return (
    <section id="about" ref={aboutRef} style={{ height: "100vh" }}>
        
        {/* Content */}
        <div className="about--details">
          
          <div className="about--text">
            <p>Hi, I am <span>Kasra Torabi</span>, a passionate UI/UX designer skilled in Figma and Adobe XD. I specialize in creating interactive and visually stunning 3D objects using Spline and Blender. My expertise extends to designing immersive 3D websites and applications that captivate users. Additionally, I bring UI elements to life with motion graphics crafted in After Effects. With a keen eye for detail and a commitment to user-centered design, I strive to deliver exceptional digital experiences.</p>
          </div>

          {/* Skills Icons */}
          <div className="about--skills">
            <div className="about--skills-container" ref={skillsRef}>
              <div><img src={Figma} alt="figma" /></div>
              <div><img src={XD} alt="xd" /></div>
              <div><img src={AE} alt="ae" /></div>
              <div><img src={Ai} alt="ai" /></div>
              <div><img src={PS} alt="ps" /></div>
              <div><img src={Spline} alt="spline" /></div>
              <div><img className="display-on-mobile" src={webflow} alt="webflow" /></div>
            </div>
          </div>
        </div>

    </section>
  );
};

export default About;
