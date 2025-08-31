import React from 'react';
export default function Home() {
    return (
      <div className="text-center mt-10">
        <h1 className="text-4xl font-bold text-blue-700">Water Efficiency Wiki</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          A community-driven resource for water-saving techniques — agriculture, household, industry and more.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded shadow">
            <h3 className="font-semibold">Read</h3>
            <p className="mt-2 text-sm">Peer-reviewed articles & case studies.</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="font-semibold">Share</h3>
            <p className="mt-2 text-sm">Ask questions and publish local solutions.</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="font-semibold">Calculate</h3>
            <p className="mt-2 text-sm">Estimate water usage and potential savings.</p>
          </div>
        </div>
      </div>
    );
  }
  