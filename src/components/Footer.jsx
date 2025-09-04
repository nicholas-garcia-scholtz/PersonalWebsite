import React from 'react';
import pfp from '../assets/PFP.jpeg';

const PortfolioFooter = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <h3 className="footer-title">Contact Me</h3>
          <p className="footer-description">
            Connect with me on LinkedIn!
          </p>
          
          <div className="linkedin-container">
            <div className="tooltip-container">
              <div className="tooltip">
                <div className="profile">
                  <div className="user">
                    <div className="img">
                      <img src={pfp} alt="Nicholas Garcia-Scholtz" />
                    </div>
                    <div className="details">
                      <div className="name">Nicholas Garcia-Scholtz</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text">
                <a className="icon" href="https://www.linkedin.com/in/nicholas-garcia-scholtz" target="_blank">
                  <div className="layer">
                    <span />
                    <span />
                    <span />
                    <span />
                    <span className="fab fa-linkedin">
                      <svg viewBox="0 0 448 512" height="1em">
                        <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                      </svg>
                    </span>
                  </div>
                  <div className="text">LinkedIn</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyright">
          © 2025 Nicholas Garcia-Scholtz.
        </p>
      </div>

      <style jsx>{`
        .footer {
          position: relative;
          width: 100vw;
          margin-left: calc(-50vw + 50%);
          background: linear-gradient(135deg, #1a1b1f 0%, #2a2b2f 100%);
          color: #ffffff;
          padding: 20px 0 0 0;
          overflow: hidden;
          margin-bottom: -20px;
          font-family: 'Rowdies', sans-serif;
        }

        .footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #1da1f2, transparent);
        }

        .footer-container {
          max-width: 800px;
          margin: 0 auto;
          padding-bottom: 0px;
        }

        .footer-content {
          text-align: center;
        }

        .footer-title {
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 16px;
          color: #1da1f2;
          position: relative;
        }

        .footer-title::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 2px;
          background: #1da1f2;
          border-radius: 1px;
        }

        .footer-description {
          color: #cccccc;
          font-size: 18px;
          line-height: 1.6;
          margin-bottom: 40px;
        }

        .linkedin-container {
          display: flex;
          justify-content: center;
          margin-bottom: 40px;
        }

        .footer-bottom {
          background: rgba(0, 0, 0, 0.3);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding: 20px;
          text-align: center;
        }

        .copyright {
          color: #cccccc;
          font-size: 14px;
          margin: 0;
        }

        /* Your original LinkedIn button styles */
        .tooltip-container {
          position: relative;
          cursor: pointer;
          transition: all 0.2s;
          font-size: 17px;
          border-radius: 10px;
        }

        .tooltip {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          padding: 10px;
          opacity: 0;
          pointer-events: none;
          transition: all 0.3s;
          border-radius: 15px;
          box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.2),
            inset -5px -5px 15px rgba(255, 255, 255, 0.1),
            5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.1);
          z-index: 10;
        }

        .profile {
          background: #2a2b2f;
          border-radius: 10px 15px;
          padding: 10px;
          border: 1px solid rgba(11, 63, 95, 1);
        }

        .tooltip-container:hover .tooltip {
          top: -150px;
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
        }

        .icon {
          text-decoration: none;
          color: #fff;
          display: block;
          position: relative;
        }

        .layer {
          width: 55px;
          height: 55px;
          transition: transform 0.3s;
        }

        .icon:hover .layer {
          transform: rotate(-35deg) skew(20deg);
        }

        .layer span {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          border: 1px solid #fff;
          border-radius: 5px;
          transition: all 0.3s;
        }

        .layer span,
        .text {
          color: #1da1f2;
          border-color: #1da1f2;
        }

        .icon:hover .layer span {
          box-shadow: -1px 1px 3px #1da1f2;
        }

        .icon .text {
          position: absolute;
          left: 50%;
          bottom: -5px;
          opacity: 0;
          font-weight: 500;
          transform: translateX(-50%);
          transition: bottom 0.3s ease, opacity 0.3s ease;
        }

        .icon:hover .text {
          bottom: -35px;
          opacity: 1;
        }

        .icon:hover .layer span:nth-child(1) {
          opacity: 0.2;
        }
        .icon:hover .layer span:nth-child(2) {
          opacity: 0.4;
          transform: translate(5px, -5px);
        }
        .icon:hover .layer span:nth-child(3) {
          opacity: 0.6;
          transform: translate(10px, -10px);
        }
        .icon:hover .layer span:nth-child(4) {
          opacity: 0.8;
          transform: translate(15px, -15px);
        }
        .icon:hover .layer span:nth-child(5) {
          opacity: 1;
          transform: translate(20px, -20px);
        }

        .layer span.fab {
          font-size: 30px;
          line-height: 64px;
          text-align: center;
          fill: #1da1f2;
          background: #000;
        }

        .user {
          display: flex;
          gap: 10px;
        }

        .img {
          width: 100px;
          height: 50px;
          border: 1px solid #1da1f2;
          border-radius: 10px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fff;
        }

        .img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 10px;
        }


        .name {
          font-size: 17px;
          font-weight: 700;
          color: #1da1f2;
        }

        .details {
          display: flex;
          flex-direction: column;
          gap: 0;
          color: #fff;
        }

        .about {
          color: #ccc;
          padding-top: 5px;
        }

        .username {
          color: #ccc;
          font-size: 14px;
        }
      `}</style>
    </footer>
  );
};

export default PortfolioFooter;