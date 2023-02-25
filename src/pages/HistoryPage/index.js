import React from 'react';
import History from '../../components/History';
import style from './style.module.css';

function HistoryPage() {
  return (
    <div className={style.historyPage}>
      <History />
    </div>
  );
}

export default HistoryPage;
