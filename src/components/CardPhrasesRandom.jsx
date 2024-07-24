import React, { useState } from "react";
import phrases from "../db/space-curiosities.json";
import getRandom from "../utils/random-generator";
import BtnRandomPhrases from "./BtnRandomPhrases";

const phrasesLength = phrases.length;

const CardPhrasesRandom = () => {
  const [randomTextPhrases, setRandomTextPhrases] = useState(phrases.at(getRandom(phrasesLength))
  );

  const showPhrase = randomTextPhrases.phrase;
  const showAuthor = randomTextPhrases.author;

  function btnRandom() {
    setRandomTextPhrases(phrases.at(getRandom(phrasesLength)));
  }

  console.log(getRandom(phrasesLength));
  return (
    <>
      <p>{showPhrase}</p>
      <i> {showAuthor} </i>
      <BtnRandomPhrases changePhrase={btnRandom} />
    </>
  );
};

export default CardPhrasesRandom;
