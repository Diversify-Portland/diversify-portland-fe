import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './About.css';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = ({ name, img, text, heading, secId, colorId }) => {
  const pContent = useRef(null);
  const pImage = useRef(null);
  const pSection = useRef(null);

  useEffect(() => {
    gsap.to(pContent.current, {
      yPercent: -90,
      ease: 'none',
      scrollTrigger: {
        trigger: pSection.current,

        scrub: true,
      },
    });

    gsap.to(pImage.current, {
      yPercent: 50,
      ease: 'none',
      scrollTrigger: {
        trigger: pSection.current,

        scrub: true,
      },
    }),
    [pContent, pImage];
  });

  return (
    <div
      id={secId}
      className={`${styles.greenSock_container} ${styles[secId]}`}
    >
      <section ref={pSection} className={styles.pSection}>
        <div className={styles.pContainer}>
          <div
            ref={pContent}
            className={`${styles.pContent} ${styles[colorId]}`}
          >
            <h2 className={styles.title}>{name}</h2>
            <h3 className={styles.heading}>{heading}</h3>
            <p className={styles.paragraph}>{text}</p>
          </div>
        </div>

        <img
          ref={pImage}
          className={styles.pImage}
          src={`https://.github.com/Diversify-Portland/diversify-portland-fe/tree/refactorNav/src/assets/${img}.jpg`}
         
        ></img>
      </section>
    </div>
  );
};

AboutSection.propTypes = {
  name: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  secId: PropTypes.string.isRequired,
  colorId: PropTypes.string,
};

export default AboutSection;
