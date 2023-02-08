import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
import {Provider} from 'react-redux';
import store from "./redux/store";

//old
// ReactDOM.render(<App />, document.getElementById('root'));
//new
createRoot(document.getElementById('root')).render(<Provider store={store}><App /></Provider>);