import '../css/App.css'
import '../css/Graphics.css'
import React from 'react';
import { Chart } from "react-google-charts";

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

export default function Graphics() {
    
    return (
        <main id='content'>
            <h1>Graphics</h1>
            <div className='graph-container'>

                <div className='chart-content'>
                    <h3>Weekly Performance</h3>
                    <Chart chartType="ColumnChart"  options={options} data={data} />
                </div>
                <div className='details'>
                    <h3>31</h3>
                    <p>completed</p>
                </div>

                <div className='chart-content'>
                    <h3>Weight or Load Progression</h3>
                    <Chart chartType="ColumnChart" options={options} data={data} />
                </div>
                <div className='details'>
                    <h3>31</h3>
                    <p>completed</p>
                </div>

                <div className='chart-content'>
                    <h3>Training Frequency</h3>
                    <Chart chartType="ColumnChart" options={options} data={data} />
                </div>
                <div className='details'>
                    <h3>31</h3>
                    <p>completed</p>
                </div>

                <div className='chart-content'>
                    <h3>Evolution of Body Weight</h3>
                    <Chart chartType="ColumnChart" options={options} data={data} />
                </div>
                <div className='details'>
                    <h3>31</h3>
                    <p>completed</p>
                </div>

                <div className='chart-content'>
                    <h3>Goals Achieved</h3>
                    <Chart chartType="ColumnChart" options={options} data={data} />
                </div>
                <div className='details'>
                    <h3>31</h3>
                    <p>completed</p>
                </div>
            </div>
        </main>
    )

}