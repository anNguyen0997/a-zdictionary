import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Layout from './components/Layout/Layout';
import WordOfTheDay from './components/WordOfTheDay/WordOfTheDay';
import SearchWord from './components/SearchWord/SearchWord';
import SearchSynonyms from './components/SearchSynonyms/SearchSynonyms';
import WordsLearned from './components/WordsLearned/WordsLearned';
import reducer from './reducer/reducer';
import './index.css';

const store = createStore(reducer)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Provider store={store}>

      <Router>
        <Layout>
          <Routes>

            <Route path="/" element={ <WordOfTheDay /> } />
            <Route path="/searchword" element={ <SearchWord /> } />
            <Route path="/synonyms" element={ <SearchSynonyms /> } />
            <Route path="/wordslearned" element={ <WordsLearned /> } />
            
          </Routes>
        </Layout>
      </Router>

    </Provider>
  // </React.StrictMode>
);
