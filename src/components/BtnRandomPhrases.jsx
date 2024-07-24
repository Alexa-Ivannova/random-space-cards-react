import React from 'react'

const BtnRandomPhrases = ({changePhrase}) => {
  return (
    <button className='bg-white p-3 rounded-full text-slate-950 font-semibold text-xl hover:bg-yellow-400 hover:text-violet-700 transition-colors' onClick={changePhrase}>BtnRandomPhrases</button>
  )
}

export default BtnRandomPhrases