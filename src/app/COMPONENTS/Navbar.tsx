"use client"
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between h-16">

          {/* Logo y menú principal */}
{/* Logo y menú principal */}
<ul className="flex items-center">
  <Link href="/">
    <img 
      src="/logo.svg" 
      alt="Logo de mi marca" 
      className="h-30 w-auto mt-10 mb-7 mx-auto"  // Ajusta el tamaño según necesites
    />
  </Link>
</ul>

{/* Menú desktop */}
<ul className="hidden md:flex items-center space-x-8">
  {[
    { href: "/productos", text: "Productos" },
    { href: "/Ofertas esclusivas", text: "Ofertas exclusivas" },
    { href: "/Kits para Principiantes", text: "Kits para Principiantes" },
    { href: "/Patrones Exclusivos", text: "Patrones Exclusivos" },
  ].map((item) => (
    <Link
      key={item.href}
      href={item.href}
      className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium"
    >
      {item.text}
    </Link>
  ))}
  
  <Link
    href="/registrarse"
    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium"
  >
    Registrarse
  </Link>
</ul>

          {/* Botón móvil */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {!isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">
              Productos
            </Link>
            <a href="/servicios" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">
              Ofertas exclusivas
            </a>
            <a href="/Kits para Principiantes" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">
              Kits para Principiantes
            </a>
            <a href="/Patrones Exclusivos" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">
              Patrones Exclusivos
            </a>
            <button className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
              Registrarse
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;