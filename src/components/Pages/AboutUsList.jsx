import React from 'react';
import PropTypes from 'prop-types';
import AboutUs from './AboutUs';
const AboutUsList = ({ sections }) => {
  const sectionElements = sections.map((sectionObj, i) => (
    <section key={i}>
      <AboutUs {...sectionObj} />
    </section>
  ));

  return <>{sectionElements}</>;
};

AboutUsList.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      secId: PropTypes.string.isRequired,
      pId: PropTypes.string,
    })
  ),
};

export default AboutUsList;
