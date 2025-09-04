// Projects.jsx
import useInView from './useInView';
import '../styles/Competitions.css';
import CompetitionsShowcase from './CompetitionsShowcase';

const Competitions = () => {
  const [ref, inView] = useInView({ threshold: 0.05 });

  return (
    <section ref={ref} className={`competitions-section ${inView ? 'slide-in' : ''}`}>
      <div className="competitions-content">
        <h1>Competitions</h1>
      </div>
      <CompetitionsShowcase/>
    </section>
  );
};

export default Competitions;