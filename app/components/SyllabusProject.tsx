'use client';

const syllabus = [
  { title: 'HTML Tools, Forms, History', value: 90 },
  { title: 'Tags & References in HTML', value: 80 },
  { title: 'Tables & References in HTML', value: 24 },
  { title: 'Tables & CSS Basics', value: 96 },
];

export default function SyllabusProgress() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="font-semibold text-lg mb-4">Syllabus Wise Analysis</h3>
      <div className="flex flex-col gap-4">
        {syllabus.map((item, index) => (
          <div key={index}>
            <p className="text-sm text-gray-600 mb-1">{item.title}</p>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="h-3 bg-blue-600 rounded-full transition-all duration-500"
                style={{ width: `${item.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
