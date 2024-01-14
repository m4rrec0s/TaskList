import '../css/App.css'
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faHome, faChartSimple, faListCheck, faCalendar, faMessage, faRightFromBracket, faBell, faGear } from '@fortawesome/free-solid-svg-icons';

function DefaultMenu() {

  return (
    <div className="App">
      <div className="barraLateral">
        <h3>Task<strong>List</strong></h3>
        <div className= "icones">
          <Link to="/">
            <FontAwesomeIcon icon={faHome} />
          </Link>
          <Link to="/graphics">
            <FontAwesomeIcon icon={faChartSimple} />
          </Link>
          <Link to="/tasks">
            <FontAwesomeIcon icon={faListCheck} />
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
      <div className='content-center'>
        <div className="superior">
          <input type="search" id="search" placeholder="search for task's, events, etc."></input>
          <div className="buttons-superior">
            <button>
              <FontAwesomeIcon icon={faBell} />
            </button>
            <button>
              <FontAwesomeIcon icon={faGear} />
            </button>
          </div>
        </div>
        <Outlet />
      </div>

      <div className='profile-content'>
        <div className='account'>
          <div className='space-button'>
              <h2>My profile</h2>
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 40 40" fill="none">
                  <path d="M30 0L25 5L35 15L40 10L30 0ZM20 10L0 30V40H10L30 20L20 10Z" fill="white"/>
                </svg>
              </button>
          </div>
          <div className='account-content'>
            <div className='img-container'></div>
            <div className='login-content'>
              <h3>Hannah</h3>
              <p>hannah_martinez@gmail.com</p>
            </div>
          </div>
        </div>

        <div className='recent-tasks'>
          <div className='top-recents-tasks'>
            <h2>Recents Tasks</h2>
            <select id="monthSelector">
              <option value="january">January</option>
              <option value="february">February</option>
              <option value="march">March</option>
              <option value="april">April</option>
              <option value="june">June</option>
              <option value="july">July</option>
              <option value="august">August</option>
              <option value="setember">Setember</option>
              <option value="october">October</option>
              <option value="november">November</option>
              <option value="december">December</option>
            </select>
          </div>
        </div>
        <button className='add-new-task'>
          <FontAwesomeIcon icon={ faPlus } />
          <p>Add New Task</p>
        </button>
      </div>
    </div>
  )

}

export default DefaultMenu;