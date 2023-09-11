import React from 'react';
import style from './feedbackButtons.module.css';

export default function FeedbackButtons({ options, onLeaveFeedback }) {
  return (
    <div>
      {options.map(option => (
        <button
          className={style.button}
          key={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
