import type { SocialLink } from '../types/links'

export const personalInfo = {
  name: 'Krisztián Náhol',
  titles: [
    'IT Engineering Student',
    'QA Automation Engineer',
    'Software Developer',
  ],
  summary:
    'I am a fifth-semester IT Engineering student at Óbuda University currently working at Bosch as a Software Tester and Test Automation Engineer. I contribute to a production-grade Playwright automation framework and have already delivered more than 80 merged pull requests.',
  interests: [
    'Software Development',
    'Test Automation',
    'Quality Engineering',
    'Artificial Intelligence',
    'Productivity Software',
    'Modern Web Technologies',
  ],
  email: 'jrnk05@gmail.com',
  github: 'https://github.com/blacklvag',
  profileImage: '/profile.jpg',
} as const

export const socialLinks: readonly SocialLink[] = [
  {
    label: 'GitHub',
    detail: 'blacklvag',
    href: personalInfo.github,
    kind: 'external',
    icon: 'M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z',
  },
  {
    label: 'Email',
    detail: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    kind: 'mailto',
    icon: 'M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.256 0L1.5 8.67z M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z',
  },
]

export const heroContent = {
  headline:
    'Building reliable software through automation, testing and engineering.',
  subheadline:
    'IT Engineering student at Óbuda University. QA Automation Engineer at Bosch. Passionate about Playwright, TypeScript, C# and AI-powered software.',
} as const

export const stats = [
  { value: '80+', label: 'Merged Pull Requests' },
  { value: 'Bosch', label: 'Professional Experience' },
  { value: 'Playwright', label: 'Automation Framework' },
  { value: 'Óbuda', label: 'IT Engineering Student' },
] as const

export const skillCategories = [
  {
    title: 'Testing & QA',
    skills: [
      'Playwright',
      'End-to-End Testing',
      'Test Automation',
      'Regression Testing',
      'Manual Testing',
    ],
  },
  {
    title: 'Programming',
    skills: ['TypeScript', 'C#', 'JavaScript', 'SQL', 'C++'],
  },
  {
    title: 'Frontend',
    skills: ['React', 'Tailwind CSS', 'HTML', 'CSS'],
  },
  {
    title: 'Tools',
    skills: ['Azure DevOps', 'Jira', 'Git', 'GitHub', 'VS Code'],
  },
] as const

export const projects = [
  {
    id: 'visionlens',
    title: 'VisionLens',
    description:
      'AI-powered desktop productivity and educational assistant built with Tauri, React and TypeScript.',
    features: [
      'OCR integration',
      'AI assistance',
      'Productivity tools',
      'Cross-platform architecture',
    ],
    tags: ['Tauri', 'React', 'TypeScript', 'AI'],
    gradient: 'from-blue-500/20 to-violet-500/20',
  },
  {
    id: 'qa-automation',
    title: 'QA Automation Experience',
    description:
      'Professional test automation work using Playwright and TypeScript at Bosch.',
    features: [
      '80+ merged pull requests',
      'Test framework improvements',
      'End-to-end testing',
      'Quality assurance processes',
    ],
    tags: ['Playwright', 'TypeScript', 'Azure DevOps'],
    gradient: 'from-emerald-500/20 to-cyan-500/20',
  },
  {
    id: 'university',
    title: 'University Development Projects',
    description:
      'Object-oriented software systems developed in C# during university coursework.',
    features: [
      'Logistics systems',
      'Accommodation management',
      'Race processing systems',
      'Unit testing',
    ],
    tags: ['C#', 'OOP', 'Unit Testing'],
    gradient: 'from-orange-500/20 to-rose-500/20',
  },
] as const

export const experience = [
  {
    period: '2025 — Present',
    company: 'Bosch',
    role: 'Software Tester & Test Automation Engineer',
    responsibilities: [
      'Automated testing',
      'Playwright development',
      'Quality assurance',
      'Defect analysis',
    ],
  },
  {
    period: '2024 — Present',
    company: 'Óbuda University',
    role: 'BSc IT Engineering',
    responsibilities: [
      'Software engineering fundamentals',
      'Object-oriented development',
      'Database systems',
      'AI and machine learning',
      'Continuous learning',
    ],
  },
] as const

export const achievements = [
  {
    title: '80+ Merged Pull Requests',
    description: 'Contributions to production-grade Playwright automation framework.',
    icon: 'git',
  },
  {
    title: 'Professional Automation Experience',
    description: 'Building and maintaining enterprise test automation at Bosch.',
    icon: 'automation',
  },
  {
    title: 'Bosch Internship',
    description: 'Hands-on experience in software testing and quality engineering.',
    icon: 'bosch',
  },
  {
    title: 'English C1',
    description: 'Advanced proficiency for professional communication and documentation.',
    icon: 'language',
  },
] as const

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
] as const

export const commandPaletteItems = [
  { id: 'about', label: 'Go to About', href: '#about', shortcut: 'A' },
  { id: 'skills', label: 'Go to Skills', href: '#skills', shortcut: 'S' },
  { id: 'projects', label: 'Go to Projects', href: '#projects', shortcut: 'P' },
  { id: 'experience', label: 'Go to Experience', href: '#experience', shortcut: 'E' },
  { id: 'contact', label: 'Go to Contact', href: '#contact', shortcut: 'C' },
  { id: 'github', label: 'Open GitHub', href: personalInfo.github },
  { id: 'email', label: 'Send Email', href: `mailto:${personalInfo.email}` },
] as const

export const terminalOutput = [
  'QA Automation Engineer',
  'IT Engineering Student',
  'Software Builder',
] as const
