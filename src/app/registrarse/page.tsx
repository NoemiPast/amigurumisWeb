"use client"
import Navbar from "../components/Navbar";
import { useState } from 'react';

type FormData = {
  nombre: string;
  telefono: string;
  correo: string;
  intereses: string[];
};

const interesesOpciones = [
  'Hilazas',
  'Agujas / Ganchillos',
  'Relleno y Cultura',
  'Patrones exclusivos'
];

export default function HojaRegistro() {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    telefono: '',
    correo: '',
    intereses: []
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleInteresChange = (interes: string) => {
    setFormData(prev => {
      if (prev.intereses.includes(interes)) {
        return {
          ...prev,
          intereses: prev.intereses.filter(i => i !== interes)
        };
      } else {
        return {
          ...prev,
          intereses: prev.intereses.length < 2 
            ? [...prev.intereses, interes] 
            : prev.intereses
        };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Datos enviados:', formData);
    // Aquí puedes agregar la lógica para enviar los datos
  };

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-white p-4">
      <div className="max-w-md mx-auto bg-gray-100 p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-black">Formulario de Registro</h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="nombre" className="block text-sm font-medium text-black">
              Nombre completo
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-black"
              required
            />
          </div>

          <div>
            <label htmlFor="telefono" className="block text-sm font-medium text-black">
              Teléfono
            </label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              value={formData.telefono}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-black"
              required
            />
          </div>

          <div>
            <label htmlFor="correo" className="block text-sm font-medium text-black">
              Correo electrónico
            </label>
            <input
              type="email"
              id="correo"
              name="correo"
              value={formData.correo}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-black"
              required
            />
          </div>

          <div>
            <p className="text-sm font-medium text-black mb-2">Intereses principales (elige 2)</p>
            <div className="space-y-2">
              {interesesOpciones.map((interes) => (
                <div key={interes} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`interes-${interes}`}
                    checked={formData.intereses.includes(interes)}
                    onChange={() => handleInteresChange(interes)}
                    disabled={formData.intereses.length >= 2 && !formData.intereses.includes(interes)}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label htmlFor={`interes-${interes}`} className="ml-2 text-sm text-black">
                    {interes}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Registrar
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
}