import React, { useEffect, useState } from "react";  

const HeroTypeWritter = ({ words, speed }) => {  
  const [currentWordIndex, setCurrentWordIndex] = useState(0);  
  const [currentText, setCurrentText] = useState(""); // Initialize to an empty string  
  const currentWord = words[currentWordIndex];  

  useEffect(() => {  
    let charIndex = 0;  
    const typingInterval = setInterval(() => {  
      if (charIndex <= currentWord.length) {  
        setCurrentText(currentWord.slice(0, charIndex));  
        charIndex++;  
      } else {  
        clearInterval(typingInterval);  
        setTimeout(() => {  
          setCurrentWordIndex((prevIndex) => (prevIndex === words.length - 1 ? 0 : prevIndex + 1));  
          setCurrentText(""); // Clear the text before typing the next word  
        }, 1000);  
      }  
    }, speed);  

    return () => {  
      clearInterval(typingInterval);  
      // No need to clear the timeout here since it's not stored  
    };  
  }, [currentWord, speed, words]);  

  return (  
    <span className="tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mt-6">  
      {currentText}  
    </span>  
  );  
};  

export default HeroTypeWritter;