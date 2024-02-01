import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  
  faHome, 
  faChartSimple, 
  faListCheck, 
  faCalendar, 
  faMessage, 
  faRightFromBracket, 
} from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`barraLateral ${menuOpen ? 'menuOpen' : ''}`}>
        <h3>Task<strong>List</strong></h3>
        <div className="hamburger" onClick={toggleMenu}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </div>
        <h3>Task<strong>List</strong></h3>
        <div className={`icones ${menuOpen ? 'menuOpen' : ''}`}>
            <Link to="/">
                <FontAwesomeIcon icon={faHome} />
            </Link>
            <Link to="/tasks">
                <FontAwesomeIcon icon={faListCheck} />
            </Link>
            <Link to="/graphics">
            <FontAwesomeIcon icon={faChartSimple} />
          </Link>
          <Link to="/calendar">
            <FontAwesomeIcon icon={faCalendar} />
          </Link>
          <Link to="/messages">
            <FontAwesomeIcon icon={faMessage} />
          </Link>
        </div>
        <div className="exit">
            <button>
                <FontAwesomeIcon icon={faRightFromBracket} />
            </button>
        </div>
    </div>
  );
};

export default Sidebar;
