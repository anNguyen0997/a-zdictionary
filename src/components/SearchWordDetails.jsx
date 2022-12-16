import React from 'react'
import '../css/SearchWord.css'

const SearchWordDetails = ({wordObj}) => {
  // console.log(wordObj)

  if (wordObj !== '') {
    return (
      <>

          <div id="wordDataDiv" key={wordObj.word}>
            <p id="pos" key={wordObj.partOfSpeech}>{wordObj.partOfSpeech}</p>
            <p id="def" key={wordObj.definition}>{wordObj.definition}</p>
            {/* <p id="eg" key={wordObj.examples}>{wordObj.examples}</p> */}
          </div>
          
      </>
    )
  }
}

export default SearchWordDetails