import React from 'react';

import AddColorForm from './components/AddColorForm';
import ColorList from './components/ColorList.js';

export default function App() {

  return (
    <div style={{padding: '3rem 2.5rem'}}>
      <AddColorForm />
      <ColorList/>
    </div>
  );
};
