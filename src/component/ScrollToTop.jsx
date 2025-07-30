import React from 'react';

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button onClick={scrollToTop} style={styles}>
      BACK TO TOP
    </button>
  );
};

const styles = {
  button: {
    
    background: "none",
    border: "none"
  },
};

export default ScrollToTopButton;
