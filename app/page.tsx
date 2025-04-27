import Sidebar from './components/Sidebar';
import Header from './components/Header';
import SkillTestCard from './components/SkillTestCard';
import SyllabusProgress from './components/SyllabusProject';
import ComparisonGraph from './components/ComparisonGraph';
import QuestionAnalysisPie from './components/QuestionAnalysisPie';

export default function SkillTestPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="col-span-2">
              <SkillTestCard />
            </div>
            <SyllabusProgress />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
            <div className="col-span-2">
              <ComparisonGraph />
            </div>
            <QuestionAnalysisPie />
          </div>
        </main>
      </div>
    </div>
  );
}
