'use client';

import { useState } from 'react';

export default function SkillTestCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rank, setRank] = useState(1);
  const [percentile, setPercentile] = useState(30);
  const [correctAnswers, setCorrectAnswers] = useState(10);

  const handleUpdateClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setRank(Number(formData.get('rank')));
    setPercentile(Number(formData.get('percentile')));
    setCorrectAnswers(Number(formData.get('correctAnswers')));
    setIsModalOpen(false);
  };

  const currentDate = new Date().toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <img src="/html logo.png" alt="HTML5" className="w-12 h-12" />
          <div>
            <h2 className="text-lg font-semibold">Hyper Text Markup Language</h2>
            <p className="text-sm text-gray-500">Submitted on {currentDate}</p>
          </div>
        </div>
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
          onClick={handleUpdateClick}
        >
          Update
        </button>
      </div>
      <div className="bg-white-100 p-4 rounded-md">
        <h3 className="text-lg font-semibold mb-4">Quick Statistics</h3>
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-center">
            <div className="text-3xl text-yellow-500">🏆</div>
            <p className="text-2xl font-bold">{rank}</p>
            <p className="text-gray-500 text-sm">Your Rank</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl text-blue-500">📄</div>
            <p className="text-2xl font-bold">{percentile}%</p>
            <p className="text-gray-500 text-sm">Percentile</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl text-green-500">✅</div>
            <p className="text-2xl font-bold">{correctAnswers} / 15</p>
            <p className="text-gray-500 text-sm">Correct Answers</p>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
            {/* HTML Logo in the top-right corner */}
            <img
              src="/html logo.png"
              alt="HTML5"
              className="absolute top-4 right-4 w-8 h-8"
            />
            <h2 className="text-lg font-semibold mb-4">Update scores</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">1. Update your Rank</label>
                <input
                  type="number"
                  name="rank"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                  placeholder="Enter your rank"
                  defaultValue={rank}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">2. Update your Percentile</label>
                <input
                  type="number"
                  name="percentile"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                  placeholder="Enter your percentile"
                  defaultValue={percentile}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                  3. Update your Current Score (out of 15)
                </label>
                <input
                  type="number"
                  name="correctAnswers"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                  placeholder="Enter your score"
                  defaultValue={correctAnswers}
                />
              </div>
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 rounded-lg"
                  onClick={handleCloseModal}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}