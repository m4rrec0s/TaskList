import './css/App.css'
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <div className="barraLateral">
            <h3>Task<strong>List</strong></h3>
            <div className= "icones">
                <Link to="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 30 30" fill="none">
                        <path d="M15 0L0 12.8571H3.75V30H11.25V21.4286H18.75V30H26.25V12.7286L30 12.8571L15 0Z" fill="white"/>
                    </svg>
                </Link>
                <Link to="/graphics">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 30 30" fill="none">
                        <path d="M26.3625 0L15 11.25L11.25 7.5L0 18.8625L3.75 22.6125L11.25 15L15 18.75L30 3.75L26.3625 0ZM0 26.25V30H30V26.25H0Z" fill="white"/>
                    </svg>
                </Link>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 30 30" fill="none">
                        <path d="M0 0V5L15 15L30 5V0H0ZM0 10V30H30V10L15 20L0 10Z" fill="#FBFBFB"/>
                    </svg>
                </button>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 30 30" fill="none">
                        <path d="M0.042796 0V7.5H30V0H0.042796ZM0.042796 11.25V29.6625C0.042796 29.85 0.21398 30 0.42796 30H29.572C29.786 30 29.9572 29.85 29.9572 29.6625V11.25H0H0.042796ZM4.3224 15H8.602V18.75H4.3224V15ZM12.8816 15H17.1612V18.75H12.8816V15ZM21.4408 15H25.7204V18.75H21.4408V15ZM4.3224 22.5H8.602V26.25H4.3224V22.5ZM12.8816 22.5H17.1612V26.25H12.8816V22.5Z" fill="#F9F9F9"/>
                    </svg>
                </button>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 30 30" fill="none">
                        <path d="M0 0V7.5H7.5V0H0ZM11.25 0V7.5H18.75V0H11.25ZM22.5 0V7.5H30V0H22.5ZM0 11.25V18.75H7.5V11.25H0ZM11.25 11.25V18.75H18.75V11.25H11.25ZM22.5 11.25V18.75H30V11.25H22.5ZM0 22.5V30H7.5V22.5H0ZM11.25 22.5V30H18.75V22.5H11.25ZM22.5 22.5V30H30V22.5H22.5Z" fill="white"/>
                    </svg>
                </button>
            </div>
            <div className="exit">
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 40 40" fill="none">
                        <path d="M15 0V5.71429H35V34.2857H15V40H40V0H15ZM20 11.4286V17.1429H0V22.8571H20V28.5714L30 20L20 11.4286Z" fill="white"/>
                    </svg>
                </button>
            </div>
        </div>
        <div className='content-center'>
            <div className="superior">
                <input type="search" id="search" placeholder="search for task's, events, etc."></input>
                <div className="buttons-superior">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 32 30" fill="none">
                        <path d="M15.6122 0C11.3189 0 7.80612 3.375 7.80612 7.5C7.80612 11.4 5.77653 14.925 2.57602 17.475C0.975765 18.75 0 20.55 0 22.5H31.2245C31.2245 20.55 30.2878 18.75 28.6485 17.475C25.448 14.925 23.4184 11.4 23.4184 7.5C23.4184 3.375 19.9446 0 15.6122 0ZM11.7092 26.25C11.7092 28.3125 13.4656 30 15.6122 30C17.7589 30 19.5153 28.3125 19.5153 26.25H11.7092Z" fill="#4163D1"/>
                        </svg>
                    </button>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 40 40" fill="none">
                        <path d="M17.5062 0L15.0125 5.93516C14.5137 6.08479 14.0648 6.33416 13.616 6.58354L7.6808 4.08978L4.08978 7.6808L6.58354 13.616C6.33416 14.1147 6.13466 14.5137 5.93516 15.0125L0 17.5062V22.4938L5.93516 24.9875C6.13466 25.4863 6.33416 25.8853 6.58354 26.384L4.08978 32.3192L7.6808 35.9102L13.616 33.4165C14.0648 33.616 14.5137 33.8653 15.0125 34.0648L17.5062 40H22.4938L24.9875 34.0648C25.4364 33.8653 25.9352 33.6658 26.384 33.4165L32.3192 35.9102L35.9102 32.3192L33.4165 26.384C33.616 25.9352 33.8653 25.4364 34.0648 24.9875L40 22.4938V17.5062L34.0648 15.0125C33.9152 14.5636 33.6658 14.0648 33.4165 13.616L35.9102 7.6808L32.3192 4.08978L26.384 6.58354C25.9352 6.38404 25.4364 6.13466 24.9875 5.93516L22.4938 0L17.5062 0ZM20 12.4688C24.1396 12.4688 27.4813 15.8105 27.4813 19.9501C27.4813 24.0898 24.1396 27.4314 20 27.4314C15.8603 27.4314 12.5187 24.0898 12.5187 19.9501C12.5187 15.8105 15.8603 12.4688 20 12.4688Z" fill="#4163D1"/>
                        </svg>
                    </button>
                </div>
            </div>
            <Outlet />
        </div>
    </div>
    )
}

export default App;