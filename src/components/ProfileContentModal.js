import React from 'react';
import '../css/Modal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark} from '@fortawesome/free-solid-svg-icons';
const userName = 'Hannah';

const ProfileContentModal = ({ onClose }) => {
    return (
      <div className="modal">
        <div className="modal-content">
          <div className='higher'>
            <h2>My Profile</h2>
            <button id='close-button' onClick={onClose}><FontAwesomeIcon icon={faXmark}/></button>
          </div>
          <div className='profile-content2'>
            <div className='account2'>
              <div className='account-content2'>
                <div className='img-container2'></div>
                <div className='login-content2'>
                  <h3>{userName}</h3>
                  <p>hannah_martinez@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default ProfileContentModal;