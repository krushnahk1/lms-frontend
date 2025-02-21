// src/App.jsx
import React from 'react';
import LocationSection from './components/LocationSection';
import SectionContent from './components/SectionContent';
import Footer from './components/footer';

const App = () => {
  return (
    <div>
      <LocationSection />
      <SectionContent />
      <Footer />
    </div>
  );
};

export default App;
