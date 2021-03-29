import React from 'react';
import { useInput } from '../hooks/useInput';
import { useColors } from '../context/ColorProvider';

export default function AddColorForm() {
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000");
  const { addColor } = useColors();

  const submit = e => {
    // Prevents the browser from trying to submit the form with POST request, forcing it to reload the page.
    e.preventDefault();

    addColor(titleProps.value, colorProps.value);
    resetTitle();
    resetColor();
  };

  return (
    <form onSubmit={submit}>
      <input
        {...titleProps}
        type="text"
        placeholder="color title..."
        required
      />

      <input {...colorProps} type="color" required/>
      <button>ADD</button>
    </form>
  );
};
