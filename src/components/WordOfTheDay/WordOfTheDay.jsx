import React, { useEffect, useState } from "react";
import listOfWords from '../listOfWords.txt';
import WordDetails from './WordOfTheDayDetails';
import '../../css/WordOfTheDay.css';

function WordOfTheDay() {

  const [randomWord, setRandomWord] = useState('')
  const [results, setResults] = useState([])

  const todaysDate = new Date()
  const dateOptions = {weekday: 'long', month: 'long', day: 'numeric'}
  const formattedDate = todaysDate.toLocaleDateString(undefined, dateOptions)
  const storageKey = 'wordOfTheDay';

  // retrieving a random word from a list
  const getRandomWord = () => {
    fetch(listOfWords)
      .then(response => response.text())
      .then(textFile => {
        const splitList = textFile.split(', ')
        const word = splitList[Math.floor(Math.random() * splitList.length)]
        setRandomWord(word)
        console.log(word)
      })
  };

  // fetching api to retrieve word details
  const getWordOfTheDay = async () => {
    const url = `https://wordsapiv1.p.rapidapi.com/words/${randomWord}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
        "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com",
      },
    };
    const response = await fetch(url, options);
    const data = await response.json();

    const wordResults = [];
    for (let i = 0; i < data.results.length; i++) {
      // joining synonyms with ','
      const synonyms = data.results[i].synonyms.join(', ');
      // pushing results into wordResults array to map
      wordResults.push({
        definition: data.results[i].definition,
        partOfSpeech: data.results[i].partOfSpeech,
        synonyms
      });
    }
    setResults(wordResults);
  };

  useEffect(() => {
    if (randomWord) {
      getWordOfTheDay()
    }
  }, [randomWord]);

  useEffect(() => {
    const storedWord = localStorage.getItem(storageKey);
    // check if there is a stored word and if its date matches today's date
    if (storedWord && formattedDate === JSON.parse(storedWord).date) {
      // parse stored word from sting to object
      const storedData = JSON.parse(storedWord);
      // updates the components state
      setRandomWord(storedData.word);
      setResults(storedData.results);
      // else call getRandomWord() and set the component's state
    } else {
      getRandomWord();
    }
  }, []);

  // executes when the dependency variables are changed
  useEffect(() => {
    // if randomWord and results are not empty
    if (randomWord && results.length > 0) {
      // then create a new object storedWord, with the date, the word, 
        // and its results(word details)
      const storedWord = {
        date: formattedDate,
        word: randomWord,
        results: results
      };
      // setting the storedWord into localStorage
      localStorage.setItem(storageKey, JSON.stringify(storedWord));
    }
  }, [randomWord, results]);

  return (
    <>
      <div id="container" key={randomWord}>
        <div id='wordofthedayContainer'>
          <h5 id='date'>Word of the Day (<span id='day'>{formattedDate}</span>) : </h5>
          <h3 id="wordoftheday">{randomWord}</h3>
        </div>
        <WordDetails results={results} />
      </div>
    </>
  );
}

export default WordOfTheDay;