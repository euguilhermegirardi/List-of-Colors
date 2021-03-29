import React from 'react';
import { render } from 'react-dom';

import './index.css';
import ColorProvider from './context/ColorProvider';
import App from './App';

render(
  <ColorProvider>
    <App />
  </ColorProvider>,
  document.getElementById('root')
);
