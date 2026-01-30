"use client";

import { useState } from "react";
import { HiPhone, HiMail, HiPencil, HiLocationMarker } from "react-icons/hi";
import { BsWhatsapp } from "react-icons/bs";

export default function LeadDetailPage() {
  const [activeTab, setActiveTab] = useState("info");

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 pb-8">
      {/* Profile Header */}
      <div className="px-6 py-8">
        <div className="rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 p-6 mb-6">
          <div className="flex items-center space-x-4 mb-4">
            {/* Avatar */}
            <div className="h-20 w-20 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center text-white text-3xl font-bold overflow-hidden">
              <img
                src="https://i.pravatar.cc/150?img=12"
                alt="Alex Johnson"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Name & Company */}
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-white">Alex Johnson</h1>
              <p className="text-white/70">TechSolutions Inc.</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-4 gap-3 mb-6">
          <button className="flex flex-col items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-4 hover:bg-white/20 transition-all">
            <HiPhone className="h-8 w-8 text-white mb-2" />
            <span className="text-xs text-white font-medium">Call</span>
          </button>

          <button className="flex flex-col items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-4 hover:bg-white/20 transition-all">
            <HiMail className="h-8 w-8 text-white mb-2" />
            <span className="text-xs text-white font-medium">Email</span>
          </button>

          <button className="flex flex-col items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-4 hover:bg-white/20 transition-all">
            <BsWhatsapp className="h-8 w-8 text-white mb-2" />
            <span className="text-xs text-white font-medium">WhatsApp</span>
          </button>

          <button className="flex flex-col items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-4 hover:bg-white/20 transition-all">
            <HiPencil className="h-8 w-8 text-white mb-2" />
            <span className="text-xs text-white font-medium">Edit</span>
          </button>
        </div>

        {/* Tabs */}
        <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-1 mb-6 grid grid-cols-3">
          {["info", "activity", "notes"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-xl py-3 text-sm font-semibold capitalize transition-all ${
                activeTab === tab
                  ? "bg-white/20 text-white"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content - Info Tab */}
        {activeTab === "info" && (
          <div className="space-y-4">
            {/* Contact Information */}
            <div className="rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 p-6">
              <h3 className="text-xl font-bold text-white mb-4">
                Contact Information
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <HiPhone className="h-5 w-5 text-white/70" />
                  <div>
                    <p className="text-white/60 text-sm">Phone:</p>
                    <p className="text-white font-medium">+1 555-0123</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <HiMail className="h-5 w-5 text-white/70" />
                  <div>
                    <p className="text-white/60 text-sm">Email:</p>
                    <p className="text-white font-medium">
                      alex.johnson@techsolutions.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <HiLocationMarker className="h-5 w-5 text-white/70" />
                  <div>
                    <p className="text-white/60 text-sm">Location:</p>
                    <p className="text-white font-medium">
                      San Francisco, CA
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Custom Fields */}
            <div className="rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 p-6">
              <h3 className="text-xl font-bold text-white mb-4">
                Custom Fields
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-white/70">Lead Score:</span>
                  <span className="text-white font-semibold">85</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Source:</span>
                  <span className="text-white font-semibold">
                    LinkedIn Campaign
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Tags:</span>
                  <span className="text-white font-semibold">
                    Enterprise, Q4 Priority
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Status:</span>
                  <span className="text-green-400 font-semibold">
                    In Progress
                  </span>
                </div>
              </div>
            </div>

            {/* Automation Status */}
            <div className="rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 p-6">
              <h3 className="text-xl font-bold text-white mb-4">
                Automation Status
              </h3>
              
              {/* Progress Bar */}
              <div className="mb-4">
                <div className="h-2 w-full rounded-full bg-white/20">
                  <div className="h-2 w-3/4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"></div>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <p className="text-white/70 text-sm mb-1">
                    Active Campaign:
                  </p>
                  <p className="text-white font-semibold">
                    Nurture Sequence - Q3
                  </p>
                </div>
                <div>
                  <p className="text-white/70 text-sm mb-1">Current Step:</p>
                  <p className="text-white font-semibold">
                    Email #4 - "Following Up"
                  </p>
                </div>
                <div>
                  <p className="text-white/70 text-sm mb-1">Next Action:</p>
                  <p className="text-white font-semibold">
                    Call - Tomorrow, 10:00 AM
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Activity Tab */}
        {activeTab === "activity" && (
          <div className="rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 p-6">
            <h3 className="text-xl font-bold text-white mb-4">
              Recent Activity
            </h3>
            <div className="space-y-3">
              {[
                { type: "email", text: "Email opened", time: "2 hours ago" },
                { type: "call", text: "Phone call - 15 min", time: "Yesterday" },
                { type: "note", text: "Added follow-up note", time: "2 days ago" },
              ].map((activity, idx) => (
                <div
                  key={idx}
                  className="flex items-center space-x-3 rounded-xl bg-white/5 p-3"
                >
                  <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center text-white">
                    {activity.type === "email" && "📧"}
                    {activity.type === "call" && "📞"}
                    {activity.type === "note" && "📝"}
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-medium">{activity.text}</p>
                    <p className="text-white/60 text-sm">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Notes Tab */}
        {activeTab === "notes" && (
          <div className="rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 p-6">
            <h3 className="text-xl font-bold text-white mb-4">Notes</h3>
            <textarea
              placeholder="Add a note..."
              rows={6}
              className="w-full rounded-xl bg-white/5 border border-white/20 p-4 text-white placeholder-white/50 outline-none focus:bg-white/10 focus:border-white/30"
            ></textarea>
            <button className="mt-4 w-full rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 py-3 text-white font-semibold hover:from-blue-600 hover:to-purple-700 transition-all">
              Save Note
            </button>
          </div>
        )}
      </div>

      {/* AutoLeads Footer */}
      <div className="text-center">
        <p className="text-white/40 text-sm flex items-center justify-center">
          <span className="mr-2">🚀</span>
          AutoLeads
        </p>
      </div>
    </div>
  );
}
