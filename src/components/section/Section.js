import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <section>
      <div className="container">
        <h2>{title}</h2>
        {children}
      </div>
    </section>
  );
};

Notification.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element,
};
export default Section;
