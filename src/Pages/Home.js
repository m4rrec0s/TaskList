import '../css/App.css'
import '../css/Home.css'

import React, { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { Chart } from "react-google-charts";
import { Link } from 'react-router-dom';

export const data = [
    ["Element", "Completede", { role: "style" }],
    ["Monday", 4, "#D9304F"], // RGB value
    ["Tuesday", 6, "#9e002a"], // English color name
    ["Wednesday", 2, "#D9304F"],
    ["Thursday", 1, "#9e002a"],
    ["Friday", 6, "#D9304F"],
    ["Saturday", 5, "#9e002a"],
    ["Sunday", 7, "#D9304F"], // CSS-style declaration
];

const options = {
    hAxis: {textStyle: { color: '#fff' } },
    vAxis: { minValue: 0, textStyle: { color: '#fff' }, titleTextStyle: { color: '#fff'} },
    legend: 'none',
    colors: ['#D9304F', '#9e002a', '#D9304F', '#9e002a'],
    backgroundColor: { fill: 'transparent' },
  };

const Home = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const currentHour = currentDateTime.getHours();

  let greetingMessage = '';
  if (currentHour < 12) {
    greetingMessage = 'Good Morning';
  } else if (currentHour < 18) {
    greetingMessage = 'Good Afternoon';
  } else {
    greetingMessage = 'Good Evening';
  }

  const userName = 'Hannah';

  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayOfWeek = daysOfWeek[currentDateTime.getDay()];

  const formatNumber = (number) => (number < 10 ? `0${number}` : number);

  const day = formatNumber(currentDateTime.getDate());
  const month = formatNumber(currentDateTime.getMonth() + 1);
  const year = currentDateTime.getFullYear();
  const hours = formatNumber(currentDateTime.getHours());
  const minutes = formatNumber(currentDateTime.getMinutes());

  return (
    <main id='content'>
      <div className='presentation'>
        <Link to="/calendar" className='day'>
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 30 30" fill="none">
            <path d="M0.042796 0V7.5H30V0H0.042796ZM0.042796 11.25V29.6625C0.042796 29.85 0.21398 30 0.42796 30H29.572C29.786 30 29.9572 29.85 29.9572 29.6625V11.25H0H0.042796ZM4.3224 15H8.602V18.75H4.3224V15ZM12.8816 15H17.1612V18.75H12.8816V15ZM21.4408 15H25.7204V18.75H21.4408V15ZM4.3224 22.5H8.602V26.25H4.3224V22.5ZM12.8816 22.5H17.1612V26.25H12.8816V22.5Z" fill="#F9F9F9" />
          </svg>
          <p>{`${month}/${day}/${year}`}</p>
          <p>{`${hours}:${minutes} ${currentDateTime.getHours() >= 12 ? 'pm' : 'am'}`}</p>
        </Link>
        <div className='greeting'>
          <h1>{`${greetingMessage}, ${userName}!`}</h1>
          <p>{`Have a great ${dayOfWeek}!`}</p>
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
          <div className='chart-content'>
            <h3>Weekly Performance</h3>
            <Chart chartType="ColumnChart" options={options} data={data} />
          </div>
        </div>
        <div className='statistic'>
          <div className='chart-content'>
            <h3>Weekly Performance</h3>
            <Chart chartType="ColumnChart" options={options} data={data} />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home;
