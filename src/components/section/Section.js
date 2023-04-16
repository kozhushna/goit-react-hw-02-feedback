import PropTypes from 'prop-types';
import './Section.css';

const Section = ({ title, children }) => {
  return (
    <section className="section">
      <h2 className="title">{title}</h2>
      {children}
    </section>
  );
};

Notification.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element,
};
export default Section;
