import React, { useEffect, useState } from "react";

function WordOfTheDay() {

  const [isValidResponse, setIsValidResponse] = useState(false)

  const getWordOfTheDay = async() => {
    const url = 'https://wordsapiv1.p.rapidapi.com/words/?random=true'
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '3bb70894e2msh94c44064b725290p173e5bjsnd21f210e98df',
		    'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
      }
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)

    // checking if random fetch is a rhyme
    if (data.rhymes || !data.results) {
      setIsValidResponse(false)
      console.log('not valid')
    } else {
      setIsValidResponse(true)
      console.log('valid')
    }
  }

  while (!isValidResponse) {
    getWordOfTheDay()

    if (isValidResponse){
      break
    }
  }

  // useEffect(() => {
  //   if (!isValidResponse) {
  //     getWordOfTheDay()
  //   }
  // }, [isValidResponse]);


  return (
    <>
      {/* <div>
        <h3 id='word' key={wordObj.word}>{wordObj.word}</h3>
        <p id='definition' key={wordObj.definition}>{wordObj.definition}</p>
        <p id='partofspeech' key={wordObj.partOfSpeech}>{wordObj.partOfSpeech}</p>
      </div> */}
    </>
  );
}

export default WordOfTheDay;
