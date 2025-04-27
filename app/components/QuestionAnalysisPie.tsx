'use client';

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: 'Correct', value: 10 },
  { name: 'Wrong', value: 5 },
];

const COLORS = ['#3B82F6', '#f5f5f5'];

export default function QuestionAnalysisPie() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="font-semibold text-lg mb-4">Question Analysis</h3>
      <div className="text-right text-sm font-semibold mb-2">10/15</div>
      <div className="h-64 flex items-center justify-center relative">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
        {/* Central icon or text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-700">🎯</div>
          </div>
        </div>
      </div>
      <p className="text-sm text-gray-600 mt-4">
        You scored 10 questions correct out of 15. However, it still needs some improvements.
      </p>
    </div>
  );
}
