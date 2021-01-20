import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchCity from './component/SearchCity';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';
import { Provider } from 'react-redux';
import store from './store'

const client = new ApolloClient({
  uri: 'https://graphql-weather-api.herokuapp.com/',
  cache: new InMemoryCache()
});

function App() {
  
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <SearchCity />
          </header>
        </div>
      </Provider>
    </ApolloProvider>
  );
}

export default App;
