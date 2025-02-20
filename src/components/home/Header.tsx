import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const NAV_LINKS = [
  { href: "/about", label: "about me" },
  { href: "/projects", label: "projects" },
  { href: "/contact", label: "say hi" },
];

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => (
  <a href={href} className="text-gray-400 hover:text-white transition">
    {children}
  </a>
);

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 p-10 bg-transparent"
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="flex justify-between items-center max-w-5xl mx-auto">
        <a href="/" className="text-white text-lg font-semibold flex items-center gap-2">
          👋 <span>nj.tech</span>
        </a>
        <div className="flex gap-8 text-sm">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </motion.header>
  );
}
