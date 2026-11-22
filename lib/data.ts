export const site = {
  name: 'Mahesh Nagar',
  initials: 'MN',
  whatsapp: '+917688853179', // country code + number, no + or spaces
  email: 'mahesh.nagar2210@gmail.com',
  linkedin: 'https://www.linkedin.com/in/mahesh-nagar-b7b980251',
  github: 'https://github.com/Messhu007',
}

export const stack = ['HTML5', 'CSS3', 'BOOTSTRAP', 'TAILWIND', 'JAVASCRIPT', 'JQUERY', 'WORDPRESS CUSTOMIZATION', 'REACTJS', 'NEXTJS', 'FIGMA', 'CANVA', 'RESPONSIVE DESIGN', 'WEBSITE OPTIMIZATION', 'PSD TO HTML', 'PSD TO WORDPRESS']

export const stats = [
  ['3','Years of experience'],['30+','Websites and apps shipped'],['90+','Typical Lighthouse score'],['< 1 hour','Average response time'],
]

export interface ServiceItem {
  icon: string
  title: string
  text: string
  tag?: string
}

export const services: ServiceItem[] = [
  { icon: '🧩', title: 'Custom frontend development', text: 'Building responsive, interactive and high-performance websites using HTML, CSS, JavaScript, Bootstrap and React.js.' },
  { icon: '🎨', title: 'Web Design & UI Development', text: 'Creating modern, clean and visually appealing website layouts with user-friendly interfaces and pixel-perfect designs.' },
  { icon: '🛠️', title: 'Website Maintenance', text: 'Managing existing websites, fixing UI issues, updating content, improving functionality and keeping websites up to date.' },
  { icon: '⚡', title: 'Website Optimization', text: 'Improving website speed, responsiveness, loading performance, SEO basics and overall user experience.' },
]

export const projects = [
  { cat: 'WEB', bg: 'linear-gradient(135deg,#2F4BFF,#6D7CFF)', meta: 'IT Services And Software Company', title: 'GMTA Software Solution', text: 'Real-time metrics dashboard with interactive charts, saved filters, role-based views and a dark mode.', tech: ['HTML','BOOTSTRAP','Laravel','PHP',], url: 'https://www.gmtasoftware.com/' },
  { cat: 'WEB', bg: 'linear-gradient(135deg,#0E9F6E,#4ED1A0)', meta: 'IT Services And Software Company', title: 'GMTA Software Solution blogs', text: 'Fast headless storefront with instant search, variant picker, cart drawer and a three-step checkout.', tech: ['WORDPRESS','HTML','BOOTSTRAP'], url: 'https://www.gmtasoftware.com/blog/' },
  { cat: 'WEB', bg: 'linear-gradient(135deg,#F97316,#FDBA74)', meta: 'Mobility & Airport Transfers · frontend', title: 'Li-nk Limousines & Transfers', text: 'Premium chauffeur and airport ride booking ecosystem (Blacklane alternative) featuring automated dispatch, multi-currency payments, and real-time ride tracking.', tech: ['Laravel','Javascript','PHP','SQL'], url: 'https://www.li-nk.com/' },
  { cat: 'WEB', bg: 'linear-gradient(135deg,#7C3AED,#C4B5FD)', meta: 'Fitness Discovery & Management · SaaS', title: 'GymDekho Fitness Marketplace', text: 'Multi-tenant gym discovery and membership management platform with interactive class schedules, membership renewals, and online payment integrations.', tech: ['HTML','BOOTSTRAP','Laravel'], url: 'https://gymdekho.com/' },
  { cat: 'WEB', bg: 'linear-gradient(135deg,#0EA5E9,#7DD3FC)', meta: 'Dron Services', title: 'Compass Survey', text: 'At Compass Survey, we offer end-to-end land and aerial surveying solutions, UAV inspection services, mapping, data analysis, and inspection to numerous industries to provide innovative, accurate, reliable, time- and cost-efficient solutions.', tech: ['Next.js','React.js','Tailwind'], url: 'https://www.thecompasssurvey.com/' },
  { cat: 'web', bg: 'linear-gradient(135deg,#E11D48,#FB7185)', meta: 'finance', title: 'Smart Loans', text: 'Smart Loans is a modern financial platform designed to simplify the loan application process, helping users explore loan options, check eligibility, and access financial services easily.', tech: ['Wordpress'], url: '#' },
]
export const filters = [['all','All projects'],['saas','SaaS and dashboards'],['shop','E-commerce'],['site','Marketing sites']]

export const jobs = [
  { when: '2023 – Present · On-site', title: 'Web Designer & Frontend Developer', intro: 'GMTA Software Solution Pvt. Ltd.', points: ['Designed and developed responsive websites using HTML, CSS, Bootstrap and JavaScript.','Developed modern and user-friendly website interfaces.', 'Worked with frontend technologies including React.js and Tailwind CSS.', 'Maintained existing websites and developed new website pages.', 'Optimized website performance, responsiveness and user experience.', 'Implemented UI improvements and fixed frontend issues.'] },
]

export const plans = [
  { name: 'Starter Care', price: 29, desc: 'For portfolios, blogs and small business sites.', items: ['Up to 2 content or image updates','Monthly security and broken-link check','Email and WhatsApp support','48-hour turnaround'] },
  { name: 'Business Pro', price: 59, popular: true, desc: 'For active businesses, clinics and stores.', items: ['Up to 5 content, price or banner updates','UI bug fixes and responsive adjustments','Monthly speed and Core Web Vitals review','24-hour turnaround for urgent tweaks'] },
  { name: 'Growth & Scale', price: 99, desc: 'For dynamic sites and stores with frequent changes.', items: ['Up to 10 updates, including code and new sections','One new landing page or redesign per month','API and webhook troubleshooting','Same-day priority and monthly report'] },
]

export const why = [
  ['Direct developer contact','No account managers and no ticket queues. You talk to the person writing your code.'],
  ['Clear fixed-scope pricing','You know the full cost upfront, with no surprise bills or hourly overages.'],
  ['Full code ownership','Code goes to your repository with clean commits, documentation and complete rights.'],
  ['NDA and security','Your business logic and user data stay private under a signed non-disclosure agreement.'],
  ['Milestone-based delivery','Work is delivered in stages, and the final payment is released only after your review.'],
]

export const testimonials = [
  ['Rohan rebuilt our landing pages in a week. Load time dropped from 5 seconds to under 2, and our sign-ups went up right away.','Alex Turner','Founder · United Kingdom'],
  ['Much better than working with an agency. No middlemen, clear updates and every change was right the first time.','Maria Gomez','Operations Director · Spain'],
  ['The monthly care plan is the best investment we made for our website. Banners, prices and fixes are all handled quickly.','Sarah Miller','E-commerce Manager · United States'],
]

export const faqs = [
  ['Why hire you instead of an agency?','You speak directly to the developer doing the work. That means faster delivery, clear pricing, no communication gaps and full accountability.'],
  ['How does the monthly care plan work?','Pick a plan and send your update requests by email or WhatsApp. I complete them within the plan’s turnaround time, run a monthly health check and send you a short summary. You can pause or cancel whenever you like.'],
  ['Can you build a full frontend from scratch?','Yes. I build complete React and Next.js frontends from Figma designs or from your requirements, and I can connect them to your existing APIs or backend.'],
  ['What about time zones and languages?','I work remotely with clients in the US, UK, Europe and India. I overlap with your working hours and reply to most messages within one hour.'],
  ['Do you sign NDAs?','Yes, I’m happy to sign an NDA before we discuss your project details.'],
  ['What guarantees do you offer?','Every project has a clear scope, milestone-based payments and a 30-day post-launch warranty for bugs in the delivered work.'],
]
