import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

/* ───────── TYPES ───────── */
interface BlogItem {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  color: string;
  overview: string;
  keyFeatures: string[];
  useCases: string;
  diagram: string;
}

/* ───────── DATA ───────── */
const toolsData: BlogItem[] = [
  {
    id: 'docker',
    title: 'Docker',
    subtitle: 'Kontainerisasi',
    icon: 'https://cdn.simpleicons.org/docker/2496ED',
    color: '#2496ED',
    overview: 'Docker adalah platform kontainerisasi yang memungkinkan developer mengemas aplikasi beserta seluruh dependensinya ke dalam container yang ringan dan portabel. Dengan Docker, Anda bisa memastikan aplikasi berjalan identik di berbagai environment.',
    keyFeatures: [
      'Isolasi environment dengan container',
      'Dockerfile untuk reproducible builds',
      'Docker Compose untuk multi-container orchestration',
      'Layer caching untuk build yang cepat',
      'Integration dengan CI/CD pipelines',
    ],
    useCases: 'Microservices architecture, CI/CD automation, development environment standardization, deployment scaling.',
    diagram: 'Dockerfile → Image → Container → Registry → Deployment',
  },
  {
    id: 'github',
    title: 'GitHub',
    subtitle: 'Version Control',
    icon: 'https://cdn.simpleicons.org/github/ffffff',
    color: '#8B5CF6',
    overview: 'GitHub adalah platform kolaborasi dan hosting repositori Git yang menjadi standar industri untuk manajemen source code. Fitur-fitur seperti Pull Requests, Issues, dan Actions memungkinkan workflow pengembangan yang terstruktur.',
    keyFeatures: [
      'Branching dan merging strategy (Git Flow)',
      'Pull Request & Code Review workflow',
      'GitHub Actions untuk CI/CD automation',
      'Issue tracking & project management',
      'GitHub Packages & Container Registry',
    ],
    useCases: 'Open source collaboration, team code review, automated testing and deployment, project documentation.',
    diagram: 'Feature Branch → Pull Request → Review → Merge → Deploy',
  },
  {
    id: 'postman',
    title: 'Postman',
    subtitle: 'API Testing',
    icon: 'https://cdn.simpleicons.org/postman/FF6C37',
    color: '#FF6C37',
    overview: 'Postman adalah tool lengkap untuk pengembangan dan testing API. Dari membuat request sederhana hingga automated testing suites, Postman menyediakan lingkungan yang intuitif untuk bekerja dengan RESTful dan GraphQL APIs.',
    keyFeatures: [
      'Collection-based request organization',
      'Environment variables untuk multi-stage testing',
      'Automated test scripts (Pre-request & Tests)',
      'Mock servers untuk frontend development',
      'API documentation auto-generation',
    ],
    useCases: 'REST API development, GraphQL testing, automated regression testing, team API documentation sharing.',
    diagram: 'Request → Pre-script → Send → Response → Test Scripts → Report',
  },
  {
    id: 'nginx',
    title: 'Nginx',
    subtitle: 'Web Server',
    icon: 'https://cdn.simpleicons.org/nginx/009639',
    color: '#009639',
    overview: 'Nginx adalah web server dan reverse proxy berkinerja tinggi yang menangani jutaan koneksi simultan. Digunakan secara luas sebagai load balancer, HTTP cache, dan static file server.',
    keyFeatures: [
      'Reverse proxy & load balancing',
      'SSL/TLS termination',
      'Static file serving dengan caching',
      'Rate limiting & security headers',
      'WebSocket proxying',
    ],
    useCases: 'Production web server, microservices API gateway, SSL termination, static asset CDN, load distribution.',
    diagram: 'Client → Nginx (SSL) → Upstream Servers → Database',
  },
  {
    id: 'redis',
    title: 'Redis',
    subtitle: 'Caching',
    icon: 'https://cdn.simpleicons.org/redis/DC382D',
    color: '#DC382D',
    overview: 'Redis adalah in-memory data store yang sangat cepat, digunakan sebagai cache, message broker, dan session storage. Dengan latensi sub-millisecond, Redis meningkatkan performa aplikasi secara signifikan.',
    keyFeatures: [
      'Key-value store dengan sub-ms latency',
      'Pub/Sub messaging pattern',
      'Data persistence (RDB & AOF)',
      'TTL-based automatic expiration',
      'Cluster mode untuk horizontal scaling',
    ],
    useCases: 'Session management, API response caching, real-time leaderboards, message queuing, rate limiting.',
    diagram: 'App → Redis Cache (Hit?) → Yes: Return → No: DB Query → Store in Redis',
  },
];

const languagesData: BlogItem[] = [
  {
    id: 'typescript',
    title: 'TypeScript',
    subtitle: 'Typing',
    icon: 'https://cdn.simpleicons.org/typescript/3178C6',
    color: '#3178C6',
    overview: 'TypeScript menambahkan static typing ke JavaScript, mengurangi bug saat development dan meningkatkan developer experience melalui intellisense. TypeScript sudah menjadi standar de facto untuk proyek JavaScript skala besar.',
    keyFeatures: [
      'Static type checking pada compile time',
      'Interface & generics untuk abstraksi',
      'Type inference yang powerful',
      'Discriminated unions & exhaustive checks',
      'Seamless integration dengan ecosystem JS',
    ],
    useCases: 'Large-scale web apps (React/Next.js), API backends (Express/Fastify), library development, monorepo tooling.',
    diagram: 'TypeScript Source → tsc Compiler → JavaScript → Runtime',
  },
  {
    id: 'solidity',
    title: 'Solidity',
    subtitle: 'Web3 / Smart Contract',
    icon: 'https://cdn.simpleicons.org/solidity/ffffff',
    color: '#363636',
    overview: 'Solidity adalah bahasa pemrograman utama untuk menulis smart contract di Ethereum dan blockchain EVM-compatible. Dengan Solidity, developer dapat membuat DeFi protocols, NFT marketplaces, dan DAOs yang bersifat trustless.',
    keyFeatures: [
      'Smart contract development untuk EVM',
      'Modifier patterns untuk access control',
      'Event logging untuk off-chain indexing',
      'Gas optimization techniques',
      'Upgradeable proxy patterns (UUPS/Transparent)',
    ],
    useCases: 'DeFi protocols, NFT minting & marketplace, DAO governance, token standards (ERC-20, ERC-721, ERC-1155).',
    diagram: 'Solidity → Compiler → Bytecode → Deploy to EVM → Interact via ABI',
  },
  {
    id: 'python',
    title: 'Python',
    subtitle: 'Backend / ML',
    icon: 'https://cdn.simpleicons.org/python/3776AB',
    color: '#3776AB',
    overview: 'Python adalah bahasa pemrograman serbaguna yang dominan di bidang Machine Learning, data science, dan backend development. Ekosistemnya yang kaya membuatnya ideal untuk rapid prototyping hingga production systems.',
    keyFeatures: [
      'Machine Learning (TensorFlow/PyTorch/Scikit)',
      'FastAPI/Django untuk RESTful backends',
      'Pandas/NumPy untuk data manipulation',
      'Asyncio untuk concurrent programming',
      'Jupyter Notebooks untuk eksperimen',
    ],
    useCases: 'ML model training & inference, data analysis pipelines, REST API backends, web scraping, automation scripts.',
    diagram: 'Data Collection → Preprocessing → Model Training → Evaluation → Deployment (FastAPI)',
  },
  {
    id: 'go',
    title: 'Go',
    subtitle: 'High Performance',
    icon: 'https://cdn.simpleicons.org/go/00ADD8',
    color: '#00ADD8',
    overview: 'Go (Golang) dirancang oleh Google untuk simplicity dan high-performance concurrent programming. Dengan goroutines dan channels, Go sangat cocok untuk membangun microservices dan infrastructure tools.',
    keyFeatures: [
      'Goroutines untuk lightweight concurrency',
      'Channels untuk safe communication',
      'Compiled language dengan binary portabel',
      'Built-in testing & benchmarking',
      'Standard library yang komprehensif',
    ],
    useCases: 'High-throughput APIs, CLI tools, container orchestration (Docker/K8s), real-time data processing, infrastructure.',
    diagram: 'Source (.go) → go build → Binary → Deploy (no runtime needed)',
  },
  {
    id: 'laravel',
    title: 'Laravel',
    subtitle: 'PHP Ecosystem',
    icon: 'https://cdn.simpleicons.org/laravel/FF2D20',
    color: '#FF2D20',
    overview: 'Laravel adalah framework PHP yang paling populer, menyediakan ekosistem lengkap untuk membangun web applications — dari authentication hingga queue processing, semuanya tersedia out-of-the-box.',
    keyFeatures: [
      'Eloquent ORM untuk database abstraction',
      'Blade templating engine',
      'Artisan CLI untuk code generation',
      'Queue processing & scheduled tasks',
      'Laravel Sanctum/Passport untuk API auth',
    ],
    useCases: 'Full-stack web applications, REST API backends, CMS platforms, e-commerce systems, SaaS products.',
    diagram: 'Route → Middleware → Controller → Model (Eloquent) → View (Blade)',
  },
];

const socialLinks = [
  { name: 'WhatsApp', href: 'https://wa.me/qr/LVBK7CJAYOXQC', icon: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
  )},
  { name: 'Instagram', href: 'https://www.instagram.com/eclipwearya?igsh=MWx6OTAybms4Z293bg=', icon: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
  )},
  { name: 'Telegram', href: 'https://t.me/Whynodee', icon: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0 12 12 0 0011.944 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
  )},
  { name: 'X (Twitter)', href: 'https://x.com/aryasuhendra226', icon: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
  )},
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/arya-suhendra-b78904259', icon: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
  )},
  { name: 'GitHub', href: '#', icon: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
  )},
];

/* ───────── ARTICLE CARD ───────── */
interface ArticleCardProps {
  item: BlogItem;
  index: number;
  onSelect: (item: BlogItem) => void;
}

function ArticleCard({ item, index, onSelect }: ArticleCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      onClick={() => onSelect(item)}
      className="group cursor-pointer"
      data-hover
    >
      <div className="glass-card-interactive rounded-2xl overflow-hidden h-full relative">
        {/* Glassmorphism title header */}
        <div className="relative h-40 overflow-hidden flex items-end p-6">
          {/* Background gradient */}
          <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${item.color}15, ${item.color}05, transparent)` }} />
          <div className="absolute inset-x-0 top-0 bottom-20 flex items-center justify-center opacity-45 group-hover:opacity-65 transition-all duration-500">
            <img 
              src={item.icon} 
              alt={item.title} 
              className="w-16 h-16 object-contain filter drop-shadow-[0_0_25px_rgba(167,139,250,0.4)] group-hover:scale-110 transition-transform duration-500" 
            />
          </div>
          
          {/* Glass title bar */}
          <div className="relative z-10 w-full">
            <div className="glass-strong px-4 py-3 rounded-xl">
              <h3 className="text-sm font-bold text-text-primary">{item.title}</h3>
              <span className="text-[10px] text-accent font-semibold tracking-wider uppercase">{item.subtitle}</span>
            </div>
          </div>
        </div>

        {/* Preview text */}
        <div className="p-5 pt-3">
          <p className="text-xs text-text-muted leading-relaxed line-clamp-3">{item.overview}</p>
          <div className="mt-3 flex items-center gap-1.5 text-accent text-[11px] font-semibold group-hover:gap-3 transition-all duration-300">
            Baca Selengkapnya
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ───────── ARTICLE MODAL ───────── */
interface ArticleModalProps {
  item: BlogItem | null;
  onClose: () => void;
}

function ArticleModal({ item, onClose }: ArticleModalProps) {
  if (!item) return null;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-bg-primary/80 backdrop-blur-sm" />

      {/* Modal */}
      <motion.div
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 20 }}
        transition={{ type: 'spring', damping: 25 }}
        onClick={(e) => e.stopPropagation()}
        className="relative glass-card rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto z-10 border border-glass-border-hover"
      >
        {/* Header */}
        <div className="relative overflow-hidden rounded-t-2xl">
          <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${item.color}20, ${item.color}08, transparent)` }} />
          <div className="relative z-10 p-6 pb-4 flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-glass-bg border border-glass-border flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.3)] p-3" style={{ transform: 'perspective(150px) rotateX(4deg) rotateY(-2deg)' }}>
                <img src={item.icon} alt={item.title} className="w-full h-full object-contain" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-text-primary">{item.title}</h2>
                <span className="text-xs text-accent font-semibold tracking-wider uppercase">{item.subtitle}</span>
              </div>
            </div>
            <button onClick={onClose} className="w-8 h-8 rounded-lg glass-card flex items-center justify-center text-text-muted hover:text-text-primary transition-colors" data-hover>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 pt-2 space-y-6">
          {/* Overview */}
          <section>
            <h3 className="text-sm font-bold text-text-primary mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
              Overview
            </h3>
            <p className="text-sm text-text-muted leading-relaxed">{item.overview}</p>
          </section>

          {/* Key Features */}
          <section>
            <h3 className="text-sm font-bold text-text-primary mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
              Fitur Utama
            </h3>
            <ul className="space-y-2">
              {item.keyFeatures.map((feat: string, i: number) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-text-muted">
                  <span className="w-4 h-4 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-1 h-1 rounded-full bg-accent"></span>
                  </span>
                  {feat}
                </li>
              ))}
            </ul>
          </section>

          {/* Use Cases */}
          <section>
            <h3 className="text-sm font-bold text-text-primary mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
              Use Cases
            </h3>
            <p className="text-sm text-text-muted leading-relaxed">{item.useCases}</p>
          </section>

          {/* Diagram placeholder */}
          <section>
            <h3 className="text-sm font-bold text-text-primary mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
              Skema / Diagram
            </h3>
            <div className="glass-card p-5 rounded-xl border border-accent/10">
              <div className="flex items-center gap-3 flex-wrap">
                {item.diagram.split('→').map((step: string, i: number, arr: string[]) => (
                  <React.Fragment key={i}>
                    <span className="px-3 py-1.5 rounded-lg bg-accent/10 border border-accent/20 text-xs font-semibold text-accent whitespace-nowrap">
                      {step.trim()}
                    </span>
                    {i < arr.length - 1 && (
                      <svg className="w-4 h-4 text-accent/40 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </section>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ───────── SECTION COMPONENT ───────── */
interface CategorySectionProps {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  items: BlogItem[];
  badge: string;
}

function CategorySection({ title, subtitle, icon, items, badge }: CategorySectionProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [selected, setSelected] = useState<BlogItem | null>(null);

  return (
    <section className="py-16 relative" ref={ref}>
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        className="flex items-center gap-4 mb-10"
      >
        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-accent/15 to-accent/5 border border-accent/20 flex items-center justify-center text-xl shadow-[0_4px_16px_rgba(167,139,250,0.1),inset_0_1px_0_rgba(255,255,255,0.06)]" style={{ transform: 'perspective(200px) rotateX(5deg) rotateY(-3deg)' }}>
          {icon}
        </div>
        <div>
          <div className="inline-flex px-2.5 py-0.5 rounded-full bg-accent/8 border border-accent/15 text-accent text-[9px] font-bold tracking-widest mb-1">
            {badge}
          </div>
          <h2 className="text-2xl font-bold text-text-primary">{title}</h2>
        </div>
      </motion.div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {items.map((item, i) => (
          <ArticleCard key={item.id} item={item} index={i} onSelect={setSelected} />
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && <ArticleModal item={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}

/* ───────── BLOG PAGE ───────── */
export default function Blog() {
  return (
    <div className="pt-28 pb-16 px-6 max-w-7xl mx-auto min-h-screen relative z-10">
      <div className="glow-blob glow-blob-purple w-[500px] h-[500px] absolute top-[5%] right-[-10%] opacity-[0.06]"></div>
      <div className="glow-blob glow-blob-blue w-[400px] h-[400px] absolute bottom-[10%] left-[-8%] opacity-[0.05]"></div>

      {/* Back link */}
      <Link to="/" className="inline-flex items-center text-text-muted hover:text-accent transition-colors duration-300 mb-8 group" data-hover>
        <svg className="w-3.5 h-3.5 mr-2 transform group-hover:-translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        <span className="text-xs font-medium">Kembali ke Beranda</span>
      </Link>

      {/* Page header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/5 border border-accent/15 text-accent text-[10px] font-semibold tracking-widest mb-4">
          TECH KNOWLEDGE BASE
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-3">
          Blog <span className="text-gradient">Teknologi</span>
        </h1>
        <p className="text-text-muted max-w-lg text-sm">
          Eksplorasi mendalam tentang tools dan bahasa pemrograman yang membentuk ekosistem pembangunan digital modern.
        </p>
      </motion.div>

      {/* Animated divider */}
      <div className="relative py-2 overflow-hidden mb-4">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-glass-border to-transparent relative">
          <motion.div
            className="absolute top-1/2 -translate-y-1/2 w-16 h-[3px] rounded-full"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(167,139,250,0.5), transparent)' }}
            animate={{ left: ['-10%', '110%'] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear', repeatDelay: 2 }}
          />
        </div>
      </div>

      {/* Tools Section */}
      <CategorySection
        title="Developer Tools"
        subtitle="Infrastruktur teknis"
        icon={<img src="https://cdn.simpleicons.org/googlecloud/a78bfa" className="w-5 h-5" alt="Tools" />}
        badge="TOOLS"
        items={toolsData}
      />

      {/* Divider */}
      <div className="relative py-3 overflow-hidden">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-glass-border to-transparent relative">
          <motion.div
            className="absolute top-1/2 -translate-y-1/2 w-20 h-[3px] rounded-full"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(129,140,248,0.5), transparent)' }}
            animate={{ left: ['-10%', '110%'] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'linear', repeatDelay: 1.5 }}
          />
        </div>
      </div>

      {/* Languages Section */}
      <CategorySection
        title="Bahasa & Framework"
        subtitle="Stack pemrograman"
        icon={<img src="https://cdn.simpleicons.org/codeigniter/a78bfa" className="w-5 h-5" alt="Languages" />}
        badge="LANGUAGES"
        items={languagesData}
      />

      {/* Social links footer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 pt-8 border-t border-glass-border"
      >
        <div className="text-center">
          <h3 className="text-sm font-bold text-text-primary mb-2">Terhubung dengan Saya</h3>
          <p className="text-xs text-text-muted mb-6">Ikuti perkembangan proyek dan artikel terbaru</p>
          
          <div className="flex justify-center gap-3 flex-wrap">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl glass-card-interactive flex items-center justify-center text-text-muted hover:text-accent hover:shadow-[0_0_20px_rgba(167,139,250,0.12)] transition-all duration-500 group"
                data-hover
                title={link.name}
              >
                <span className="transform group-hover:scale-110 transition-transform duration-300">
                  {link.icon}
                </span>
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
