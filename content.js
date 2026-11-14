// Portfolio copy. Edit this file to update text, project details, and media.
// Media paths are relative to index.html. Leave empty to retain a reserved media space.
window.PORTFOLIO = {
  intro: "I’m a computer systems engineer interested in how embodied agents retain and use experience under limited memory and computation. My work connects robot learning, controlled experimentation, and the embedded systems that make intelligent behavior possible.",
  areas: ["Robot memory", "Embodied intelligence", "Embedded systems"],
  researchNote: "My research asks what an agent should remember, how that memory should be represented, and how to test whether it genuinely improves behavior.",
  portrait: "",
  research: [
    { title: "Robot memory under a budget", status: "Manuscript in preparation", description: "I study whether compact records of change and composed states offer useful alternatives to storing individual frames. The work compares these representations through controlled simulated manipulation experiments and closed-loop evaluation using RoboMME and MIKASA-Robo.", detail: "Working title: “Compose, Don’t Pool: What Change-Based Robot Memory Must Retain Under a Budget.”", media: "", mediaType: "image", mediaLabel: "Research figure or experiment video" },
    { title: "What object experiences are worth keeping?", status: "Exploratory study", description: "An investigation of object experience under limited memory using EPIC-KITCHENS and HD-EPIC. I examine visibility, reuse, and person-specific experience, including negative results that help identify where a proposed memory representation does not yet add value.", detail: "Focus: evidence-led evaluation, not memory for its own sake." }
  ],
  projects: [
    { title: "DeepDEMs", label: "Joint honors thesis · 2024", description: "Studied terrain estimation and super-resolution from grayscale planetary imagery. Benchmarked existing SRDiNet models using 400 Mars image/elevation pairs, then explored transfer to lunar images.", detail: "The lunar application was exploratory and did not have ground-truth validation. The project developed my approach to model comparison and careful interpretation of results.", tech: "Planetary imagery / Deep learning / Model evaluation", media: "", mediaType: "image", mediaLabel: "Terrain reconstruction figure" },
    { title: "In-home IoT hub", label: "Senior capstone · 2023–2024", description: "Built a voice-enabled smart-home hub that brings device control and external services into a centralized interface. The project connected application logic, APIs, and access control in an integrated system.", tech: "Python / Flask / PostgreSQL / API integration", media: "", mediaType: "video", mediaLabel: "Smart-home demonstration video" },
    { title: "Estate Edge", label: "Hacklytics · 2024", description: "Developed satellite-based analysis of urban development as part of a team hackathon project. The work combined imagery analysis with a web application for exploring results.", detail: "Awarded third place in both the Finance and Intel Developer Cloud challenges.", tech: "Machine learning / Satellite imagery / Web application", media: "", mediaType: "image", mediaLabel: "Project interface or team photo" },
    { title: "Embedded autonomy", label: "Course project", description: "Programmed a small autonomous vehicle in C, using sensor input, PWM motor control, and obstacle avoidance to connect real-time software with physical behavior.", tech: "C / PWM / Sensors / Embedded control", media: "", mediaType: "video", mediaLabel: "Autonomous vehicle demonstration" },
    { title: "SoilMate", label: "HackMerced", description: "Contributed the core algorithm to a team project recognized with the Best AI in Education award.", tech: "Algorithm development / Collaborative prototyping" }
  ],
  experience: [
    { date: "From 2024", role: "Design Engineer", org: "Privoro", description: "Developed production firmware and integrated embedded systems, working across C, Zephyr, embedded Linux, Python, and hardware-in-the-loop testing." },
    { date: "May–December 2023", role: "GNSS Engineer Intern", org: "Hemisphere GNSS", description: "Worked on receiver firmware migration and multithreaded synchronization, including mutex-based coordination in embedded C/C++ systems." },
    { date: "January–May 2023", role: "Full Stack Developer", org: "247ERICPOINTCOM", description: "Built features for a mathematics quiz platform using PHP, JavaScript, and MySQL as part of a collaborative development team." },
    { date: "2022 & 2024", role: "Undergraduate Teaching Assistant", org: "Arizona State University", description: "Supported undergraduate learning through course assistance and technical guidance." },
    { date: "2022–2023", role: "Lead Tutor", org: "Arizona State University", description: "Helped students work through technical material and develop independent problem-solving skills." },
    { date: "2021–2022", role: "Instructional Aide", org: "Arizona State University", description: "Supported instruction and students alongside academic coursework." }
  ],
  education: { institution: "Arizona State University", degree: "BSE, Computer Systems Engineering", date: "May 2024", distinction: "4.00 GPA · Summa cum laude", honors: "Barrett, The Honors College · Grand Challenges Scholar" },
  skills: "C/C++ · Python · Embedded Linux · Zephyr · Machine learning · Experimental evaluation · API integration · Full-stack development",
  hobbies: "Outside of engineering, I enjoy photography, running, and training for HYROX. I have competed in Anaheim Doubles (December 2025), Las Vegas Relay (March 2026), and New York Solo (June 2026); Phoenix is next in February 2027.",
  links: [{ label: "LinkedIn ↗", url: "https://www.linkedin.com/in/anant-rastogi06" }]
};
