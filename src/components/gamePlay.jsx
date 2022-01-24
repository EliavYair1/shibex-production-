import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import shivaVideo from '../videos/PRUEBATrim.mp4';
import './css_files/gamePlay.css';

const GamePlay = () => {
  const { ref, inView } = useInView({
    threshold: 0.25,
  });

  const animation = useAnimation();

  useEffect(() => {

    if (inView) {
      //end point of animation
      animation.start({
        y: '0',opacity:1
      });
    }
    if (!inView) {
      //start point of animation
      animation.start({ y: '-200px',opacity:0 });
    }
  }, [inView, animation]);

  const animation2 = useAnimation();

  useEffect(() => {

    if (inView) {
      //end point of animation2
      animation2.start({
        y: '30px',opacity:1
      });
    }
    if (!inView) {
      //start point of animation2
      animation2.start({ y: '200px',opacity:0});
    }
  }, [inView, animation2]);

  return (
    <>
      <div className="container mt-3 gamePlay-container align-center">
        <div className="row">
          <div className="col-12">
            <div className="header" ref={ref}>
              <motion.h1
                className="text-center display-1 gameplayHeader mb-3 mt-5"
                animate={animation2}
              >
                The Shibex Games
              </motion.h1>
            </div>
          </div>
        </div>
        <br /><br />
        <div className="row ">
          <div className="col-12 col-sm-4  video-container ">
            <video className="video" controls src={shivaVideo}></video>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center buttonWrapper mt-5" ref={ref}>
            <motion.button
              className="platBtn btn-lg btn-warning rounded-pill"
              animate={animation}
            >
              <a
                href="https://shibex-soldiers.web.app/"
                target="_blank"
                rel="noreferrer"
                className="text-dark"
                style={{ textDecoration: 'none' }}
              >
                <strong className="innerBtn">Let's Play</strong>
              </a>
            </motion.button>
          </div>
        </div>
      </div>
    </>
  );
};

export default GamePlay;
