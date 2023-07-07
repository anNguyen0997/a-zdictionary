import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import '../css/SearchWord.css'
import SearchWordDetails from './SearchWordDetails'
import { addWord } from '../actions/words'

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
            'X-RapidAPI-Key': '3bb70894e2msh94c44064b725290p173e5bjsnd21f210e98df',
            'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
        }
    };

    const getWord = async(word) => {
        let response = await fetch(`https://wordsapiv1.p.rapidapi.com/words/${word}`, options)
        let data = await response.json()
        let wordResults = await data.results
        
        // console.log(data)
        console.log(wordResults)

        for (let i = 0; i < wordResults.length; i++) {
            // for (let j = 0; j < wordResults[i].examples.length; j++) {
            //     console.log(wordResults[i].examples[j])

                let resultObj = {
                    definition: wordResults[i].definition,
                    partOfSpeech: wordResults[i].partOfSpeech,
                    // examples: wordResults[i].examples[j]
                }

                // console.log(resultObj)
                let newWordResults = [resultObj, ...wordResults]
                setWordResults(newWordResults)
        // }
    }

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

        setEnteredWord(word)
        setWord("")
        setDefinition("")
        setPartOfSpeech("")

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
                        return <SearchWordDetails key={resultsObj} wordObj={resultsObj} />
                    })}
                </div>
            </div>

        </div>
    </>
  )
}

export default SearchWord