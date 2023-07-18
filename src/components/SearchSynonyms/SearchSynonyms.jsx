import React, { useState } from 'react'
import '../../css/SearchSynonyms.css'

const SearchSynonyms = () => {
    const [word, setWord] = useState("")
    const [enteredWord, setEnteredWord] = useState("")
    const [synonyms, setSynonyms] = useState([])

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
            'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
        }
    };

    const getSynonyms = async(word) => {
        try {
            let response = await fetch (`https://wordsapiv1.p.rapidapi.com/words/${word}/synonyms`, options)
            let data = await response.json()
            let synonyms = data.synonyms

            if (data && data.synonyms) {
                setSynonyms(data.synonyms);
              } else {
                setSynonyms([]);
              }
        } catch (error) {
              console.error('Error fetching synonyms:', error);
              setSynonyms([]);
        }
            // console.log(synonyms)
            // setSynonyms(synonyms)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        setEnteredWord(word)
        setWord("")

        getSynonyms(word)
    }

  return (
    <>
        <div id="searchWordDiv">
            
            <h2 id="SearchSynonymTitle">Search Synonyms</h2>

            <form id="searchForm" onSubmit={handleSubmit}>
                <input id="searchBox" type="text" value={word} onChange={e => setWord(e.target.value)} />
                <input id="searchButton" type="submit"/>
            </form>

            <div>
                <h2 id="word">{enteredWord}</h2>

                <div id="synonymDiv">
                    {synonyms.map(synonym => {
                        return <p id="synonym" key={synonym}>{synonym}</p>
                    })}
                </div>
            </div>

        </div>
    </>
  )
}

export default SearchSynonyms