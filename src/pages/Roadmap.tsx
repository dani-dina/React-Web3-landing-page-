import React from 'react';

const roadmapData = [
  {
    quarter: 'Q1 2025',
    goals: [
      'Launch MVP Website',
      'Release 1000 NFTs',
      'Community Building (Discord & Twitter)',
    ],
  },
  {
    quarter: 'Q2 2025',
    goals: [
      'Whitelist Rewards',
      'Partnership Announcements',
      'Staking System Integration',
    ],
  },
  {
    quarter: 'Q3 2025',
    goals: [
      'Mobile App Launch',
      'NFT Upgrade Feature',
      'Airdrop Events',
    ],
  },
  {
    quarter: 'Q4 2025',
    goals: [
      'DAO Governance Introduction',
      'Metaverse Land Acquisition',
      'Cross-chain NFT Support',
    ],
  },
];

const Roadmap: React.FC = () => {
  return (
    <section className="bg-[#0D0D24] text-white py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">📍 Project Roadmap</h2>

        <div className="space-y-12">
          {roadmapData.map((item, index) => (
            <div
              key={index}
              className="bg-[#1B1B3A] rounded-xl p-6 border border-purple-500/20 shadow-md hover:border-purple-500 transition"
            >
              <h3 className="text-2xl font-semibold text-purple-400 mb-4">{item.quarter}</h3>
              <ul className="list-disc list-inside text-left space-y-1 text-gray-200">
                {item.goals.map((goal, idx) => (
                  <li key={idx}>{goal}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
