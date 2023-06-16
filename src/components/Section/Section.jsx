import PropTypes from 'prop-types';
import css from './Section.module.css';

export const Section = ({ title, children }) => (
  <section className={css.section}>
    <h2>{title}</h2>
    {children}
  </section>
);

Event.propTypes = {
  title: PropTypes.string.isRequired,
};
