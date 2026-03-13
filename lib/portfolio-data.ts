export const profileData = {
  name: 'Muhammad Yahiya',
  title: 'Full-Stack Developer & Junior DevOps',
  avatar: '/yahiya.jpeg',
  email: 'muhammadyahiya166@gmail.com',
  phone: '+92 318 0126925',
  birthday: '17th February 2004',
  location: 'Karachi, Pakistan',
  cvUrl: '/Yahiya_CV.pdf',
  social: {
    github: 'https://github.com/yahiya166',
    twitter: 'https://x.com/Muhamma49018783',
    instagram: 'https://www.instagram.com/muhammadyahiya_13',
    linkedin: 'https://www.linkedin.com/in/muhammad-yahiya-59813b209',
    facebook: 'https://www.facebook.com/yahiya.asif.533',
    whatsapp: 'https://api.whatsapp.com/send?phone=03180126925&text=Hello!',
  },
}

export const aboutData = {
  description: [
    "I'm a Frontend Developer & Junior DevOps Engineer from Pakistan with 4 years of hands-on experience in building scalable, high-performance web applications. I specialize in modern JavaScript frameworks like React.js and Next.js, with a strong foundation in backend development, database management, and cloud infrastructure.",
    "My expertise spans the full development lifecycle - from crafting pixel-perfect UIs with Tailwind CSS and GSAP animations to implementing secure server-side APIs with JWT authentication and RBAC/ABAC authorization. I've successfully delivered production-ready websites for major food brands and have hands-on experience with AWS services, Docker containerization, and DevOps practices.",
  ],
  services: [
    {
      icon: 'Code',
      title: 'Frontend Development',
      description: 'Building modern, responsive web applications with React.js, Next.js 16, TypeScript, Redux Toolkit, and Tailwind CSS with GSAP animations.',
    },
    {
      icon: 'Zap',
      title: 'Backend Development',
      description: 'Creating secure APIs with Express.js, implementing JWT authentication, RBAC/ABAC authorization, and server-side rendering with EJS.',
    },
    {
      icon: 'Database',
      title: 'Database Management',
      description: 'Designing and managing databases with MongoDB and Firebase, ensuring optimal performance and data integrity.',
    },
    {
      icon: 'Cloud',
      title: 'DevOps & Cloud',
      description: 'Deploying applications with Docker, AWS (EC2, Lambda, S3, Route53, VPC), Nginx, Apache, and managing cloud storage with Cloudinary and R2.',
    },
  ],
  clients: [
    { name: 'Kababjees', logo: '/clients/kababjeeslogo.webp' },
    { name: 'California Pizza', logo: '/clients/california.webp' },
    { name: 'Burgerlab', logo: '/clients/burgerlab.webp' },
    { name: 'Burgeroclock', logo: '/clients/burgeroclock.webp' },
    { name: 'United King', logo: '/clients/unitedking.webp' },
    { name: 'Ginsoy', logo: '/clients/ginsoy.png' },
    { name: 'Tooso', logo: '/clients/tooso.webp' },
  ],
}

export const resumeData = {
  education: [
    {
      title: 'Bachelor of Science in Computer Science',
      period: '2022 — Present',
      description:
        'Currently pursuing BSCS while working as a professional web developer, balancing academics with real-world development experience.',
    },
    {
      title: 'DAE in Telecommunication & Electronics',
      period: '2019 — 2022',
      description: 'Diploma from Saifee Ehdi Zahabi Institute Of Technology with focus on electronics and technical foundations.',
    },
    {
      title: 'Matriculation in Computer Science',
      period: '2018 — 2019',
      description: 'Completed matriculation from Nasra Secondary School with Computer Science specialization.',
    },
  ],
  certifications: [
    {
      title: 'Jawan Pakistan - Frontend Web Application Development',
      period: '2021',
      description: 'Certification in frontend web application development.',
    },
    {
      title: 'Interactive Media - Web Designer Internship',
      period: '4 Months',
      description: 'Hands-on internship experience in web design.',
    },
  ],
  experience: [
    {
      title: 'Next.js Developer',
      period: 'Sep 2023 — Present',
      company: 'Symits (Indolj)',
      description:
        'Developed and launched multiple brand websites including Kababjees, California Pizza, Burgerlab, and Burgeroclock. Led the migration to Next.js 16 with server-side API calling for enhanced security, implemented GSAP animations, and structured entire project codebase. Built tooso.pk, softswirlpk.com, and worked on dashboard features including city/area CRUD operations and map-based area drawing.',
    },
    {
      title: 'MERN Developer',
      period: 'Oct 2022 — Aug 2023',
      company: 'Code Tech Soft',
      description:
        'Full-stack development using MongoDB, Express.js, React, and Node.js. Built scalable web applications with responsive UI components and RESTful APIs.',
    },
    {
      title: 'Frontend Developer',
      period: 'Jun 2022 — Oct 2022',
      company: 'Code Tech Soft',
      description:
        'Developed responsive and user-friendly UI components using React.js, ensuring exceptional user experience across devices.',
    },
    {
      title: 'Web Designer',
      period: 'Feb 2021 — Jun 2022',
      company: 'Interactive Media',
      description:
        'Created attractive web designs according to client requirements with responsive layouts compatible across all devices.',
    },
  ],
  skills: [
    { name: 'Frontend (React, Next.js, TypeScript)', level: 95 },
    { name: 'Styling (Tailwind CSS, GSAP)', level: 90 },
    { name: 'Backend (Express.js, JWT, RBAC)', level: 80 },
    { name: 'Database (MongoDB, Firebase)', level: 75 },
    { name: 'DevOps (Docker, AWS, Nginx)', level: 70 },
  ],
}

export const portfolioData = {
  categories: ['all','web development', 'dashboards'],
  projects: [
    {
      title: 'Kababjees Website',
      category: 'web development',
      image: '/clients/kababjeeslogo.webp',
      description: 'Complete website development for Kababjees restaurant chain with online ordering and menu management',
      tech: ['Next.js 16', 'Tailwind CSS', 'GSAP', 'Server-side APIs'],
      liveUrl: 'https://order.kababjees.com',
    },
    {
      title: 'Kababjees Fried Chicken',
      category: 'web development',
      image: '/clients/kababjeesfriedchicken.webp',
      description: 'Complete website development for Kababjees Fried Chicken restaurant chain with online ordering and menu management',
      tech: ['Next.js 16', 'Tailwind CSS', 'GSAP', 'Server-side APIs'],
      liveUrl: 'https://kababjeesfriedchicken.com',
    },
    {
      title: 'Delizia Website',
      category: 'web development',
      image: '/clients/delizia.webp',
      description: 'Complete website development for Delizia restaurant chain with online ordering and menu management',
      tech: ['Next.js 16', 'Tailwind CSS', 'GSAP', 'Server-side APIs'],
      liveUrl: 'https://delizia.pk',
    },
    {
      title: 'California Pizza Website',
      category: 'web development',
      image: '/clients/california.webp',
      description: 'Modern pizza ordering website with dynamic menu, location-based delivery, and seamless checkout',
      tech: ['Next.js', 'React Query', 'Tailwind CSS'],
      liveUrl: 'https://californiapizza.com.pk',
    },
    {
      title: 'Burgerlab Website',
      category: 'web development',
      image: '/clients/burgerlab.webp',
      description: 'Fast food ordering platform with real-time order tracking and responsive design',
      tech: ['Next.js', 'Redux Toolkit', 'TypeScript'],
      liveUrl: 'https://burgerlab.com.pk',
    },
    {
      title: 'Burgeroclock Website',
      category: 'web development',
      image: '/clients/burgeroclock.webp',
      description: 'Restaurant website with custom animations and optimized performance',
      tech: ['Next.js', 'GSAP', 'Tailwind CSS'],
      liveUrl: 'https://burgeroclock.com.pk',
    },
    {
      title: 'Tooso Website',
      category: 'web development',
      image: '/clients/tooso.webp',
      description: 'Built on Next.js 16 with structured project architecture, server-side API calling for security',
      tech: ['Next.js 16', 'TypeScript', 'Tailwind CSS', 'GSAP'],
      liveUrl: 'https://tooso.pk',
    },
    {
      title: 'Ginsoy Website',
      category: 'web development',
      image: '/clients/ginsoy.png',
      description: 'Built on Next.js 16 with structured project architecture, server-side API calling for security',
      tech: ['Next.js 16', 'TypeScript', 'Tailwind CSS', 'GSAP'],
      liveUrl: 'https://order.ginsoy.com',
    },
    {
      title: 'United King Website',
      category: 'web development',
      image: '/clients/unitedking.webp',
      description: 'Built on Next.js 16 with structured project architecture, server-side API calling for security',
      tech: ['Next.js 16', 'TypeScript', 'Tailwind CSS', 'GSAP'],
      liveUrl: 'https://unitedkingonline.com',
    },
    {
      title: 'lushcrush Website',
      category: 'web development',
      image: '/clients/lushcrush.webp',
      description: 'Built on Next.js 16 with structured project architecture, server-side API calling for security',
      tech: ['Next.js 16', 'TypeScript', 'Tailwind CSS', 'GSAP'],
      liveUrl: 'https://lushcrushpops.com',
    },
    {
      title: 'Indolj Dashboard',
      category: 'dashboards',
      image: '/clients/indolj.png',
      description: 'Dashboard with city/area CRUD operations and interactive map-based area drawing functionality',
      tech: ['React.js', 'Redux Toolkit', 'Map APIs'],
      liveUrl: 'https://console.indolj.io/merchant/login',
    },
  ],
}

export const blogData = {
  posts: [
    {
      title: 'Migrating to Next.js 16: A Complete Guide',
      category: 'Development',
      date: 'Jan 15, 2026',
      readTime: '10 min',
      image: '/web-development-coding.png',
      excerpt: 'How I structured a complete Next.js 16 project with server-side APIs for better security and performance.',
      tags: ['Next.js 16', 'React', 'Migration'],
      slug: 'migrating-to-nextjs-16',
    },
    {
      title: 'GSAP Animations in React/Next.js Projects',
      category: 'Frontend',
      date: 'Dec 20, 2025',
      readTime: '8 min',
      image: '/ui-ux-design-concept.png',
      excerpt: 'Creating smooth, performant animations using GSAP with React and Next.js applications.',
      tags: ['GSAP', 'Animation', 'Frontend'],
      slug: 'gsap-animations-react-nextjs',
    },
    {
      title: 'JWT Authentication with RBAC/ABAC Implementation',
      category: 'Security',
      date: 'Nov 10, 2025',
      readTime: '12 min',
      image: '/software-architecture.jpg',
      excerpt: 'Building secure authentication systems with role-based and attribute-based access control.',
      tags: ['JWT', 'Security', 'RBAC', 'Backend'],
      slug: 'jwt-rbac-abac-implementation',
    },
    {
      title: 'Docker Containerization for Frontend Developers',
      category: 'DevOps',
      date: 'Oct 5, 2025',
      readTime: '9 min',
      image: '/software-architecture.jpg',
      excerpt: 'Getting started with Docker as a frontend developer - from basics to production deployment.',
      tags: ['Docker', 'DevOps', 'Deployment'],
      slug: 'docker-for-frontend-devs',
    },
    {
      title: 'AWS Services Every Developer Should Know',
      category: 'Cloud',
      date: 'Sep 15, 2025',
      readTime: '11 min',
      image: '/software-architecture.jpg',
      excerpt: 'Essential AWS services: EC2, Lambda, S3, Route53, IAM, and VPC explained with practical examples.',
      tags: ['AWS', 'Cloud', 'Infrastructure'],
      slug: 'essential-aws-services',
    },
    {
      title: 'State Management: Redux Toolkit vs React Query',
      category: 'Frontend',
      date: 'Aug 8, 2025',
      readTime: '7 min',
      image: '/web-development-coding.png',
      excerpt: 'Choosing the right state management solution for different use cases in modern React apps.',
      tags: ['Redux', 'React Query', 'State Management'],
      slug: 'redux-toolkit-vs-react-query',
    },
  ],
}

export const contactData = {
  email: 'muhammadyahiya166@gmail.com',
  phone: '+92 318 0126925',
  location: 'Karachi, Pakistan',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462118.02491053584!2d66.75058337832032!3d25.192983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s',
}
