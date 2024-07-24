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
    <section className="bg-gradient-to-l from-indigo-600 to-indigo-900 border-2 border-orange-400 p-4 w-full h-[65%] rounded-3xl flex flex-col gap-3 justify-around items-center shadow-2xl sm:w-3/4 sm:bg-none sm:bg-red-400 md:bg-lime-500 lg:bg-purple-400 lg:w-1/3" >
      <p className=" text-slate-900 text-justify">{showPhrase}</p>
      <i className="text-xl m-3"> {showAuthor} </i>
      <BtnRandomPhrases changePhrase={btnRandom} />
    </section>
  );
};

export default CardPhrasesRandom;
