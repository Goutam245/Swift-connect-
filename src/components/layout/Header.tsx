import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import prominenceLogo from "@/assets/prominence-bank-brand.png";

const services = [
  { name: "IP 2 IP Interbank Transfer", path: "/ip-to-ip-interbank-transfer" },
  { name: "Ledger 2 Ledger Transfer", path: "/ledger-to-ledger-transfer" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-xl border-b border-border/50 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={prominenceLogo}
              alt="Prominence Bank"
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              to="/"
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="flex items-center gap-1 text-foreground/80 hover:text-primary transition-colors font-medium">
                Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-72 bg-card/95 backdrop-blur-xl rounded-xl border border-border/50 shadow-elevated overflow-hidden"
                  >
                    {services.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className={`block px-5 py-4 transition-colors hover:bg-primary/10 ${
                          location.pathname === service.path
                            ? "text-primary bg-primary/5"
                            : "text-foreground/80"
                        }`}
                      >
                        <span className="font-medium">{service.name}</span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="#about"
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              About
            </Link>
            <Link
              to="#contact"
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              Contact
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link to="#contact" className="btn-outline-glow text-sm px-6 py-2.5">
              Contact Us
            </Link>
            <Link to="#open-account" className="btn-primary-gradient text-sm px-6 py-2.5">
              Open an Account
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-6 space-y-4">
                <Link
                  to="/"
                  className="block py-3 text-foreground/80 hover:text-primary transition-colors font-medium"
                >
                  Home
                </Link>
                
                <div className="space-y-2">
                  <span className="text-muted-foreground text-sm font-medium">Services</span>
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className={`block py-2 pl-4 transition-colors ${
                        location.pathname === service.path
                          ? "text-primary"
                          : "text-foreground/80 hover:text-primary"
                      }`}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>

                <div className="pt-4 space-y-3">
                  <Link to="#contact" className="block btn-outline-glow text-center text-sm py-3">
                    Contact Us
                  </Link>
                  <Link to="#open-account" className="block btn-primary-gradient text-center text-sm py-3">
                    Open an Account
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
