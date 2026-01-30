"use client";

import { HiArrowLeft, HiDotsVertical, HiPlus } from "react-icons/hi";
import { BsPersonPlus, BsEnvelope, BsClock, BsTag } from "react-icons/bs";

export default function WorkflowBuilderPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 pb-24">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-6">
        <button className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all">
          <HiArrowLeft className="h-6 w-6 text-white" />
        </button>

        <h1 className="text-xl font-bold text-white">New Lead Sequence</h1>

        <button className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all">
          <HiDotsVertical className="h-6 w-6 text-white" />
        </button>
      </header>

      {/* Workflow Steps */}
      <div className="px-6 py-8 space-y-6">
        {/* Step 1 - Trigger */}
        <div className="relative">
          <div className="rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 p-6">
            <div className="flex items-center space-x-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500">
                <BsPersonPlus className="h-8 w-8 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-cyan-400 text-xs font-bold uppercase tracking-wide mb-1">
                  TRIGGER
                </p>
                <h3 className="text-white text-lg font-bold mb-1">
                  New Lead Added
                </h3>
                <p className="text-white/60 text-sm">Source: CRM Integration</p>
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex justify-center py-4">
            <div className="h-12 w-1 bg-gradient-to-b from-white/30 to-transparent"></div>
          </div>
        </div>

        {/* Step 2 - Action */}
        <div className="relative">
          <div className="rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 p-6">
            <div className="flex items-center space-x-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-green-400 to-emerald-500">
                <BsEnvelope className="h-8 w-8 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-green-400 text-xs font-bold uppercase tracking-wide mb-1">
                  ACTION
                </p>
                <h3 className="text-white text-lg font-bold mb-1">
                  Send Welcome Email
                </h3>
                <p className="text-white/60 text-sm">
                  Template: Welcome Series 1
                </p>
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex justify-center py-4">
            <div className="h-12 w-1 bg-gradient-to-b from-white/30 to-transparent"></div>
          </div>
        </div>

        {/* Step 3 - Wait */}
        <div className="relative">
          <div className="rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 p-6">
            <div className="flex items-center space-x-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-green-400 to-emerald-500">
                <BsClock className="h-8 w-8 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-green-400 text-xs font-bold uppercase tracking-wide mb-1">
                  ACTION
                </p>
                <h3 className="text-white text-lg font-bold mb-1">
                  Wait 2 Days
                </h3>
                <p className="text-white/60 text-sm">Duration: 48 hours</p>
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex justify-center py-4">
            <div className="h-12 w-1 bg-gradient-to-b from-white/30 to-transparent"></div>
          </div>
        </div>

        {/* Step 4 - Condition */}
        <div className="relative">
          <div className="rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 p-6">
            <div className="flex items-center space-x-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-400 to-red-500">
                <svg
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7h12M8 12h12M8 17h12M4 7h.01M4 12h.01M4 17h.01"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-orange-400 text-xs font-bold uppercase tracking-wide mb-1">
                  CONDITION
                </p>
                <h3 className="text-white text-lg font-bold mb-1">
                  If Email Opened
                </h3>
              </div>
            </div>
          </div>

          {/* Split Arrow */}
          <div className="flex justify-center py-4">
            <div className="relative w-full max-w-md">
              <svg
                className="w-full h-24"
                viewBox="0 0 400 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M200 0 L200 30 L100 70"
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth="2"
                />
                <path
                  d="M200 30 L300 70"
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth="2"
                />
              </svg>
              <span className="absolute left-8 top-12 text-green-400 text-sm font-bold">
                YES
              </span>
              <span className="absolute right-8 top-12 text-red-400 text-sm font-bold">
                NO
              </span>
            </div>
          </div>
        </div>

        {/* Split Actions */}
        <div className="grid grid-cols-2 gap-4">
          {/* YES Path */}
          <div className="rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 p-5">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 mb-3">
                <BsTag className="h-6 w-6 text-white" />
              </div>
              <p className="text-cyan-400 text-xs font-bold uppercase tracking-wide mb-1">
                ACTION
              </p>
              <h4 className="text-white text-sm font-bold mb-1">
                Add to Interested Segment
              </h4>
            </div>
          </div>

          {/* NO Path */}
          <div className="rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 p-5">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 mb-3">
                <BsEnvelope className="h-6 w-6 text-white" />
              </div>
              <p className="text-green-400 text-xs font-bold uppercase tracking-wide mb-1">
                ACTION
              </p>
              <h4 className="text-white text-sm font-bold mb-1">
                Send Follow-up Email
              </h4>
            </div>
          </div>
        </div>
      </div>

      {/* Add Step Button */}
      <div className="fixed bottom-28 right-6">
        <button className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-xl hover:scale-110 transition-transform">
          <HiPlus className="h-8 w-8 text-white" />
        </button>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-indigo-900/95 to-purple-900/95 backdrop-blur-xl border-t border-white/10 px-6 py-4">
        <div className="flex justify-around items-center">
          <button className="flex flex-col items-center text-cyan-400">
            <svg className="h-6 w-6 mb-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
            </svg>
            <span className="text-xs font-medium">Workflows</span>
          </button>

          <button className="flex flex-col items-center text-white/60">
            <svg className="h-6 w-6 mb-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
            </svg>
            <span className="text-xs font-medium">Leads</span>
          </button>

          <button className="flex flex-col items-center text-white/60">
            <svg className="h-6 w-6 mb-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
            </svg>
            <span className="text-xs font-medium">Analytics</span>
          </button>

          <button className="flex flex-col items-center text-white/60">
            <svg className="h-6 w-6 mb-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
            </svg>
            <span className="text-xs font-medium">Settings</span>
          </button>
        </div>
      </nav>
    </div>
  );
}
