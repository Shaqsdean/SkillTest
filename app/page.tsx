import Sidebar from './components/Sidebar';
import SkillTestCard from './components/SkillTestCard';
import SyllabusProgress from './components/SyllabusProject';
import ComparisonGraph from './components/ComparisonGraph';
import QuestionAnalysisPie from './components/QuestionAnalysisPie';

export default function SkillTestPage() {
  return (
    <div className="flex min-h-screen bg-gray-100">
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
  );
}
