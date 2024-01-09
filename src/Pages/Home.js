import '../css/App.css'
import '../css/Home.css'

import React from 'react'

const Home = () => {
    return (
        <main id='content'>
            <div className='presentation'>
                    <button className='day'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 30 30" fill="none">
                            <path d="M0.042796 0V7.5H30V0H0.042796ZM0.042796 11.25V29.6625C0.042796 29.85 0.21398 30 0.42796 30H29.572C29.786 30 29.9572 29.85 29.9572 29.6625V11.25H0H0.042796ZM4.3224 15H8.602V18.75H4.3224V15ZM12.8816 15H17.1612V18.75H12.8816V15ZM21.4408 15H25.7204V18.75H21.4408V15ZM4.3224 22.5H8.602V26.25H4.3224V22.5ZM12.8816 22.5H17.1612V26.25H12.8816V22.5Z" fill="#F9F9F9"/>
                        </svg>
                        <p>Jan 09.2024</p>
                        <p>13:00 pm</p>
                    </button>
            </div>
            <div className='container-graphics'>
                <div className='graphic'>
                    <h3>graphic 1</h3>
                </div>
                <div className='graphic'>
                    <h3>graphic 2</h3>
                </div>
                <div className='graphic'>
                    <h3>graphic 3</h3>
                </div>
            </div>
        </main>
    )
}

export default Home;