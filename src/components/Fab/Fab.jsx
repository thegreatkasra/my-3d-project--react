import React, { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import './Fab.css'; 

const Fab = () => {
  const [isVisible, setIsVisible] = useState(false);
  const refScrollUp = useRef(null);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setIsVisible(position > 300); 
  };

  const handleScrollUp = () => {
    refScrollUp.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div ref={refScrollUp} style={{ position: 'absolute', top: 0 }} />
      {isVisible && (
        <button className="fab" onClick={handleScrollUp}>
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      )}
    </>
  );
};

export default Fab;