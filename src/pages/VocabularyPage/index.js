import React from 'react';
import Vocabulary from '../../components/Vocabulary';
import style from './style.module.css';

function VocabularyPage() {
  return (
    <div className={style.vocabularyPage}>
      <Vocabulary />
    </div>
  );
}

export default VocabularyPage;
