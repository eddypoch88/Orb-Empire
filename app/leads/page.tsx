"use client";

import { useState } from "react";
import { HiSearch, HiPhone, HiMail, HiUser } from "react-icons/hi";
import { BsHouseFill } from "react-icons/bs";

type Lead = {
  id: string;
  name: string;
  company: string;
  lastInteraction: string;
  status: "hot" | "warm" | "cold";
};

export default function LeadsPage() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const leads: Lead[] = [
    {
      id: "1",
      name: "Alex Johnson",
      company: "Apex Solutions",
      lastInteraction: "2 hours ago",
      status: "hot",
    },
    {
      id: "2",
      name: "Sarah Lee",
      company: "Innovate Tech",
      lastInteraction: "Yesterday",
      status: "warm",
    },
    {
      id: "3",
      name: "David Kim",
      company: "Global Ventures",
      lastInteraction: "3 days ago",
      status: "cold",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "hot":
        return "bg-red-500";
      case "warm":
        return "bg-orange-500";
      case "cold":
        return "bg-blue-400";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 pb-24">
      {/* Header */}
      <header className="px-6 py-8">
        <h1 className="text-3xl font-bold text-white text-center mb-6">
          Leads Management
        </h1>

        {/* Search Bar */}
        <div className="relative mb-6">
          <HiSearch className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/50" />
          <input
            type="text"
            placeholder="Search leads..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 py-4 pl-12 pr-4 text-white placeholder-white/50 outline-none focus:bg-white/15 focus:border-white/30"
          />
        </div>

        {/* Filter Tabs */}
        <div className="flex space-x-3 overflow-x-auto pb-2">
          {["all", "new", "contacted", "qualified"].map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`rounded-full px-6 py-3 text-sm font-semibold capitalize transition-all whitespace-nowrap ${
                selectedFilter === filter
                  ? "bg-white text-purple-900"
                  : "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </header>

      {/* Leads List */}
      <div className="px-6 space-y-4">
        {leads.map((lead) => (
          <div
            key={lead.id}
            className="rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 overflow-hidden"
          >
            {/* Lead Info */}
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-white">{lead.name}</h3>
                <span
                  className={`${getStatusColor(
                    lead.status
                  )} rounded-full px-4 py-1 text-xs font-bold text-white uppercase`}
                >
                  {lead.status}
                </span>
              </div>
              <p className="text-white/70 mb-1">{lead.company}</p>
              <p className="text-white/50 text-sm">
                Last interaction: {lead.lastInteraction}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-3 gap-0 border-t border-white/10 bg-white/5">
              <button className="flex flex-col items-center justify-center py-4 border-r border-white/10 hover:bg-white/10 transition-colors">
                <HiPhone className="h-6 w-6 text-white mb-1" />
                <span className="text-xs text-white font-medium">Call</span>
              </button>

              <button className="flex flex-col items-center justify-center py-4 border-r border-white/10 hover:bg-white/10 transition-colors">
                <HiMail className="h-6 w-6 text-white mb-1" />
                <span className="text-xs text-white font-medium">Email</span>
              </button>

              <button className="flex flex-col items-center justify-center py-4 hover:bg-white/10 transition-colors">
                <HiUser className="h-6 w-6 text-white mb-1" />
                <span className="text-xs text-white font-medium">
                  View Profile
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-indigo-900/95 to-purple-900/95 backdrop-blur-xl border-t border-white/10 px-6 py-4">
        <div className="flex justify-around items-center">
          <button className="flex flex-col items-center text-white/60">
            <BsHouseFill className="h-6 w-6 mb-1" />
            <span className="text-xs font-medium">Home</span>
          </button>

          <button className="flex flex-col items-center text-cyan-400">
            <HiUser className="h-6 w-6 mb-1" />
            <span className="text-xs font-medium">Leads</span>
          </button>

          <button className="flex flex-col items-center text-white/60">
            <svg className="h-6 w-6 mb-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13 7H7v6h6V7z" />
              <path fillRule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clipRule="evenodd" />
            </svg>
            <span className="text-xs font-medium">Automation</span>
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
