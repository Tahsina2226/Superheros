import React from 'react';

export default function Footer() {
  return (
    <footer
      className="bg-[#E9E4D4] mt-12 px-6 py-8 text-[#6B6259]"
    >
      <div className="gap-8 grid grid-cols-1 md:grid-cols-3 mx-auto max-w-6xl md:text-left text-center">
        <div>
          <h3 className="mb-3 font-semibold">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/services" className="hover:underline">Services</a></li>
            <li><a href="/blog" className="hover:underline">Blog</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 font-semibold">Contact Us</h3>
          <p>123 Superhero St.<br />Metropolis, NY 12345</p>
          <p className="mt-2">Email: <a href="mailto:tahsinatanvin274@gmail.com" className="hover:underline">tahsinatanvin274@gmail.com</a></p>
          <p>Phone: <a href="tel:+1234567890" className="hover:underline">+1 (234) 567-890</a></p>
        </div>

        <div>
          <h3 className="mb-3 font-semibold">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-6 text-lg">
            <a
              href="https://www.linkedin.com/in/tahsina-tanvin-8a49162b3/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M4 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm0 5h4v12H4zm6 0h3.5v1.6h.1a3.9 3.9 0 0 1 3.5-1.9c3.8 0 4.5 2.5 4.5 5.7v6.6h-4v-6c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3v6.2h-4z" />
              </svg>
            </a>
            <a
              href="https://github.com/Tahsina2226"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M12 0a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.16c-3.34.73-4.04-1.61-4.04-1.61a3.18 3.18 0 0 0-1.33-1.76c-1.09-.75.08-.74.08-.74a2.52 2.52 0 0 1 1.84 1.23 2.56 2.56 0 0 0 3.5 1 2.57 2.57 0 0 1 .76-1.61c-2.67-.3-5.47-1.33-5.47-5.93a4.63 4.63 0 0 1 1.23-3.21 4.3 4.3 0 0 1 .12-3.17s1-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.28-1.55 3.28-1.23 3.28-1.23a4.3 4.3 0 0 1 .13 3.17 4.63 4.63 0 0 1 1.23 3.21c0 4.6-2.81 5.62-5.48 5.92a2.87 2.87 0 0 1 .82 2.22v3.3c0 .32.22.7.83.58A12 12 0 0 0 12 0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-sm text-center">
        &copy; {new Date().getFullYear()} Innovix Matrix System — Superhero Database. All rights reserved.
      </div>
    </footer>
  );
}
