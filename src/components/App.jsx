import React, { useState } from 'react';
import FeedbackButtons from './FeedbackButtons/FeedbackButtons';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import style from './App.module.css';

export const App = () => {
  const [feedbackCounts, setFeedbackCounts] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const handleFeedback = type => {
    setFeedbackCounts(prevCounts => ({
      ...prevCounts,
      [type]: prevCounts[type] + 1,
    }));
  };

  const totalFeedback =
    feedbackCounts.good + feedbackCounts.neutral + feedbackCounts.bad;

  return (
    <div className="container">
      <Section title="Please, leave us a feedback. We would appreciate it!">
        <h2 className={style.title}>Feedback</h2>
        <FeedbackButtons
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleFeedback}
        />
      </Section>

      <Section>
        <h2 className={style.title}>Statistics</h2>
        {totalFeedback === 0 ? (
          <div className={style.title}>
            <Notification message="There is no feedback" />
          </div>
        ) : (
          <Statistics feedbackCounts={feedbackCounts} />
        )}
      </Section>
    </div>
  );
};
