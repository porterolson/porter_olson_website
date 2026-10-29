// Edit this file to personalize every page. Empty lists stay honest and tidy.
// Put assets in public/ and use paths such as 'files/porter-olson-cv.pdf'.
export const profile = {
  name: 'Porter Olson',
  initials: 'PO',
  role: 'Predoc · NYU Stern Finance',
  affiliation: 'New York University · Stern School of Business',
  location: 'New York, NY',
  email: 'po2241@stern.nyu.edu',
  github: 'https://github.com/porterolson',
  scholar: '',
  orcid: '',
  linkedin: 'https://www.linkedin.com/in/porter-olson/',
  cvFile: '',
  portrait: 'images/porter-olson.jpg',
  introduction: 'I am a predoc in the Finance department at NYU Stern. I am preparing to apply to PhD programs in economics and finance.',
  bio: [
    'I’m a predoc in the Finance department at NYU Stern. I’m preparing to apply to PhD programs in economics and finance, with interests in econometrics, causal inference, asset pricing, and corporate finance.',
    'My background is in economics at Brigham Young University, with minors in mathematics and Chinese. My research experience spans empirical economics, quantitative investment research, and machine learning.',
    'At BYU, I worked on projects involving foreign language acquisition, international exposure, and historical administrative data. With the BYU Silver Fund, I replicated asset pricing research and explored language models applied to corporate filings.',
  ],
  interests: ['Econometrics & causal inference', 'Asset pricing', 'Corporate finance', 'Labor & education economics', 'Machine learning in economics'],
  skills: ['Python', 'Stata', 'R', 'SQL', 'MATLAB', 'LaTeX', 'PyTorch', 'TensorFlow', 'scikit-learn', 'Polars', 'Pandas', 'Mandarin', 'Cantonese'],
};

export type Research = {
  title: string;
  summary: string;
  status: string;
  tags: string[];
  url?: string;
};
export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: number;
  type: 'Article' | 'Working paper' | 'Preprint' | 'Conference' | 'Poster' | 'Thesis';
  abstract?: string;
  url?: string;
  code?: string;
};
export type Experience = {
  title: string;
  organization: string;
  period: string;
  description: string;
  category: 'Research' | 'Teaching' | 'Service';
};
export type Education = {
  degree: string;
  institution: string;
  period: string;
  detail?: string;
};
export const research: Research[] = [
  {
    title: 'ESG restrictions and their consequences',
    summary: 'With Owen Benner, I studied the financial and environmental outcomes associated with Texas’s ESG investment restrictions. The paper combines difference-in-differences, quantile regression, and synthetic control, with attention to uncertainty and the challenges of separating policy effects from pandemic-era shocks.',
    status: 'Research paper · 2024',
    tags: ['Policy evaluation', 'Empirical finance', 'Causal inference'],
    url: 'files/texas-esg-paper.pdf',
  },
  {
    title: 'Asset pricing and information in corporate filings',
    summary: 'At the BYU Silver Fund, I replicated and extended academic asset pricing anomalies, explored fine-tuned language models for 10-K filings, and implemented portfolio backtests using risk models and constrained optimization.',
    status: 'Research experience · BYU Silver Fund',
    tags: ['Asset pricing', 'Natural language processing', 'Portfolio research'],
  },
  {
    title: 'Language acquisition and international exposure',
    summary: 'As a research assistant to Tanner Eastmond at BYU, I contributed to work on the returns to foreign language acquisition and the longer-run effects of international exposure. My work included record linkage in Stata, regression analysis, and historical newspaper data collection.',
    status: 'Research assistance · Brigham Young University',
    tags: ['Labor economics', 'Record linkage', 'Applied econometrics'],
  },
];
export const publications: Publication[] = [
  {
    title: 'The Impact of Texas’ ESG Ban on Financial and Environmental Outcomes',
    authors: 'Porter Olson and Owen Benner',
    venue: 'Research paper · December 2024',
    year: 2024,
    type: 'Working paper',
    abstract: 'We examine Texas’s ESG investment restrictions using difference-in-differences, quantile regression, and synthetic control methods. The analysis considers economic indicators, environmental outcomes, and financial performance. Estimates suggest modest, heterogeneous effects, with substantial statistical uncertainty and identification challenges arising from pandemic-era disruptions.',
    url: 'files/texas-esg-paper.pdf',
  },
];
// Start dates are used where the older CV does not establish an end date.
export const experience: Experience[] = [
  {
    title: 'Predoc, Finance', organization: 'NYU Stern School of Business', period: 'Current',
    description: 'Predoctoral research in Finance at NYU Stern.', category: 'Research',
  },
  {
    title: 'Economics Research Assistant', organization: 'Brigham Young University · Tanner Eastmond', period: 'Started Sept 2024',
    description: 'Research on foreign language acquisition and international exposure. Built record-linkage tools in Stata, performed regression and robustness analysis, and scraped historical newspaper archives.', category: 'Research',
  },
  {
    title: 'Quantitative Researcher', organization: 'BYU Silver Fund', period: 'Started Jan 2025',
    description: 'Replicated and extended asset pricing anomalies, researched language models for 10-K filings, and implemented portfolio backtests with risk models and constrained optimization.', category: 'Research',
  },
  {
    title: 'Research Intern', organization: 'Ag-Genius AI', period: 'May–Aug 2025',
    description: 'Developed machine learning models for crop-yield prediction and satellite-based crop identification, supported by research on crop development, yields, and input costs.', category: 'Research',
  },
  {
    title: 'Economics Research Assistant', organization: 'Brigham Young University · Joseph Price', period: 'Feb–Sept 2024',
    description: 'Scraped and cleaned administrative data for FHA mortgage research, linked historical records to the 1880 U.S. Census, and trained students in data transcription.', category: 'Research',
  },
  {
    title: 'Air Force Research Lab Scholar', organization: 'USRA · Space Vehicles program', period: 'Summer 2018',
    description: 'Conducted computational research on solar energetic particle trajectories in Earth’s magnetosphere and developed Python tools for simulation analysis.', category: 'Research',
  },
  {
    title: 'Teaching Assistant · Graduate Asset Pricing Theory', organization: 'Brigham Young University · FIN 585', period: 'Winter 2026',
    description: 'Teaching assistant for graduate asset pricing theory.', category: 'Teaching',
  },
  {
    title: 'Cantonese Instructor', organization: 'Missionary Training Center', period: '2021–2023',
    description: 'Taught Cantonese at the Missionary Training Center.', category: 'Teaching',
  },
];
export const education: Education[] = [
  { degree: 'B.S. in Economics', institution: 'Brigham Young University', period: '2026', detail: 'Minors in Mathematics and Chinese. Coursework includes graduate econometrics, graduate asset pricing, graduate macroeconomic theory, real analysis, and machine learning econometrics.' },
];
export const awards: { title: string; organization: string; year: string }[] = [];
export const updates: { date: string; text: string; url?: string }[] = [];
