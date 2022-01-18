import React, {useState} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';
  
const ScrollButton = () =>{
  
  const [visible, setVisible] = useState(false)

  // Style css pour le bouton
  const btnStyle = {
        position: "fixed",
        width: "100%",
        left: "75vw",
        bottom: "40px",
        height: "20px",
        fontSize: "3rem",
        zIndex: "1",
        cursor: "pointer",
        color: "green"
    }
  
  // Si l'attribut ScrollTop est superieur a 300 setVisible a true (le bouton est visible)
  // sinon setVisible a false (le bouton ne pas visible). 
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  // Scroll completement en haut de la page quand l'utilisateur click sur le bouton
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  
  // Ecouteur d'evenement qui vas appeler la fonction toggleVisible
  window.addEventListener('scroll', toggleVisible);
  
  return (
        //Un bouton qui vas monter en haut de la page
        <span style={btnStyle}>
            <FaArrowCircleUp onClick={scrollToTop} 
                             style={{display: visible ? 'inline' : 'none'}} />
        </span>
  );
}
  
export default ScrollButton;