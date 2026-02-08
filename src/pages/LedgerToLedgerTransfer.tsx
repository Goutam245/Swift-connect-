import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServiceOverview } from "@/components/sections/ServiceOverview";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { UseCasesSection } from "@/components/sections/UseCasesSection";
import { ComplianceSection } from "@/components/sections/ComplianceSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import heroImage from "@/assets/hero-ledger-network.jpg";
import { 
  BookOpen, 
  FileSearch, 
  Shield, 
  Link2,
  FileCheck,
  Wallet,
  Building2,
  ArrowLeftRight,
  BarChart3,
  Lock,
  CheckCircle
} from "lucide-react";

const LedgerToLedgerTransfer = () => {
  const benefits = [
    {
      icon: <ArrowLeftRight className="w-6 h-6" />,
      title: "Efficient Value Movement",
      description: "Streamlined internal value movement and reconciliation between ledger systems.",
    },
    {
      icon: <FileSearch className="w-6 h-6" />,
      title: "Audit-Friendly Records",
      description: "Comprehensive ledger records with full traceability for compliance and auditing.",
    },
    {
      icon: <Link2 className="w-6 h-6" />,
      title: "Digital Workflow Support",
      description: "Supports eligible digital workflows including DLT/blockchain where permitted.",
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Controlled Access",
      description: "Robust authentication and continuous monitoring for secure operations.",
    },
  ];

  const howItWorksSteps = [
    {
      number: 1,
      title: "Initiate Instruction",
      description: "Client initiates an instruction for internal or supported digital rail transfer.",
      icon: <BookOpen className="w-6 h-6 text-primary" />,
    },
    {
      number: 2,
      title: "Validate Details",
      description: "Bank validates authorization, destination details, and transfer feasibility.",
      icon: <FileCheck className="w-6 h-6 text-primary" />,
    },
    {
      number: 3,
      title: "Compliance Screening",
      description: "Compliance screening and risk checks are performed per regulatory requirements.",
      icon: <Shield className="w-6 h-6 text-primary" />,
    },
    {
      number: 4,
      title: "Post & Confirm",
      description: "Ledger entries are posted and confirmations issued through official channels.",
      icon: <CheckCircle className="w-6 h-6 text-primary" />,
    },
  ];

  const useCases = [
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Internal Treasury Sweeps",
      description: "Automated treasury sweeps and intra-group fund movements for corporate clients.",
    },
    {
      icon: <Wallet className="w-6 h-6" />,
      title: "Digital Settlement Flows",
      description: "Eligible digital settlement flows including custody-related movements.",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Operational Reconciliation",
      description: "Cross-platform reconciliation between internal and external ledger systems.",
    },
    {
      icon: <Link2 className="w-6 h-6" />,
      title: "DLT/Blockchain Integration",
      description: "Controlled transfers to and from supported distributed ledger environments.",
    },
    {
      icon: <ArrowLeftRight className="w-6 h-6" />,
      title: "Intra-Group Movements",
      description: "Seamless fund transfers between group entities and subsidiaries.",
    },
    {
      icon: <FileSearch className="w-6 h-6" />,
      title: "Audit Trail Maintenance",
      description: "Complete transaction history for compliance reporting and auditing.",
    },
  ];

  const faqs = [
    {
      question: "What is a Ledger-to-Ledger transfer?",
      answer: "A transfer of value recorded from one ledger system to another, including internal ledgers and DLT/blockchain environments.",
      tags: ["ledger to ledger", "L2L", "DLT", "blockchain", "accounting records"],
    },
    {
      question: "Who can use Ledger-to-Ledger transfers?",
      answer: "Eligible Prominence Bank account holders, subject to policy, jurisdiction, and transaction risk assessment.",
      tags: ["account holders", "eligibility", "policy", "jurisdiction", "risk assessment"],
    },
    {
      question: "Is Ledger-to-Ledger the same as a bank wire?",
      answer: "Not necessarily. A wire uses payment rails; ledger-to-ledger may involve internal posting or eligible DLT settlement.",
      tags: ["bank wire vs ledger", "payment rails", "internal posting", "DLT settlement", "comparison"],
    },
    {
      question: "What assets can be transferred?",
      answer: "Depending on policy, bank ledger balances and/or supported digital assets, subject to jurisdiction and compliance conditions.",
      tags: ["digital assets", "supported assets", "jurisdiction", "compliance", "bank ledger"],
    },
    {
      question: "Are Ledger-to-Ledger transfers reversible?",
      answer: "Internal transfers may be reversible before final posting; external ledger confirmations (e.g., on-chain) may be irreversible.",
      tags: ["reversibility", "final posting", "on-chain confirmation", "immutable ledger", "finality"],
    },
    {
      question: "How are transactions verified?",
      answer: "Transfers include authentication controls, audit logs, and—where applicable—external confirmation mechanisms.",
      tags: ["audit trail", "authentication", "verification", "settlement", "confirmation"],
    },
    {
      question: "What compliance checks apply?",
      answer: "KYC/AML, sanctions screening, and monitoring apply. The bank may request supporting documentation for higher-risk flows.",
      tags: ["KYC AML", "sanctions", "monitoring", "supporting documents", "risk-based"],
    },
    {
      question: "Do you support integrations?",
      answer: "Where feasible, integrations may be implemented via APIs or standardized messaging, subject to security review and scope definition.",
      tags: ["API integration", "ISO 20022", "security review", "scope", "S2S"],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Ledger 2 Ledger Transfer | Prominence Bank</title>
        <meta 
          name="description" 
          content="Controlled transfers between accounting ledgers and supported digital environments. Efficient internal value movement with audit-friendly ledger records and traceability." 
        />
        <meta 
          name="keywords" 
          content="ledger to ledger transfer, L2L transfer, DLT banking, blockchain transfer, internal ledger transfer, digital settlement" 
        />
        <link rel="canonical" href="/ledger-to-ledger-transfer" />
      </Helmet>

      <Layout>
        <HeroSection
          title="Ledger 2 Ledger Transfer"
          tagline="Controlled transfers between accounting ledgers and supported digital environments."
          backgroundImage={heroImage}
        />
        
        <ServiceOverview
          description="Ledger-to-Ledger transfers record movement of value from one ledger system to another, including internal accounting ledgers and supported DLT/blockchain environments."
          benefits={benefits}
        />
        
        <HowItWorksSection steps={howItWorksSteps} />
        
        <UseCasesSection useCases={useCases} />
        
        <ComplianceSection
          eligibilityText="Available to eligible account holders only. Digital ledger activity is subject to jurisdiction, policy, KYC/AML, sanctions screening, and transaction monitoring."
          disclaimerText="Not all assets or corridors are supported. Finality depends on the underlying rail (internal posting vs. external ledger confirmation). Information is provided for general guidance only and does not constitute an offer, commitment, guarantee, or promise to execute any transaction."
        />
        
        <FAQSection faqs={faqs} />
        
        <CTASection />
      </Layout>
    </>
  );
};

export default LedgerToLedgerTransfer;
