import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import initialReducer from './reducers/initialReducer'
import ClientApp from './clientApp'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

const loggerMiddleware = createLogger()

let store = createStore(
		initialReducer,
		applyMiddleware(
			thunkMiddleware,
			loggerMiddleware
		)
	)

render(
  <Provider store={store}>
    <ClientApp />
  </Provider>,
  document.getElementById('app')
)