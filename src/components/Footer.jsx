import { motion } from "framer-motion";
import instagramIcon from "../assets/icons/instagram.svg";
import facebookIcon from "../assets/icons/facebook.svg";
import pinterestIcon from "../assets/icons/pinterest.svg";

const socialLinks = [
  {
    name: "Instagram",
    icon: instagramIcon,
    href: "#"
  },
  {
    name: "Facebook",
    icon: facebookIcon,
    href: "#"
  },
  {
    name: "Pinterest",
    icon: pinterestIcon,
    href: "#"
  }
];

export default function Footer() {
  return (
    <footer className="py-8 bg-gray-100 dark:bg-neutral-900 border-t border-gray-200 dark:border-neutral-800">
      <div className="max-w-4xl mx-auto px-8">
        <div className="flex flex-col items-center gap-6">
          {/* Brand Section */}
          <div className="text-center">
            <h3 className="text-xl mb-1 text-gray-900 dark:text-gray-100 flex items-center justify-center flex-wrap">
              <span className="font-gilroy-extrabold uppercase">FEELWELL</span>
              <span className="font-gilroy-regular lowercase">Furniture</span>
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Where Comfort Meets Style
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src={link.icon}
                  alt={link.name}
                  className="w-5 h-5 dark:invert dark:opacity-80"
                />
                <span>{link.name}</span>
              </motion.a>
            ))}
          </div>

          {/* Contact Information */}
          <div className="text-center">
            <a
              href="tel:949-910-7879"
              className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors block"
            >
              949-910-7879
            </a>
            <a
              href="mailto:clutchdev.apps@gmail.com"
              className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors block"
            >
              clutchdev.apps@gmail.com
            </a>
          </div>

          {/* Copyright */}
          <div className="pt-4 border-t border-gray-200 dark:border-neutral-800">
            <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center justify-center flex-wrap gap-1">
              © 2025 <span className="font-gilroy-extrabold uppercase">FEELWELL</span><span className="font-gilroy-regular lowercase">Furniture</span>. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
  