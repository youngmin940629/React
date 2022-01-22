import React from 'react';
import withLoading from './withLoading.jsx';

function Button() {
  return (
    <button>Button</button>
  );
}

export default withLoading(Button)