import '../css/App.css'
import '../css/Modal.css'
import NotificationModal from './NotificationModal';
import SettingsModal from './SettingsModal';
import ProfileContentModal from './ProfileContentModal';
import { Outlet } from 'react-router-dom';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPlus, 
  faHome, 
  faChartSimple, 
  faListCheck, 
  faCalendar, 
  faMessage, 
  faRightFromBracket, 
  faBell, 
  faGear, 
  faPen, 
  faMoon, 
  faSun,
  faBars 
} from '@fortawesome/free-solid-svg-icons';
import Sidebar from './Sidebar';

const DefaultMenu = () => {
  // Light Mode 
  const [isDarkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const [notificationModalVisible, setNotificationModalVisible] = useState(false);
  const [settingsModalVisible, setSettingsModalVisible] = useState(false);
  const [profileContentModalVisible, setProfileContentModalVisible] = useState(false);
  const [menuVisible, setmenuVisible] = useState(false);

  const openNotificationModal = () => {
    setNotificationModalVisible(true);
  };

  const openMenu = () => {
    setmenuVisible(true);
  };

  const openSettingsModal = () => {
    setSettingsModalVisible(true);
  };

  const openProfileContentModal = () => {
    setProfileContentModalVisible(true);
  }

  const closeModals = () => {
    setNotificationModalVisible(false);
    setSettingsModalVisible(false);
    setProfileContentModalVisible(false);
    setmenuVisible(false);
  };

  // pegar data e nome
  const userName = 'Hannah';

  const [selectedMonth, setSelectedMonth] = useState('january');

  const updateCalendar = (event) => {
    setSelectedMonth(event.target.value);
  };

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>

      <div className={`BarraLateral-hidden`}>
        <h3>Task<strong>List</strong></h3>
        <button className={`buttonBarraLateral`} onClick={openMenu}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>

      {menuVisible && <Sidebar onClose={closeModals} />}

      <div className="barraLateral">
        <h3>Task<strong>List</strong></h3>
        <div className= "icones">
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
            <button onClick={toggleTheme}>
              {isDarkMode ? (
                <FontAwesomeIcon icon={faMoon} />
              ) : (
                <FontAwesomeIcon icon={faSun} />
              )}
            </button>
            <button onClick={openNotificationModal}>
              <FontAwesomeIcon icon={faBell} />
            </button>
            <button onClick={openSettingsModal}>
              <FontAwesomeIcon icon={faGear} />
            </button>

            {notificationModalVisible && <NotificationModal onClose={closeModals} />}
            {settingsModalVisible && <SettingsModal onClose={closeModals} />}
          
          </div>
        </div>
        <Outlet />
      </div>

      
      <button className='profile-content-button' onClick={openProfileContentModal}>
        <div className='content-img' />
        <h3>{userName}</h3>
      </button>

      {profileContentModalVisible && <ProfileContentModal onClose={closeModals} />}

      <div className='profile-content'>
        <div className='account'>
          <div className='space-button'>
              <h2>My profile</h2>
              <button>
                <FontAwesomeIcon icon={faPen} />
              </button>
          </div>
          <div className='account-content'>
            <div className='img-container'></div>
            <div className='login-content'>
              <h3>{userName}</h3>
              <p>hannah_martinez@gmail.com</p>
            </div>
          </div>
        </div>
        
        <div className='recent-tasks'>
          <div className='top-recents-tasks'>
            <h2>Recents Tasks</h2>
            <select id="monthSelector" value={selectedMonth} onChange={updateCalendar}>
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
          <div className='calendar-container'>
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