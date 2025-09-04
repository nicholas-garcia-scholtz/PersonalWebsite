import useInView from './useInView';
import '../styles/Languages.css';
import LanguagesCarousel from './LanguagesCarousel';

const LanguagesSection = () => {
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <section ref={ref} className={`languages-section ${inView ? 'slide-in' : ''}`}>
      <h1>Languages & Technologies</h1>
      <LanguagesCarousel/>
    </section>
  );
};

export default LanguagesSection;