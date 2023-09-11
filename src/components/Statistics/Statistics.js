import React from 'react';
import style from './Statistics.module.css';

export default function Statistics({ feedbackCounts }) {
  const { good, neutral, bad } = feedbackCounts;
  const total = good + neutral + bad;
  const positivePercentage =
    total === 0 ? 0 : ((good / total) * 100).toFixed(2);
  return (
    <div className={style.container}>
      <h3>Statistics</h3>
      <ul className={style.ratings}>
        <li className={style.ratings__item}>
          <p>Good: {good}</p>
        </li>
        <li className={style.ratings__item}>
          <p>Neutral: {neutral}</p>
        </li>
        <li className={style.ratings__item}>
          <p>Bad: {bad}</p>
        </li>
        <li className={style.ratings__item}>
          <p>Total: {total}</p>
        </li>
        <li className={style.ratings__item}>
          <p>Positive feedback: {positivePercentage}%</p>
        </li>
      </ul>
    </div>
  );
}
