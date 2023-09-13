import React from 'react';
import style from './Statistics.module.css';

export default function Statistics({ feedbackCounts }) {
  const { good, neutral, bad } = feedbackCounts;
  const total = good + neutral + bad;
  const positivePercentage =
    total === 0 ? 0 : ((good / total) * 100).toFixed(2);
  return (
    <div className={style.container}>
      <ul className={style.ratings}>
        <li className={style.ratings__item}>
          <p>Good: </p>
          <span className={style.feedback_good}>{good}</span>
        </li>
        <li className={style.ratings__item}>
          <p>Neutral: </p>
          <span className={style.feedback_neutral}>{neutral}</span>
        </li>
        <li className={style.ratings__item}>
          <p>Bad: </p>
          <span className={style.feedback_bad}>{bad}</span>
        </li>
        <li className={style.ratings__item}>
          <p>Total: </p>
          <span>{total}</span>
        </li>
        <li className={style.ratings__item}>
          <p>Positive feedback: </p>
          <span>
            <strong>{positivePercentage}</strong>%
          </span>
        </li>
      </ul>
    </div>
  );
}
