'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaTachometerAlt, FaLightbulb, FaFileAlt } from 'react-icons/fa';

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="h-screen w-64 bg-white shadow-md p-6 hidden lg:flex flex-col">
      <nav className="flex flex-col gap-8">
        <Link href="/users">
          <span
            className={`flex items-center gap-4 text-gray-700 hover:text-black font-medium ${
              pathname === '/users' ? 'text-black font-bold' : ''
            }`}
          >
            <FaTachometerAlt />
            Dashboard
          </span>
        </Link>
        <Link href="/#">
          <span
            className={`flex items-center gap-4 text-gray-700 hover:text-black font-medium ${
              pathname === '/skill-test' ? 'text-black font-bold bg-gray-200 rounded-lg p-2' : ''
            }`}
          >
            <FaLightbulb />
            Skill Test
          </span>
        </Link>
        <Link href="/users/new">
          <span
            className={`flex items-center gap-4 text-gray-700 hover:text-black font-medium ${
              pathname === '/users/new' ? 'text-black font-bold' : ''
            }`}
          >
            <FaFileAlt />
            Internship
          </span>
        </Link>
      </nav>
    </aside>
  );
}