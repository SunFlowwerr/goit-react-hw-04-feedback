import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <ul
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'start',
      gap: '7px',
      listStyle: 'none',
      fontSize: '18px',
      color: '#6b8e23',
    }}
  >
    <li>Good feetbacks: {good}</li>
    <li>Neutral feetbacks: {neutral}</li>
    <li>Bad feetbacks: {bad}</li>
    <li>Total: {total}</li>
    <li>Positive feedbackes: {positivePercentage}%</li>
  </ul>
);

Event.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
