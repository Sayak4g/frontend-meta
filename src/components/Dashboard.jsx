// pages/Dashboard.jsx

import React from 'react';

const Dashboard = () => {
  // Dummy data — replace with real API data
  const stats = [
    { title: "Total Gestures Today", value: 128, icon: "🤟" },
    { title: "Recognition Accuracy", value: "94%", icon: "🎯" },
    { title: "Active Sessions", value: 3, icon: "🟢" },
    { title: "Total Playback Sessions", value: 42, icon: "⏪" },
  ];

  const recentSessions = [
    { id: 1, date: "2025-09-06", gestures: 18, accuracy: "95%" },
    { id: 2, date: "2025-09-05", gestures: 22, accuracy: "92%" },
    { id: 3, date: "2025-09-04", gestures: 12, accuracy: "97%" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 flex items-center space-x-4"
          >
            <div className="text-3xl">{stat.icon}</div>
            <div>
              <div className="text-gray-600 text-sm">{stat.title}</div>
              <div className="text-xl font-bold">{stat.value}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Sessions */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Recent Sessions</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-gray-100 text-gray-600 uppercase">
              <tr>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Gestures</th>
                <th className="px-4 py-2">Accuracy</th>
              </tr>
            </thead>
            <tbody>
              {recentSessions.map((session) => (
                <tr key={session.id} className="border-t">
                  <td className="px-4 py-2">{session.date}</td>
                  <td className="px-4 py-2">{session.gestures}</td>
                  <td className="px-4 py-2">{session.accuracy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Premium CTA */}
      <div className="mt-10 p-6 bg-indigo-600 text-white rounded-lg flex flex-col md:flex-row justify-between items-center">
        <div className="text-lg font-medium">
          Unlock advanced analytics and unlimited sessions.
        </div>
        <a
          href="/premium"
          className="mt-4 md:mt-0 bg-white text-indigo-600 px-6 py-2 rounded hover:bg-gray-100 font-semibold transition"
        >
          Go Premium
        </a>
      </div>
    </div>
  );
};

export default Dashboard;
