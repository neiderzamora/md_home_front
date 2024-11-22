import React from "react";
import { InputField } from "./inputField";
import { SelectField } from "./SelectField";
import Logo from "../sign-in/logo";
import Link from "next/link";

export default function RegisterForm() {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-8 lg:px-6 lg:py-12">
      <Logo />
      <form className="w-full max-w-5xl">
        <div className="space-y-8 lg:space-y-12">
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            {/* Nombre y Apellido */}
            <InputField id="name" name="name" label="Nombre" required />
            <InputField
              id="last_name"
              name="last_name"
              label="Apellido"
              required
            />
          </div>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            {/* Tipo y Número de Identificación */}
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
            />
            <InputField
              id="identification_number"
              name="identification_number"
              label="Número de Identificación"
              required
            />
          </div>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            {/* Fecha de Nacimiento y Teléfono */}
            <InputField
              colchange={"sm:col-span-1"}
              id="birthdate"
              name="birthdate"
              type="date"
              label="Fecha de Nacimiento"
              required
            />
            <InputField
              colchange={"sm:col-span-2"}
              id="telephone"
              name="telephone"
              type="tel"
              label="Teléfono"
              required
            />
            <InputField
              id="address"
              name="address"
              type="text"
              label="Dirección"
              placeholder="Barrio - direccion"
              required
            />
          </div>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            {/* Email y Foto de Perfil */}
            <InputField
              id="email"
              name="email"
              type="email"
              label="Email"
              required
            />
            <InputField
              id="profile_photo"
              name="profile_photo"
              type="file"
              label="Foto de Perfil (opcional)"
            />
          </div>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            {/* Contraseñas */}
            <InputField id="eps" name="eps" type="text" label="EPS" required />

            <InputField
              id="prepaid_medicine"
              name="prepaid_medicine"
              type="text"
              label="Medicina Prepagada"
            />
          </div>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            {/* Contraseñas */}
            <InputField
              id="password"
              name="password"
              type="password"
              label="Contraseña"
              required
            />

            <InputField
              id="password2"
              name="password2"
              type="password"
              label="Repetir Contraseña"
              required
            />
          </div>
          <div class="flex items-center">
            <input
              id="remember-me"
              type="checkbox"
              className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label
              htmlFor="remember-me"
              className="text-gray-800 ml-3 block text-sm"
            >
              I accept the Terms and Conditions
            </label>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-1 bg-indigo-600 text-white font-bold text-center py-2 rounded-lg">
              Registrarse
            </div>
            <div className="sm:col-span-1 bg-gray-600 text-white font-bold text-center py-2 rounded-lg">
              <Link href='/sign-in'>
              Iniciar Sesión
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
