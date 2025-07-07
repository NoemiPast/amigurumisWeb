// components/Table.tsx
import React from 'react';

const Table = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
        <thead className="bg-purple-500 text-white">
          <tr>
            <th className="py-3 px-4 text-left">Multiplicación</th>
            <th className="py-3 px-4 text-left">Resultado</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
            <tr key={num} className="hover:bg-gray-50">
              <td className="py-3 px-4">3 × {num}</td>
              <td className="py-3 px-4 font-semibold">{3 * num}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;