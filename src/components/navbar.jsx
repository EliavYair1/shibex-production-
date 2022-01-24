import { motion } from 'framer-motion';
import './css_files/navbar.css';
import logo from '../images/shibexLogoSmall1.webp';
import pdf from '../whitePaperShibex/up_white_paper.pdf';
const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-sm navbarColor"
      aria-label="Third navbar example"
    >
      <div className="container-fluid">
        <motion.img
          src={logo}
          alt=""
          className="shiba_logo"
          animate={{
            scale: [1, 1.2, 1.2, 0, 1],
            rotate: [0, 0, 360, 0, 360],
          }}
        />

        <button
          className="navbar-toggler border-info"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample03"
          aria-controls="navbarsExample03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <i className="bi bi-list text-info"></i>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarsExample03">
          <ul className="navbar-nav me-auto mb-2 mb-md-0 myNav text-center col-12 d-flex justify-content-evenly">
            <li className="nav-item">
              <motion.a
                className="nav-link navLinkColor active fw-bold fs-4"
                aria-current="page"
                href="https://shibex-soldiers.web.app/"
                whileHover={{ color: 'var(--redColor)' }}
                whileTap={{ rotate: 360, scale: 0.2 }}
                target="_blank"
                rel="noreferrer"
              >
                Play
              </motion.a>
            </li>
            <li className="nav-item">
              <motion.a
                className="nav-link navLinkColor fw-bold fs-4"
                href="https://swap.mimo.exchange/#/swap?inputCurrency=0x838403e073a79719a0927a16642ca7dcdc642bd5"
                whileHover={{ color: 'var(--redColor)' }}
                whileTap={{ rotate: 360, scale: 0.2 }}
                target="_blank"
                rel="noreferrer"
              >
                Buy
              </motion.a>
            </li>
            <li className="nav-item">
              <motion.a
                whileHover={{ color: 'var(--redColor)' }}
                whileTap={{ rotate: 360, scale: 0.2 }}
                className="nav-link  navLinkColor fw-bold fs-4"
                target="_blank"
                rel="noreferrer"
                href="#"
              >
                News
              </motion.a>
            </li>
            <li className="nav-item">
              <motion.a
                className="nav-link navLinkColor fw-bold fs-4"
                href={pdf}
                download
                tabIndex={-1}
                aria-disabled="true"
                whileHover={{ color: 'var(--redColor)' }}
                whileTap={{ rotate: 360, scale: 0.2 }}
                target="_blank"
                rel="noreferrer"
              >
                white paper
              </motion.a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
