import React from 'react'
import { Provider } from 'react-redux'
import Main from 'components/Main'
import Header from 'components/Header'
import { ApolloProvider } from '@apollo/client';
import Routes from './routes'
import store from './store'

import './App.css'
import client from 'config/gql';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Main>
          <Header />
          <Routes />
        </Main>
      </Provider>
    </ApolloProvider>
  )
}

export default App
