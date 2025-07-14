import React from 'react';

// Componente reutilizable para checkboxes

export const CheckboxItem = ({ 
  label, checked, onChange, disabled 
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
  disabled?: boolean;
}) => (
  <div className="flex items-center">
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      disabled={disabled}
      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
    />
    <label className="ml-2 text-sm text-black">{label}</label>
  </div>
);

