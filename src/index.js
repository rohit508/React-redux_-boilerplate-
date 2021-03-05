import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import reducer from '../src/store/reducers/reducer'
// import rootreducer from '../src/store/reducers/rootreducer'
import App from '../src/App'
import './index.css';

const store = createStore(
   reducer,
  
)


// const store = createStore(rootreducer)


render(
   <Provider store = {store}>
      <App />
   </Provider>, document.getElementById('root')
)