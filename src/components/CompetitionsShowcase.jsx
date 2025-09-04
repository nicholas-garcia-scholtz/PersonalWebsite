import React, { useState, useEffect, useRef } from 'react';
import AllUniImage from '../assets/AllUniImage.jpg';
import NZPCImage from '../assets/NZPCImage.png';
import LogicLiftImage from '../assets/LogicLiftImage.jpg';
import AlgothonImage from '../assets/AlgothonImage.png';

const CompetitionsShowcase = () => {
  const [visibleProjects, setVisibleProjects] = useState(new Set());
  const competitionRefs = useRef([]);

  // Mock images for demo
  const mockImages = {
    AllUni: 'https://via.placeholder.com/400x200/4F46E5/FFFFFF?text=All+Uni+Competition',
    TrialAI: 'https://via.placeholder.com/400x200/059669/FFFFFF?text=Trial+AI',
    FlappyBird: 'https://via.placeholder.com/400x200/DC2626/FFFFFF?text=Flappy+Bird',
    Colourade: 'https://via.placeholder.com/400x200/7C3AED/FFFFFF?text=Colourade',
    Weather: 'https://via.placeholder.com/400x200/EA580C/FFFFFF?text=Weather+App',
    OMS: 'https://via.placeholder.com/400x200/0891B2/FFFFFF?text=OMS'
  };

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const competitionId = parseInt(entry.target.dataset.projectId);
          if (entry.isIntersecting) {
            setVisibleProjects(prev => new Set([...prev, competitionId]));
          } else {
            setVisibleProjects(prev => {
              const newSet = new Set(prev);
              newSet.delete(competitionId);
              return newSet;
            });
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    competitionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // Custom SVG Icons
  const Github = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
  );

  const ExternalLink = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      <polyline points="15,3 21,3 21,9"></polyline>
      <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
  );

  const Trophy = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
      <path d="M4 22h16"></path>
      <path d="M10 14.66V17c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-2.34"></path>
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
    </svg>
  );

  const Medal = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.61 2.14a2 2 0 0 1 .13 2.2L16.79 15"></path>
      <path d="M11 12 5.12 2.2"></path>
      <path d="m13 12 5.88-9.8"></path>
      <path d="M8 7h8"></path>
      <circle cx="12" cy="17" r="5"></circle>
      <path d="m9 22 3-3 3 3"></path>
      <path d="M9 12h6"></path>
    </svg>
  );

  const Star = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon>
    </svg>
  );

  const Crown = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11.562 3.266a.5.5 0 0 1 .876 0L14.5 8.5l4.508-1.127a.5.5 0 0 1 .62.62L18.5 12.5l1.127 4.508a.5.5 0 0 1-.62.62L14.5 16.5l-2.062 5.234a.5.5 0 0 1-.876 0L9.5 16.5l-4.508 1.127a.5.5 0 0 1-.62-.62L5.5 12.5l-1.127-4.508a.5.5 0 0 1 .62-.62L9.5 8.5l2.062-5.234Z"></path>
    </svg>
  );

  // Sample competitions data with multiple awards/achievements
  const competitions = [
    {
      id: 1,
      title: "All Uni Competitive Programming Competition 2025 (Div B)",
      image: AllUniImage,
      shortDesc: "An inter-university programming competition hosted in-person at sites across Australia and New Zealand. We entered Division B, a division targeted at participants new to competitive programming. With 93 teams competing in our division, we were thrilled to place 1st in New Zealand and 3rd overall for our division. ",
      achievements: [
        { title: "1st Place NZ", type: "gold" },
        { title: "3rd Place Overall", type: "bronze" },
      ],
      tech: ["Java", "Python"],
      // github: "https://github.com/example/competition-solutions",
    },
    {
      id: 2,
      title: "New Zealand Programming Contest 2025 (Tertiary Intermediate)",
      image: NZPCImage,
      shortDesc: "A nation wide competitive programming contest hosted in NZ. We entered the Tertiary Intermediate Division, a division designed for second-year university students. Our team placed 1st in Auckland and 2nd overall for our division.",
      achievements: [
        { title: "1st Place Auckland", type: "gold" },
        { title: "2nd Overall", type: "silver" }
      ],
      tech: ["Java", "Python"],
      //github: "https://github.com/example/hackathon-project",
    },
    {
      id: 3,
      title: "SESA X DEVS Hackathon 2025",
      image: LogicLiftImage,
      shortDesc: "A 12-hour university hackathon hosted by the UoA Software Engineering Student Association and the UoA Developers Society. Me and my team built Logic Lift: a study platform featuring notes, quizzes, leaderboards, and more! We were thrilled to be awarded Most Useful Solution.",
      achievements: [
        { title: "Most Useful Solution", type: "special" }
      ],
      tech: ["React", "Bootstrap", "Node.js", "React-LaTeX-Next"],
      // github: "https://github.com/nicholas-garcia-scholtz/FlappyBird",
    },
    {
      id: 4,
      title: "Susquehanna Trading Algothon 2025",
      image: AlgothonImage,
      shortDesc: "A trading competition where teams develop a trading algorithm to generate optimal positions across 50 financial instruments. Our team implemented a linear regression model to dynamically select between momemntum and mean-reversion strategies based on trend strength and volatility.",
      achievements: [],
      tech: ["Python", "Pandas", "NumPy"],
      // github: "https://github.com/nicholas-garcia-scholtz/Colourade-Terminal-Game",
    }
  ];

  const getAchievementIcon = (type) => {
    switch (type) {
      case 'gold':
        return <Crown />;
      case 'silver':
        return <Trophy />;
      case 'bronze':
        return <Medal />;
      case 'special':
        return <Star />;
      default:
        return <Medal />;
    }
  };

  const getAchievementColor = (type) => {
    switch (type) {
      case 'gold':
        return '#FFD700';
      case 'silver':
        return '#C0C0C0';
      case 'bronze':
        return '#CD7F32';
      case 'special':
        return '#a855f7';
      default:
        return '#a855f7';
    }
  };

  const containerStyle = {
    padding: '2rem',
    fontFamily: 'Arial, sans-serif'
  };

  const mainContentStyle = {
    maxWidth: '1280px',
    margin: '0 auto'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '2rem',
    padding: '0 1rem'
  };

  const cardStyle = {
    position: 'relative',
    background: 'rgba(31, 41, 55, 0.5)',
    backdropFilter: 'blur(10px)',
    borderRadius: '1rem',
    overflow: 'hidden',
    border: '1px solid rgba(147, 51, 234, 0.3)',
    transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)',
    transformStyle: 'preserve-3d'
  };

  const imageContainerStyle = {
    position: 'relative',
    overflow: 'hidden',
    height: '200px'
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'all 0.7s ease'
  };

  const contentStyle = {
    padding: '1.5rem'
  };

  const projectTitleStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: '0.75rem',
    transition: 'all 0.7s ease'
  };

  const descStyle = {
    color: '#d1d5db',
    marginBottom: '1rem',
    lineHeight: '1.6',
    transition: 'color 0.5s ease'
  };

  const techContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    marginBottom: '1rem'
  };

  return (
    <div style={containerStyle}>
      <div style={mainContentStyle}>
        {/* Competitions Grid */}
        <div style={gridStyle}>
          {competitions.map((competition, index) => (
            <div
              key={competition.id}
              ref={el => competitionRefs.current[index] = el}
              data-project-id={competition.id}
              style={{
                ...cardStyle,
                opacity: visibleProjects.has(competition.id) ? 1 : 0,
                transform: visibleProjects.has(competition.id) 
                  ? 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1) translateX(0)' 
                  : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(0.8) translateX(-100px)',
                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                transitionDelay: `${index * 150}ms`
              }}
              className="project-card"
              onMouseEnter={(e) => {
                if (visibleProjects.has(competition.id)) {
                  e.currentTarget.style.transform = 'perspective(1000px) rotateX(5deg) rotateY(-5deg) scale(1.05) translateX(0)';
                  e.currentTarget.style.borderColor = 'rgba(147, 51, 234, 0.6)';
                  e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(147, 51, 234, 0.3)';
                }
              }}
              onMouseLeave={(e) => {
                if (visibleProjects.has(competition.id)) {
                  e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1) translateX(0)';
                  e.currentTarget.style.borderColor = 'rgba(147, 51, 234, 0.3)';
                  e.currentTarget.style.boxShadow = 'none';
                }
              }}
            >
              {/* Multiple Achievement Badges */}
              {competition.achievements.length > 0 && (
                <div 
                  className="achievements-container"
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    zIndex: 10,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem',
                    maxWidth: '200px'
                  }}
                >
                  {competition.achievements.map((achievement, achIndex) => (
                    <div 
                      key={achIndex}
                      style={{
                        background: `rgba(17, 24, 39, 0.95)`,
                        backdropFilter: 'blur(10px)',
                        borderRadius: '0.75rem',
                        padding: '0.4rem 0.65rem',
                        fontSize: '0.8rem',
                        color: getAchievementColor(achievement.type),
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        border: `1px solid ${getAchievementColor(achievement.type)}`,
                        transition: 'all 0.3s ease',
                        transitionDelay: `${achIndex * 100}ms`,
                        transform: 'translateX(0) scale(1)',
                        boxShadow: `0 4px 15px rgba(${achievement.type === 'gold' ? '255, 215, 0' : achievement.type === 'silver' ? '192, 192, 192' : achievement.type === 'bronze' ? '205, 127, 50' : '168, 85, 247'}, 0.3)`
                      }}
                      className="achievement-badge"
                    >
                      {getAchievementIcon(achievement.type)}
                      <span style={{ fontSize: '0.75rem', fontWeight: '600' }}>
                        {achievement.title}
                      </span>
                    </div>
                  ))}
                </div>)}
              
              {/* Particle effects */}
              <div 
                className="particles"
                style={{
                  position: 'absolute',
                  inset: 0,
                  opacity: 0,
                  transition: 'opacity 0.5s ease',
                  pointerEvents: 'none',
                  zIndex: 2
                }}
              >
                {[...Array(15)].map((_, i) => (
                  <div
                    key={i}
                    style={{
                      position: 'absolute',
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      width: '4px',
                      height: '4px',
                      backgroundColor: '#ffffff',
                      borderRadius: '50%',
                      animation: `particlePing ${1 + Math.random()}s ease-in-out infinite`,
                      animationDelay: `${Math.random() * 2}s`
                    }}
                  />
                ))}
              </div>
              
              {/* Project Image */}
              <div style={imageContainerStyle}>
                <img
                  src={competition.image}
                  alt={competition.title}
                  className="project-image"
                  style={{
                    ...imageStyle,
                    filter: 'brightness(1) contrast(1) saturate(1)'
                  }}
                />
                
                {/* Image overlay */}
                <div 
                  className="image-overlay"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(17, 24, 39, 0.8), transparent)',
                    transition: 'background 0.7s ease'
                  }}
                />
                
                {/* Floating action buttons */}
                {(competition.github || competition.demo) && (
                  <div 
                    className="action-buttons"
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      display: 'flex',
                      gap: '0.5rem',
                      opacity: 1,
                      transform: 'translateY(0)',
                      transition: 'all 0.5s ease',
                      zIndex: 10
                    }}
                  >
                    {competition.github && (
                      <a
                        href={competition.github}
                        className="action-btn github-btn"
                        style={{
                          padding: '0.5rem',
                          background: 'rgba(17, 24, 39, 0.8)',
                          backdropFilter: 'blur(10px)',
                          borderRadius: '50%',
                          color: '#ffffff',
                          textDecoration: 'none',
                          transition: 'all 0.3s ease',
                          transitionDelay: '200ms',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github />
                      </a>
                    )}
                    {competition.demo && (
                      <a
                        href={competition.demo}
                        className="action-btn demo-btn"
                        style={{
                          padding: '0.5rem',
                          background: 'rgba(17, 24, 39, 0.8)',
                          backdropFilter: 'blur(10px)',
                          borderRadius: '50%',
                          color: '#ffffff',
                          textDecoration: 'none',
                          transition: 'all 0.3s ease',
                          transitionDelay: '300ms',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink />
                      </a>
                    )}
                  </div>
                )}

                {/* Status overlay */}
                <div 
                  className="status-overlay"
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '1rem',
                    background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent)',
                    opacity: 0,
                    transform: 'translateY(1rem)',
                    transition: 'all 0.5s ease'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.75rem', color: '#c084fc' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <div style={{ width: '8px', height: '8px', backgroundColor: '#4ade80', borderRadius: '50%', animation: 'statusPulse 2s ease-in-out infinite' }} />
                      Competition Complete
                    </span>
                    {competition.achievements.length > 0 && (
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <div style={{ width: '8px', height: '8px', backgroundColor: getAchievementColor(competition.achievements[0].type), borderRadius: '50%', animation: 'statusPulse 2s ease-in-out infinite' }} />
                        {competition.achievements.length} Award{competition.achievements.length > 1 ? 's' : ''}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div style={contentStyle}>
                <h3 
                  className="project-title"
                  style={projectTitleStyle}
                >
                  {competition.title}
                </h3>
                
                <p 
                  className="project-desc"
                  style={descStyle}
                >
                  {competition.shortDesc}
                </p>

                {/* Tech Stack */}
                <div style={techContainerStyle}>
                  {competition.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="tech-badge"
                      style={{
                        padding: '0.25rem 0.75rem',
                        fontSize: '0.875rem',
                        background: 'rgba(147, 51, 234, 0.3)',
                        color: '#c084fc',
                        borderRadius: '2rem',
                        border: '1px solid rgba(147, 51, 234, 0.3)',
                        transition: 'all 0.5s ease',
                        transitionDelay: `${index * 100}ms`,
                        transform: 'translateY(0)'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes particlePing {
          0% { transform: scale(1); opacity: 1; }
          75%, 100% { transform: scale(2); opacity: 0; }
        }

        @keyframes statusPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        @keyframes techFloat {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-8px) scale(1.05); }
        }

        @keyframes achievementFloat {
          0%, 100% { transform: translateX(0) scale(1); }
          50% { transform: translateX(-3px) scale(1.02); }
        }

        /* Hover Effects */
        .project-card:hover .particles {
          opacity: 1;
        }

        .project-card:hover .project-image {
          transform: scale(1.1);
          filter: brightness(1.25) contrast(1.25) saturate(1.5);
        }

        .project-card:hover .image-overlay {
          background: linear-gradient(to top, rgba(88, 28, 135, 0.6) 0%, transparent 50%, rgba(22, 78, 99, 0.2) 100%);
        }

        .project-card:hover .action-buttons {
          transform: scale(1.1);
        }

        .project-card:hover .status-overlay {
          opacity: 1;
          transform: translateY(0);
        }

        .project-card:hover .achievement-badge {
          transform: translateX(-5px) scale(1.05);
          animation: achievementFloat 2s ease-in-out infinite;
        }

        .project-card:hover .achievements-container .achievement-badge:nth-child(1) {
          transform: translateX(-8px) scale(1.08);
          transition-delay: 0ms;
        }

        .project-card:hover .achievements-container .achievement-badge:nth-child(2) {
          transform: translateX(-6px) scale(1.06);
          transition-delay: 100ms;
        }

        .project-card:hover .achievements-container .achievement-badge:nth-child(3) {
          transform: translateX(-4px) scale(1.04);
          transition-delay: 200ms;
        }

        .project-card:hover .project-title {
          background: linear-gradient(90deg, #a855f7, #ec4899, #06b6d4);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          transform: scale(1.05);
        }

        .project-card:hover .project-desc {
          color: #f3f4f6;
        }

        .project-card:hover .tech-badge {
          background: rgba(147, 51, 234, 0.5);
          border-color: rgba(147, 51, 234, 0.7);
          color: #ffffff;
          transform: translateY(-8px) scale(1.05);
          box-shadow: 0 10px 20px rgba(147, 51, 234, 0.3);
          animation: techFloat 2s ease-in-out infinite;
        }

        .action-btn:hover {
          background: rgba(147, 51, 234, 0.8) !important;
          transform: scale(1.1) rotate(12deg);
        }

        .github-btn:hover {
          transform: scale(1.1) rotate(12deg) !important;
        }

        .demo-btn:hover {
          transform: scale(1.1) rotate(-12deg) !important;
        }
      `}</style>
    </div>
  );
};

export default CompetitionsShowcase;