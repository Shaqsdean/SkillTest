'use client';

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, LabelList } from 'recharts';

const data = [
  { name: 'You', score: 30 },
  { name: 'Average', score: 72 },
];

export default function ComparisonGraph() {
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
              dataKey="score"
              stroke="#3B82F6"
              strokeWidth={2}
              dot={{ r: 6 }}
            >
              <LabelList dataKey="score" position="top" />
            </Line>
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}