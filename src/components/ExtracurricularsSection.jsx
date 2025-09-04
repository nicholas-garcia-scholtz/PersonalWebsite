import useInView from './useInView';
import '../styles/ExtracurricularsSection.css';
import ExtracurricularsShowcase from './ExtracurricularsShowcase';

const ExtracurricularsSection = () => {
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <section ref={ref} className={`extracurriculars-section ${inView ? 'slide-in' : ''}`}>
      <h1>Extracurriculars & Leadership</h1>
      <ExtracurricularsShowcase/>
    </section>
  );
};

export default ExtracurricularsSection;