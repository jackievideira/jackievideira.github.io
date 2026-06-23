window.portfolioContent = {
  name: "Jackie Videira",
  title: "Software Systems Engineer",
  headline: "Software and robotics engineer with a focus on building systems that work in the real world.",
  about:
    "My background blends robotics infrastructure, low-level systems work, and product-minded software engineering. I enjoy building the pieces that make complex systems actually work together — from hardware drivers to testing, deployment, and building the interfaces that help people use those systems with confidence.",
  location: "Hartford, CT - open to relocating",
  focus: "Robotics software, real-time systems, hardware integration, and full-stack product work",
  currentRole: "Systems Engineer at Sony AI, support robotics research infrastructure",
  portraitSrc: "", // path to your photo, e.g. "assets/photo.jpg"
  resumeUrl: "assets/Jackie_Videira_Resume.docx",
  secondaryCta: {
    label: "Contact Me",
    href: "#contact"
  },
  experience: [
    {
      period: "March 2024 - Present",
      role: "Systems Engineer II",
      company: "Sony AI",
      location: "Boston, MA",
      summary:
        "Building core robotics infrastructure to support fine-manipulation research, with a focus on task planning, motion coordination, hardware integration, deployment, and system reliability.",
      highlights: [
        "Co-architected and owned a C++ task management system orchestrating 200+ asynchronous tasks per run across 10+ ingredient workflows, integrating ROS and non-ROS service components over gRPC to coordinate motion across multiple robots.",
        "Developed a motion coordination engine to synchronize collision-free trajectories across multiple resources in real time, interfacing with external motion planners over gRPC.",
        "Engineered and supported low-level drivers for a multi-sensor suite, including high-resolution cameras and trajectory-controlled grippers, enabling reliable hardware-software integration.",
        "Standardized system deployment by containerizing core research components with Docker and Docker Compose, reducing setup time and improving consistency across global research teams.",
        "Implemented unit and integration testing frameworks for middleware components to support higher-confidence research and fine-manipulation development.",
        "Facilitated cross-functional collaboration across multiple time zones by providing system support and infrastructure critical to research progress."
      ]
    },
    {
      period: "August 2020 - March 2024",
      role: "Software Engineer II",
      company: "Dexai Robotics",
      location: "Boston, MA",
      summary:
        "Worked across robotics software, hardware integration, cloud-connected systems, and customer-facing tooling in a production robotics environment.",
      highlights: [
        "Developed, prototyped, and maintained a robot task planner in C++ based on discrete system states.",
        "Designed and maintained low-level hardware drivers using manufacturer APIs and real-time processing constraints.",
        "Designed and developed communications APIs connecting hardware components, customer UI, and cloud services.",
        "Developed and maintained customer-facing UI using TypeScript and React."
      ]
    },
    {
      period: "June 2019 - August 2020",
      role: "Software Engineer Asc",
      company: "Lockheed Martin",
      location: "Burlington, MA",
      summary:
        "Developed machine-learning-powered tooling focused on providing users with interpretable feedback.",
      highlights: [
        "Developed machine-learning-powered tools that provided interpretable feedback to users after training software completion."
      ]
    }
  ],
  skillGroups: [
    {
      id: "languages",
      label: "Languages & Frameworks",
      skills: ["C++", "Python", "JavaScript", "TypeScript", "React", "SQL", "HTML5", "CSS"]
    },
    {
      id: "robotics",
      label: "Robotics & Systems",
      skills: ["Task Planning", "Discrete System States", "Motion Coordination", "gRPC", "Hardware Drivers", "Dual-Arm Manipulation", "Integration Testing", "Middleware"]
    },
    {
      id: "tools",
      label: "Tools",
      skills: ["Git", "AWS", "Docker", "Docker Compose", "PostgreSQL", "Testing", "Debugging"]
    },
    {
      id: "education",
      label: "Education",
      skills: ["B.S. Computer Science and Engineering", "Mathematics Minor", "University of Connecticut"]
    }
  ],
  projects: [
    {
      title: "FSM Visualizer",
      type: "Interactive Tool",
      description:
        "Browser-based Deterministic Finite Automaton simulator with real-time graph visualization. Define states and transitions, then step through an input string and watch the active state animate through the graph. Includes robotics-themed examples — pick-and-place arm task planning, obstacle avoidance, and block sorting.",
      stack: ["React", "TypeScript", "SVG"],
      impact: "Demonstrates task-planning and state-machine concepts in a shareable, visual form.",
      links: [
        { label: "Live Demo", url: "/fsm/" },
        { label: "Source", url: "https://github.com/jackievideira/jackievideira.github.io/blob/master/fsm/index.html" }
      ]
    },
    {
      title: "J Videira Paving",
      type: "Business Website",
      description:
        "Website for a local paving and masonry contractor. Designed and built to help the business establish an online presence, showcase services, and make it easy for customers to get in touch.",
      stack: ["HTML/CSS", "JavaScript"],
      impact: "Live customer-facing site supporting a small business.",
      links: [
        { label: "Live Site", url: "http://jvideiraspaving.com" }
      ]
    },
    {
      title: "Maria V's",
      type: "Business Website",
      description: "Website for a local restaurant",
      stack: ["HTML/CSS", "JavaScript"],
      impact: "Live customer-facing site supporting a small business",
      links: [
        { label: "Live Site", url: "http://mariavsbar.com" }
      ]
    }
  ],
  contactBlurb:
    "Actively seeking work that blends strong engineering fundamentals with practical collaboration across research, robotics, and product teams. Reach out through any of the links here.",
  contactLinks: [
    { label: "Email", value: "jackie.videira@gmail.com", href: "mailto:jackie.videira@gmail.com" },
    { label: "LinkedIn", value: "linkedin.com/in/jackie-videira", href: "https://www.linkedin.com/in/jackie-videira/" },
    { label: "GitHub", value: "https://github.com/jackievideira", href: "https://github.com/jackievideira" }
  ]
};
