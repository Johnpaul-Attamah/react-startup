import React, { Component } from 'react';

import Image from './images/Image';
import breakfast from '../../public/images/tea.png';
import './App.scss';

const App = () => {
  return (
    <div>
      <h1>App Content</h1>
      <Image
        src={breakfast}
        alt="Hot morning tea"
        height="400"
        width="400"
      />
    </div>
  );
};

export default App;
