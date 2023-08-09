import React, { useContext, useState } from "react";
import style from "./style.module.css";
import { userContext } from "../LayOut";
import axios from "axios";

function Vocabulary() {
  const { user } = useContext(userContext);
  const [selectedWord, setSelectedWord] = useState(null);
  const [translation, setTranslation] = useState("");

  const translateWord = async (word) => {
    if (selectedWord === word) {
      clearTranslation();
    } else {
      const options = {
        method: "GET",
        url: "https://translated-mymemory---translation-memory.p.rapidapi.com/get",
        params: {
          langpair: "en|he",
          q: word,
          mt: "1",
          onlyprivate: "0",
          de: "a@b.c",
        },
        headers: {
          "X-RapidAPI-Key":
            "dba2293ea8msh1fbd7b2558993dfp1fc27bjsn4dc8d811c66f",
          "X-RapidAPI-Host":
            "translated-mymemory---translation-memory.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        setTranslation(response.data.responseData.translatedText);
        setSelectedWord(word);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const clearTranslation = () => {
    setTranslation("");
    setSelectedWord(null);
  };

  return (
    <div className={style.vocabularyContainer}>
      <h2 className={style.title}>אוצר מילים</h2>
      <div className={style.wordContainer}>
        {user.vocabulary.map((word, index) => (
          <div>
            <div
              key={index}
              className={style.word}
              onClick={() => translateWord(word)}
            >
              {word}
            </div>
            {/* {selectedWord === word && (
              <div className={style.translation}>{translation}</div>
            )} */}
          </div>
        ))}
      </div>
      <h6>תרגום:</h6>
      <div className={style.translation}>{translation}</div>
    </div>
  );
}

export default Vocabulary;
