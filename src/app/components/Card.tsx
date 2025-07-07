// components/Card.tsx
import React from 'react';

const Card = () => {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white">
      <div className="px-6 py-4">
        <div className="flex justify-center">
          <div className="h-24 w-24 rounded-full bg-gray-300 overflow-hidden border-4 border-purple-500">
            <img 
              src="https://static.vecteezy.com/system/resources/previews/002/387/693/non_2x/user-profile-icon-free-vector.jpg" 
              alt="Profile" 
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="text-center mt-4">
          <h2 className="text-xl font-bold text-gray-800">Karina Noemi Pastrana Gil</h2>
          <p className="text-purple-600 font-semibold">Desarrollador en SoftWare</p>
          <p className="text-gray-600 mt-2">Ing De La Universidad UNID</p>
        </div>
      </div>
      <div className="px-6 pt-2 pb-4 flex justify-center space-x-4">
        <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg">
          Contactar
        </button>
      </div>
    </div>
  );
};

export default Card;