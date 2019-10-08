import React, { useState, useLayoutEffect, useRef, useCallback } from 'react';
import {  Box,  Card,  Button, Image,  Heading,  Text } from 'rebass';
import { Label, Input, Select, Textarea, Radio, Checkbox } from '@rebass/forms';
import logo from './logo.svg';
import './App.css';
import LoginPage from './components/Login'

const App = () => {
  const [color, setColor] = useState('blue');

  return (
    <div className="App">
      <header className="App-header" style={{ backgroundColor: color }}>
        <Button onClick={() => setColor(color === 'black' ? 'blue' : 'black')}>
          <img src={logo} className="App-logo" alt="logo" />
        </Button>
      </header>
      <LoginPage>
        
      </LoginPage>
    </div>
  );
};

export default App;
