import React from 'react'

function WordOfTheDayDetails({results}) {
  return (
    <div id='wordResults'>
      {Array.isArray(results) && results.length > 0 ? (
        <div id='wordDetailsContainer'>
          {results.map((resultObj, i) => (
            <React.Fragment key={i}>
              <div id='wordDetails'>
                <p id="partofspeech">{resultObj.partOfSpeech}</p>
                <p id="definition">{resultObj.definition}</p>
                {resultObj.synonyms.length > 0 && (
                  <p id="synonyms">synonyms: {resultObj.synonyms}</p>
                )}
              </div>
            </React.Fragment>
          ))}
        </div>
      ) : (
        <p id='loadingMsg'>Loading results...</p>
      )}
    </div>
  )
}

export default WordOfTheDayDetails