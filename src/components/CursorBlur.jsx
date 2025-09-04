import { useEffect, useRef } from 'react';
import '../styles/CursorBlur.css';

const CursorBlur = () => {
  const blurRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (blurRef.current) {
        blurRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return <div ref={blurRef} className="cursor-blur" />;
};

export default CursorBlur;