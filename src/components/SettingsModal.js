import React from 'react';
import '../css/Modal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const SettingsModal = ({ onClose }) => {
    return (
        <div className="modal">
        <div className="modal-content">
            <div className='higher'>
                <h2>Settings</h2>
                <button id='close-button' onClick={onClose}><FontAwesomeIcon icon={faXmark}/></button>
            </div>
            <p>Editar País: <input type="text" defaultValue="Brazil" /></p>
        </div>
        </div>
    );
};

export default SettingsModal;