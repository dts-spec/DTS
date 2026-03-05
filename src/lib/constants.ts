export const siteConfig = {
  name: "Digital Technology Solutions",
  shortName: "DTS",
  description:
    "We build the teams, integrate the AI, and develop the platforms that move your business forward.",
  url: "https://digitaltechnologysolutions.com",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const services = [
  {
    id: "remote-teams",
    label: "Remote Teams",
    title: "Elite Global Talent, Deployed in Days",
    shortDescription:
      "Vetted global talent, deployed in days, not months. Individual specialists or full development teams\u2014without the hiring headache.",
    icon: "globe",
    features: [
      "Thoroughly vetted for skills, security, and speed",
      "Individual contractors or complete development teams",
      "No interviews, onboarding, or HR overhead",
      "Creative, design, and engineering talent available",
      "Scale up or down as your project demands",
      "Significant cost savings over domestic hiring",
    ],
    problem:
      "Hiring the right talent takes months and costs a fortune. Bad hires cost even more.",
    solution:
      "We maintain a pre-vetted network of world-class contractors across every discipline. Tell us what you need\u2014we deploy the right people within days, not months. No recruiting fees. No onboarding headaches. No risk.",
  },
  {
    id: "ai-integration",
    label: "AI Integration",
    title: "AI Systems That Work for Your Business",
    shortDescription:
      "Custom AI agents for marketing, finance, and operations. Your data stays secure. Your team stays in control.",
    icon: "brain",
    features: [
      "Custom AI agents that analyze data and generate reports",
      "Automated KPI tracking and revenue target monitoring",
      "AI-powered presentations and slide decks on demand",
      "Automated daily briefings and team communications",
      "Your proprietary data stays secure and under your control",
      "Strategic recommendations for marketing, finance, and management",
    ],
    problem:
      "Your competitors are automating workflows while your team drowns in spreadsheets and manual reports.",
    solution:
      "We design, deploy, and manage AI agentic systems tailored to your existing infrastructure. No disruption to your current workflow\u2014we integrate alongside what you already use. Your team gets superpowers without needing a PhD in machine learning.",
  },
  {
    id: "custom-development",
    label: "Custom Development",
    title: "AI-Powered Platforms, Built to Scale",
    shortDescription:
      "From SaaS platforms to mobile apps\u2014AI-powered software built for your exact needs and designed to grow with you.",
    icon: "code",
    features: [
      "Custom SaaS platform development",
      "AI-powered web and mobile applications",
      "Content delivery networks and infrastructure",
      "Full-stack development from concept to launch",
      "Ongoing maintenance and feature development",
      "Scalable architecture built for growth",
    ],
    problem:
      "Off-the-shelf software does not fit your business. Custom development seems too expensive and risky.",
    solution:
      "Our teams build, deploy, and maintain AI-powered platforms tailored to your exact requirements. Whether it is a customer-facing app, an internal tool, or a full SaaS product\u2014we handle the entire lifecycle from architecture to launch to ongoing support.",
  },
] as const;

export const processSteps = [
  {
    number: "01",
    title: "Discover",
    description: "We learn your business, your bottlenecks, and your goals.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We architect a solution tailored to your team and tech stack.",
  },
  {
    number: "03",
    title: "Deploy",
    description:
      "We implement, integrate, and train your team on every system.",
  },
  {
    number: "04",
    title: "Scale",
    description:
      "We monitor, optimize, and evolve your systems as you grow.",
  },
] as const;

export const stats = [
  { value: "50+", label: "Global Contractors Deployed" },
  { value: "3x", label: "Average Client ROI" },
  { value: "48hr", label: "Average Deployment Time" },
  { value: "99.9%", label: "Platform Uptime" },
] as const;

export const values = [
  {
    title: "Speed",
    description:
      "We deploy fast. Your business cannot wait months for solutions that should take days.",
  },
  {
    title: "Transparency",
    description:
      "No black boxes. You see exactly what we build, how we build it, and what it costs.",
  },
  {
    title: "Security",
    description:
      "Your data is your competitive advantage. We treat it that way\u2014always encrypted, always under your control.",
  },
  {
    title: "Partnership",
    description:
      "We are not vendors. We embed with your team and operate as an extension of your business.",
  },
  {
    title: "Quality",
    description:
      "Every contractor is vetted. Every system is tested. Every deployment is production-grade.",
  },
  {
    title: "Innovation",
    description:
      "We stay ahead of the curve so you do not have to. The latest AI capabilities, applied to your business today.",
  },
] as const;

export interface CaseStudy {
  id: string;
  company: string;
  industry: string;
  category: "marketing" | "operations" | "cross-functional";
  categoryLabel: string;
  title: string;
  challenge: string;
  solution: string;
  results: { metric: string; description: string }[];
  features: string[];
  image: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "meridian-analytics",
    company: "Meridian Consumer Group",
    industry: "Consumer Goods / DTC",
    category: "marketing",
    categoryLabel: "Marketing Intelligence",
    title: "AI-Powered Marketing Analytics Platform",
    challenge:
      "Meridian was spending $2.4M annually across 12 ad platforms with no unified view of performance. Attribution was manual, cohort analysis took two weeks, and the marketing team was making spend decisions on gut feeling rather than data.",
    solution:
      "DTS built an AI-powered analytics platform that ingests data from all 12 ad platforms in real time. The system automates cohort analysis, runs multi-touch attribution modeling, and provides daily spend optimization recommendations powered by predictive AI.",
    results: [
      { metric: "34%", description: "Reduction in customer acquisition cost" },
      { metric: "2.1x", description: "Improvement in ROAS within 90 days" },
      { metric: "15hrs/wk", description: "Saved in manual reporting" },
      { metric: "$840K", description: "Ad spend reallocated from underperformers" },
    ],
    features: [
      "Real-time data ingestion from 12 ad platforms",
      "Automated cohort analysis with weekly refresh",
      "Multi-touch attribution modeling",
      "AI-driven spend optimization recommendations",
      "Executive dashboard with daily briefings",
      "Custom alerting for anomaly detection",
    ],
    image: "https://images.unsplash.com/photo-1705825179782-ad5bdcd122cd?w=800&q=80",
  },
  {
    id: "prism-content",
    company: "Prism Health Partners",
    industry: "Healthcare SaaS",
    category: "marketing",
    categoryLabel: "Content & Campaign Automation",
    title: "AI Content and Campaign Automation Engine",
    challenge:
      "Prism's marketing team of four was responsible for content across six channels. Campaign creation took three weeks from brief to launch, and A/B testing was inconsistent because they lacked the bandwidth to run proper experiments.",
    solution:
      "DTS deployed an AI content engine that generates ad copy, email sequences, and landing page variants from a single campaign brief. The system runs automated A/B tests, personalizes messaging by audience segment, and learns from performance data to improve over time.",
    results: [
      { metric: "5x", description: "Increase in content output" },
      { metric: "22%", description: "Lift in email open rates" },
      { metric: "3 days", description: "Campaign launch time, down from 3 weeks" },
      { metric: "41%", description: "Improvement in ad click-through rates" },
    ],
    features: [
      "AI-generated ad copy across six channels",
      "Automated A/B testing with statistical significance tracking",
      "Audience segmentation and personalized messaging",
      "Campaign brief to multi-channel launch in days",
      "Performance learning loop for continuous improvement",
      "Brand voice calibration and compliance checks",
    ],
    image: "https://images.unsplash.com/photo-1762081512133-30202f928bb9?w=800&q=80",
  },
  {
    id: "atlas-workforce",
    company: "Atlas Manufacturing Co.",
    industry: "Industrial Manufacturing",
    category: "operations",
    categoryLabel: "HR & Workforce Automation",
    title: "AI-Powered Workforce Management Platform",
    challenge:
      "Atlas had 340 employees across three facilities with time tracking spread across paper timesheets and three different software systems. Performance reviews were annual and backward-looking, and the hiring pipeline had a 67-day average time-to-fill.",
    solution:
      "DTS built a unified workforce platform with AI-powered time tracking that auto-categorizes work by project and department, continuous performance analytics that replace annual reviews, and an intelligent hiring pipeline that screens candidates and predicts fit.",
    results: [
      { metric: "67 to 23", description: "Days to fill open positions" },
      { metric: "94%", description: "Time tracking accuracy, up from 71%" },
      { metric: "$320K", description: "Annual savings from reduced overtime errors" },
      { metric: "3x", description: "Faster performance review cycles" },
    ],
    features: [
      "AI-powered time tracking with auto-categorization",
      "Continuous performance analytics dashboard",
      "Intelligent candidate screening and ranking",
      "Automated interview scheduling",
      "Predictive attrition modeling",
      "Unified reporting across all facilities",
    ],
    image: "https://images.unsplash.com/photo-1768661608008-74f74ad6923a?w=800&q=80",
  },
  {
    id: "vantage-financial",
    company: "Vantage Property Group",
    industry: "Commercial Real Estate",
    category: "operations",
    categoryLabel: "Financial Operations",
    title: "Automated Financial Reporting and Forecasting",
    challenge:
      "Vantage managed a portfolio of 48 commercial properties with financial reporting done in spreadsheets. Monthly close took 12 business days, forecasting was quarterly at best, and anomalies in tenant payments went undetected for weeks.",
    solution:
      "DTS deployed an AI financial operations platform that automates monthly reporting across all 48 properties, generates rolling forecasts updated weekly, and runs real-time anomaly detection on revenue streams, expenses, and tenant payment patterns.",
    results: [
      { metric: "12 to 3", description: "Business days for monthly close" },
      { metric: "$1.2M", description: "Revenue leakage detected in first quarter" },
      { metric: "Weekly", description: "Forecasts replaced quarterly projections" },
      { metric: "89%", description: "Reduction in reporting errors" },
    ],
    features: [
      "Automated monthly financial reporting",
      "Rolling revenue and expense forecasts",
      "Real-time anomaly detection on all revenue streams",
      "Tenant payment pattern analysis",
      "Automated variance reporting with root cause analysis",
      "Board-ready presentation generation",
    ],
    image: "https://images.unsplash.com/photo-1764419737690-be2e35d7fa7d?w=800&q=80",
  },
  {
    id: "beacon-customer",
    company: "Beacon Retail Systems",
    industry: "Multi-Channel Retail",
    category: "cross-functional",
    categoryLabel: "Customer Intelligence",
    title: "Unified Customer Intelligence Platform",
    challenge:
      "Beacon had customer data siloed across their POS system, e-commerce platform, loyalty program, and customer support tool. They had no unified customer view, churn prediction was nonexistent, and customer sentiment was measured only through quarterly surveys.",
    solution:
      "DTS built a customer intelligence platform that unifies data from all four systems into a single customer profile. The platform runs predictive churn models, real-time sentiment analysis from support interactions and reviews, and generates automated customer health scores.",
    results: [
      { metric: "28%", description: "Reduction in customer churn rate" },
      { metric: "360\u00b0", description: "Unified customer view across all touchpoints" },
      { metric: "4.2x", description: "ROI on retention campaigns" },
      { metric: "Real-time", description: "Sentiment analysis replaced quarterly surveys" },
    ],
    features: [
      "Unified customer data platform across four systems",
      "Predictive churn modeling with early warning alerts",
      "Real-time sentiment analysis from support and reviews",
      "Automated customer health scoring",
      "Segmentation engine for targeted campaigns",
      "Customer lifecycle analytics dashboard",
    ],
    image: "https://images.unsplash.com/photo-1771387515473-a7b737d70efb?w=800&q=80",
  },
  {
    id: "summit-supply",
    company: "Summit Distribution Network",
    industry: "Food & Beverage Distribution",
    category: "cross-functional",
    categoryLabel: "Supply Chain Optimization",
    title: "AI Supply Chain and Inventory Optimization",
    challenge:
      "Summit distributed perishable goods across 200 retail locations with demand forecasting done on historical averages. Stockouts cost them an estimated $3M annually, while overstock waste on perishable items was running at 14%.",
    solution:
      "DTS deployed an AI-driven supply chain platform that uses machine learning for demand forecasting incorporating weather, seasonality, promotions, and local events. The system automates reordering, optimizes delivery routing, and provides real-time inventory visibility.",
    results: [
      { metric: "62%", description: "Reduction in stockout incidents" },
      { metric: "14% to 4%", description: "Perishable waste rate reduction" },
      { metric: "$2.1M", description: "Annual savings from optimized inventory" },
      { metric: "18%", description: "Improvement in delivery route efficiency" },
    ],
    features: [
      "ML-powered demand forecasting with external data",
      "Automated purchase order generation",
      "Real-time inventory visibility across 200 locations",
      "Dynamic delivery route optimization",
      "Perishable goods shelf-life tracking",
      "Supplier performance analytics and scoring",
    ],
    image: "https://images.unsplash.com/photo-1621697944804-d0a393f7e01a?w=800&q=80",
  },
];
