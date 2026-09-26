import React, { useState, useEffect } from 'react';
import { 
  Briefcase, CheckCircle, AlertTriangle, ShieldCheck, Zap, 
  FileText, Search, Send, Clock, Sliders, Bell, Sparkles, 
  Download, Eye, ArrowRight, Lock, Key, ChevronRight, User, 
  Plus, Trash2, Edit3, Award, RefreshCw, Layers, CheckSquare, 
  Square, Info, ShieldAlert, BarChart3, DollarSign, Users, 
  TrendingUp, CreditCard, ChevronDown, Filter, HelpCircle
} from 'lucide-react';

export default function App() {
  const [viewRole, setViewRole] = useState('user'); // 'user' or 'owner'
  const [activeTab, setActiveTab] = useState('landing'); // 'landing', 'resume', 'jobs', 'auto-apply', 'vault'
  const [notifications, setNotifications] = useState([
    { id: 1, type: 'action_required', title: 'Missing Field Alert', text: 'Stripe Staff SWE role requires Visa Sponsorship status.', time: '10m ago', unread: true, jobId: 1 },
    { id: 2, type: 'dispatched', title: 'Autonomous Apply Sent', text: 'Application successfully submitted to Datadog for Sr Cloud Arch.', time: '1h ago', unread: true, jobId: 2 },
    { id: 3, type: 'interview', title: 'Interview Request', text: 'Vercel recruiter viewed your tailored ATS profile.', time: '4h ago', unread: false, jobId: 3 }
  ]);
  const [showNotificationMenu, setShowNotificationMenu] = useState(false);
  const [notificationFilter, setNotificationFilter] = useState('all');

  // Resume Data State
  const [resumeData, setResumeData] = useState({
    fullName: "Alex Rivera",
    email: "alex.rivera@example.com",
    phone: "+1 (555) 382-9901",
    linkedin: "linkedin.com/in/alexrivera-dev",
    targetRole: "Senior Full Stack Engineer",
    summary: "High-impact Full Stack Engineer with 6+ years driving enterprise cloud scalability. Engineered resilient microservices reducing server latency by 38% and deployed production ML inference engines serving 1.2M+ DAU.",
    skills: ["React.js", "TypeScript", "Node.js", "Go", "AWS", "Kubernetes", "PostgreSQL", "System Architecture", "Redis", "CI/CD"],
    experience: [
      {
        id: 1,
        title: "Lead Full Stack Architect",
        company: "Nexus Cloud Systems",
        period: "2021 - Present",
        bullets: [
          "Architected real-time event streaming pipeline processing 15M+ events/day with 99.99% uptime.",
          "Spearheaded cloud migration from monolith to Go microservices, trimming AWS infrastructure cost by $180k/yr.",
          "Mentored an engineering squad of 11 cross-functional engineers across sprint ceremonies."
        ]
      },
      {
        id: 2,
        title: "Software Engineer II",
        company: "FinTech Velocity",
        period: "2018 - 2021",
        bullets: [
          "Developed high-throughput ledger services using Node.js and PostgreSQL ensuring zero double-entry errors.",
          "Reduced page interactive load times from 3.2s to 850ms across core transaction interfaces."
        ]
      }
    ],
    education: {
      degree: "B.S. in Computer Science",
      school: "University of Washington",
      year: "2018"
    }
  });

  const [activeTemplate, setActiveTemplate] = useState('harvard'); // 'harvard', 'tech', 'executive'
  const [atsMetrics, setAtsMetrics] = useState({
    score: 94,
    actionVerbs: 96,
    metricsPresent: 92,
    contactScore: 100,
    keywordDensity: 88,
    issues: [
      "Target role 'Senior Full Stack Engineer' is well aligned.",
      "Metrics ($180k, 15M+, 38%) provide measurable proof of impact.",
      "Consider appending 'GraphQL' or 'Kafka' for specialized backend roles."
    ]
  });

  // Jobs Feed & Auto-Apply Readiness
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Senior Full Stack Engineer",
      company: "Stripe",
      portal: "LinkedIn",
      location: "San Francisco, CA (Remote)",
      salary: "$185,000 - $220,000",
      matchScore: 96,
      selectionOdds: 88,
      status: "Needs Review",
      missingFields: ["US Work Authorization status", "Notice Period duration"],
      prefilled: {
        legalName: "Alex Rivera",
        email: "alex.rivera@example.com",
        phone: "+1 (555) 382-9901",
        experienceYears: "6",
        salaryExpectation: "$195,000",
        coverLetterNote: "I have built high-throughput financial microservices matching Stripe's architectural standards."
      },
      skillsMatched: ["React.js", "TypeScript", "Node.js", "AWS", "PostgreSQL"],
      skillsGap: ["Distributed Tracing", "Kafka"],
      dateAdded: "Today"
    },
    {
      id: 2,
      title: "Staff Cloud Engineer",
      company: "Datadog",
      portal: "Naukri",
      location: "Bengaluru, India (Hybrid)",
      salary: "₹45,00,000 - ₹60,00,000",
      matchScore: 91,
      selectionOdds: 82,
      status: "Ready to Dispatch",
      missingFields: [],
      prefilled: {
        legalName: "Alex Rivera",
        email: "alex.rivera@example.com",
        phone: "+1 (555) 382-9901",
        experienceYears: "6",
        salaryExpectation: "Flexible / Competitive",
        coverLetterNote: "Specialized in cloud microservices and Kubernetes infrastructure deployments."
      },
      skillsMatched: ["Go", "Kubernetes", "AWS", "CI/CD"],
      skillsGap: ["Terraform"],
      dateAdded: "Yesterday"
    },
    {
      id: 3,
      title: "Lead Frontend Engineer",
      company: "Vercel",
      portal: "Indeed",
      location: "Remote (Global)",
      salary: "$175,000 - $210,000",
      matchScore: 95,
      selectionOdds: 86,
      status: "Ready to Dispatch",
      missingFields: [],
      prefilled: {
        legalName: "Alex Rivera",
        email: "alex.rivera@example.com",
        phone: "+1 (555) 382-9901",
        experienceYears: "6",
        salaryExpectation: "$180,000",
        coverLetterNote: "Passionate about edge runtime performance, Next.js optimization, and developer ergonomics."
      },
      skillsMatched: ["React.js", "TypeScript", "System Architecture"],
      skillsGap: ["Next.js App Router"],
      dateAdded: "2 days ago"
    },
    {
      id: 4,
      title: "Principal Platform Architect",
      company: "Snowflake",
      portal: "LinkedIn",
      location: "San Mateo, CA",
      salary: "$210,000 - $260,000",
      matchScore: 78,
      selectionOdds: 64,
      status: "Needs Review",
      missingFields: ["US Security Clearance acknowledgement", "Direct Reference Email"],
      prefilled: {
        legalName: "Alex Rivera",
        email: "alex.rivera@example.com",
        phone: "+1 (555) 382-9901",
        experienceYears: "6",
        salaryExpectation: "$225,000",
        coverLetterNote: "Demonstrated experience designing high-scale data ingest pipelines."
      },
      skillsMatched: ["Go", "Kubernetes", "PostgreSQL"],
      skillsGap: ["Rust", "Snowpark", "OLAP Data Warehousing"],
      dateAdded: "3 days ago"
    }
  ]);

  const [selectedJobIds, setSelectedJobIds] = useState([]);
  const [auditingJob, setAuditingJob] = useState(null);
  const [autoApplyActive, setAutoApplyActive] = useState(false);
  const [autoApplyMode, setAutoApplyMode] = useState('review_first'); // 'review_first' or 'full_autonomous'
  const [dispatchLogs, setDispatchLogs] = useState([]);
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  // Business Owner Metrics State
  const ownerStats = {
    mrr: "$14,820",
    growth: "+24.5%",
    activeUsers: 1428,
    proSubscribers: 412,
    applicationsDispatched: 38491,
    aiTokenCost: "$184.20",
    grossProfitMargin: "93.4%"
  };

  // Toggle selection of all jobs
  const handleSelectAll = () => {
    if (selectedJobIds.length === jobs.length) {
      setSelectedJobIds([]);
    } else {
      setSelectedJobIds(jobs.map(j => j.id));
    }
  };

  const handleSelectHighOdds = () => {
    const highOdds = jobs.filter(j => j.selectionOdds >= 80).map(j => j.id);
    setSelectedJobIds(highOdds);
  };

  const handleSelectReadyOnly = () => {
    const ready = jobs.filter(j => j.missingFields.length === 0).map(j => j.id);
    setSelectedJobIds(ready);
  };

  const toggleJobSelect = (id) => {
    if (selectedJobIds.includes(id)) {
      setSelectedJobIds(selectedJobIds.filter(item => item !== id));
    } else {
      setSelectedJobIds([...selectedJobIds, id]);
    }
  };

  // Simulation loop for Auto-Apply
  useEffect(() => {
    let interval;
    if (autoApplyActive) {
      interval = setInterval(() => {
        setDispatchLogs(prev => [
          `[${new Date().toLocaleTimeString()}] AI Dispatcher verifying credentials token...`,
          `[${new Date().toLocaleTimeString()}] Matching ATS 90+ customized resume for job requirements...`,
          `[${new Date().toLocaleTimeString()}] Status: Verified form fields with 0 missing attributes.`,
          ...prev.slice(0, 10)
        ]);
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [autoApplyActive]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Top Navigation Bar */}
      <header className="border-b border-slate-800 bg-slate-900/90 backdrop-blur sticky top-0 z-40 px-4 lg:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-400 flex items-center justify-center shadow-lg shadow-indigo-500/20">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-white via-slate-200 to-indigo-300 bg-clip-text text-transparent">
                AutoCareer AI
              </span>
              <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                ATS 90+ Engine
              </span>
            </div>
            <p className="text-xs text-slate-400">Autonomous Job Application & Optimization System</p>
          </div>
        </div>

        {/* Global Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-950/60 p-1.5 rounded-xl border border-slate-800">
          <button 
            onClick={() => setActiveTab('landing')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition ${activeTab === 'landing' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'}`}
          >
            Showcase
          </button>
          <button 
            onClick={() => setActiveTab('resume')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition flex items-center gap-1.5 ${activeTab === 'resume' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'}`}
          >
            <FileText className="w-3.5 h-3.5" />
            Resume Studio (94%)
          </button>
          <button 
            onClick={() => setActiveTab('jobs')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition flex items-center gap-1.5 ${activeTab === 'jobs' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'}`}
          >
            <Search className="w-3.5 h-3.5" />
            Job Feed
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          </button>
          <button 
            onClick={() => setActiveTab('auto-apply')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition flex items-center gap-1.5 ${activeTab === 'auto-apply' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'}`}
          >
            <Send className="w-3.5 h-3.5" />
            Auto-Apply Dispatcher
          </button>
          <button 
            onClick={() => setActiveTab('vault')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition flex items-center gap-1.5 ${activeTab === 'vault' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'}`}
          >
            <Lock className="w-3.5 h-3.5" />
            Security Vault
          </button>
        </nav>

        {/* Right Section: Role Switcher & Notifications */}
        <div className="flex items-center gap-3">
          {/* Owner vs User Switcher Badge */}
          <div className="flex items-center bg-slate-800 p-1 rounded-lg border border-slate-700 text-xs">
            <button 
              onClick={() => setViewRole('user')}
              className={`px-2.5 py-1 rounded font-medium transition ${viewRole === 'user' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-white'}`}
            >
              Candidate View
            </button>
            <button 
              onClick={() => setViewRole('owner')}
              className={`px-2.5 py-1 rounded font-medium flex items-center gap-1 transition ${viewRole === 'owner' ? 'bg-emerald-600 text-white shadow' : 'text-slate-400 hover:text-emerald-400'}`}
            >
              <DollarSign className="w-3 h-3" />
              Owner Panel
            </button>
          </div>

          {/* Notification Hub */}
          <div className="relative">
            <button 
              onClick={() => setShowNotificationMenu(!showNotificationMenu)}
              className="relative p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition"
              title="Notifications"
            >
              <Bell className="w-4 h-4" />
              {notifications.some(n => n.unread) && (
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-indigo-500 rounded-full ring-2 ring-slate-900"></span>
              )}
            </button>

            {showNotificationMenu && (
              <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-slate-900 border border-slate-800 rounded-xl shadow-2xl z-50 overflow-hidden">
                <div className="p-3 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-sm">Notifications & Dispatch Alerts</span>
                  </div>
                  <div className="flex gap-1 text-[11px]">
                    <button 
                      onClick={() => setNotificationFilter('all')}
                      className={`px-2 py-0.5 rounded ${notificationFilter === 'all' ? 'bg-slate-800 text-white' : 'text-slate-400'}`}
                    >
                      All
                    </button>
                    <button 
                      onClick={() => setNotificationFilter('action')}
                      className={`px-2 py-0.5 rounded ${notificationFilter === 'action' ? 'bg-amber-500/20 text-amber-300' : 'text-slate-400'}`}
                    >
                      Alerts
                    </button>
                  </div>
                </div>

                <div className="max-h-80 overflow-y-auto divide-y divide-slate-800/60">
                  {notifications
                    .filter(n => notificationFilter === 'all' ? true : n.type === 'action_required')
                    .map(item => (
                      <div key={item.id} className={`p-3 text-xs transition ${item.unread ? 'bg-slate-800/40' : 'hover:bg-slate-800/20'}`}>
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <span className={`font-semibold ${item.type === 'action_required' ? 'text-amber-400' : 'text-indigo-400'}`}>
                            {item.title}
                          </span>
                          <span className="text-[10px] text-slate-500">{item.time}</span>
                        </div>
                        <p className="text-slate-300 mb-2 leading-relaxed">{item.text}</p>
                        {item.jobId && (
                          <button 
                            onClick={() => {
                              const targetJob = jobs.find(j => j.id === item.jobId);
                              if (targetJob) setAuditingJob(targetJob);
                              setShowNotificationMenu(false);
                            }}
                            className="text-[11px] font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
                          >
                            Inspect Form & Pre-fills <ChevronRight className="w-3 h-3" />
                          </button>
                        )}
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>

          <button 
            onClick={() => setShowCheckoutModal(true)}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-xs font-semibold text-white shadow-md shadow-indigo-600/20"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Upgrade Pro
          </button>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8">

        {/* OWNER BUSINESS CONTROL CENTER (VISIBLE WHEN OWNER TOGGLED) */}
        {viewRole === 'owner' && (
          <div className="mb-8 p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-emerald-950/20 to-slate-900 border border-emerald-500/30 shadow-2xl relative overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider border border-emerald-500/30">
                    Founder Admin Console
                  </span>
                  <span className="text-xs text-slate-400">Live Global Telemetry</span>
                </div>
                <h2 className="text-2xl font-black text-white mt-1">Platform Revenue & Business Operations</h2>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <div className="text-xs text-slate-400">Monthly Recurring Revenue</div>
                  <div className="text-2xl font-black text-emerald-400">{ownerStats.mrr} <span className="text-xs text-emerald-500 font-normal">{ownerStats.growth}</span></div>
                </div>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
                  <Users className="w-3.5 h-3.5 text-indigo-400" />
                  Active Users
                </div>
                <div className="text-xl font-bold text-white">{ownerStats.activeUsers}</div>
                <div className="text-[11px] text-slate-500 mt-1">412 on Pro Plan ($29/mo)</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
                  <Send className="w-3.5 h-3.5 text-cyan-400" />
                  Dispatched Submissions
                </div>
                <div className="text-xl font-bold text-white">{ownerStats.applicationsDispatched}</div>
                <div className="text-[11px] text-emerald-400 mt-1">98.4% success rate</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
                  <TrendingUp className="w-3.5 h-3.5 text-amber-400" />
                  Total LLM API Cost
                </div>
                <div className="text-xl font-bold text-white">{ownerStats.aiTokenCost}</div>
                <div className="text-[11px] text-slate-500 mt-1">Avg $0.0012 / application</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
                  <Award className="w-3.5 h-3.5 text-emerald-400" />
                  Gross Profit Margin
                </div>
                <div className="text-xl font-bold text-emerald-400">{ownerStats.grossProfitMargin}</div>
                <div className="text-[11px] text-slate-500 mt-1">Highly scalable SaaS model</div>
              </div>
            </div>
          </div>
        )}

        {/* 1. PUBLIC MARKETING & ONBOARDING TAB */}
        {activeTab === 'landing' && (
          <div className="space-y-12">
            <section className="text-center max-w-3xl mx-auto pt-6 pb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium mb-6">
                <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                Zero-Friction Autonomous Career Progression
              </div>
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight sm:leading-tight">
                Land Interviews on Autopilot with <span className="bg-gradient-to-r from-indigo-400 via-sky-300 to-emerald-400 bg-clip-text text-transparent">ATS 90+ Resumes</span>
              </h1>
              <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
                Connect your profiles once. AutoCareer AI builds an ATS-optimized Harvard template, scans top global job portals, predicts your interview selection odds, and automatically submits applications with complete transparency.
              </p>
              
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button 
                  onClick={() => setActiveTab('resume')}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-semibold text-sm shadow-xl shadow-indigo-600/25 flex items-center justify-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  Build ATS 90+ Resume Free
                </button>
                <button 
                  onClick={() => setActiveTab('jobs')}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-semibold text-sm flex items-center justify-center gap-2"
                >
                  <Search className="w-4 h-4" />
                  Explore Autonomous Jobs
                </button>
              </div>
            </section>

            {/* Feature Showcase Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">90+ ATS Score Guarantee</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Real-time keyword density optimization, strong action verbs, and quantifiable achievements formatted precisely for Workday, Greenhouse, and Lever recruiters.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Full Application Transparency</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Inspect every field before dispatch. Know exactly what was filled, what was left blank, and verify custom screening answers before submitting.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
                  <Lock className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Zero Data-Leakage Vault</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Session token architecture. We never store plain text portal passwords. Everything is encrypted via client-side AES-256 protocols.
                </p>
              </div>
            </div>

            {/* Pricing Section (Monetization Engine) */}
            <section className="pt-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-white">Transparent Global Pricing</h2>
                <p className="text-xs sm:text-sm text-slate-400 mt-2">Scale your career search with targeted autopilot intelligence.</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {/* Free Tier */}
                <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-white text-base">Starter Scout</h4>
                    <p className="text-xs text-slate-400 mt-1">For occasional job browsers</p>
                    <div className="text-3xl font-black text-white mt-4">$0 <span className="text-xs text-slate-500 font-normal">forever</span></div>
                    
                    <ul className="mt-6 space-y-3 text-xs text-slate-300">
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400" /> 1 ATS 90+ Harvard Template</li>
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400" /> 5 Manual Application Previews</li>
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400" /> Basic Keyword Gap Analysis</li>
                    </ul>
                  </div>
                  <button 
                    onClick={() => setActiveTab('resume')}
                    className="mt-8 w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold"
                  >
                    Get Started Free
                  </button>
                </div>

                {/* Pro Tier (Popular) */}
                <div className="p-6 rounded-2xl bg-gradient-to-b from-indigo-900/40 to-slate-900 border-2 border-indigo-500 flex flex-col justify-between relative shadow-xl shadow-indigo-500/10">
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-indigo-500 text-white text-[10px] font-bold uppercase tracking-wider">
                    Most Popular
                  </span>
                  <div>
                    <h4 className="font-bold text-white text-base">Pro Career FastTrack</h4>
                    <p className="text-xs text-slate-400 mt-1">For active job seekers wanting maximum interviews</p>
                    <div className="text-3xl font-black text-white mt-4">$29 <span className="text-xs text-slate-500 font-normal">/ month</span></div>

                    <ul className="mt-6 space-y-3 text-xs text-slate-200">
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400" /> Unlimited ATS 90+ Dynamic Exports</li>
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400" /> 100 Auto-Applies / month</li>
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400" /> Missing Field Form Auditor</li>
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400" /> AI Tailored Cover Letters</li>
                    </ul>
                  </div>
                  <button 
                    onClick={() => {
                      setSelectedPlan({ name: "Pro Career FastTrack", price: "$29/mo" });
                      setShowCheckoutModal(true);
                    }}
                    className="mt-8 w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-lg shadow-indigo-600/30"
                  >
                    Subscribe to Pro
                  </button>
                </div>

                {/* Autopilot Tier */}
                <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-white text-base">Autonomous Autopilot</h4>
                    <p className="text-xs text-slate-400 mt-1">Full-service automated career agent</p>
                    <div className="text-3xl font-black text-white mt-4">$69 <span className="text-xs text-slate-500 font-normal">/ month</span></div>

                    <ul className="mt-6 space-y-3 text-xs text-slate-300">
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400" /> Unlimited Multi-Portal Dispatch</li>
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400" /> LinkedIn, Naukri & Indeed Bot Sync</li>
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400" /> Daily Missing Attribute SMS Alerts</li>
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400" /> Priority VIP Agent Support</li>
                    </ul>
                  </div>
                  <button 
                    onClick={() => {
                      setSelectedPlan({ name: "Autonomous Autopilot", price: "$69/mo" });
                      setShowCheckoutModal(true);
                    }}
                    className="mt-8 w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold"
                  >
                    Activate Autopilot
                  </button>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* 2. RESUME STUDIO TAB (ATS 90+) */}
        {activeTab === 'resume' && (
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Left Controls & Live ATS Audit */}
            <div className="lg:col-span-5 space-y-6">
              {/* ATS Gauge Card */}
              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-white text-sm flex items-center gap-2">
                    <Award className="w-4 h-4 text-emerald-400" />
                    ATS Optimization Score
                  </h3>
                  <span className="text-2xl font-black text-emerald-400">{atsMetrics.score}%</span>
                </div>

                {/* Progress bar */}
                <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden mb-4">
                  <div 
                    className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400 transition-all duration-500" 
                    style={{ width: `${atsMetrics.score}%` }}
                  ></div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80">
                    <span className="text-slate-400">Action Verbs:</span>
                    <span className="float-right font-bold text-slate-200">{atsMetrics.actionVerbs}%</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80">
                    <span className="text-slate-400">Quantified Impact:</span>
                    <span className="float-right font-bold text-slate-200">{atsMetrics.metricsPresent}%</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80">
                    <span className="text-slate-400">Contact Score:</span>
                    <span className="float-right font-bold text-emerald-400">{atsMetrics.contactScore}%</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80">
                    <span className="text-slate-400">Keyword Density:</span>
                    <span className="float-right font-bold text-slate-200">{atsMetrics.keywordDensity}%</span>
                  </div>
                </div>

                {/* Checklist Suggestions */}
                <div className="mt-4 pt-4 border-t border-slate-800">
                  <span className="text-xs font-semibold text-slate-300 block mb-2">Audit Recommendations:</span>
                  <div className="space-y-1.5 text-xs text-slate-400">
                    {atsMetrics.issues.map((issue, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                        <span>{issue}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Template Switcher */}
              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-3">
                  Select ATS-Compliant Layout
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button 
                    onClick={() => setActiveTemplate('harvard')}
                    className={`p-3 rounded-xl border text-xs font-semibold text-center transition ${activeTemplate === 'harvard' ? 'bg-indigo-600/20 border-indigo-500 text-white' : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'}`}
                  >
                    Harvard Standard
                  </button>
                  <button 
                    onClick={() => setActiveTemplate('tech')}
                    className={`p-3 rounded-xl border text-xs font-semibold text-center transition ${activeTemplate === 'tech' ? 'bg-indigo-600/20 border-indigo-500 text-white' : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'}`}
                  >
                    Tech Modern
                  </button>
                  <button 
                    onClick={() => setActiveTemplate('executive')}
                    className={`p-3 rounded-xl border text-xs font-semibold text-center transition ${activeTemplate === 'executive' ? 'bg-indigo-600/20 border-indigo-500 text-white' : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'}`}
                  >
                    Executive Clean
                  </button>
                </div>
              </div>

              {/* Quick Field Editor */}
              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">Quick Profile Injector</h4>
                <div>
                  <label className="text-xs text-slate-400 block mb-1">Target Professional Role</label>
                  <input 
                    type="text" 
                    value={resumeData.targetRole}
                    onChange={(e) => setResumeData({...resumeData, targetRole: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-400 block mb-1">Quantified Executive Summary</label>
                  <textarea 
                    rows={4}
                    value={resumeData.summary}
                    onChange={(e) => setResumeData({...resumeData, summary: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-indigo-500 leading-relaxed"
                  />
                </div>
              </div>
            </div>

            {/* Right: Live A4 High-Contrast ATS Resume Preview */}
            <div className="lg:col-span-7">
              <div className="sticky top-20">
                <div className="flex items-center justify-between mb-3 px-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-slate-400">Previewing:</span>
                    <span className="text-xs font-bold text-white capitalize">{activeTemplate} Layout</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => alert("Resume exported directly in ATS plain-text parseable PDF format.")}
                      className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow"
                    >
                      <Download className="w-3.5 h-3.5" />
                      Export ATS PDF
                    </button>
                  </div>
                </div>

                {/* Printable High Contrast Canvas */}
                <div className="bg-white text-black p-8 sm:p-12 rounded-xl shadow-2xl min-h-[700px] border border-slate-200">
                  {/* Header */}
                  <div className="text-center pb-4 border-b border-black">
                    <h1 className="text-2xl font-black tracking-tight uppercase text-black">{resumeData.fullName}</h1>
                    <div className="text-xs text-gray-700 mt-1 space-x-2 font-medium">
                      <span>{resumeData.phone}</span>
                      <span>•</span>
                      <span>{resumeData.email}</span>
                      <span>•</span>
                      <span>{resumeData.linkedin}</span>
                    </div>
                  </div>

                  {/* Summary */}
                  <div className="mt-4">
                    <h2 className="text-xs font-black tracking-wider uppercase border-b border-black pb-0.5 mb-1.5">
                      Professional Summary
                    </h2>
                    <p className="text-xs text-gray-800 leading-relaxed font-normal">
                      {resumeData.summary}
                    </p>
                  </div>

                  {/* Skills */}
                  <div className="mt-4">
                    <h2 className="text-xs font-black tracking-wider uppercase border-b border-black pb-0.5 mb-1.5">
                      Core Technical Skills
                    </h2>
                    <p className="text-xs text-gray-800 leading-relaxed font-normal">
                      {resumeData.skills.join(" • ")}
                    </p>
                  </div>

                  {/* Experience */}
                  <div className="mt-4">
                    <h2 className="text-xs font-black tracking-wider uppercase border-b border-black pb-0.5 mb-2">
                      Professional Experience
                    </h2>
                    <div className="space-y-3">
                      {resumeData.experience.map(item => (
                        <div key={item.id}>
                          <div className="flex items-center justify-between text-xs font-bold">
                            <span>{item.title} — {item.company}</span>
                            <span className="text-gray-600 font-normal">{item.period}</span>
                          </div>
                          <ul className="list-disc list-inside mt-1 text-xs text-gray-700 space-y-1">
                            {item.bullets.map((b, i) => (
                              <li key={i} className="leading-snug">{b}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Education */}
                  <div className="mt-4">
                    <h2 className="text-xs font-black tracking-wider uppercase border-b border-black pb-0.5 mb-1.5">
                      Education
                    </h2>
                    <div className="flex items-center justify-between text-xs text-gray-800">
                      <span className="font-bold">{resumeData.education.degree}, {resumeData.education.school}</span>
                      <span>{resumeData.education.year}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 3. JOB FEED & PRE-FILL AUDITOR */}
        {activeTab === 'jobs' && (
          <div className="space-y-6">
            {/* Filter and Batch Toolbar */}
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2">
                <button 
                  onClick={handleSelectAll}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 flex items-center gap-1.5"
                >
                  {selectedJobIds.length === jobs.length ? <CheckSquare className="w-3.5 h-3.5 text-indigo-400" /> : <Square className="w-3.5 h-3.5" />}
                  Select All ({jobs.length})
                </button>
                <button 
                  onClick={handleSelectHighOdds}
                  className="px-3 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-semibold"
                >
                  High Odds Only (≥80%)
                </button>
                <button 
                  onClick={handleSelectReadyOnly}
                  className="px-3 py-1.5 rounded-lg bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs font-semibold"
                >
                  100% Ready (0 Missing)
                </button>
              </div>

              <div className="flex items-center gap-2">
                {selectedJobIds.length > 0 && (
                  <button 
                    onClick={() => {
                      alert(`Dispatched ${selectedJobIds.length} vetted applications to queue!`);
                      setSelectedJobIds([]);
                    }}
                    className="px-4 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-md shadow-indigo-600/30 flex items-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    Batch Apply ({selectedJobIds.length})
                  </button>
                )}
              </div>
            </div>

            {/* Jobs Cards Feed */}
            <div className="grid gap-4">
              {jobs.map(job => {
                const isSelected = selectedJobIds.includes(job.id);
                return (
                  <div 
                    key={job.id} 
                    className={`p-5 rounded-2xl bg-slate-900 border transition duration-200 ${isSelected ? 'border-indigo-500 ring-1 ring-indigo-500' : 'border-slate-800 hover:border-slate-700'}`}
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      {/* Left: Info */}
                      <div className="flex items-start gap-4">
                        <button 
                          onClick={() => toggleJobSelect(job.id)}
                          className="mt-1 text-slate-400 hover:text-white"
                        >
                          {isSelected ? <CheckSquare className="w-5 h-5 text-indigo-400" /> : <Square className="w-5 h-5" />}
                        </button>

                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="font-bold text-base text-white">{job.title}</h3>
                            <span className="text-xs text-slate-400">at <span className="text-slate-200 font-semibold">{job.company}</span></span>
                            <span className="px-2 py-0.5 rounded bg-slate-800 text-[10px] font-semibold text-slate-300 uppercase">
                              {job.portal}
                            </span>
                          </div>

                          <div className="flex items-center gap-4 text-xs text-slate-400 mt-1.5 flex-wrap">
                            <span>{job.location}</span>
                            <span>•</span>
                            <span className="text-slate-300 font-semibold">{job.salary}</span>
                            <span>•</span>
                            <span>Added {job.dateAdded}</span>
                          </div>

                          {/* Skill Match badges */}
                          <div className="flex items-center gap-1.5 mt-3 flex-wrap">
                            {job.skillsMatched.map((s, i) => (
                              <span key={i} className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px]">
                                ✓ {s}
                              </span>
                            ))}
                            {job.skillsGap.map((s, i) => (
                              <span key={i} className="px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-[10px]">
                                + Gap: {s}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right: Odds & Transparency Status */}
                      <div className="flex items-center gap-6 justify-between lg:justify-end border-t lg:border-t-0 pt-3 lg:pt-0 border-slate-800">
                        <div className="text-right">
                          <div className="text-xs text-slate-400">Interview Odds</div>
                          <div className="text-xl font-black text-emerald-400">{job.selectionOdds}%</div>
                        </div>

                        {/* Missing fields badge */}
                        <div>
                          {job.missingFields.length === 0 ? (
                            <div className="text-right">
                              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-400">
                                <CheckCircle className="w-3.5 h-3.5" /> 100% Pre-filled
                              </span>
                              <div className="text-[10px] text-slate-500">Ready for instant dispatch</div>
                            </div>
                          ) : (
                            <div className="text-right">
                              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-400">
                                <AlertTriangle className="w-3.5 h-3.5" /> {job.missingFields.length} Missing Fields
                              </span>
                              <div className="text-[10px] text-slate-500">Agent halted auto-apply</div>
                            </div>
                          )}
                        </div>

                        <div className="flex items-center gap-2">
                          <button 
                            onClick={() => setAuditingJob(job)}
                            className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5"
                          >
                            <Eye className="w-3.5 h-3.5" />
                            Inspect Form
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* 4. AUTO-APPLY AGENT & DISPATCH CONSOLE */}
        {activeTab === 'auto-apply' && (
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-white text-base flex items-center gap-2">
                    <Send className="w-4 h-4 text-indigo-400" />
                    Auto-Apply Agent Controls
                  </h3>
                  <button 
                    onClick={() => setAutoApplyActive(!autoApplyActive)}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold transition flex items-center gap-2 ${autoApplyActive ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20' : 'bg-slate-800 text-slate-400'}`}
                  >
                    <span className={`w-2 h-2 rounded-full ${autoApplyActive ? 'bg-white animate-pulse' : 'bg-slate-500'}`}></span>
                    {autoApplyActive ? 'Agent Active' : 'Agent Paused'}
                  </button>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">
                  Configure autonomous pacing to safeguard your profile against portal rate limits.
                </p>

                <div className="space-y-3 pt-2">
                  <label className="text-xs font-semibold text-slate-300 block">Execution Mode</label>
                  <div className="grid grid-cols-2 gap-2">
                    <button 
                      onClick={() => setAutoApplyMode('review_first')}
                      className={`p-3 rounded-xl border text-xs font-semibold text-left transition ${autoApplyMode === 'review_first' ? 'bg-indigo-600/20 border-indigo-500 text-white' : 'bg-slate-950 border-slate-800 text-slate-400'}`}
                    >
                      <div className="font-bold">Review & Confirm</div>
                      <div className="text-[10px] text-slate-400 mt-0.5">Pre-fills forms and asks before submitting</div>
                    </button>
                    <button 
                      onClick={() => setAutoApplyMode('full_autonomous')}
                      className={`p-3 rounded-xl border text-xs font-semibold text-left transition ${autoApplyMode === 'full_autonomous' ? 'bg-emerald-600/20 border-emerald-500 text-white' : 'bg-slate-950 border-slate-800 text-slate-400'}`}
                    >
                      <div className="font-bold text-emerald-400">Full Autopilot</div>
                      <div className="text-[10px] text-slate-400 mt-0.5">Submits 100% ready applications automatically</div>
                    </button>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">Minimum Selection Odds Threshold</label>
                  <div className="flex items-center gap-3">
                    <input type="range" min="70" max="95" defaultValue="80" className="flex-1 accent-indigo-500" />
                    <span className="text-xs font-bold text-indigo-400">80%+</span>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">Max Daily Submissions</label>
                  <input type="number" defaultValue="25" className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-xs text-white" />
                </div>
              </div>
            </div>

            {/* Right: Live Telemetry Terminal */}
            <div className="lg:col-span-7">
              <div className="p-6 rounded-2xl bg-black border border-slate-800 font-mono text-xs shadow-2xl h-[480px] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-slate-400">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                      <span className="font-bold ml-2">autocareer-agent-v2.8 // daemon telemetry</span>
                    </div>
                    <span className="text-[10px] text-emerald-400 font-bold uppercase">Encrypted Handshake OK</span>
                  </div>

                  <div className="mt-4 space-y-2 overflow-y-auto max-h-72">
                    <div className="text-slate-500">[00:00:01] Initializing headless browser cluster with residential proxy rotation...</div>
                    <div className="text-indigo-400">[00:00:04] Encrypted auth token handshake verified with LinkedIn OAuth.</div>
                    <div className="text-slate-300">[00:00:09] ATS Scanner graded Harvard Template at 94.2% compatibility.</div>
                    {dispatchLogs.map((log, index) => (
                      <div key={index} className="text-emerald-400">{log}</div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-900 text-slate-500 flex items-center justify-between text-[11px]">
                  <span>Status: {autoApplyActive ? 'RUNNING AUTOMATIC CYCLES' : 'STANDBY (Press Start Agent)'}</span>
                  <span>Portals: LinkedIn, Naukri, Indeed</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 5. ENCRYPTED SECURITY VAULT */}
        {activeTab === 'vault' && (
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">Zero Data-Leakage Vault</h3>
                  <p className="text-xs text-slate-400">Token-based OAuth connections. Your raw passwords are never saved on our servers.</p>
                </div>
              </div>

              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Key className="w-4 h-4 text-indigo-400" />
                    <div>
                      <div className="font-bold text-xs text-white">LinkedIn Sync Token</div>
                      <div className="text-[11px] text-slate-400">Connected via Session Key • Expires in 28 days</div>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold">Active</span>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Key className="w-4 h-4 text-indigo-400" />
                    <div>
                      <div className="font-bold text-xs text-white">Naukri Candidate Token</div>
                      <div className="text-[11px] text-slate-400">Connected via 2FA OTP • Refresh token valid</div>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold">Active</span>
                </div>
              </div>
            </div>
          </div>
        )}

      </main>

      {/* FORM PRE-FILL & MISSING ATTRIBUTES AUDITOR MODAL */}
      {auditingJob && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl w-full p-6 shadow-2xl overflow-y-auto max-h-[90vh]">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-400">Pre-fill Inspection</span>
                <h3 className="text-lg font-bold text-white mt-0.5">{auditingJob.title} — {auditingJob.company}</h3>
              </div>
              <button 
                onClick={() => setAuditingJob(null)}
                className="text-slate-400 hover:text-white text-xs font-semibold"
              >
                ✕ Close
              </button>
            </div>

            <div className="space-y-6 mt-6">
              {/* Missing Fields Section */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">1. Required Fields Status</h4>
                {auditingJob.missingFields.length === 0 ? (
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    All required job portal fields are 100% complete and verified.
                  </div>
                ) : (
                  <div className="space-y-2">
                    {auditingJob.missingFields.map((field, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2 text-amber-300">
                          <AlertTriangle className="w-4 h-4" />
                          <span>Missing: <strong>{field}</strong></span>
                        </div>
                        <button 
                          onClick={() => {
                            const updated = {
                              ...auditingJob,
                              missingFields: auditingJob.missingFields.filter(f => f !== field)
                            };
                            setAuditingJob(updated);
                            setJobs(jobs.map(j => j.id === updated.id ? updated : j));
                          }}
                          className="px-2.5 py-1 rounded bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-[10px]"
                        >
                          1-Click Fill
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Verified Pre-filled Form Fields */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">2. Populated Application Data</h4>
                <div className="grid grid-cols-2 gap-3 text-xs bg-slate-950 p-4 rounded-xl border border-slate-800">
                  <div>
                    <span className="text-slate-500 block">Applicant Full Name:</span>
                    <span className="font-semibold text-white">{auditingJob.prefilled.legalName}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Contact Email:</span>
                    <span className="font-semibold text-white">{auditingJob.prefilled.email}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Years of Relevant Experience:</span>
                    <span className="font-semibold text-white">{auditingJob.prefilled.experienceYears} Years</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Compensation Expectation:</span>
                    <span className="font-semibold text-emerald-400">{auditingJob.prefilled.salaryExpectation}</span>
                  </div>
                </div>
              </div>

              {/* Cover Letter & Screening Note */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">3. Customized Screening Note</h4>
                <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-300 leading-relaxed">
                  "{auditingJob.prefilled.coverLetterNote}"
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-end gap-3">
              <button 
                onClick={() => setAuditingJob(null)}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold"
              >
                Done Inspecting
              </button>
              <button 
                onClick={() => {
                  alert(`Autonomous application dispatched for ${auditingJob.company}!`);
                  setAuditingJob(null);
                }}
                disabled={auditingJob.missingFields.length > 0}
                className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 disabled:cursor-not-allowed text-white text-xs font-bold shadow-lg shadow-indigo-600/30 flex items-center gap-1.5"
              >
                <Send className="w-3.5 h-3.5" />
                Dispatch Application Now
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CHECKOUT MODAL (MONETIZATION SIMULATION) */}
      {showCheckoutModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-md w-full p-6 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-indigo-400" />
                <span className="font-bold text-white text-sm">Secure Global Checkout</span>
              </div>
              <button onClick={() => setShowCheckoutModal(false)} className="text-slate-400 hover:text-white text-xs">✕</button>
            </div>

            <div className="mt-4 space-y-4 text-xs">
              <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-300">
                Plan: <strong>{selectedPlan ? selectedPlan.name : "Pro Career FastTrack"}</strong> ({selectedPlan ? selectedPlan.price : "$29/mo"})
              </div>

              <div>
                <label className="text-slate-400 block mb-1">Card Information</label>
                <input type="text" placeholder="4242 •••• •••• 4242" className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-white" />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-slate-400 block mb-1">MM / YY</label>
                  <input type="text" placeholder="12/28" className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-white" />
                </div>
                <div>
                  <label className="text-slate-400 block mb-1">CVC</label>
                  <input type="text" placeholder="123" className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-white" />
                </div>
              </div>

              <button 
                onClick={() => {
                  alert("Payment confirmed! Pro features unlocked.");
                  setShowCheckoutModal(false);
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-bold text-xs shadow-lg shadow-emerald-500/20"
              >
                Activate Subscription
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}