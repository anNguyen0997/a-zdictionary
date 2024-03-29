import React from 'react'

function WordOfTheDayDetails({results}) {
  return (
    <div id='wordResults'>
      {Array.isArray(results) && results.length > 0 ? (
        <div id='wordDetailsContainer'>
          {results.map((resultObj, i) => (
            
              <div id='wordDetails' key={i}>
                <p id="partofspeech">{resultObj.partOfSpeech}</p>
                <p id="definition">{resultObj.definition}</p>
                {resultObj.synonyms.length > 0 && (
                  <p id="synonyms">synonyms: {resultObj.synonyms}</p>
                )}
              </div>
            
          ))}
        </div>
      ) : (
        <p id='loadingMsg'>Loading results...</p>
      )}
    </div>
  )
}

export default WordOfTheDayDetails