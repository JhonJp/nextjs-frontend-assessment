"use client";

export default function Sidebar() {
    return (
      <div className="h-screen w-64 bg-gray-900 text-white flex flex-col justify-between p-4">
        {/* Top Logo */}
        <div className="flex items-center space-x-2">
          <div className="bg-blue-500 p-2 rounded-full">
            <span className="text-white text-lg font-bold">F</span>
          </div>
        </div>
  
        {/* Navigation Links */}
        <nav className="mt-8 space-y-2">
          <a href="#" className="flex items-center space-x-3 px-4 py-2 bg-gray-800 rounded-lg">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 9.75L12 3l9 6.75M4.5 10.5V18a2.25 2.25 0 002.25 2.25h10.5A2.25 2.25 0 0019.5 18v-7.5"></path>
            </svg>
            <span>Dashboard</span>
          </a>
  
          <a href="#" className="flex items-center space-x-3 px-4 py-2 hover:bg-gray-700 rounded-lg">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5L12 16.5l-7.5-6m15 3V6.75a2.25 2.25 0 00-2.25-2.25H4.5A2.25 2.25 0 002.25 6.75V16.5"></path>
            </svg>
            <span>Browse</span>
          </a>
  
          <a href="#" className="flex items-center space-x-3 px-4 py-2 hover:bg-gray-700 rounded-lg">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h2.25l1.5 9h13.5l1.5-9h2.25m-16.5 0h10.5m-10.5 0l-1.5 9m12 9a3 3 0 01-6 0"></path>
            </svg>
            <span>Cart</span>
          </a>
        </nav>
  
        {/* User Profile */}
        <div className="mt-auto flex items-center space-x-3 bg-gray-800 p-3 rounded-lg">
          <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="User" className="w-10 h-10 rounded-full" />
          <div>
            <p className="text-sm font-medium">Tom Cook</p>
            <p className="text-xs text-gray-400">View profile</p>
          </div>
        </div>
      </div>
    );
  }
  