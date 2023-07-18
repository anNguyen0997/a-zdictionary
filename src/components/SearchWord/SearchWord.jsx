import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addWord } from '../../actions/words'
import SearchWordDetails from './SearchWordDetails'
import '../../css/SearchWord.css'

const SearchWord = () => {
    const [word, setWord] = useState("")
    const [enteredWord, setEnteredWord] = useState("")
    const [definition, setDefinition] = useState("")
    const [partOfSpeech, setPartOfSpeech] = useState("")
    const [wordResults, setWordResults] = useState([])
    const [resultList, setResultList] = useState([])
    
    const dispatch = useDispatch()
    
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
            'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
        }
    };

    const getWord = async(word) => {
        let response = await fetch(`https://wordsapiv1.p.rapidapi.com/words/${word}`, options)
        let data = await response.json()
        let wordResults = await data.results
        // console.log(wordResults)
        console.log(process.env)

        let newWordResults = []

        for (let i = 0; i < wordResults.length; i++) {
            // for (let j = 0; j < wordResults[i].examples.length; j++) {
            //     console.log(wordResults[i].examples[j])

                let resultObj = {
                    definition: wordResults[i].definition,
                    partOfSpeech: wordResults[i].partOfSpeech,
                    // examples: wordResults[i].examples[j]
                }
                // console.log(resultObj)
                newWordResults.push(resultObj)
        // }
        }

        setWordResults(newWordResults)

        let newresultObj = {
            word,
            definition: wordResults[0].definition,
            partOfSpeech: wordResults[0].partOfSpeech,
        }

        let newResultList = [newresultObj, ...resultList]
        setResultList(newResultList)
        
        let def = wordResults[0].definition
        setDefinition(def)
        
        let pos = wordResults[0].partOfSpeech
        setPartOfSpeech(pos)

        dispatch(addWord(word))
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()

        // resetting values to empty strings
        setWord("")
        setDefinition("")
        setPartOfSpeech("")
        setEnteredWord(word)
        getWord(word)
    }
    
  return (
    <>
        <div id="searchWordDiv">

            <h2 id="searchWordTitle">Search Word</h2>
            
            <form id="searchForm" onSubmit={handleSubmit}>
                <input id="searchBox" type="text" value={word} onChange={e => setWord(e.target.value)} />
                <input id="searchButton" type="submit"/>
            </form>

            <div>
                <h2 id="word" key={enteredWord}>{enteredWord}</h2>

                <div id="wordDetailsDiv">
                    {wordResults.map(resultsObj => {
                        return <SearchWordDetails key={resultsObj.definition} wordObj={resultsObj} />
                    })}
                </div>
            </div>

        </div>
    </>
  )
}

export default SearchWord