export default function Header() {
    return (
      <header className="flex items-center justify-between bg-white shadow-md p-4">
        <div className="flex items-center gap-2">
          <img src="/logo.jpeg" alt="Logo" className="w-8 h-8" />
          <h1 className="text-xl font-bold">WhatBytes</h1>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-gray-700 font-medium">Dean Mulandi</span>
          <img
            src="/image3.jpg"
            alt="User Profile"
            className="w-8 h-8 rounded-full"
          />
        </div>
      </header>
    );
  }