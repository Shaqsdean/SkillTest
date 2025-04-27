'use client';

export default function SkillTestCard() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <img src="/html logo.png" alt="HTML5" className="w-12 h-12" />
          <div>
            <h2 className="text-lg font-semibold">Hyper Text Markup Language</h2>
            <p className="text-sm text-gray-500">Submitted on 5 June 2021</p>
          </div>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">Update</button>
      </div>
      <div className="flex gap-12">
        <div>
          <p className="text-gray-500 text-sm">Total Score</p>
          <p className="text-2xl font-bold">30%</p>
        </div>
        <div>
          <p className="text-gray-500 text-sm">Correct Answers</p>
          <p className="text-2xl font-bold">10/15</p>
        </div>
      </div>
    </div>
  );
}
