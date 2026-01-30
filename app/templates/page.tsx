"use client";

import { useState } from "react";
import { HiSearch } from "react-icons/hi";

type Template = {
  id: string;
  title: string;
  category: string;
  isPremium?: boolean;
  image: string;
  description?: string;
};

export default function EmailTemplatesPage() {
  const [selectedCategory, setSelectedCategory] = useState("welcome");
  const [searchQuery, setSearchQuery] = useState("");

  const templates: Template[] = [
    {
      id: "1",
      title: "Modern Welcome Series",
      category: "welcome",
      image: "📧",
    },
    {
      id: "2",
      title: "Warm Follow-up Note",
      category: "follow-up",
      image: "💌",
    },
    {
      id: "3",
      title: "Warm Follow-up Note",
      category: "follow-up",
      image: "✉️",
    },
    {
      id: "4",
      title: "Warm Follow-up Note",
      category: "follow-up",
      image: "📨",
    },
    {
      id: "5",
      title: "Warm Follow-up Note",
      category: "follow-up",
      image: "📩",
    },
    {
      id: "6",
      title: "Premium Outreach Sequence",
      category: "outreach",
      isPremium: true,
      image: "💎",
    },
    {
      id: "7",
      title: "Premium Outreach Sequence",
      category: "outreach",
      isPremium: true,
      image: "⭐",
      description: "Boke up your bushist network app.",
    },
    {
      id: "8",
      title: "Grop up Toward",
      category: "closing",
      isPremium: true,
      image: "🎯",
    },
    {
      id: "9",
      title: "Closing Email",
      category: "closing",
      isPremium: true,
      image: "🏆",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 pb-8">
      {/* Header */}
      <header className="px-6 py-8">
        <h1 className="text-3xl font-bold text-white text-center mb-6">
          Email Template Library
        </h1>

        {/* Search Bar */}
        <div className="relative mb-6">
          <HiSearch className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/50" />
          <input
            type="text"
            placeholder="Search Templates"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 py-4 pl-12 pr-4 text-white placeholder-white/50 outline-none focus:bg-white/15 focus:border-white/30"
          />
        </div>

        {/* Category Tabs */}
        <div className="flex space-x-3 overflow-x-auto pb-2">
          {["welcome", "follow-up", "cold-outreach", "closing"].map(
            (category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-5 py-3 text-sm font-semibold capitalize transition-all whitespace-nowrap ${
                  selectedCategory === category
                    ? "bg-white text-purple-900"
                    : "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20"
                }`}
              >
                {category.replace("-", " ")}
              </button>
            )
          )}
        </div>
      </header>

      {/* Templates Grid */}
      <div className="px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {templates.map((template) => (
          <div
            key={template.id}
            className="rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 overflow-hidden"
          >
            {/* Template Preview */}
            <div className="relative h-40 bg-white/5 flex items-center justify-center">
              {template.isPremium && (
                <div className="absolute top-3 right-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 px-3 py-1">
                  <span className="text-xs font-bold text-white">Premium</span>
                </div>
              )}
              <div className="text-6xl">{template.image}</div>
            </div>

            {/* Template Info */}
            <div className="p-4">
              <h3 className="text-white font-bold mb-1">{template.title}</h3>
              {template.description && (
                <p className="text-white/60 text-sm mb-3">
                  {template.description}
                </p>
              )}

              <button className="w-full rounded-xl bg-white/10 backdrop-blur-md border border-white/20 py-3 text-white font-semibold hover:bg-white/20 transition-all">
                Use Template
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
