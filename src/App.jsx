import './App.css'
import Info from './components/info'
import Projects from './components/Projects'
import StarField from './components/StarField'
import LanguagesSection from './components/LanguagesSection';
import World from './components/World';
import ExtracurricularsSection from './components/ExtracurricularsSection';
import Competitions from './components/CompetitionsSection';
import PortfolioFooter from './components/Footer';



function App() {

  return (
    <StarField>
      <Info/>
      <Projects/>
      <World/>
      <Competitions/>
      <ExtracurricularsSection/>
      <LanguagesSection/>
      <PortfolioFooter/>
    </StarField>
  )
}

export default App
