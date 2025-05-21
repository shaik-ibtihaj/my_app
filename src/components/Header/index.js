import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { FaHome, FaRegHospital } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { MdContactMail } from "react-icons/md";
import { GiHealthNormal } from "react-icons/gi";
import "./index.css";
import { FaHeartbeat } from "react-icons/fa";
const Header = () => {
  const navigate = useNavigate();

  const onClickLogout = () => {
    Cookies.remove("jwt_token");
    navigate("/login");
  };

  return (
    <nav className="nav-header">
      <div className="blog-container">
        <div className="nav-content-lg">
          <a href="/">
            {" "}
            <div className="nav-logo">
              <FaHeartbeat className="logo-icon" />
              <h1 className="blog-title">HealthPlus</h1>
            </div>
          </a>
          <ul className="nav-menu">
            <li>
              <Link className="nav-link" to="/">
                <FaHome className="nav-icon" />
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/healthTips">
                <GiHealthNormal className="nav-icon" />
                Health Tips
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/services">
                <FaRegHospital className="nav-icon" />
                Services
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/newHome">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  className="icon"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M217.4 27.43c-27.9.47-53.1 17.11-64.5 42.84l136.5 41.23c6-35.79-15.5-70.49-50.1-81.02-6.2-1.88-12.7-2.91-19.2-3.05h-2.7zm-69.7 60.08c-6.1 35.89 15.4 70.69 50.1 81.19 34.8 10.5 71.9-6.7 86.5-40zm265.5 44.29c-25.3.1-52.2 12.3-72.5 41L215.9 349.7c-33.5 47.4-18.9 97 14.1 120.4 33.1 23.5 84.6 20.8 118.1-26.6l124.7-176.8c33.5-47.5 18.9-97-14.1-120.5-12.4-8.8-27.3-13.9-43-14.4zm-1.8 17.3c1.3 0 2.6 0 3.8.1 12.1.5 23.5 4.8 33.1 11.7 25.7 18.2 38.6 54.5 9.7 95.4l-64.5 91.5c-35.8-9.6-81.8-42.3-102.7-73l64.7-91.6c16.9-23.9 37-33.7 55.9-34.1zM91.25 225.3c-9.62.1-19.11 2.1-27.93 6-33.11 14.5-50.34 51.5-40.24 86.3l130.72-57.1c-13.1-22.1-36.9-35.5-62.55-35.2zm69.65 51.6L30.2 334.1c18.45 31.4 57.3 44 90.6 29.5 33.2-14.6 50.4-51.8 40.1-86.7z"></path>
                </svg>
                Cure Disease
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/contact">
                <MdContactMail className="nav-icon" />
                Contact
              </Link>
            </li>
            <li>
              <button
                type="button"
                className="logout-btn logout-desktop-btn"
                onClick={onClickLogout}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
        <div className="nav-content-sm">
          <div className="logo-logout-container">
            <div className="nav-logo">
              <img
                src="https://example.com/new-logo.png"
                className="nav-image"
                alt="HealthPlus"
              />
              <h1 className="blog-title">HealthPlus</h1>
            </div>
            <button
              type="button"
              className="logout-btn logout-mobile-btn"
              onClick={onClickLogout}
            >
              <img
                src="https://example.com/logout-icon.png"
                alt="nav logout"
                className="logout-icon"
              />
            </button>
          </div>
          <hr className="line" />
          <ul className="nav-items-container">
            <Link to="/" className="nav-link">
              <li>
                <FaHome className="icon" />
              </li>
            </Link>
            <Link to="/healthTips" className="nav-link">
              <li>
                <GiHealthNormal className="icon" />
              </li>
            </Link>
            <Link to="/services" className="nav-link">
              <li>
                <FaRegHospital className="icon" />
              </li>
            </Link>
            <Link to="/newHome" className="nav-link">
              <li>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  class="icon"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M217.4 27.43c-27.9.47-53.1 17.11-64.5 42.84l136.5 41.23c6-35.79-15.5-70.49-50.1-81.02-6.2-1.88-12.7-2.91-19.2-3.05h-2.7zm-69.7 60.08c-6.1 35.89 15.4 70.69 50.1 81.19 34.8 10.5 71.9-6.7 86.5-40zm265.5 44.29c-25.3.1-52.2 12.3-72.5 41L215.9 349.7c-33.5 47.4-18.9 97 14.1 120.4 33.1 23.5 84.6 20.8 118.1-26.6l124.7-176.8c33.5-47.5 18.9-97-14.1-120.5-12.4-8.8-27.3-13.9-43-14.4zm-1.8 17.3c1.3 0 2.6 0 3.8.1 12.1.5 23.5 4.8 33.1 11.7 25.7 18.2 38.6 54.5 9.7 95.4l-64.5 91.5c-35.8-9.6-81.8-42.3-102.7-73l64.7-91.6c16.9-23.9 37-33.7 55.9-34.1zM91.25 225.3c-9.62.1-19.11 2.1-27.93 6-33.11 14.5-50.34 51.5-40.24 86.3l130.72-57.1c-13.1-22.1-36.9-35.5-62.55-35.2zm69.65 51.6L30.2 334.1c18.45 31.4 57.3 44 90.6 29.5 33.2-14.6 50.4-51.8 40.1-86.7z"></path>
                </svg>
              </li>
            </Link>
            <Link to="/contact" className="nav-link">
              <li>
                <MdContactMail className="icon" />
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <hr className="line" />
    </nav>
  );
};

export default Header;
