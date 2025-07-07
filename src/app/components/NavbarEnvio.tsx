import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-yellow-400 w-full">
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-center">
          <p className="font-bold uppercase text-black text-sm md:text-base">
            Envio gratis a partir de $600
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;