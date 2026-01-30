"use client";

import { HiChevronDown } from "react-icons/hi";
import { BsGoogle } from "react-icons/bs";

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 pb-24">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-8">
        <h1 className="text-3xl font-bold text-white">Advanced Analytics</h1>

        <button className="flex items-center space-x-2 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 px-4 py-3 hover:bg-white/20 transition-all">
          <span className="text-cyan-400 text-sm font-semibold">
            Last 30 Days
          </span>
          <HiChevronDown className="h-5 w-5 text-cyan-400" />
        </button>
      </header>

      {/* Lead Growth Chart */}
      <div className="px-6 mb-6">
        <div className="rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 p-6">
          <div className="flex items-start justify-between mb-6">
            <h2 className="text-xl font-bold text-white">Lead Growth</h2>
            <div className="text-right">
              <p className="text-4xl font-bold text-white">850</p>
              <p className="text-green-400 text-sm font-semibold">
                Leads (+15%)
              </p>
            </div>
          </div>

          {/* Chart Area */}
          <div className="relative h-48 mb-4">
            <svg className="w-full h-full" viewBox="0 0 400 150" preserveAspectRatio="none">
              {/* Grid lines */}
              <line x1="0" y1="30" x2="400" y2="30" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
              <line x1="0" y1="60" x2="400" y2="60" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
              <line x1="0" y1="90" x2="400" y2="90" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
              <line x1="0" y1="120" x2="400" y2="120" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />

              {/* Area fill */}
              <defs>
                <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
                </linearGradient>
              </defs>

              <path
                d="M 0,130 Q 50,110 100,90 T 200,60 T 300,40 T 400,20 L 400,150 L 0,150 Z"
                fill="url(#areaGradient)"
              />

              {/* Line */}
              <path
                d="M 0,130 Q 50,110 100,90 T 200,60 T 300,40 T 400,20"
                fill="none"
                stroke="#06b6d4"
                strokeWidth="3"
                strokeLinecap="round"
              />

              {/* Data points */}
              <circle cx="100" cy="90" r="5" fill="#06b6d4" />
              <circle cx="200" cy="60" r="5" fill="#06b6d4" />
              <circle cx="300" cy="40" r="5" fill="#06b6d4" />
              <circle cx="400" cy="20" r="6" fill="#06b6d4" />
            </svg>

            {/* Y-axis labels */}
            <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-white/50 text-xs -ml-8">
              <span>1000</span>
              <span>800</span>
              <span>600</span>
              <span>400</span>
              <span>200</span>
              <span>0</span>
            </div>
          </div>

          {/* X-axis labels */}
          <div className="flex justify-between text-white/50 text-xs">
            <span>May 1</span>
            <span>May 8</span>
            <span>May 15</span>
            <span>May 22</span>
            <span>May 29</span>
          </div>
        </div>
      </div>

      {/* Metrics Cards */}
      <div className="px-6 grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        {/* Conversion Rate */}
        <div className="rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 p-6">
          <p className="text-white/70 text-sm mb-2">Conversion Rate (%)</p>
          <h3 className="text-3xl font-bold text-white mb-2">12.5%</h3>
          <p className="text-green-400 text-sm font-semibold">+2.1%</p>
        </div>

        {/* Total Revenue */}
        <div className="rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 p-6">
          <p className="text-white/70 text-sm mb-2">Total Revenue</p>
          <h3 className="text-3xl font-bold text-white mb-2">$45,200</h3>
          <p className="text-green-400 text-sm font-semibold">+$5,100</p>
        </div>

        {/* Top Source */}
        <div className="rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 p-6">
          <p className="text-white/70 text-sm mb-2">Top Source</p>
          <div className="flex items-center space-x-2 mb-2">
            <BsGoogle className="h-6 w-6 text-white" />
            <h3 className="text-xl font-bold text-white">Google Ads</h3>
          </div>
          <p className="text-cyan-400 text-sm font-semibold flex items-center">
            View details
            <svg className="h-4 w-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </p>
        </div>
      </div>

      {/* Channel Performance */}
      <div className="px-6 mb-8">
        <div className="rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 p-6">
          <h2 className="text-xl font-bold text-white mb-6">
            Channel Performance
          </h2>

          <div className="space-y-5">
            {/* Facebook */}
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-white font-medium">Facebook</span>
                <span className="text-white/70 text-sm">420 Leads</span>
              </div>
              <div className="h-3 w-full rounded-full bg-white/20 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                  style={{ width: "85%" }}
                ></div>
              </div>
            </div>

            {/* Google */}
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-white font-medium">Google</span>
                <span className="text-white/70 text-sm">350 Leads</span>
              </div>
              <div className="h-3 w-full rounded-full bg-white/20 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-purple-400 to-pink-500"
                  style={{ width: "70%" }}
                ></div>
              </div>
            </div>

            {/* Organic */}
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-white font-medium">Organic</span>
                <span className="text-white/70 text-sm">210 Leads</span>
              </div>
              <div className="h-3 w-full rounded-full bg-white/20 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"
                  style={{ width: "42%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-indigo-900/95 to-purple-900/95 backdrop-blur-xl border-t border-white/10 px-6 py-4">
        <div className="flex justify-around items-center">
          <button className="flex flex-col items-center text-white/60">
            <svg className="h-6 w-6 mb-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <span className="text-xs font-medium">Dashboard</span>
          </button>

          <button className="flex flex-col items-center text-white/60">
            <svg className="h-6 w-6 mb-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
            </svg>
            <span className="text-xs font-medium">Leads</span>
          </button>

          <button className="flex flex-col items-center text-white/60">
            <svg className="h-6 w-6 mb-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            <span className="text-xs font-medium">Automation</span>
          </button>

          <button className="flex flex-col items-center text-cyan-400">
            <svg className="h-6 w-6 mb-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
            </svg>
            <span className="text-xs font-medium">Analytics</span>
          </button>
        </div>
      </nav>
    </div>
  );
}
