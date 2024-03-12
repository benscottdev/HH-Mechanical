import { Link } from "react-router-dom";
import Logo from "../Assets/TheWorkshop.png";
import InstaLogo from "../Assets/WHITE_instagramLogo.png";
import TwitterLogo from "../Assets/WHITE_twitterLogo.png";
import FacebookLogo from "../Assets/WHITE_facebookLogo.png";

function NavBar({ handleActive, active }) {
  const handleCloseNav = () => {
    if (active) {
      handleActive();
    }
  };

  return (
    <div className="navLinks" id={active ? null : "hide"}>
      <button id="closeNav" onClick={handleActive}>
        X
      </button>
      <Link to="/" onClick={handleCloseNav}>
        <img src={Logo} alt="HHLogo" />
      </Link>
      <div className="navLink">
        <Link id="servicesLink" to="/services" onClick={handleCloseNav}>
          SERVICES
        </Link>
        <Link id="reviewsLink" to="/reviews" onClick={handleCloseNav}>
          REVIEWS
        </Link>
        <Link to="/booknow" id="bookNowBtn" onClick={handleCloseNav}>
          BOOK NOW
        </Link>
      </div>
      <div className="socialLink">
        <img src={InstaLogo} alt="instagram link" onClick={handleCloseNav} />
        <img src={TwitterLogo} alt="twitter link" onClick={handleCloseNav} />
        <img src={FacebookLogo} alt="facebook link" onClick={handleCloseNav} />
      </div>
    </div>
  );
}
export default NavBar;
