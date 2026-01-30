"use client";

import { useState } from "react";
import { HiHome, HiUsers, HiChartBar, HiCog } from "react-icons/hi";
import { BsRocketTakeoffFill, BsLightningChargeFill } from "react-icons/bs";
import { FiTrendingUp, FiTrendingDown } from "react-icons/fi";
import { UserButton } from "@clerk/nextjs";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="min-h-screen bg-transparent pb-32">
      {/* Header */}
      <header className="px-8 py-12 flex justify-between items-start">
        <div className="animate-in fade-in slide-in-from-left-4 duration-700">
          <h1 className="text-4xl font-bold tracking-tight text-white mb-2">AutoLeads</h1>
          <p className="text-slate-400 text-lg font-normal">
            Operational status: <span className="text-indigo-400 font-medium">Nominal</span> • {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </p>
        </div>
        <div className="glass-container p-1 rounded-2xl border-white/10">
          <UserButton afterSignOutUrl="/" />
        </div>
      </header>

      {/* Stats Cards */}
      <div className="px-8 grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
        {/* Total Leads */}
        <div className="glass-card p-10 group transition-all hover:bg-white/[0.07] border-white/10">
          <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.2em] mb-4">Total Vectors</p>
          <h3 className="text-5xl font-bold text-white mb-8 tracking-tighter">1,284</h3>

          <div className="h-1.5 bg-slate-800/50 rounded-full mb-6 overflow-hidden">
            <div className="h-full bg-indigo-500 w-[75%] shadow-[0_0_15px_rgba(79,70,229,0.5)] transition-all duration-1000"></div>
          </div>

          <div className="flex items-center text-indigo-400 text-sm font-bold">
            <FiTrendingUp className="mr-2 h-4 w-4" />
            <span>+15.4% momentum</span>
          </div>
        </div>

        {/* Active Nodes */}
        <div className="glass-card p-10 group transition-all hover:bg-white/[0.07] border-white/10">
          <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.2em] mb-4">Active Nodes</p>
          <h3 className="text-5xl font-bold text-white mb-8 tracking-tighter">24</h3>

          <div className="h-1.5 bg-slate-800/50 rounded-full mb-6 overflow-hidden">
            <div className="h-full bg-indigo-500 w-[45%] shadow-[0_0_15px_rgba(79,70,229,0.5)] transition-all duration-1000"></div>
          </div>

          <div className="flex items-center text-indigo-400 text-sm font-bold">
            <BsLightningChargeFill className="mr-2 h-4 w-4" />
            <span>Sync status: Active</span>
          </div>
        </div>

        {/* Conversion Rate */}
        <div className="glass-card p-10 group transition-all hover:bg-white/[0.07] border-white/10">
          <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.2em] mb-4">Conversion Delta</p>
          <h3 className="text-5xl font-bold text-white mb-8 tracking-tighter">8.5%</h3>

          <div className="h-1.5 bg-slate-800/50 rounded-full mb-6 overflow-hidden">
            <div className="h-full bg-rose-500 w-[65%] shadow-[0_0_15px_rgba(244,63,94,0.5)] transition-all duration-1000"></div>
          </div>

          <div className="flex items-center text-rose-400 text-sm font-bold">
            <FiTrendingDown className="mr-2 h-4 w-4" />
            <span>0.2% variance check</span>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="px-8 mb-12 animate-in fade-in duration-700 delay-300">
        <h3 className="text-xl font-semibold text-white mb-8 px-2 tracking-tight">Intelligence Feed</h3>
        <div className="space-y-4">
          {[
            { id: "01", text: "Lead ID #8842 identified and authorized.", time: "2 hours ago" },
            { id: "02", text: 'Protocol "Q1-Acceleration" deployed successfully.', time: "5 hours ago" },
            { id: "03", text: "External vector: Sarah Smith synced from primary API.", time: "Yesterday" },
          ].map((activity, idx) => (
            <div
              key={idx}
              className="flex items-center space-x-6 glass-container p-6 transition-all hover:bg-white/[0.04] border-white/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 font-mono text-sm border border-indigo-500/20">
                {activity.id}
              </div>
              <div className="flex-1">
                <p className="text-slate-200 font-medium text-lg tracking-tight">{activity.text}</p>
                <p className="text-slate-500 text-sm mt-1">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-8 mb-16 animate-in fade-in duration-700 delay-500">
        <h3 className="text-xl font-semibold text-white mb-8 px-2 tracking-tight">Strategic Commands</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <button className="glass-container p-8 text-left transition-all hover:bg-white/[0.06] border-white/10 group flex items-center justify-between">
            <div>
              <p className="text-white font-bold text-xl tracking-tight">Initialize Vector</p>
              <p className="text-slate-500 text-sm mt-1">Add a new operational lead</p>
            </div>
            <div className="h-14 w-14 flex items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-[0_10px_20px_rgba(79,70,229,0.3)] group-hover:bg-indigo-500 transition-all">
              <span className="text-2xl font-light">+</span>
            </div>
          </button>

          <button className="glass-container p-8 text-left transition-all hover:bg-white/[0.06] border-white/10 group flex items-center justify-between">
            <div>
              <p className="text-white font-bold text-xl tracking-tight">Run Automation</p>
              <p className="text-slate-500 text-sm mt-1">Execute systemic sequences</p>
            </div>
            <div className="h-14 w-14 flex items-center justify-center rounded-2xl bg-slate-800 text-indigo-400 border border-slate-700 group-hover:border-indigo-500/50 transition-all">
              <BsRocketTakeoffFill className="text-2xl" />
            </div>
          </button>
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 glass-container py-4 px-10 z-50 min-w-[340px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] border-white/10">
        <div className="flex justify-between items-center space-x-14">
          <button
            onClick={() => setActiveTab("dashboard")}
            className={`flex flex-col items-center transition-all ${activeTab === "dashboard" ? "text-indigo-400" : "text-slate-500 hover:text-slate-300"
              }`}
          >
            <HiHome className="h-6 w-6 mb-1" />
            <span className="text-[10px] font-bold uppercase tracking-[0.15em]">Matrix</span>
          </button>

          <button
            onClick={() => setActiveTab("leads")}
            className={`flex flex-col items-center transition-all ${activeTab === "leads" ? "text-indigo-400" : "text-slate-500 hover:text-slate-300"
              }`}
          >
            <HiUsers className="h-6 w-6 mb-1" />
            <span className="text-[10px] font-bold uppercase tracking-[0.15em]">Vectors</span>
          </button>

          <button
            onClick={() => setActiveTab("automation")}
            className={`flex flex-col items-center transition-all ${activeTab === "automation" ? "text-indigo-400" : "text-slate-500 hover:text-slate-300"
              }`}
          >
            <BsLightningChargeFill className="h-6 w-6 mb-1" />
            <span className="text-[10px] font-bold uppercase tracking-[0.15em]">Kinetic</span>
          </button>

          <button
            onClick={() => setActiveTab("profile")}
            className={`flex flex-col items-center transition-all ${activeTab === "profile" ? "text-indigo-400" : "text-slate-500 hover:text-slate-300"
              }`}
          >
            <div className="h-6 w-6 mb-1 rounded-lg bg-indigo-600 flex items-center justify-center text-white text-[10px] font-black shadow-[0_4px_10px_rgba(79,70,229,0.35)]">
              S
            </div>
            <span className="text-[10px] font-bold uppercase tracking-[0.15em]">Sov</span>
          </button>
        </div>
      </nav>
    </div>
  );
}
