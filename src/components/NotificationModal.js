import React from 'react';
import '../css/Modal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const NotificationModal = ({ onClose }) => {
    return (
        <div className="modal">
        <div className="modal-content">
            <div className='higher'>
                <h2>Notificações</h2>
                <button id='close-button' onClick={onClose}><FontAwesomeIcon icon={faXmark}/></button>
            </div>
            <p>Você ainda não tem notificações.</p>
        </div>
        </div>
    );
};

export default NotificationModal;
