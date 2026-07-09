import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="text-xl font-bold text-white tracking-tight">
              OSVALDO OCHOA
            </a>

            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#"
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                Work
              </a>
              <a
                href="#"
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                About
              </a>
              <a
                href="#"
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                Services
              </a>
              <a
                href="#"
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                Contact
              </a>
            </nav>

            <div className="hidden md:block">
              <a
                href="#contact"
                className="inline-flex items-center px-4 py-2 border border-white/20 rounded-full text-sm font-medium text-white hover:bg-white hover:text-black transition-all"
              >
                Let's talk
              </a>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="fixed top-16 left-0 w-full z-40 bg-black/90 backdrop-blur-sm border-t border-white/10 md:hidden">
          <div className="px-4 py-4 space-y-3">
            <a
              href="#"
              className="block text-sm text-gray-300 hover:text-white transition-colors"
            >
              Work
            </a>
            <a
              href="#"
              className="block text-sm text-gray-300 hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#"
              className="block text-sm text-gray-300 hover:text-white transition-colors"
            >
              Services
            </a>
            <a
              href="#"
              className="block text-sm text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </a>
            <a
              href="#contact"
              className="block w-full text-center px-4 py-2 border border-white/50 rounded-full text-sm font-medium text-white hover:bg-white hover:text-black transition-all"
            >
              Let's talk
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
