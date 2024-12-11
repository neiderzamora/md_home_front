"use client";

import { useState, useCallback } from "react";
import { PatienceDropdownMenu, PatienceNavlinks, PatienceMobileMenu, DoctorMobileMenu, DoctorDropdownMenu, DoctorNavlinks } from "./List";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

import { FaUser } from "react-icons/fa";
import Link from "next/link";

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
        <Link
          href="/"
          className="text-2xl font-semibold text-primary-100 hover:text-primary-200"
        >
          <span className="text-secondary-100">MD</span>Home
        </Link>

        {/* Navigation Links */}
        <DoctorNavlinks />

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
              <DoctorDropdownMenu />
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
          <HiOutlineMenuAlt3 className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <DoctorMobileMenu />
        </div>
      )}
    </header>
  );
}
