import React, { useState, useEffect, useRef } from 'react';
import GDGCImage from '../assets/GDGCImage.png';
import WDCCImage from '../assets/WDCCImage.png';
import FirstXIPhoto from '../assets/FirstXIPhoto.jpeg';
import MacleansImage from '../assets/MacleansImage.jpg';
import CoachingImage from '../assets/CoachingImage.jpg';

const ExtracurricularsShowcase = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const [hoveredItem, setHoveredItem] = useState(null);
  const [activeCategory, setActiveCategory] = useState('university');
  const itemRefs = useRef([]);

  // Sample extracurricular data - replace with your actual activities
  const extracurricularsData = {
    university: [
      {
        id: 1,
        title: "Web Development and Consulting Club",
        position: "Full-Stack Developer",
        logo: WDCCImage,
        description: "Collaborating within an agile team to develop a full-stack web platform for the University of Auckland Investment Club using Next.js, React, TypeScript, and MongoDB. Implementing features including live ASX/NZX stock data, event registration, membership payments, and content management.",
        duration: "2025 - Current",
        achievements: []
      },
      {
        id: 2,
        title: "Google Developer Groups on Campus",
        position: "Technical Executive",
        logo: GDGCImage,
        description: "Expanding students’ technical skills and knowledge to better prepare them for professional careers. Responsible for planning, organising, and running events such as hackathons, workshops, and more.",
        duration: "2025 - Current",
        achievements: []
      }
    ],
    school: [
      {
        id: 5,
        title: "First XI Football",
        position: "Midfielder",
        logo: FirstXIPhoto,
        description: "Played in the Auckland A1 division in 2021 where we won promotion to Auckland's Premier League (top 8 schools in Auckland). We then made it to the finals of the cup the following year where we came a hard fought second. I was then privileged to captain some games in my final year as we continued to play in the top division.",
        duration: "2021 - 2023",
        achievements: ["A1 Champions 2021", "Knockout Cup Runners Up 2022"]
      },
      {
        id: 6,
        title: "School Prefect",
        position: "Prefect",
        logo: MacleansImage,
        description: "Organised and coordinated school events to maximise student engagement. Worked within groups to oversee school activities whilst also delivering speeches and presentations at house assemblies.",
        duration: "2023",
        achievements: []
      },
      {
        id: 7,
        title: "House Executive",
        position: "Sports Captain",
        logo: MacleansImage,
        description: "Planned and organised sport events around school. Delivered speeches and presentations alongside other responsibilities such as supervising detentions, housekeeping and more.",
        duration: "2023",
        achievements: []
      },
      {
        id: 8,
        title: "14A Football Coach",
        position: "Head Coach",
        logo: CoachingImage,
        description: "Planned and ran detailed football training sessions for player development and strategy. Coached and mentored members of the team to prepare them for senior football.",
        duration: "2023",
        achievements: []
      }
    ]
  };

  // Get current extracurriculars based on active category
  const extracurriculars = extracurricularsData[activeCategory];

  // Reset visible items when category changes
  useEffect(() => {
    setVisibleItems(new Set());
    setHoveredItem(null);
  }, [activeCategory]);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const itemId = parseInt(entry.target.dataset.itemId);
          if (entry.isIntersecting) {
            setVisibleItems(prev => new Set([...prev, itemId]));
          } else {
            setVisibleItems(prev => {
              const newSet = new Set(prev);
              newSet.delete(itemId);
              return newSet;
            });
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '50px'
      }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [extracurriculars]);

  // Custom SVG Icons
  const Star = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  );

  const containerStyle = {
    padding: '2rem',
    fontFamily: 'Arial, sans-serif',
    position: 'relative'
  };

  const mainContentStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    position: 'relative'
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '4rem',
    position: 'relative'
  };

  const timelineStyle = {
    position: 'relative',
    paddingLeft: '2rem'
  };

  const timelineLineStyle = {
    position: 'absolute',
    left: '1rem',
    top: 0,
    bottom: 0,
    width: '2px',
    background: 'linear-gradient(180deg, rgb(21, 153, 214) 0%, rgba(14, 8, 110, 1) 30%, rgba(15, 15, 167, 1) 60%, rgba(20, 45, 255, 1) 100%)',
    borderRadius: '1px',
    opacity: 0.6
  };

  return (
    <div style={containerStyle}>
      <div style={mainContentStyle}>
        {/* Header */}
        <div style={headerStyle}>
          {/* Category Toggle */}
          <div 
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1rem',
              marginTop: '0rem',
              marginBottom: '0rem'
            }}
          >
            <button
              onClick={() => setActiveCategory('university')}
              style={{
                padding: '0.75rem 2rem',
                fontSize: '1rem',
                fontWeight: '600',
                borderRadius: '2rem',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                background: activeCategory === 'university' 
                  ? '#00d8feff' 
                  : 'rgba(31, 41, 55, 0.5)',
                color: activeCategory === 'university' ? '#ffffff' : '#d1d5db',
                transform: activeCategory === 'university' ? 'translateY(-2px) scale(1.05)' : 'translateY(0) scale(1)'
              }}
            >
              🎓 University
            </button>
            <button
              onClick={() => setActiveCategory('school')}
              style={{
                padding: '0.75rem 2rem',
                fontSize: '1rem',
                fontWeight: '600',
                borderRadius: '2rem',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                background: activeCategory === 'school' 
                  ? '#00d8feff' 
                  : 'rgba(31, 41, 55, 0.5)',
                color: activeCategory === 'school' ? '#ffffff' : '#d1d5db',
                transform: activeCategory === 'school' ? 'translateY(-2px) scale(1.05)' : 'translateY(0) scale(1)'
              }}
            >
              🏫 High School
            </button>
          </div>
          
          
        </div>

        {/* Timeline */}
        <div style={timelineStyle}>
          {/* Timeline line */}
          <div style={timelineLineStyle}>
            {/* Animated orbs traveling along the line */}
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                style={{
                  position: 'absolute',
                  left: '-3px',
                  width: '8px',
                  height: '8px',
                  backgroundColor: '#a855f7',
                  borderRadius: '50%',
                  boxShadow: '0 0 10px rgba(168, 85, 247, 0.8)',
                  animation: `orbTravel 8s ease-in-out infinite`,
                  animationDelay: `${i * 2.5}s`
                }}
              />
            ))}
          </div>

          {/* Extracurricular items */}
          {extracurriculars.map((item, index) => (
            <div
              key={`${activeCategory}-${item.id}`}
              ref={el => itemRefs.current[index] = el}
              data-item-id={item.id}
              style={{
                position: 'relative',
                marginBottom: '3rem',
                opacity: visibleItems.has(item.id) ? 1 : 0,
                transform: visibleItems.has(item.id) 
                  ? 'translateX(0) scale(1)' 
                  : 'translateX(-50px) scale(0.9)',
                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                transitionDelay: `${index * 100}ms`
              }}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Timeline dot */}
              <div
                style={{
                  position: 'absolute',
                  left: '-2.25rem',
                  top: '1.5rem',
                  width: '1rem',
                  height: '1rem',
                  backgroundColor: hoveredItem === item.id ? '#ec4899' : '#a855f7',
                  borderRadius: '50%',
                  border: '3px solid rgba(31, 41, 55, 1)',
                  boxShadow: `0 0 20px ${hoveredItem === item.id ? 'rgba(236, 72, 153, 0.8)' : 'rgba(168, 85, 247, 0.6)'}`,
                  transition: 'all 0.3s ease',
                  zIndex: 2,
                  transform: hoveredItem === item.id ? 'scale(1.3)' : 'scale(1)'
                }}
              >
                {/* Pulsing rings */}
                <div
                  style={{
                    position: 'absolute',
                    top: '-5px',
                    left: '-5px',
                    right: '-5px',
                    bottom: '-5px',
                    border: '2px solid rgba(168, 85, 247, 0.3)',
                    borderRadius: '50%',
                    animation: 'pulse 2s ease-in-out infinite'
                  }}
                />
              </div>

              {/* Card */}
              <div
                style={{
                  background: 'rgba(31, 41, 55, 0.7)',
                  backdropFilter: 'blur(15px)',
                  borderRadius: '1.5rem',
                  padding: '2rem',
                  border: `2px solid ${hoveredItem === item.id ? 'rgba(236, 72, 153, 0.5)' : 'rgba(168, 85, 247, 0.3)'}`,
                  transition: 'all 0.5s ease',
                  transform: hoveredItem === item.id ? 'translateY(-5px) scale(1.02)' : 'translateY(0) scale(1)',
                  boxShadow: hoveredItem === item.id 
                    ? '0 20px 40px rgba(236, 72, 153, 0.2), 0 0 30px rgba(168, 85, 247, 0.1)' 
                    : '0 10px 25px rgba(0, 0, 0, 0.2)',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Content */}
                <div style={{ position: 'relative', zIndex: 2 }}>
                  {/* Header */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem', marginBottom: '1.5rem' }}>
                    {/* Logo */}
                    <div
                      style={{
                        flexShrink: 0,
                        width: '4rem',
                        height: '4rem',
                        borderRadius: '1rem',
                        overflow: 'hidden',
                        border: '2px solid rgba(168, 85, 247, 0.4)',
                        position: 'relative',
                        transform: hoveredItem === item.id ? 'rotate(5deg) scale(1.05)' : 'rotate(0) scale(1)',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <img
                        src={item.logo}
                        alt={`${item.title} logo`}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          filter: hoveredItem === item.id ? 'brightness(1.2) saturate(1.3)' : 'brightness(1) saturate(1)',
                          transition: 'all 0.3s ease'
                        }}
                      />
                      
                      {/* Glowing overlay */}
                      <div
                        style={{
                          position: 'absolute',
                          inset: 0,
                          background: `linear-gradient(45deg, rgba(168, 85, 247, ${hoveredItem === item.id ? '0.2' : '0'}), rgba(236, 72, 153, ${hoveredItem === item.id ? '0.1' : '0'}))`,
                          transition: 'all 0.3s ease'
                        }}
                      />
                    </div>

                    {/* Title and Position */}
                    <div style={{ flex: 1 }}>
                      <h3
                        style={{
                          fontSize: '1.5rem',
                          fontWeight: 'bold',
                          color: hoveredItem === item.id ? '#ffffff' : '#f3f4f6',
                          marginBottom: '0.5rem',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        {item.title}
                      </h3>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          marginBottom: '0.5rem'
                        }}
                      >
                        <Star />
                        <span
                          style={{
                            fontSize: '1rem',
                            fontWeight: '600',
                            color: '#a855f7',
                            background: 'rgba(168, 85, 247, 0.1)',
                            padding: '0.25rem 0.75rem',
                            borderRadius: '2rem',
                            border: '1px solid rgba(168, 85, 247, 0.3)'
                          }}
                        >
                          {item.position}
                        </span>
                      </div>
                      <span
                        style={{
                          fontSize: '1rem',
                          color: '#9ca3af',
                          fontStyle: 'italic'
                        }}
                      >
                        {item.duration}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p
                    style={{
                      color: hoveredItem === item.id ? '#e5e7eb' : '#d1d5db',
                      lineHeight: '1.6',
                      marginBottom: item.achievements.length > 0 ? '1rem' : '0rem',
                      transition: 'all 0.3s ease',
                      fontSize: '1rem',
                    }}
                  >
                    {item.description}
                  </p>

                  {/* Achievements */}
                  {(item.achievements.length > 0) && (
                  <div>
                    <h4
                      style={{
                        fontSize: '1rem',
                        fontWeight: '600',
                        color: '#c084fc',
                        marginBottom: '0.75rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}
                    >
                      <Star />
                      Key Achievements
                    </h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {item.achievements.map((achievement, idx) => (
                        <span
                          key={idx}
                          style={{
                            padding: '0.375rem 0.75rem',
                            fontSize: '0.8rem',
                            backgroundColor: `rgba(${hoveredItem === item.id ? '236, 72, 153' : '168, 85, 247'}, 0.2)`,
                            color: hoveredItem === item.id ? '#fbb6ce' : '#c084fc',
                            borderRadius: '1rem',
                            border: `1px solid rgba(${hoveredItem === item.id ? '236, 72, 153' : '168, 85, 247'}, 0.4)`,
                            transition: 'all 0.3s ease',
                            transform: hoveredItem === item.id ? 'translateY(-2px)' : 'translateY(0)',
                            transitionDelay: `${idx * 50}ms`
                          }}
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes slowSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes pulse {
          0%, 100% { 
            opacity: 1; 
            transform: scale(1); 
          }
          50% { 
            opacity: 0.5; 
            transform: scale(1.1); 
          }
        }

        @keyframes orbTravel {
          0% { 
            top: -4px; 
            opacity: 0; 
            transform: scale(0.5); 
          }
          10% { 
            opacity: 1; 
            transform: scale(1); 
          }
          90% { 
            opacity: 1; 
            transform: scale(1); 
          }
          100% { 
            top: 100%; 
            opacity: 0; 
            transform: scale(0.5); 
          }
        }
      `}</style>
    </div>
  );
};

export default ExtracurricularsShowcase;