'use client';

import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import SkillTestCard from './components/SkillTestCard';
import SyllabusProgress from './components/SyllabusProject';
import ComparisonGraph from './components/ComparisonGraph';
import QuestionAnalysisPie from './components/QuestionAnalysisPie';

export default function SkillTestPage() {
  const [percentile, setPercentile] = useState(30); // Initial percentile

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-2">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="col-span-2">
              <SkillTestCard onUpdatePercentile={setPercentile} />
            </div>
            <SyllabusProgress />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
            <div className="col-span-2">
              <ComparisonGraph percentile={percentile} />
            </div>
            <QuestionAnalysisPie />
          </div>
        </main>
      </div>
    </div>
  );
}
