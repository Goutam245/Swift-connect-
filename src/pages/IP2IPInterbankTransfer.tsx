import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServiceOverview } from "@/components/sections/ServiceOverview";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { UseCasesSection } from "@/components/sections/UseCasesSection";
import { ComplianceSection } from "@/components/sections/ComplianceSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import heroImage from "@/assets/hero-server-room.jpg";
import { 
  Server, 
  Zap, 
  Shield, 
  Network,
  FileCheck,
  Clock,
  Building2,
  Landmark,
  Briefcase,
  CheckCircle
} from "lucide-react";

const IP2IPInterbankTransfer = () => {
  const benefits = [
    {
      icon: <Network className="w-6 h-6" />,
      title: "Direct Interbank Connectivity",
      description: "Corridor-dependent direct connections between financial institutions for streamlined transfers.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Faster Execution",
      description: "Potentially faster execution once technical and operational configurations are established.",
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Institutional Operations",
      description: "Enhanced operational coordination specifically designed for institutional use cases.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Strong Security Posture",
      description: "Controlled connectivity with robust security protocols for institutional-grade flows.",
    },
  ];

  const howItWorksSteps = [
    {
      number: 1,
      title: "Validate Feasibility",
      description: "Prominence Bank and the counterparty institution validate feasibility and establish secure connectivity.",
      icon: <Server className="w-6 h-6 text-primary" />,
    },
    {
      number: 2,
      title: "Submit Instruction",
      description: "Client submits instruction with beneficiary coordinates and documented purpose.",
      icon: <FileCheck className="w-6 h-6 text-primary" />,
    },
    {
      number: 3,
      title: "Compliance Review",
      description: "Compliance screening and risk approval are performed according to regulatory requirements.",
      icon: <Shield className="w-6 h-6 text-primary" />,
    },
    {
      number: 4,
      title: "Execute & Confirm",
      description: "Payment is executed through the established IP workflow and confirmed via official channels.",
      icon: <CheckCircle className="w-6 h-6 text-primary" />,
    },
  ];

  const useCases = [
    {
      icon: <Landmark className="w-6 h-6" />,
      title: "Institutional Treasury Movements",
      description: "Streamlined liquidity operations and treasury management between financial institutions.",
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Bilateral Settlements",
      description: "Pre-agreed bilateral settlements between eligible institutions with established relationships.",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Time-Sensitive Transfers",
      description: "Bank-to-bank transfers where timing is critical and traditional rails may be slower.",
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Corporate Liquidity Operations",
      description: "Large-scale corporate fund movements requiring direct institutional connectivity.",
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: "Cross-Border Institutional Flows",
      description: "International institutional transfers through secure IP-based connectivity.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure Correspondent Banking",
      description: "Enhanced security for correspondent banking relationships and transactions.",
    },
  ];

  const faqs = [
    {
      question: "What is an IP 2 IP interbank transfer?",
      answer: "A direct interbank transfer conducted via secure IP-based connectivity between two financial institutions' systems.",
      tags: ["IP to IP", "interbank transfer", "server-to-server", "S2S", "secure network"],
    },
    {
      question: "Is IP 2 IP transfer available to the public?",
      answer: "No. It is typically restricted to eligible, pre-qualified Prominence Bank account holders and depends on counterparty readiness.",
      tags: ["pre-qualified", "eligibility", "account holders", "counterparty bank", "institutional banking"],
    },
    {
      question: "How fast is an IP 2 IP transfer?",
      answer: "Once configured, it can be near real-time; timing depends on bilateral procedures, operating windows, and compliance checks.",
      tags: ["near real-time", "transfer speed", "bilateral setup", "operating procedures", "compliance"],
    },
    {
      question: "What information is required?",
      answer: "Beneficiary coordinates, routing details agreed with the counterparty, currency/amount, purpose of payment, and supporting documents for high-value flows.",
      tags: ["beneficiary coordinates", "routing details", "payment purpose", "documentation", "high value"],
    },
    {
      question: "Are IP 2 IP transfers subject to compliance review?",
      answer: "Yes. All transactions remain subject to KYC/AML, sanctions screening, risk assessment, and transaction monitoring.",
      tags: ["KYC AML", "sanctions screening", "risk approval", "compliance", "monitoring"],
    },
    {
      question: "Can I cancel an IP 2 IP transfer?",
      answer: "Cancellation depends on settlement status and counterparty processing; reversals may not be possible once credited.",
      tags: ["cancellation", "reversal", "settlement finality", "counterparty bank", "recall"],
    },
    {
      question: "Why would an IP 2 IP transfer be unavailable?",
      answer: "Unsupported corridors, counterparty limitations, incomplete technical setup, or elevated compliance risk can prevent execution.",
      tags: ["corridor limitation", "counterparty restrictions", "technical setup", "compliance risk", "availability"],
    },
    {
      question: "Do you provide confirmations?",
      answer: "Confirmations are provided via official bank-to-bank channels only (e.g., SWIFT where applicable or verified corporate email).",
      tags: ["bank-to-bank verification", "official channels", "confirmation", "SWIFT", "verified email"],
    },
  ];

  return (
    <>
      <Helmet>
        <title>IP 2 IP Interbank Transfer | Prominence Bank</title>
        <meta 
          name="description" 
          content="Secure server-to-server interbank transfer workflows for eligible corridors. Direct interbank connectivity with enhanced security for institutional-grade flows." 
        />
        <meta 
          name="keywords" 
          content="IP to IP transfer, interbank transfer, server to server banking, S2S payment, secure bank transfer, institutional payments" 
        />
        <link rel="canonical" href="/ip-to-ip-interbank-transfer" />
      </Helmet>

      <Layout>
        <HeroSection
          title="IP 2 IP Interbank Transfer"
          tagline="Secure server-to-server interbank transfer workflows for eligible corridors."
          backgroundImage={heroImage}
        />
        
        <ServiceOverview
          description="IP 2 IP Interbank Transfer refers to a direct interbank transfer via secure IP-based connectivity between institutions. It is typically used for institutional-grade flows where counterparties have established technical and operational alignment."
          benefits={benefits}
        />
        
        <HowItWorksSection steps={howItWorksSteps} />
        
        <UseCasesSection useCases={useCases} />
        
        <ComplianceSection
          eligibilityText="Available to eligible, pre-qualified account holders only and subject to corridor/counterparty acceptance, technical feasibility, and full compliance review."
          disclaimerText="Service availability varies and is not offered based on brochure requests. Execution is case-by-case and subject to internal policy and risk appetite. Information is provided for general guidance only and does not constitute an offer, commitment, guarantee, or promise to execute any transaction."
        />
        
        <FAQSection faqs={faqs} />
        
        <CTASection />
      </Layout>
    </>
  );
};

export default IP2IPInterbankTransfer;
