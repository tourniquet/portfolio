import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

// components
import App from './App'

import reducer from './config/reducer'
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const Index = () =>
  <Provider store={store}>
    <App />
  </Provider>

render(
  <Index />,
  document.querySelector('#container')
)
