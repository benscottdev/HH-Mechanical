import { Link } from "react-router-dom";
import Logo from "../Assets/HH_Logo.png";
import InstaLogo from "../Assets/WHITE_instagramLogo.png";
import TwitterLogo from "../Assets/WHITE_twitterLogo.png";
import FacebookLogo from "../Assets/WHITE_facebookLogo.png";

function NavBar({ handleActive, active }) {
  return (
    <div className="navLinks" id={active ? null : "hide"}>
      <button id="closeNav" onClick={handleActive}>
        X
      </button>
      <Link to="/">
        <img src={Logo} alt="HHLogo" />
      </Link>
      <div className="navLink">
        <Link id="servicesLink" to="/services">
          SERVICES
        </Link>
        <Link id="reviewsLink" to="/reviews">
          REVIEWS
        </Link>
        <Link to="/booknow" id="bookNowBtn">
          BOOK NOW
        </Link>
      </div>
      <div className="socialLink">
        <img src={InstaLogo} alt="instagram link" />
        <img src={TwitterLogo} alt="twitter link" />
        <img src={FacebookLogo} alt="facebook link" />
      </div>
    </div>
  );
}
export default NavBar;
