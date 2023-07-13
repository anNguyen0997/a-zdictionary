import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './index.css';
import Layout from './components/Layout';
import WordOfTheDay from './components/WordOfTheDay';
import SearchWord from './components/SearchWord';
import SearchSynonyms from './components/SearchSynonyms';
import WordsLearned from './components/WordsLearned';
import reducer from './reducer/reducer';
// import App from './App';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Provider store={store}>

      <Router>
        <Layout>
          <Routes>

            <Route path="/" element={ <SearchWord /> } />
            <Route path="/wordoftheday" element={ <WordOfTheDay /> } />
            <Route path="/synonyms" element={ <SearchSynonyms /> } />
            <Route path="/wordslearned" element={ <WordsLearned /> } />
            {/* <Route path="/payment" element={ <App /> } /> */}
            
          </Routes>
        </Layout>
      </Router>

    </Provider>
  // </React.StrictMode>
);
