import React from 'react';

import Color from './Color';
import { useColors } from '../context/ColorProvider';

export default function ColorList() {
  const { colors } = useColors();

  if(!colors.length) return <div>No colors listed. (Add a color)</div>;

  return (
    <div>
    {
      colors.map(color => <Color key={color.id} {...color} /> )
    }
    </div>
  );
};
