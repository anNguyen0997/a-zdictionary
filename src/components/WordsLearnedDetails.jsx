import React from 'react'

function WordsLearnedDetails({word}) {
        return (
          <>
    
              <div id="wordDataDiv" key={word}>
                <p id="wordlearned">{word}</p>
              </div>
          
          </>
        )
}

export default WordsLearnedDetails