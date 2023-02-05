import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';

//old
// ReactDOM.render(<App />, document.getElementById('root'));
//new
createRoot(document.getElementById('root')).render(<App />);