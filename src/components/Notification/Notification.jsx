import PropTypes from 'prop-types';
import css from './Notification.module.css';

export const Notification = ({ message }) => (
  <p className={css.message}>{message}</p>
);
Event.propTypes = {
  message: PropTypes.string.isRequired,
};
