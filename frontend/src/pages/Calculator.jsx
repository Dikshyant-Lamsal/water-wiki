import React, { useState } from 'react';

export default function Calculator() {
  const [area, setArea] = useState(1);
  const [method, setMethod] = useState('flood');

  const waterUsePerHa = { flood: 1000, sprinkler: 700, drip: 400 };
  const current = (waterUsePerHa[method] || 0) * area;
  const drip = waterUsePerHa['drip'] * area;
  const savings = Math.max(0, current - drip);

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-3">Irrigation Savings Calculator</h2>
      <label className="block mb-2">Area (hectares)</label>
      <input type="number" min="0" value={area} onChange={e=>setArea(Number(e.target.value)||0)} className="border p-2 rounded mb-3 w-40" />

      <label className="block mb-2">Current method</label>
      <select value={method} onChange={e=>setMethod(e.target.value)} className="border p-2 rounded mb-3">
        <option value="flood">Flood</option>
        <option value="sprinkler">Sprinkler</option>
        <option value="drip">Drip</option>
      </select>

      <div className="mt-3 text-sm">
        <p>Estimated current water use: <strong>{current} m³</strong></p>
        <p>Estimated water use (drip): <strong>{drip} m³</strong></p>
        <p className="mt-2">Potential savings switching to drip: <strong>{savings} m³</strong></p>
      </div>

      <p className="mt-3 text-xs text-gray-500">India</p>
    </div>
  );
}
