import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import logo from '../images/shibexLogoSmall1.webp';
import './css_files/socialInfo.css';

const SocialInfo = () => {
/*   const constraintsRef = useRef(null);
 */  const { ref, inView } = useInView({
    threshold: 0.8,
  });
  const animation = useAnimation();
  useEffect(() => {

    if (inView) {
      //end point of animation
      animation.start({ y: '0' ,opacity:1});
    }
    if (!inView) {
      //start point of animation
      animation.start({ y: '-20vh',opacity:0 });
    }
  }, [inView, animation]);

  const animation2 = useAnimation();
  useEffect(() => {

    if (inView) {
      //end point of animation2
      animation2.start({ x: '0' });
    }
    if (!inView) {
      //start point of animation2
      animation2.start({ x: '-100vw' });
    }
  }, [inView, animation2]);

  const animation3 = useAnimation();
  useEffect(() => {

    if (inView) {
      //end point of animation3
      animation3.start({ rotate: 0 });
    }
    if (!inView) {
      //start point of animation3
      animation3.start({ rotate: -90 });
    }
  }, [inView, animation3]);

  const animation4 = useAnimation();
  useEffect(() => {

    if (inView) {
      //end point of animation4
      animation4.start({ rotate: 0 });
    }
    if (!inView) {
      //start point of animation4
      animation4.start({ rotate: 90 });
    }
  }, [inView, animation4]);
  return (
    <div
      className="socialContainer bg-dark p-5"
      style={{ position: 'relative' }}
    >
      <div className="custom-shape-divider-top-1642533550">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M741,116.23C291,117.43,0,27.57,0,6V120H1200V6C1200,27.93,1186.4,119.83,741,116.23Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="row flex-lg-row-reverse align-items-center shibaHouse">
        <motion.div className="img-wrapper col-12 col-sm-8 col-lg-6">
          <motion.img
            src={logo}
            alt="shiba"
            className="shiba"
            drag
            dragConstraints={{ top: 10, bottom: 5, right: 0, left: 10 }}
            dragElastic={1.5}
          />
        </motion.div>

        <div className="col-lg-6">
          <span className="header" ref={ref}>
            <motion.h1
              className="display-5 fw-bold lh-1 mb-3 mb-5 text-center headerTitle"
              style={{ color: '#fcd032' }}
              animate={animation}
            >
              Shibex Soliders
            </motion.h1>
          </span>
          <span className="para" ref={ref}>
            <motion.p
              className="lead text-light text-center m-4 lh-lg paragraph1 lh-md"
              animate={animation2}
            >
              Our community grows stronger every day. Please follow our social
              platforms to get the most up-to-date, accurate SHIBX information.
              Using the links below, you can join our groups alongside the
              members of the ShibexSoldiers.
            </motion.p>
          </span>
          <div className="btn-wrapper me-5 text-center row">
            <div className="col-6" ref={ref}>
              <motion.button
                type="button"
                className="  btn btn-outline-info rounded-pill socialBtn mt-5"
                animate={animation3}
              >
                <a
                  href="https://twitter.com/ShibexSoliders"
                  style={{ textDecoration: 'none' }}
                  className="text-white"
                  target="_blank"
                                    rel='noreferrer'

                >
                  Twitter
                  <i className="ms-3 bi bi-twitter twitt-icon"></i>
                </a>
              </motion.button>
            </div>
            <div className="col-6" ref={ref}>
              <motion.button
                type="button"
                className="btn btn-outline-danger rounded-pill ms-5 socialBtn mt-5"
                animate={animation4}
              >
                <a
                  href="https://t.me/ShibexToken"
                  style={{ textDecoration: 'none' }}
                  className="text-white"
                  target="_blank"
                                    rel='noreferrer'

                >
                  Telegram
                  <i className="ms-2 bi bi-telegram tele-icon"></i>
                </a>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialInfo;
