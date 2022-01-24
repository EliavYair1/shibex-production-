/* eslint-disable jsx-a11y/anchor-is-valid */
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import './css_files/footer.css';
import pdf from '../whitePaperShibex/up_white_paper.pdf';

const Footer = () => {
  const { ref, inView } = useInView({
    threshold: 0.9,
  });

  const animation = useAnimation();

  useEffect(() => {

    if (inView) {
      animation.start({ opacity: 1, transition: { delay: 0.1 } });
    }
    if (!inView) {
      animation.start({ opacity: 0 });
    }
  }, [inView, animation]);

  const animation2 = useAnimation();

  useEffect(() => {

    if (inView) {
      animation2.start({ y: '0' });
    }
    if (!inView) {
      animation2.start({ y: '100vh' });
    }
  }, [inView, animation2]);
  return (
    <footer
      className="footerContainer pb-5 bg-primary-3 text-dark"
      style={{ position: 'relative' }}
    >
      <div className="custom-shape-divider-top-1642532432">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="container">
        <div className="row mb-4 justify-content-center">
          <div className="col-auto">
            <p className="text-center fs-4" ref={ref}>
              <motion.span className="color_11" animate={animation}>
                ShibexSoldiers are you ready? 🚀
              </motion.span>
            </p>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col" ref={ref}>
            <motion.ul
              className="nav justify-content-center"
              animate={animation}
            >
              <li className="nav-item">
                <a
                  href="https://shibex-soldiers.web.app/"
                  className="nav-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Play
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="https://swap.mimo.exchange/#/swap?inputCurrency=0x838403e073a79719a0927a16642ca7dcdc642bd5"
                  className="nav-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Buy
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#"
                  className="nav-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  News
                </a>
              </li>
              <li className="nav-item">
                <a href={pdf} className="nav-link" download>
                  white paper
                </a>
              </li>
            </motion.ul>
          </div>
        </div>
        <div className="row justify-content-center mt-5 mb-5">
          <div className="col-auto" ref={ref}>
            <motion.ul className="nav" animate={animation2}>
              <motion.li className="nav-item" whileHover={{ color: 'white' }}>
                <a
                  href="https://www.instagram.com/shibexsoldiers/"
                  className="nav-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-instagram display-6"></i>
                </a>
              </motion.li>
              <li className="nav-item">
                <a
                  href=" https://twitter.com/ShibexSoldiers"
                  className="nav-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-twitter display-6"></i>
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="https://swap.mimo.exchange/#/swap?inputCurrency=0x838403e073a79719a0927a16642ca7dcdc642bd5"
                  className="nav-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-coin display-6"></i>
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="https://t.me/ShibexToken"
                  className="nav-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-telegram display-6"></i>
                </a>
              </li>
            </motion.ul>
          </div>
        </div>
        <div className="row justify-content-center text-center">
          <div className="col-xl-10">
            <motion.small className="text-muted">
              ©2020 All Rights Reserved. Shibex® is a registered trademark of
              Your Company. Apple and the Apple logo are trademarks of Apple
              Inc., registered in the U.S. and other countries. Mac App Store is
              a service mark of Apple Inc. Google Play and the Google Play logo
              are trademarks of Google Inc. <br /> <br />
              <span className='copyRights'>© This Site Was Designed And Developed By -  Eliav Yair & Ofek Abarbanel & Sagi Reuven </span>
              
            </motion.small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
