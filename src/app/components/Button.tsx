//Escribimos rafce para crear un componente funcional en React, es lo que estas viendo aqui:

import React from 'react'

const Button = () => {
  return (
    <button className="
      bg-blue-500 
      hover:bg-blue-700 
      text-white 
      font-bold 
      py-2 px-4 
      rounded 
      transition 
      duration-200 
      ease-in-out
      transform 
      hover:scale-105
      focus:outline-none 
      focus:ring-2 
      focus:ring-blue-500 
      focus:ring-opacity-50
      shadow-md
      hover:shadow-lg
    ">
      Button
    </button>
  )
}

export default Button