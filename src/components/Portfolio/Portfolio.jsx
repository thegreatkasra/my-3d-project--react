import React, {useEffect} from 'react'
import'./Portfolio.css'
import { gsap } from 'gsap';

import uber from './image/UBER.png'
import idea from './image/idea.png'
import bella from './image/bella.png'
import behance from './image/behance-icon.svg'
import github from './image/github.svg'

const Portfolio = () => {

  useEffect(() => {
    const navItems = document.querySelectorAll('.portfolio--card--title');
    gsap.fromTo(navItems, 
      { opacity: 0, y: -10 }, 
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 }
    );
  }, []);


  const handleClickUber = () => {
    window.location.href = 'https://www.behance.net/gallery/200260007/Study-Case-(Startup-application)-Uber-Food-Ai';
  };
  const handleClickIdea = () => {
    window.location.href = 'https://www.behance.net/gallery/211417193/IDEA-Platform-Case-Study';
  };
  const handleClickbella = () => {
    window.location.href = 'https://www.behance.net/gallery/208031903/BELLA-e-commerce-fashion-store';
  };
  const handleClickBehance = () => {
    window.location.href = 'https://www.behance.net/kasratorabi1';
  };
  const handleClickGithub = () => {
    window.location.href = 'https://github.com/thegreatkasra?tab=repositories';
  };



  return (
    <section id="portfolio" style={{ height: '100vh' }}>
      <div className="portfolio">

        <div className="portfolio--header">
          <h1>Here are some of my <span>projects</span> . Proudly...</h1>
        </div>

        <div className="portfolio--container">

          <div className="portfolio--cards">

<div className="portfolio--card">
    <div className="portfolio--card--image">
      <img src={bella} alt="bella" onClick={handleClickbella}/>
    </div>
  </div>

  <div className="portfolio--card">
    <div className="portfolio--card--image">
      <img src={idea} alt="idea" onClick={handleClickIdea} />
    </div>
  </div>
  
  <div className="portfolio--card">
    <div className="portfolio--card--image">
      <img src={uber} alt="uber" onClick={handleClickUber} />
    </div>
  </div>
          </div>

          <div className="portfolio--links">

          <div className="potfolio--link-behance">
            <p>All Designs</p>
            <img src={behance} onClick={handleClickBehance} alt="behance" />
          </div>

          <div className="potfolio--link-behance">
            <p>React Projects </p>
            <img src={github} onClick={handleClickGithub} alt="behance" />
          </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Portfolio
