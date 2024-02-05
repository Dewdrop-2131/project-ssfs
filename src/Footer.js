import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="left-text left">
          <section>StellarScape Facility Services</section>
          <section>H.O, Bengaluru</section>
          <section>Email: new@asd.com</section>
          <section>Phone Number: +91 9876543210</section>
        </div>
        <div className="right-text right">
          <p>
            <Popup
              trigger={<u className="term">Terms & Conditions</u>}
              modal
              nested
              className="custom-popup"
            >
              {(close) => (
                <div className='modal'>
                  <div className='contentFooter'>
                  On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains
                  </div>
                  <div style={{textAlign:"end"}}>
                    <button onClick={close} className="custom-close-button">
                      Close
                    </button>
                  </div>
                </div>
              )}
            </Popup>
          </p>
          <p>
            <Popup
              trigger={<u className="privacy">Privacy Policies</u>}
              modal
              nested
              className="custom-popup"
            >
              {(close) => (
                <div className='modal'>
                  <div className='contentFooter'>
                  On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains
                  </div>
                  <div style={{textAlign:"end"}}>
                    <button onClick={close} className="custom-close-button">
                      Close
                    </button>
                  </div>
                </div>
              )}
            </Popup>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


