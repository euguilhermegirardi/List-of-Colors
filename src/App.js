import React, { useState } from 'react';

import './App.css';
import colorData from './color-data.json';
import AddColorForm from './components/AddColorForm';
import ColorList from './components/ColorList.js';

export default function App() {
  const [colors, setColors] = useState(colorData);

  return (
    <>
      <ColorList
        colors={colors}
        onRateColor={(id, rating) => {
          const newColors = colors.map(color => color.id === id ? { ...color, rating } : color);
          setColors(newColors);
        }}
        onRemoveColor={id => {
          const newColors = colors.filter(color => color.id !== id);
          setColors(newColors);
        }}
      />

      <AddColorForm />
    </>
  );
};
