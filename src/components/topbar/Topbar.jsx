import "./topbar.css";
import { Search, Person, Chat, Notifications} from "@mui/icons-material";
import { Link } from "react-router-dom";
// import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/dropdown';





 
// This is the top navigation bar component. The navigation bar is divided into 3 colums ("topbarLeft", "topbarCenter", and "topbarRight").

//-- topbarLeft contains the Keyin Social Logo. topbarCenter contains the keyin social search element and topbarRight contains the Homepage/Timeline links and notification links.

export default function Topbar() {
  return (
    <div className="topbarContainer">
      {/* Keyin Social Logo */}
      <div className="topbarLeft">
        <span className="logo">
          <Link to="/Home">
            <img
              src="./assets/logo-keyin.svg"
              alt="Keyin College"
              width="130px" className="logoImg"
            />
          </Link>
        </span>
      </div>

      {/* Search element */}
      <div className="topbarCenter">
        <div className="searchbar">
          <Search />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>

      {/* Home/Timeline links */}
      <div className="topbarRight">
        <div className="topbarLinks">
          <Link className="topbarLinkHome" to="/Home">
            Home
          </Link>
          <Link className="topbarLink" to="/Profile">
            Profile
          </Link>
          <Link className="topbarLink" to="/">
            Logout
          </Link>
        </div>

        {/* Notification icons and badges */}
        <div className="topbarIcons">
          {/* Friend Request */}
          <div className="topbarIconItem">
            <Person className="svg_icons"/>
            <span className="topbarIconBadge">1</span>
          </div>

          {/* Messages */}
          <div className="topbarIconItem">
            <Chat className="svg_icons"/>
            <span className="topbarIconBadge">2</span>
          </div>

          {/* Notifications */}
          <div className="topbarIconItem">
            <Notifications className="svg_icons"/>
            <span className="topbarIconBadge">1</span>
          </div>
        </div>

        {/* Image for Profile Pic top right */}
        
        <Link to="/Profile">
          <img src="/assets/1.jpg" alt="" className="topbarImg" />
        </Link>
        <div>
        </div>
      </div>
    </div>
  );
}
