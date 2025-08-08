import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const showComingSoon = (e) => {
    e.preventDefault();
    Swal.fire({
      icon: 'info',
      title: 'Coming Soon!',
      text: 'This page is coming soon!',
      confirmButtonColor: '#A17C69',
    });
  };

  return (
    <nav
      className="top-0 left-0 z-50 fixed flex justify-between items-center bg-[#E9E4D4] shadow-sm px-4 md:px-8 w-full h-16 text-[#6B6259]"
    >
      <div className="flex-shrink-0">
        <Link
          to="/"
          className="font-extrabold text-2xl tracking-wide"
          style={{ color: '#6B6259' }}
          onClick={() => setIsOpen(false)}
        >
          SuperheroDB
        </Link>
      </div>

      <div className="hidden md:flex space-x-10">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            (isActive
              ? 'font-semibold underline'
              : 'hover:underline transition') + ' text-[#6B6259]'
          }
          onClick={() => setIsOpen(false)}
        >
          Home
        </NavLink>

        {['About', 'Services', 'Blog', 'Contact'].map((item) => (
          <NavLink
            key={item}
            to={`/${item.toLowerCase()}`}
            onClick={showComingSoon}
            className="text-[#6B6259] hover:underline transition cursor-pointer"
            title="Coming soon"
          >
            {item}
          </NavLink>
        ))}
      </div>

      <button
        onClick={toggleMenu}
        className="md:hidden flex justify-center items-center p-2 rounded-md focus:outline-none focus:ring-[#6B6259] focus:ring-2 focus:ring-inset"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#6B6259"
          strokeWidth={2}
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {isOpen && (
        <div className="md:hidden top-16 left-0 z-40 absolute flex flex-col space-y-2 bg-[#E9E4D4] shadow-md px-4 py-4 w-full text-[#6B6259]">
          <NavLink
            to="/"
            end
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              (isActive
                ? 'font-semibold underline'
                : 'hover:underline transition') + ' block'
            }
          >
            Home
          </NavLink>

          {['About', 'Services', 'Blog', 'Contact'].map((item) => (
            <NavLink
              key={item}
              to={`/${item.toLowerCase()}`}
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(false);
                Swal.fire({
                  icon: 'info',
                  title: 'Coming Soon!',
                  text: 'This page is coming soon!',
                  confirmButtonColor: '#A17C69',
                });
              }}
              className="block text-[#6B6259] hover:underline transition cursor-pointer"
              title="Coming soon"
            >
              {item}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
