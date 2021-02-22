import React from 'react';

import { useInput } from './hooks/useInput';

export default function AddColorForm({ onNewColor = f => f }) {
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000");

  const submit = e => {
    // Prevents the browser from trying to submit the form with POST request, forcing it to reload the page.
    e.preventDefault();

    onNewColor(titleProps.value, colorProps.value);
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

      <input
        {...colorProps}
        type="text"
        required
      />

      <button>ADD</button>
    </form>
  );
};
