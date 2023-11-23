import React, { useState } from 'react';
import Head from 'next/head';

const Timeline = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    '01-01-2023',
    '13-04-2023',
    '01-06-2023',
    '08-09-2023',
    '25-12-2023',
  ];

  const handleStepClick = (index) => {
    setActiveStep(index);
  };

  const calculateProgressBarWidth = () => {
    return `${((activeStep + 1) / steps.length) * 100}%`;
  };

  const sectionTitles = [
    'NEW-YEAR',
    'BIRTHDAY',
    'BACK TO COLLEGE',
    'HOLIDAYS',
    'CHRISTMAS',
  ];

  return (
    <div>
      <Head>
        <title>Document</title>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto+Condensed&display=swap"
          rel="stylesheet"
        />
      </Head>
      <style jsx>{`
        // Your CSS styles go here
      `}</style>
      <h1>TIMELINES</h1>
      <br />
      <div className="process-wrapper">
        <div id="progress-bar-container">
          <ul>
            {steps.map((step, index) => (
              <li
                key={index}
                className={`step step0${index + 1} ${index === activeStep ? 'active' : ''}`}
                onClick={() => handleStepClick(index)}
              >
                <div className="step-inner">{step}</div>
              </li>
            ))}
          </ul>
          <div id="line">
            <div id="line-progress" style={{ width: calculateProgressBarWidth() }}></div>
          </div>
        </div>

        <div id="progress-content-section">
          {sectionTitles.map((title, index) => (
            <div
              key={index}
              className={`section-content ${index === activeStep ? 'active' : ''}`}
            >
              <h2>{title}</h2>
            </div>
          ))}
        </div>
      </div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
    </div>
  );
};

export default Timeline;