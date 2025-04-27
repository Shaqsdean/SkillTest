'use client';

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, LabelList } from 'recharts';

export default function ComparisonGraph({ percentile }: { percentile: number }) {
  const data = [
    { name: '0', numberOfStudents: 2 },
    { name: '25', numberOfStudents: 5 },
    { name: '50', numberOfStudents: 60 },
    { name: '75', numberOfStudents: 18 },
    { name: '100', numberOfStudents: 3 },
    { name: 'Your Percentile', numberOfStudents: percentile },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="font-semibold text-lg mb-4">Comparison Graph</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <YAxis type="number" domain={[0, 100]} />
            <XAxis dataKey="name" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="numberOfStudents"
              stroke="#3B82F6"
              strokeWidth={2}
              dot={{ r: 6 }}
            >
              <LabelList dataKey="numberOfStudents" position="top" />
            </Line>
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}