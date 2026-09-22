import { PersonalInfo, SkillItem, ExperienceItem, ProjectItem, ServiceItem } from '../types';

export const personalInfo: PersonalInfo = {
  name: 'Hammas Umer',
  role: 'WordPress & React Developer',
  email: 'hammasumer7@gmail.com',
  phone: '+92 313 8491418',
  phoneRaw: '+923138491418',
  whatsappUrl: 'https://wa.me/923138491418?text=Hello%20Hammas%2C%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect%20regarding%20a%20project.',
  githubUrl: 'https://github.com/hammasumer',
  linkedinUrl: 'https://www.linkedin.com/in/hammas-umer/',
  shortBio:
    'Dedicated WordPress and React Developer with 4 years of hands-on WordPress experience building custom, high-performance websites, and 1 year of focused React.js engineering crafting modular, responsive web applications.',
  fullBio:
    'I specialize in building tailored digital solutions that merge robust backend WordPress management with high-speed, modern React frontends. With 4 years of deep WordPress mastery spanning Elementor, WooCommerce, custom page builds, and performance optimization, paired with 1 year of modern React.js component-driven development, I deliver clean, reliable websites optimized for speed, search engines, and real-world user engagement.'
};

export const skillsList: SkillItem[] = [
  // WordPress & CMS
  { name: 'WordPress', category: 'wordpress', description: 'Core architecture, custom theme development, site structure' },
  { name: 'Custom Website Development', category: 'wordpress', description: 'Tailored client websites tailored to brand specifications' },
  { name: 'WooCommerce', category: 'wordpress', description: 'E-commerce store setup, product management, checkout flow' },
  { name: 'Elementor', category: 'wordpress', description: 'Pixel-perfect drag-and-drop builder, dynamic widgets, styling' },
  // React & Modern Frontend
  { name: 'React.js', category: 'react', description: 'Functional components, hooks, state management, SPA routing' },
  { name: 'JavaScript', category: 'core', description: 'ES6+ standards, DOM manipulation, asynchronous programming' },
  { name: 'HTML', category: 'core', description: 'Semantic structure, accessibility best practices, clean markup' },
  { name: 'CSS', category: 'core', description: 'Modern layout systems (Flexbox, Grid), animations, styling' },
  { name: 'PHP', category: 'core', description: 'WordPress template hierarchy, custom hooks, backend logic' },
  // Optimization & Marketing
  { name: 'SEO', category: 'marketing', description: 'On-page optimization, site speed, structured markup, indexability' },
  { name: 'Social Media Marketing', category: 'marketing', description: 'Channel integration, share cards, audience conversion assets' }
];

export const experienceList: ExperienceItem[] = [
  {
    id: 'wordpress-dev',
    role: 'WordPress Developer',
    yearsLabel: '4 Years Experience',
    period: '2022 - Present (4 Years)',
    summary:
      'Extensive experience engineering custom WordPress platforms, client portals, and e-commerce solutions with a focus on speed, responsiveness, and seamless content management.',
    highlights: [
      'WordPress website development',
      'Elementor',
      'WooCommerce',
      'Custom websites',
      'Responsive design',
      'Website customization',
      'Bug fixing',
      'Performance optimization',
      'SEO implementation'
    ],
    techStack: ['WordPress', 'Elementor', 'WooCommerce', 'PHP', 'HTML', 'CSS', 'SEO']
  },
  {
    id: 'react-dev',
    role: 'React.js Developer',
    yearsLabel: '1 Year Experience',
    period: '2025 - Present (1 Year)',
    summary:
      'Developing modern frontend interfaces with React, architecting modular component systems, and connecting responsive client views to external services and APIs.',
    highlights: [
      'React.js',
      'Component-based development',
      'Responsive interfaces',
      'Modern frontend development',
      'API integration'
    ],
    techStack: ['React.js', 'JavaScript (ES6+)', 'Modern CSS', 'API Integration', 'Component Architecture']
  }
];

export const projectsList: ProjectItem[] = [
  {
    id: 'primenest-realty',
    title: 'PrimeNest Realty',
    technology: 'React.js',
    category: 'react',
    description:
      'Modern real estate website with property listings, categories, services, testimonials, and contact sections.',
    keyFeatures: [
      'Interactive property listings grid',
      'Property category sorting and filter views',
      'Dedicated services & agency offerings overview',
      'Client testimonials carousel & reviews section',
      'Fully responsive contact and inquiry forms'
    ],
    // Placeholders for live links (can be easily replaced in Cursor or settings)
    liveUrl: '#',
    codeUrl: '#'
  },
  {
    id: 'drug-mart-pharmacy',
    title: 'Drug Mart Pharmacy',
    technology: 'React.js',
    category: 'react',
    description:
      'Modern pharmacy website with product/service sections and responsive design.',
    keyFeatures: [
      'Structured healthcare product & prescription showcases',
      'Pharmacy services and clinical support catalog',
      'Responsive mobile-first layout optimized for speed',
      'Clear call-to-actions for prescription pickup and consultations'
    ],
    liveUrl: '#',
    codeUrl: '#'
  },
  {
    id: 'benco-realty',
    title: 'BenCo Realty',
    technology: 'WordPress + Elementor',
    category: 'wordpress',
    description:
      'Real estate website developed from scratch using WordPress and Elementor.',
    keyFeatures: [
      'Built from the ground up using custom Elementor templates',
      'Structured real estate showcase with custom post layouts',
      'Tailored property detail presentations and hero banners',
      'Optimized asset loading and mobile touch interactions'
    ],
    liveUrl: '#',
    codeUrl: '#'
  },
  {
    id: 'the-herbal-pool',
    title: 'The Herbal Pool',
    technology: 'WordPress',
    category: 'wordpress',
    description: 'WordPress website and custom page development.',
    keyFeatures: [
      'Custom page template development and brand alignment',
      'Holistic product and information layout design',
      'Clean typography and fast loading media galleries',
      'On-page SEO configuration and schema elements'
    ],
    liveUrl: '#',
    codeUrl: '#'
  },
  {
    id: 'pumewa',
    title: 'PUMEWA',
    technology: 'WordPress',
    category: 'wordpress',
    description: 'Website developed for Pak United Medical & Education Welfare Association.',
    keyFeatures: [
      'Welfare association portal highlighting medical and educational missions',
      'Custom informational sections and program initiatives',
      'Accessible donation and community outreach pathways',
      'Reliable, easy-to-update WordPress administration backend'
    ],
    liveUrl: '#',
    codeUrl: '#'
  }
];

export const servicesList: ServiceItem[] = [
  {
    id: 'custom-wordpress',
    title: 'Custom WordPress Development',
    subtitle: 'Tailored websites & theme customization',
    description:
      'Full-cycle WordPress engineering from custom themes and layouts to Elementor architecture, ensuring a clean editing experience for site owners.',
    features: [
      'Custom theme and template creation',
      'Elementor Pro design and dynamic content',
      'Bug diagnosis, fixing & theme overrides',
      'Clean PHP backend modifications'
    ],
    icon: 'Layout'
  },
  {
    id: 'react-frontend',
    title: 'React.js Web Applications',
    subtitle: 'Modern component-driven frontends',
    description:
      'High-speed, single-page application development using React.js. Crafting reusable UI components, clean state management, and smooth responsive views.',
    features: [
      'Component-based architecture',
      'REST & third-party API integrations',
      'Responsive, mobile-friendly interfaces',
      'Clean JavaScript / TypeScript code'
    ],
    icon: 'Atom'
  },
  {
    id: 'woocommerce-stores',
    title: 'WooCommerce E-Commerce',
    subtitle: 'Online stores built to convert',
    description:
      'Setup and customization of WooCommerce stores with seamless checkout processes, product catalogs, shipping rules, and payment gateways.',
    features: [
      'Store configuration & product setup',
      'Secure checkout and payment gateway integration',
      'Custom shopping cart styling',
      'E-commerce performance optimization'
    ],
    icon: 'ShoppingBag'
  },
  {
    id: 'performance-seo',
    title: 'Performance & On-Page SEO',
    subtitle: 'Fast loading & search discoverability',
    description:
      'Fine-tuning website speed, minifying assets, configuring caching mechanisms, and applying SEO best practices for improved search engine rankings.',
    features: [
      'Core Web Vitals & speed optimization',
      'Image compression and caching setup',
      'Semantic HTML and on-page SEO meta tags',
      'Social media integration & open graph tags'
    ],
    icon: 'Zap'
  },
  {
    id: 'responsive-rebuilds',
    title: 'Responsive Redesigns & Bug Fixing',
    subtitle: 'Cross-browser & cross-device precision',
    description:
      'Transforming outdated designs into responsive layouts that render crisply across smartphones, tablets, laptops, and ultra-wide screens.',
    features: [
      'Mobile-first responsive adjustments',
      'Cross-browser layout bug troubleshooting',
      'CSS & JavaScript conflict resolution',
      'UI consistency audits across devices'
    ],
    icon: 'Smartphone'
  },
  {
    id: 'social-marketing-integration',
    title: 'Social & Digital Growth Setup',
    subtitle: 'Bridging web development with marketing',
    description:
      'Implementing digital marketing essentials into websites, connecting social channels, lead capture forms, tracking tags, and conversion touchpoints.',
    features: [
      'Direct WhatsApp click-to-chat integration',
      'Social media profile connectivity',
      'Lead capture and contact form workflows',
      'Social sharing previews & cards'
    ],
    icon: 'Share2'
  }
];
