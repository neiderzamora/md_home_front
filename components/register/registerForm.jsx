"use client";

import React, { useState } from "react";
import { InputField } from "./inputField";
import { SelectField } from "./selectField";
import Logo from "../sign-in/logo";
import Link from "next/link";
import { toast } from 'nextjs-toast-notify';
import "nextjs-toast-notify/dist/nextjs-toast-notify.css";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    name: '',
    last_name: '',
    gender: '',
    identification_type: '',
    identification_number: '',
    birthdate: '',
    telephone: '',
    address: '',
    email: '',
    profile_photo: null,
    eps: '',
    prepaid_medicine: '',
    password: '',
    password2: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validación simple
    if (!formData.name || !formData.email || !formData.password) {
      toast.error('Por favor, completa todos los campos requeridos.', {
        duration: 5000,
        position: "top-center",
      });
      return;
    }

    // Simulación de envío de datos
    toast.success('Registro exitoso!', {
      duration: 5000,
      position: "top-center",
    });
  };

  return (
    <div className="flex flex-col items-center justify-center px-4 py-8 lg:px-6 lg:py-12">
      <Logo />
      <form onSubmit={handleSubmit} className="w-full max-w-5xl space-y-8">
        
        {/* Sección de Información Personal */}
        <fieldset className="border p-4 rounded-md">
          <legend className="text-xl font-bold text-primary-100">Información Personal</legend>
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <InputField id="name" name="name" label="Nombre" required value={formData.name} onChange={handleChange} />
            <InputField id="last_name" name="last_name" label="Apellido" required value={formData.last_name} onChange={handleChange} />
            <SelectField
              id="identification_type"
              name="identification_type"
              label="Tipo de Identificación"
              required
              options={[
                { value: "CC", label: "Cédula de Ciudadanía" },
                { value: "TI", label: "Tarjeta de Identidad" },
                { value: "CE", label: "Cédula de Extranjería" },
              ]}
              value={formData.identification_type}
              onChange={handleChange}
            />
            <InputField id="identification_number" name="identification_number" label="Número de Identificación" required value={formData.identification_number} onChange={handleChange} />
          </div>
        </fieldset>

        {/* Sección de Contacto */}
        <fieldset className="border p-4 rounded-md">
          <legend className="text-xl font-bold text-primary-100">Información de Contacto</legend>
          <div className=" grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <InputField
              id="birthdate"
              name="birthdate"
              type="date"
              label="Fecha de Nacimiento"
              required
              value={formData.birthdate}
              onChange={handleChange}
            />
            <SelectField
              id="gender"
              name="gender"
              label="Género"
              required
              options={[
                { value: "M", label: "Masculino" },
                { value: "F", label: "Femenino" }
              ]}
              value={formData.gender}
              onChange={handleChange}
            />
            <InputField
              id="telephone"
              name="telephone"
              type="tel"
              label="Teléfono"
              required
              value={formData.telephone}
              onChange={handleChange}
            />
            <InputField
              id="address"
              name="address"
              type="text"
              label="Dirección"
              placeholder="Barrio - dirección"
 required
              value={formData.address}
              onChange={handleChange}
            />
            <InputField
              id="email"
              name="email"
              type="email"
              label="Correo Electrónico"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </fieldset>

        {/* Sección de Salud */}
        <fieldset className="border p-4 rounded-md">
          <legend className="text-xl font-bold text-primary-100">Información de Salud</legend>
          <div className=" grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <InputField
              id="eps"
              name="eps"
              label="EPS"
              required
              value={formData.eps}
              onChange={handleChange}
            />
            <InputField
              id="prepaid_medicine"
              name="prepaid_medicine"
              label="Medicina Prepagada"
              required
              value={formData.prepaid_medicine}
              onChange={handleChange}
            />
          </div>
        </fieldset>

        {/* Sección de Contraseña */}
        <fieldset className="border p-4 rounded-md">
          <legend className="text-xl font-bold text-primary-100">Contraseña</legend>
          <div className=" grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <InputField
              id="password"
              name="password"
              type="password"
              label="Contraseña"
              required
              value={formData.password}
              onChange={handleChange}
            />
            <InputField
              id="password2"
              name="password2"
              type="password"
              label="Confirmar Contraseña"
              required
              value={formData.password2}
              onChange={handleChange}
            />
          </div>
        </fieldset>

        {/* Aceptación de Términos */}
        <div className="flex items-center mt-4">
          <input id="remember-me" type="checkbox" className="h-4 w-4 text-primary-100 focus:ring-primary-200 border-gray-300 rounded" />
          <label htmlFor="remember-me" className="ml-3 block text-lg">Acepto los Términos y Condiciones</label>
        </div>

        {/* Botones de Envío */}
        <div className=" grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <button type="submit" className="sm:col-span-1 bg-primary-100 text-white font-bold text-center py-2 rounded-lg text-lg hover:bg-primary-200 transition duration-300">
            Registrarse
          </button>
          <div className="sm:col-span-1 bg-secondary-200 text-white font-bold text-center py-2 rounded-lg text-lg">
            <Link href='/sign-in'>Iniciar Sesión</Link>
          </div>
        </div>
      </form>
    </div>
  );
}