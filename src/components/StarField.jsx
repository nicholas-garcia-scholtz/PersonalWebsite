import React, { useEffect, useState } from 'react';

const StarField = ({ children }) => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars = [];
      const starCount = 800;
      
      for (let i = 0; i < starCount; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2.5 + 0.5,
          opacity: Math.random() * 0.9 + 0.3,
          twinkleDelay: Math.random() * 3,
          moveX: (Math.random() - 0.5) * 100,
          moveY: (Math.random() - 0.5) * 100,
          moveDuration: Math.random() * 20 + 10
        });
      }
      
      setStars(newStars);
    };

    generateStars();

    // Add CSS animations
    const style = document.createElement('style');
    style.textContent = `
      @keyframes starTwinkle {
        0%, 100% { opacity: 0.3; }
        50% { opacity: 1; }
      }
      
      @keyframes starMove {
        0%, 100% { transform: translate(0, 0); }
        50% { transform: translate(var(--move-x), var(--move-y)); }
      }
      
      @keyframes shootingStar {
        0% {
          transform: translateX(-100px) translateY(-100px);
          opacity: 0;
        }
        10% {
          opacity: 1;
        }
        90% {
          opacity: 1;
        }
        100% {
          transform: translateX(100vw) translateY(100vh);
          opacity: 0;
        }
      }
      
      .shooting-star {
        animation: shootingStar 3s linear infinite;
      }
    `;
    document.head.appendChild(style);

    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  const containerStyle = {
    position: 'relative',
    minHeight: '100vh',
    backgroundColor: '#000000',
    color: '#ffffff',
    overflow: 'hidden'
  };

  const starsContainerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: 'none',
    zIndex: 1
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 10,
    padding: '20px'
  };

  const debugStyle = {
    position: 'fixed',
    top: '10px',
    right: '10px',
    backgroundColor: '#ff0000',
    color: '#ffffff',
    padding: '10px',
    borderRadius: '5px',
    fontSize: '14px',
    zIndex: 9999
  };

  return (
    <div style={containerStyle}>

      {/* Stars background */}
      <div style={starsContainerStyle}>
        {stars.map((star) => (
          <div
            key={star.id}
            style={{
              position: 'absolute',
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              backgroundColor: '#ffffff',
              borderRadius: '50%',
              opacity: star.opacity,
              boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, 0.5)`,
              animation: `starTwinkle ${2 + Math.random() * 2}s ease-in-out infinite, starMove ${star.moveDuration}s ease-in-out infinite`,
              animationDelay: `${star.twinkleDelay}s, ${Math.random() * star.moveDuration}s`,
              '--move-x': `${star.moveX}px`,
              '--move-y': `${star.moveY}px`
            }}
          />
        ))}

        {/* Shooting stars */}
        <div 
          className="shooting-star"
          style={{
            position: 'absolute',
            top: '20%',
            left: '-100px',
            width: '2px',
            height: '2px',
            backgroundColor: '#ffffff',
            borderRadius: '50%',
            animationDelay: '2s'
          }}
        />
        <div 
          className="shooting-star"
          style={{
            position: 'absolute',
            top: '60%',
            left: '-100px',
            width: '2px',
            height: '2px',
            backgroundColor: '#ffffff',
            borderRadius: '50%',
            animationDelay: '7s'
          }}
        />
      </div>

      {/* Content overlay */}
      <div style={contentStyle}>
        {children || (
          <div style={{ textAlign: 'center', marginTop: '50vh', transform: 'translateY(-50%)' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>✨ Moving Starfield ✨</h1>
            <p style={{ fontSize: '1.2rem', opacity: 0.8 }}>
              Watch the stars twinkle and drift across the cosmic void
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StarField;