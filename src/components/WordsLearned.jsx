import React from 'react'
import '../css/WordsLearned.css'
import WordsLearnedDetails from './WordsLearnedDetails'
import { useSelector } from 'react-redux'

function WordsLearned() {

  const words = useSelector(state => state.words)
  // console.log(words)

  return (
    <>

      <div id="wordsLearnedDiv">

        <h2 id="wordsLearnedTitle">Words Learned</h2>

        <div>
          <div id="wordsDiv">
            {words.map(word=> {
              return <WordsLearnedDetails word={word} />
            })}
          </div>
        </div>

      </div>

    </>
  )
}

export default WordsLearned