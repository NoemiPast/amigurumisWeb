// components/Image.tsx
import React from 'react';

const ImageComponent = () => {
  return (
    <div className="rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition duration-500">
      <img 
        src="https://i.pinimg.com/originals/b0/7c/a2/b07ca22f38b23be0892445c913220ff2.jpg" 
        alt="Volkswagen Vocho" 
        className="w-full h-64 object-cover"
      />
      <div className="bg-black text-white p-4">
        <h3 className="text-xl font-bold">Volkswagen Vocho</h3>
        <p className="text-gray-300">4.2L V12 - 1000 HP</p>
      </div>
    </div>
  );
};

export default ImageComponent;