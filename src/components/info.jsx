import '../styles/info.css';
import profilePic from '../assets/PFP.jpeg';
import Cube from './cube';

const Info = () => {
  return (
    <div className="intro-wrapper">
      <div className="intro-content">
        <img src={profilePic} alt="Profile Picture" className="pfp" />
        <div className="info-container">
          <h1>Nicholas Garcia-Scholtz</h1>
          <h2>Part II Software Engineering Student</h2>
          <h2>Bachelor of Software Engineering (Honours) at the University of Auckland</h2>
        </div>
      </div>
      <div className="cube-wrapper">
        <Cube />
      </div>
    </div>
  );
};

export default Info;
