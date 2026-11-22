export const site = {
  name: 'Mahesh Nagar',
  initials: 'MN',
  role: 'Creative Web Designer & Frontend Developer',
  tagline: 'Turning Ideas Into Beautiful, Responsive & High-Performing Websites.',
  whatsapp: '+917688853179', // country code + number, no + or spaces
  email: 'mahesh.nagar2210@gmail.com',
  linkedin: 'https://www.linkedin.com/in/mahesh-nagar-b7b980251',
  github: 'https://github.com/Messhu007',
  resume: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/Mahesh_Nagar_Resume.pdf`,
}

export const stats = [
  ['3', 'Years of experience'],
  ['30+', 'Websites & projects delivered'],
  ['100%', 'Responsive & mobile-first'],
  ['Clean', 'Code & modern standards'],
]

export interface SkillCategory {
  title: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend Development',
    skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Next.js'],
  },
  {
    title: 'Frameworks & Styling',
    skills: ['Bootstrap', 'Tailwind CSS', 'Responsive Web Design', 'CSS Animations'],
  },
  {
    title: 'CMS & Customization',
    skills: ['WordPress', 'WordPress Customization', 'Theme Customization', 'PSD to HTML', 'PSD to WordPress'],
  },
  {
    title: 'Tools & Design',
    skills: ['Git & GitHub', 'Figma', 'Canva', 'Browser DevTools'],
  },
  {
    title: 'Additional Expertise',
    skills: ['UI Development', 'Website Maintenance', 'Website Optimization', 'Cross-Browser Compatibility', 'API Integration'],
  },
]

export const stack = [
  'HTML5', 'CSS3', 'BOOTSTRAP', 'TAILWIND', 'JAVASCRIPT', 'REACT.JS', 'NEXT.JS',
  'WORDPRESS', 'FIGMA', 'CANVA', 'GIT', 'RESPONSIVE DESIGN', 'WEBSITE OPTIMIZATION', 'PSD TO HTML'
]

export interface ServiceItem {
  icon: string
  title: string
  text: string
  tag?: string
}

export const services: ServiceItem[] = [
  {
    icon: '💻',
    title: 'Frontend Development',
    text: 'Building modern, interactive, and high-performance websites using HTML, CSS, JavaScript, React.js, and Next.js with clean and structured code.',
  },
  {
    icon: '🎨',
    title: 'Web Design & UI Development',
    text: 'Creating clean, modern, and visually engaging website layouts with user-friendly interfaces, consistent typography, and pixel-perfect designs.',
  },
  {
    icon: '📱',
    title: 'Responsive Website Development',
    text: 'Developing mobile-friendly websites that adapt seamlessly across smartphones, tablets, laptops, and large desktop screens.',
  },
  {
    icon: '🌐',
    title: 'WordPress Development',
    text: 'Building, customizing, and maintaining WordPress websites, including custom theme integration, layout development, and content management.',
  },
  {
    icon: '🛠️',
    title: 'Website Maintenance',
    text: 'Managing existing websites, diagnosing and fixing frontend UI bugs, updating content, adding new pages, and keeping platforms running smoothly.',
  },
  {
    icon: '⚡',
    title: 'Website Optimization',
    text: 'Improving website loading performance, Core Web Vitals, cross-browser compatibility, responsive rendering, and overall user experience.',
  },
]

export const projects = [
  {
    cat: 'corporate',
    bg: 'linear-gradient(135deg,#2F4BFF,#6D7CFF)',
    meta: 'Corporate Website / IT Services',
    title: 'GMTA Software Solution',
    text: 'Corporate website for a software development company. Developed responsive website layouts, implemented modern UI components, worked on website maintenance, and optimized frontend performance.',
    tech: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'Laravel', 'PHP'],
    url: 'https://www.gmtasoftware.com/',
  },
  {
    cat: 'wordpress',
    bg: 'linear-gradient(135deg,#0E9F6E,#4ED1A0)',
    meta: 'WordPress Blog / CMS',
    title: 'GMTA Software Solution Blogs',
    text: 'Blogging and content platform for GMTA. Developed custom WordPress layouts, responsive styling, and improved reader experience with clean typography.',
    tech: ['WordPress', 'HTML5', 'CSS3', 'Bootstrap'],
    url: 'https://www.gmtasoftware.com/blog/',
  },
  {
    cat: 'web',
    bg: 'linear-gradient(135deg,#F97316,#FDBA74)',
    meta: 'Travel & Transportation',
    title: 'Li-nk Limousines & Transfers',
    text: 'Modern website experience for a premium transportation service. Worked on frontend UI design and implementation, responsive layout sections, visual consistency, and user-friendly navigation.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    url: 'https://www.li-nk.com/',
  },
  {
    cat: 'web',
    bg: 'linear-gradient(135deg,#7C3AED,#C4B5FD)',
    meta: 'Fitness & Gym Discovery Platform',
    title: 'GymDekho Fitness Marketplace',
    text: 'Fitness discovery platform that helps users explore gyms and fitness facilities. Developed responsive pages, built reusable React components, and created interactive gym listings and carousels.',
    tech: ['Next.js', 'React.js', 'JavaScript', 'Bootstrap', 'Swiper'],
    url: 'https://gymdekho.com/',
  },
  {
    cat: 'corporate',
    bg: 'linear-gradient(135deg,#0EA5E9,#7DD3FC)',
    meta: 'Business / Surveying Services',
    title: 'Compass Survey',
    text: 'Professional business website showcasing drone inspection, land surveying, and mapping services. Developed modern layouts, implemented responsive React components, and optimized for mobile and desktop.',
    tech: ['Next.js', 'React.js', 'Tailwind CSS'],
    url: 'https://www.thecompasssurvey.com/',
  },
  {
    cat: 'wordpress',
    bg: 'linear-gradient(135deg,#E11D48,#FB7185)',
    meta: 'Finance / WordPress Website',
    title: 'Smart Loans',
    text: 'Modern financial services website designed to help users explore loan options. Customized WordPress website sections, improved responsive layouts, and delivered a clean, user-friendly interface.',
    tech: ['WordPress', 'HTML5', 'CSS3', 'Bootstrap'],
    url: '#',
  },
]

export const filters = [
  ['all', 'All projects'],
  ['web', 'Web Applications'],
  ['corporate', 'Corporate Sites'],
  ['wordpress', 'WordPress & CMS'],
]

export const jobs = [
  {
    when: '2023 – Present · Full-time (On-site)',
    title: 'Web Designer & Frontend Developer',
    intro: 'GMTA Software Solution Pvt. Ltd.',
    points: [
      'Designed and developed responsive websites using HTML, CSS, Bootstrap, and JavaScript.',
      'Created modern, user-friendly website interfaces and reusable frontend components.',
      'Developed new website pages, maintained existing client websites, and implemented new features.',
      'Worked with React.js, Next.js, and modern frontend technologies on interactive interfaces.',
      'Customized and maintained WordPress websites, including theme tweaks and layout styling.',
      'Improved website responsiveness, cross-browser compatibility, and overall frontend performance.',
      'Identified, diagnosed, and resolved frontend bugs and UI/UX inconsistencies.',
      'Collaborated closely with designers, backend developers, and clients to deliver quality web solutions.',
    ],
  },
  {
    when: '6 Months · Internship',
    title: 'Web Designer Intern',
    intro: 'Dazzler Software Private Limited',
    points: [
      'Assisted in designing and developing responsive website layouts using HTML, CSS, and Bootstrap.',
      'Created mobile-friendly web pages and improved visual consistency across screens.',
      'Worked on frontend bug fixes, UI adjustments, and learned professional development workflows.',
      'Collaborated with senior developers on frontend implementation and cross-browser testing.',
    ],
  },
]

export const why = [
  ['Creative Thinking', 'I combine design creativity with technical frontend knowledge to build engaging and visually appealing websites.'],
  ['Strong Frontend Foundation', 'Practical hands-on experience working with HTML5, CSS3, JavaScript, Bootstrap, React.js, Next.js, and WordPress.'],
  ['Responsive Development', 'I focus on building websites that provide smooth, fast, and consistent experiences across all mobile, tablet, and desktop screens.'],
  ['Clean & Maintainable Code', 'I follow structured coding practices and build reusable components for easier long-term maintenance.'],
  ['Problem Solving', 'I enjoy identifying frontend issues, debugging cross-browser problems, and finding reliable solutions.'],
  ['Continuous Improvement', 'I stay curious about modern web technologies and continuously improve my design and development skills.'],
]

export const faqs = [
  ['What technologies do you work with?', 'I primarily work with HTML5, CSS3, JavaScript (ES6+), Bootstrap, Tailwind CSS, React.js, Next.js, and WordPress.'],
  ['How much experience do you have?', 'I have 3 years of experience in web design and frontend development, including professional website development, maintenance, and client project delivery.'],
  ['Can you create fully responsive websites?', 'Yes. Every website I build is mobile-first and fully responsive, adapting seamlessly to mobile phones, tablets, laptops, and large desktop screens.'],
  ['Do you have experience with WordPress?', 'Yes. I have hands-on experience in WordPress website development, theme customization, content updates, responsive styling, and website maintenance.'],
  ['Have you worked on maintaining existing websites?', 'Yes. I regularly maintain existing websites, fix UI bugs, add new sections and pages, update content, and improve loading performance.'],
  ['Are you open to new opportunities?', "Yes! I am actively looking for opportunities as a Web Designer or Frontend Developer where I can contribute my skills, learn new technologies, and create impactful web experiences."],
]
