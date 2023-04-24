import React from 'react';
import LayOut from './components/LayOut';

import { createContext, useState } from 'react';

export const ansContext = createContext();
function App() {
  const [firstChapterAns, setFirstChapterAns] = useState([]);
  const [secondChapterAns, setSecondChapterAns] = useState([]);
  const [thirdChapterAns, setThirdChapterAns] = useState([]);
  const [fourthChapterAns, setFourthChapterAns] = useState([]);
  const [fifthChapterAns, setFifthChapterAns] = useState([]);
  const [sixthChapterAns, setSixthChapterAns] = useState([]);
  const [seventhChapterAns, setSeventhChapterAns] = useState([]);
  const [eightChapterAns, setEightChapterAns] = useState([]);
  const [ninthChapterAns, setNinthChapterAns] = useState([]);
  return (
    <ansContext.Provider
      value={[
        [firstChapterAns, setFirstChapterAns],
        [secondChapterAns, setSecondChapterAns],
        [thirdChapterAns, setThirdChapterAns],
        [fourthChapterAns, setFourthChapterAns],
        [fifthChapterAns, setFifthChapterAns],
        [sixthChapterAns, setSixthChapterAns],
        [seventhChapterAns, setSeventhChapterAns],
        [eightChapterAns, setEightChapterAns],
        [ninthChapterAns, setNinthChapterAns],
      ]}
    >
      <LayOut />
    </ansContext.Provider>
  );
}

export default App;
