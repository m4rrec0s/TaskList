import '../css/App.css'
import '../css/Home.css'

import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Home = () => {
  return (
    <main id='content'>
      <div className='presentation'>
        <button className='day'>
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 30 30" fill="none">
            <path d="M0.042796 0V7.5H30V0H0.042796ZM0.042796 11.25V29.6625C0.042796 29.85 0.21398 30 0.42796 30H29.572C29.786 30 29.9572 29.85 29.9572 29.6625V11.25H0H0.042796ZM4.3224 15H8.602V18.75H4.3224V15ZM12.8816 15H17.1612V18.75H12.8816V15ZM21.4408 15H25.7204V18.75H21.4408V15ZM4.3224 22.5H8.602V26.25H4.3224V22.5ZM12.8816 22.5H17.1612V26.25H12.8816V22.5Z" fill="#F9F9F9" />
          </svg>
          <p>Jan 09.2024</p>
          <p>13:00 pm</p>
        </button>
        <div className='greeting'>
          <h1>Good Day, Hannah!</h1>
          <p>Have a great Monday!</p>
        </div>
      </div>
      <div className='container-graphics'>
        <div className='graphic'>
          <div>
            <h3>Tasks completed</h3>
          </div>
          <div style={{ width: '80px'}}>
            <CircularProgressbar
              value={30}
              text={`${30}%`}
              styles={buildStyles({
                textColor: '#fff',
                pathColor: `rgb(48, 217, 78, ${100 / 100})`,
                trailColor: '#994857',
              })}
            />
          </div>
          <ul>
              <li>6 Tasks completed</li>
              <li>24 tasks not completed</li>
          </ul>
        </div>
        <div className='graphic'>
          <div>
            <h3>Tasks completed</h3>
          </div>
          <div style={{ width: '80px'}}>
            <CircularProgressbar
              value={30}
              text={`${30}%`}
              styles={buildStyles({
                textColor: '#fff',
                pathColor: `rgb(48, 217, 78, ${100 / 100})`,
                trailColor: '#994857',
              })}
            />
          </div>
          <ul>
            <li>6 Tasks completed</li>
            <li>24 tasks not completed</li>
          </ul>
        </div>
        <div className='graphic'>
          <div>
            <h3>Tasks completed</h3>
          </div>
          <div style={{ width: '80px'}}>
            <CircularProgressbar
              value={30}
              text={`${30}%`}
              styles={buildStyles({
                textColor: '#fff',
                pathColor: `rgb(48, 217, 78, ${100 / 100})`,
                trailColor: '#994857',
              })}
            />
          </div>
          <ul>
            <li>6 Tasks completed</li>
            <li>24 tasks not completed</li>
          </ul>
        </div>
      </div>
      <div className='container-statistics'>
        <div className='statistic'>
          <h3>statistic 1</h3>
        </div>
        <div className='statistic'>
          <h3>statistic 2</h3>
        </div>
      </div>
    </main>
  )
}

export default Home;
