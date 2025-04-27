'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="h-screen w-64 bg-white shadow-md p-6 hidden lg:flex flex-col">
      <img src="/logo.jpeg" alt="Logo" className="w-12 h-12" />
      <h1 className="text-2xl font-bold mb-10">WhatBytes</h1>
      <nav className="flex flex-col gap-8">
        <Link href="/users">
          <span className={`text-gray-700 hover:text-black font-medium ${pathname === '/users' ? 'text-black font-bold' : ''}`}>
            Dashboard
          </span>
        </Link>
        <Link href="#">
          <span className={`text-gray-700 hover:text-black font-medium ${pathname === '#' ? 'text-black font-bold' : ''}`}>
            Skill Test
          </span>
        </Link>
        <Link href="/users/new">
          <span className={`text-gray-700 hover:text-black font-medium ${pathname === '/users/new' ? 'text-black font-bold' : ''}`}>
            Internship
          </span>
        </Link>
      </nav>
    </aside>
  );
}