"use client"
import Navbar from "../COMPONENTS/Navbar";
import { useState } from 'react';
import { InputField } from "../REUTILIZABLES/inputField";
import { CheckboxItem } from "../REUTILIZABLES/checkboxItem";

type FormData = {
  nombre: string;
  telefono: string;
  correo: string;
  intereses: string[];
};

const INTERESES_OPCIONES = [
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
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleInteresChange = (interes: string) => {
    setFormData(prev => {
      if (prev.intereses.includes(interes)) {
        return { ...prev, intereses: prev.intereses.filter(i => i !== interes) };
      }
      return { 
        ...prev, 
        intereses: prev.intereses.length < 2 ? [...prev.intereses, interes] : prev.intereses 
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Datos enviados:', formData);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-gray-100 p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-center mb-6 text-black">Registrarse</h1>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <InputField 
              label="Nombre completo"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleInputChange}
              type="text"
              required
            />

            <InputField 
              label="Teléfono"
              id="telefono"
              name="telefono"
              value={formData.telefono}
              onChange={handleInputChange}
              type="tel"
              required
            />

            <InputField 
              label="Correo electrónico"
              id="correo"
              name="correo"
              value={formData.correo}
              onChange={handleInputChange}
              type="email"
              required
            />

            <div>
              <p className="text-sm font-medium text-black mb-2">Intereses principales (elige 2)</p>
              <div className="space-y-2">
                {INTERESES_OPCIONES.map(interes => (
                  <CheckboxItem 
                    key={interes}
                    label={interes}
                    checked={formData.intereses.includes(interes)}
                    onChange={() => handleInteresChange(interes)}
                    disabled={formData.intereses.length >= 2 && !formData.intereses.includes(interes)}
                  />
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Registrar
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}


