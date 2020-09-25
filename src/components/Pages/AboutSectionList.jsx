import React from 'react';
import PropTypes from 'prop-types';
import AboutSection from './AboutSection';
const AboutSectionList = ({ sections }) => {
  const sectionElements = sections.map((sectionObj, i) => (
    <section key={i}>
      <AboutSection {...sectionObj} />
    </section>
  ));

  return <>{sectionElements}</>;
};

AboutSectionList.propTypes = {
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

export default AboutSectionList;
