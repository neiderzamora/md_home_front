import a from "next/link";

export default function Navbar() {
  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50 mb-4">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/">
          <a className="text-2xl font-semibold text-primary-100 hover:text-primary-200">
            <span className="text-secondary-100">MD</span>Home
          </a>
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <a href="/services">
            <a className="text-gray-600 hover:text-primary-100 font-medium">Servicios</a>
          </a>
          <a href="/doctors">
            <a className="text-gray-600 hover:text-primary-100 font-medium">Doctores</a>
          </a>
          <a href="/about">
            <a className="text-gray-600 hover:text-primary-100 font-medium">Acerca de</a>
          </a>
          <a href="/contact">
            <a className="text-gray-600 hover:text-primary-100 font-medium">Contacto</a>
          </a>
        </nav>

        {/* CTA Button */}
        <a href="/login">
          <a className="hidden md:block bg-primary-100 text-white px-6 py-2 rounded-md hover:bg-primary-200">
            Iniciar Sesión
          </a>
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center text-gray-600 focus:outline-none"
          aria-label="Toggle navigation"
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
    </header>
  );
}
