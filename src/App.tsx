import React from 'react'
import { Provider } from 'react-redux'
import Main from 'components/Main'
import Header from 'components/Header'
import Routes from './routes'
import store from './store'

import './App.css'

const App = () => {
  return (
    <Provider store={store}>
      <Main>
        <Header />
        <Routes />
      </Main>
    </Provider>
  )
}

export default App
