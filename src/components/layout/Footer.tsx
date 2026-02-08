import { Link } from "react-router-dom";
import { Globe, Shield, FileText, Mail, Phone, MapPin } from "lucide-react";
import prominenceLogo from "@/assets/prominence-bank-brand.png";

const services = [
  { name: "IP 2 IP Interbank Transfer", path: "/ip-to-ip-interbank-transfer" },
  { name: "Ledger 2 Ledger Transfer", path: "/ledger-to-ledger-transfer" },
];

const legalLinks = [
  { name: "Privacy Policy", path: "/privacy" },
  { name: "Terms of Service", path: "/terms" },
  { name: "Cookie Policy", path: "/cookies" },
  { name: "AML Policy", path: "/aml" },
];

export function Footer() {
  return (
    <footer className="relative bg-background border-t border-border/30">
      {/* Subtle glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <img
                src={prominenceLogo}
                alt="Prominence Bank"
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Premium banking services for institutional clients and high-net-worth individuals worldwide.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center text-muted-foreground hover:bg-primary/20 hover:text-primary transition-colors"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center text-muted-foreground hover:bg-primary/20 hover:text-primary transition-colors"
              >
                <Shield className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center text-muted-foreground hover:bg-primary/20 hover:text-primary transition-colors"
              >
                <FileText className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-outfit font-semibold text-foreground mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.path}>
                  <Link
                    to={service.path}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <span className="text-muted-foreground/50 text-sm">More services coming soon</span>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="font-outfit font-semibold text-foreground mb-6">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-outfit font-semibold text-foreground mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">contact@prominencebank.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">+1 (888) 555-0123</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  Financial District<br />
                  New York, NY 10004
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm text-center md:text-left">
              © {new Date().getFullYear()} Prominence Bank. All rights reserved.
            </p>
            <p className="text-muted-foreground/60 text-xs text-center md:text-right max-w-2xl">
              Services are available to Prominence Bank account holders only. All transactions are subject to KYC/AML, sanctions screening, and final bank approval.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
