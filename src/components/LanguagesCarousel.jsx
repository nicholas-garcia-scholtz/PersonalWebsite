import React from 'react';
import JavaIcon from '../assets/JavaIcon.webp';
import MATLABIcon from '../assets/MATLABIcon.png';
import JSIcon from '../assets/JSIcon.png'
import TSIcon from '../assets/TSIcon.png'
import PythonIcon from '../assets/PythonIcon.png'
import ReactIcon from '../assets/ReactIcon.png'
import NextJsIcon from '../assets/NextJsIcon.png'
import CIcon from '../assets/CIcon.png'
import RIcon from '../assets/RIcon.png'
import MongoDBIcon from '../assets/MongoDBIcon.png'

// 📱 Responsive size hook
const useResponsiveSize = () => {
  const [size, setSize] = React.useState({ w: 180, h: 210 });

  React.useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth;
      if (width < 480) {
        setSize({ w: 120, h: 150 });
      } else if (width < 768) {
        setSize({ w: 150, h: 180 });
      } else {
        setSize({ w: 180, h: 210 });
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return size;
};

const LanguagesCarousel = () => {
  const cards = [
    { index: 0, color: '142, 249, 252', image: JavaIcon },
    { index: 1, color: '142, 252, 204', image: MATLABIcon },
    { index: 2, color: '142, 252, 157', image: JSIcon },
    { index: 3, color: '215, 252, 142', image: TSIcon },
    { index: 4, color: '252, 252, 142', image: PythonIcon },
    { index: 5, color: '252, 208, 142', image: ReactIcon },
    { index: 6, color: '252, 142, 142', image: NextJsIcon },
    { index: 7, color: '252, 142, 239', image: CIcon },
    { index: 8, color: '204, 142, 252', image: RIcon },
    { index: 9, color: '142, 202, 252', image: MongoDBIcon }
  ];

  const quantity = 10;
  const { w, h } = useResponsiveSize();
  const translateZ = w + h;
  const perspective = 1000;
  const rotateX = -15;

  // 🎞️ Inject keyframe animation
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes rotating {
        from {
          transform: perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(0);
        }
        to {
          transform: perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(360deg);
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  const wrapperStyle = {
    width: '100%',
    height: '100vh',
    position: 'relative',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  };

  const innerStyle = {
    position: 'absolute',
    width: `${w}px`,
    height: `${h}px`,
    top: '25%',
    left: `calc(50% - ${w / 2}px - 2.5px)`,
    zIndex: 2,
    transformStyle: 'preserve-3d',
    animation: 'rotating 20s linear infinite'
  };

  const getCardStyle = (card) => ({
    position: 'absolute',
    border: `2px solid rgba(${card.color}, 1)`,
    borderRadius: '12px',
    overflow: 'hidden',
    inset: '0',
    transform: `rotateY(${(360 / quantity) * card.index}deg) translateZ(${translateZ}px)`,
    boxShadow: `0 0 20px rgba(${card.color}, 0.3)`
  });

  const getImgStyle = (card) => ({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    backgroundImage: `url(${card.image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  });

  return (
    <div style={wrapperStyle}>
      <div style={innerStyle}>
        {cards.map((card) => (
          <div key={card.index} style={getCardStyle(card)}>
            <div style={getImgStyle(card)} />
          </div>
        ))}
      </div>

      
    </div>
  );
};

export default LanguagesCarousel;