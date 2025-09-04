import React, { useState, useEffect, useRef } from 'react';
import TrialAIImage from '../assets/TrialAIImage.png';
import UAICImage from '../assets/UAICImage.png';
import WeatherAppImage from '../assets/WeatherAppImage.png'
import AlgothonImage from '../assets/AlgothonImage.png'
import FlappyBirdImage from '../assets/FlappyBirdImage.png'
import ColouradeImage from '../assets/ColouradeImage.png'
import OperatorManagementSystemImage from '../assets/OperatorManagementSystemImage.png'

const ProjectsShowcase = () => {
  const [expandedProject, setExpandedProject] = useState(null);
  const [visibleProjects, setVisibleProjects] = useState(new Set());
  const projectRefs = useRef([]);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const projectId = parseInt(entry.target.dataset.projectId);
          if (entry.isIntersecting) {
            setVisibleProjects(prev => new Set([...prev, projectId]));
          } else {
            setVisibleProjects(prev => {
              const newSet = new Set(prev);
              newSet.delete(projectId);
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

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // Custom SVG Icons
  const ChevronDown = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6,9 12,15 18,9"></polyline>
    </svg>
  );

  const ChevronUp = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="18,15 12,9 6,15"></polyline>
    </svg>
  );

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

  // Handle card click - navigate to GitHub or first available link
  const handleCardClick = (project, event) => {
    // Don't navigate if clicking on interactive elements
    if (event.target.closest('.expand-btn, .action-btn')) {
      return;
    }

    if (project.github) {
      window.open(project.github, '_blank', 'noopener,noreferrer');
    } else if (project.demo) {
      window.open(project.demo, '_blank', 'noopener,noreferrer');
    }
  };

  // Sample project data - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: "University of Auckland Investment Club",
      image: UAICImage,
      shortDesc: "A website for a university club managing memberships, payments, events, bulletins and more",
      fullDesc: "Working within a team as a full-stack developer to create a platform to track the club’s $30K portfolio and display daily NZX/ASX stock data. Implemented membership sign-ups using betterAuth and Google OAuth along with domain verification. Integrated Stripe payments for event registration and competition access for members. Utilising Payload CMS as a content management system for articles, public bulletins and events.",
      tech: ["React", "TypeScript", "Next.js", "MongoDB", "Node.js", "Payload CMS", "Tailwind CSS", "Git"],
      github: "https://github.com/UoaWDCC/uaic",
      // demo: "https://stellar-navigator-demo.com"
    },
    {
      id: 2,
      title: "Trial AI",
      image: TrialAIImage,
      shortDesc: "An educational app that allows users to evaluate the autonomous decisions of an AI",
      fullDesc: "Designed and implemented a multi-scene JavaFX educational application simulating a courtroom, where users critically evaluate whether an AI-generated artwork is transformative or constitutes intellectual property theft. Developed autonomous AI and human character witnesses, leveraging OpenAI’s GPT API to provide contextualized, character-driven chat interactions. Utilized multithreading and concurrency to manage real-time chat, timers, and audio feedback, ensuring responsive and seamless user experience.",
      tech: ["Java", "JavaFX", "OpenAI", "Maven", "Git"],
      // github: "https://github.com/yourusername/cosmic-chat",
      // demo: "https://cosmic-chat-demo.com"
    },
    {
      id: 3,
      title: "Flappy Bird",
      image: FlappyBirdImage,
      shortDesc: "A Flappy Bird clone that utilises Java Swing for GUI rendering",
      fullDesc: "Developed a Flappy Bird clone using Java Swing for GUI rendering, applying OOP principles for modular game elements. Implemented game physics with velocity, gravity, and collision detection using mathematical modeling. Designed a real-time game loop with multithreading to manage smooth animations and obstacle spawning",
      tech: ["Java", " Java Swing", "Git"],
      github: "https://github.com/nicholas-garcia-scholtz/FlappyBird",
      // demo: "https://nebula-dashboard-demo.com"
    },
    {
      id: 4,
      title: "Colourade",
      image: ColouradeImage,
      shortDesc: "Colourade is a turn-based strategy game where a human player competes against an adaptive AI",
      fullDesc: "Each round, both the player and AI choose a color for themselves from a set — Red, Green, Blue, and Yellow — while also trying to guess what the opponent has picked. Players earn +1 point for correct guesses, testing their intuition and bluffing skills. The game includes selectable difficulty levels that affect how the AI behaves, ranging from randomized choices to more calculated patterns. Both the factory and strategy design patterns are used to implement this.",
      tech: ["Java", "Maven", "Git"],
      github: "https://github.com/nicholas-garcia-scholtz/Colourade-Terminal-Game",
      // demo: "https://nebula-dashboard-demo.com"
    },
    {
      id: 5,
      title: "Weather App",
      image: WeatherAppImage,
      shortDesc: "A simple, responsive weather application built with React and JavaScript.",
      fullDesc: "The app loads data for Auckland by default and updates dynamically when a new city is entered. It fetches live weather data from WeatherAPI based on a user’s location input, then displays real-time conditions like temperature, heat index, and forecast icons. Weather data is rendered with clear visual cues, and the interface features centered layout, smooth hover effects, and clean styling for an intuitive experience.",
      tech: ["React", "JavaScript", "CSS", "Weather API", "Git"],
      github: "https://github.com/nicholas-garcia-scholtz/WeatherApp",
      // demo: "https://nebula-dashboard-demo.com"
    },
    {
      id: 6,
      title: "Operator Management System",
      image: OperatorManagementSystemImage,
      shortDesc: "A centralised system for managing multiple fictional Aotearoa New Zealand activity operators.",
      fullDesc: "The system is designed to oversee details of various operators, their offered activities, and the feedback received from customers and experts. All interactions are through the command terminal.",
      tech: ["Java", "Maven", "Git"],
      github: "https://github.com/nicholas-garcia-scholtz/WeatherApp",
      // demo: "https://nebula-dashboard-demo.com"
    }
  ];

  const toggleExpand = (projectId) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
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

  const expandButtonStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: '#a855f7',
    background: 'none',
    border: 'none',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.5s ease',
    padding: '0.5rem 0',
    borderRadius: '2rem'
  };

  return (
    <div style={containerStyle}>
      <div style={mainContentStyle}>
        {/* Projects Grid */}
        <div style={gridStyle}>
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={el => projectRefs.current[index] = el}
              data-project-id={project.id}
              onClick={(e) => handleCardClick(project, e)}
              style={{
                ...cardStyle,
                opacity: visibleProjects.has(project.id) ? 1 : 0,
                transform: visibleProjects.has(project.id) 
                  ? 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1) translateX(0)' 
                  : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(0.8) translateX(-100px)',
                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                transitionDelay: `${index * 150}ms`
              }}
              className="project-card"
              onMouseEnter={(e) => {
                if (visibleProjects.has(project.id)) {
                  e.currentTarget.style.transform = 'perspective(1000px) rotateX(5deg) rotateY(-5deg) scale(1.05) translateX(0)';
                  e.currentTarget.style.borderColor = 'rgba(147, 51, 234, 0.6)';
                  e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(147, 51, 234, 0.3)';
                }
              }}
              onMouseLeave={(e) => {
                if (visibleProjects.has(project.id)) {
                  e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1) translateX(0)';
                  e.currentTarget.style.borderColor = 'rgba(147, 51, 234, 0.3)';
                  e.currentTarget.style.boxShadow = 'none';
                }
              }}
            >
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
                  src={project.image}
                  alt={project.title}
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
                {(project.github || project.demo) && (
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
                    {project.github && (
                      <a
                        href={project.github}
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
                    {project.demo && (
                      <a
                        href={project.demo}
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
                      Status: Active
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <div style={{ width: '8px', height: '8px', backgroundColor: '#60a5fa', borderRadius: '50%', animation: 'statusPulse 2s ease-in-out infinite' }} />
                      {project.tech.length} Technologies
                    </span>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div style={contentStyle}>
                <h3 
                  className="project-title"
                  style={projectTitleStyle}
                >
                  {project.title}
                </h3>
                
                <p 
                  className="project-desc"
                  style={descStyle}
                >
                  {project.shortDesc}
                </p>

                {/* Tech Stack */}
                <div style={techContainerStyle}>
                  {project.tech.map((tech, index) => (
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

                {/* Expand Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleExpand(project.id);
                  }}
                  className="expand-btn"
                  style={expandButtonStyle}
                >
                  {expandedProject === project.id ? (
                    <>
                      Show Less <ChevronUp />
                    </>
                  ) : (
                    <>
                      Learn More <ChevronDown />
                    </>
                  )}
                </button>

                {/* Expanded Content */}
                {expandedProject === project.id && (
                  <div 
                    style={{
                      marginTop: '1rem',
                      paddingTop: '1rem',
                      borderTop: '1px solid rgba(147, 51, 234, 0.3)',
                      animation: 'fadeIn 0.5s ease-out forwards'
                    }}
                  >
                    <p style={{ color: '#d1d5db', lineHeight: '1.6' }}>
                      {project.fullDesc}
                    </p>
                  </div>
                )}
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

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes techFloat {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-8px) scale(1.05); }
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

        .project-card:hover .expand-btn {
          background: rgba(147, 51, 234, 0.2);
          padding: 0.5rem 1rem;
          border-radius: 2rem;
          box-shadow: 0 4px 15px rgba(147, 51, 234, 0.25);
          transform: scale(1.05);
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

export default ProjectsShowcase;