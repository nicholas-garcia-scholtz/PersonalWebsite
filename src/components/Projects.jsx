// Projects.jsx
import useInView from './useInView';
import '../styles/Projects.css';
import ProjectsShowcase from './ProjectsShowcase';

const Projects = () => {
  const [ref, inView] = useInView({ threshold: 0.05 });

  return (
    <section ref={ref} className={`projects-section ${inView ? 'slide-in' : ''}`}>
      <div className="projects-content">
        <h1>Projects</h1>
      </div>
      <ProjectsShowcase/>
    </section>
  );
};

export default Projects;