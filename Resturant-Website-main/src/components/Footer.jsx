import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYelp,
  FaTripadvisor,
} from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-amber-900 text-white pt-14 pb-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center sm:text-left">
          {/* Restaurant Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold">Savory Bites</h3>
            <p className="text-amber-100">
              Bringing authentic flavors and warm hospitality to your table
              since 2010.
            </p>
            <div className="flex sm:justify-start justify-center items-center space-x-3 pt-2">
              <div className="w-10 h-10 bg-amber-800 rounded-full flex items-center justify-center">
                ⭐
              </div>
              <div className="text-left">
                <p className="font-medium text-sm">Rated 4.9/5</p>
                <p className="text-xs text-amber-200">500+ Reviews</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-amber-800 pb-1">
              Explore
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { to: "/", label: "Home" },
                { to: "/menu", label: "Our Menu" },
                { to: "/about", label: "Our Story" },
                { to: "/gallery", label: "Gallery" },
                { to: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-amber-100 hover:text-white transition-colors flex items-center justify-center sm:justify-start"
                  >
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-amber-800 pb-1">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-amber-100">
              <li className="flex justify-center sm:justify-start items-center gap-3">
                <MdLocationOn className="text-lg" />
                Main Street, Suleman Pahore
              </li>
              <li className="flex justify-center sm:justify-start items-center gap-3">
                <MdPhone className="text-lg" />
                +92 312 3456789
              </li>
              <li className="flex justify-center sm:justify-start items-center gap-3">
                <MdEmail className="text-lg" />
                contact@savorybites.com
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-amber-800 pb-1">
              Newsletter
            </h4>
            <p className="text-sm text-amber-100 mb-4">
              Get our latest offers in your inbox!
            </p>
            <form className="flex flex-col sm:flex-row items-center sm:items-stretch gap-3 w-full max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 text-sm text-gray-900 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition"
              />
              <button
                type="submit"
                className="bg-amber-600 hover:bg-amber-700 text-white text-sm px-6 py-3 rounded-md transition shadow-sm w-full sm:w-auto"
              >
                Subscribe
              </button>
            </form>

            <div className="flex justify-center sm:justify-start mt-4 space-x-4 text-lg">
              <a
                href="#"
                aria-label="Facebook"
                className="hover:text-white transition"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-white transition"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="hover:text-white transition"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                aria-label="Yelp"
                className="hover:text-white transition"
              >
                <FaYelp />
              </a>
              <a
                href="#"
                aria-label="Tripadvisor"
                className="hover:text-white transition"
              >
                <FaTripadvisor />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="border-t border-amber-800 mt-10 pt-4 text-center text-sm text-amber-200">
          &copy; {new Date().getFullYear()} Savory Bites. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
