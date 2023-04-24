import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import SelectInvestigation from '../../components/SelectInvestigation';
import Header from '../../components/Header';
import NavBar from '../../components/NavBar';
import style from './style.module.css';
import HistoryPage from '../HistoryPage';
import InsightsPage from '../InsightsPage';
import VocabularyPage from '../VocabularyPage';
import MyAdvancePage from '../MyadvancePage';
import TableAnsPage from '../TableAnsPage';
import RadioAnsPage from '../RadioAnsPage';
import LoginPage from '../LoginPage';
import ConclusionPage from '../ConclusionPage';
import RegisterPage from '../RegisterPage';

function InvestigationPage({ setToken }) {
  const [navOpen, setNavOpen] = useState(true);
  return (
    <div className={style.layout}>
      <Header navOpen={navOpen} setNavOpen={setNavOpen} />
      <div className={style.investigationPage}>
        {navOpen && <NavBar setToken={setToken} />}
        <div className={style.main}>
          <Routes>
            <Route path="/*" element={<SelectInvestigation />} />
            {/* <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} /> */}
            <Route path="/MyAdvance" element={<MyAdvancePage />} />
            <Route path="/vocabulary" element={<VocabularyPage />} />
            <Route path="/insights" element={<InsightsPage />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/radioAnsPage" element={<RadioAnsPage />} />
            <Route
              path="/radioAnsPage/tableAnsPage"
              element={<TableAnsPage />}
            />
            <Route path="/nextPage" element={<ConclusionPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default InvestigationPage;
