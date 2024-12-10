"use client";

import { useState, useCallback } from "react";
import {
  FaUser,
  FaUserCircle,
  FaInfoCircle,
  FaEnvelope,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import { MdMedicalServices } from "react-icons/md";
import Link from "next/link";

const NavLink = ({ href, icon, children }) => (
  <Link
    href={href}
    className="flex items-center text-gray-600 hover:text-primary-100 font-medium"
  >
    {icon && <span className="mr-2">{icon}</span>}
    {children}
  </Link>
);

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen((prev) => !prev);
  }, []);

  const toggleDropdown = useCallback(() => {
    setDropdownOpen((prev) => !prev);
  }, []);

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50 mb-4">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          className="text-2xl font-semibold text-primary-100 hover:text-primary-200"
        >
          <span className="text-secondary-100">MD</span>Home
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <NavLink href="/services">Servicios</NavLink>
          <NavLink href="/doctors">Doctores</NavLink>
          <NavLink href="/about">Acerca de</NavLink>
          <NavLink href="/contact">Contacto</NavLink>
        </nav>

        {/* CTA Button */}
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="hidden sm:flex sm:items-center bg-primary-100 text-white px-6 py-2 rounded-md hover:bg-primary-200"
            aria-haspopup="true"
            aria-expanded={isDropdownOpen}
          >
            <FaUser className="h-4 w-4 mr-2" />
            Neider
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50">
              <div className="py-2 px-4 space-y-1 flex-col">
                <NavLink href="/profile" icon={<FaUserCircle />}>
                  Mi Perfil
                </NavLink>
                <NavLink href="/settings" icon={<FaCog />}>
                  Configuraciones
                </NavLink>
                <NavLink href="/logout" icon={<FaSignOutAlt />}>
                  Cerrar Sesión
                </NavLink>
              </div>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center text-gray-600 focus:outline-none"
          aria-label="Toggle navigation"
          onClick={toggleMobileMenu}
          aria-expanded={isMobileMenuOpen}
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col space-y-4 p-4">
            <NavLink href="/" icon={<MdMedicalServices />}>
              Solicitar Servicio
            </NavLink>
            <NavLink href="/profile" icon={<FaUserCircle />}>
              Mi Perfil
            </NavLink>
            <NavLink href="/settings" icon={<FaCog />}>
              Configuraciones
            </NavLink>
            <NavLink href="/about" icon={<FaInfoCircle />}>
              Acerca de
            </NavLink>
            <NavLink href="/contact" icon={<FaEnvelope />}>
              Contacto
            </NavLink>
            <Link
              href="/sign-in"
              className="flex items-center mt-16 bg-primary-200 text-gray-100 hover:text-primary-100 font-medium px-2 py-1 rounded-md"
            >
              <FaUser className="mr-2" /> Iniciar Sesión
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
