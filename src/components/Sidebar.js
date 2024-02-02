import { Link } from 'react-router-dom';
import '../css/Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  
  faHome, 
  faChartSimple, 
  faListCheck, 
  faCalendar, 
  faMessage, 
  faRightFromBracket,
  faXmark
} from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ onClose }) => {

  return (
    <div className="barraLateral-2">
        <button id='close-button-menu' onClick={onClose}><FontAwesomeIcon icon={faXmark}/></button>
        <div className="icones-2">
          <Link to="/">
              <FontAwesomeIcon icon={faHome} />
              <p>Home</p>
            </Link>
            <Link to="/tasks">
              <FontAwesomeIcon icon={faListCheck} />
              <p>Workouts</p>
            </Link>
            <Link to="/graphics">
              <FontAwesomeIcon icon={faChartSimple} />
              <p>Graphics</p>
            </Link>
            <Link to="/calendar">
              <FontAwesomeIcon icon={faCalendar} />
              <p>Calendar</p>
            </Link>
            <Link to="/messages">
              <FontAwesomeIcon icon={faMessage} />
              <p>Messages</p>
            </Link>
        </div>
        <div className="exit-2">
            <button>
                <FontAwesomeIcon icon={faRightFromBracket} />
            </button>
        </div>
    </div>
  );
};

export default Sidebar;
