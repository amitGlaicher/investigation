import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Camuty from '../../components/Camuty';
import English from '../../components/English';
import Miluly from '../../components/Miluly';
import SelectInvestigation from '../../components/SelectInvestigation';
import Header from '../../components/Header';
import NavBar from '../../components/NavBar';
import style from './style.module.css';
import RadioAns from '../../components/RadioAns';
import HistoryPage from '../HistoryPage';
import InsightsPage from '../InsightsPage';
import VocabularyPage from '../VocabularyPage';
import MyAdvancePage from '../MyadvancePage';

function InvestigationPage({ setToken }) {
  const [navOpen, setNavOpen] = useState(true);
  return (
    <div className={style.investigationPage}>
      <Header navOpen={navOpen} setNavOpen={setNavOpen} />
      <div className={style.routes_Nav}>
        <Routes>
          <Route path="/*" element={<SelectInvestigation />} />
          <Route path="/MyAdvance" element={<MyAdvancePage />} />
          <Route path="/vocabulary" element={<VocabularyPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/RadioAns" element={<RadioAns />} />
          <Route path="RadioAns/Camuty" element={<Camuty />} />
          <Route path="RadioAns/Miluly" element={<Miluly />} />
          <Route path="RadioAns/English" element={<English />} />
        </Routes>
        {navOpen && <NavBar setToken={setToken} />}
      </div>
    </div>
  );
}

export default InvestigationPage;
