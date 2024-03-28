const Feedback = ({ allFeedback, totalFeedback, positiveFeedbackPercent }) => {
  const { good, neutral, bad } = allFeedback;
  return (
    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {totalFeedback}</li>
      <li>Positive: {positiveFeedbackPercent}%</li>
    </ul>
  );
};

export default Feedback;
