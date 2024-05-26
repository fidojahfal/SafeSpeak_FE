import React from 'react';
import AboutTop from '../components/about/AboutTop';
import AboutBottomList from '../components/about/AboutBottomList';
import AboutMiddleList from '../components/about/AboutMiddleList';

function AboutPage() {
  return (
    <section>
      <AboutTop />
      <AboutMiddleList />
      <AboutBottomList />
    </section>
  );
}

export default AboutPage;
