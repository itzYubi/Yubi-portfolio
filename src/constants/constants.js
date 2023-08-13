export const projects = [
  {
    title: 'Yu-BNB',
    description:"Pure Golang based app for Bed and Breakfast bookings. The Web application allows you to book the available rooms listed by the admin. Send you a mail and the admin when you book the room to show your reservation details. Admin can see and modify the reservation calender and block selected dates. Uses Chi router, SCS session management and also nosurf. Made using Go, Go Templates, PostGreSQL, HTML, CSS, JavaScript & deployed in AWS",
    image: ['/images/YuBNBimg1.png', '/images/YuBNBimg2.png', '/images/YuBNBimg3.png','/images/YuBNBimg4.png', '/images/YuBNBimg5.png'],
    tags: ['Go', 'PostGreSQL', 'CSS', 'JavaScript', 'HTML'],
    source: 'https://ec2-3-6-228-17.ap-south-1.compute.amazonaws.com/',
    visit: 'https://github.com/itzYubi/YuBNB',
    id: 1,
  },
  {
    title: 'SORT.IO',
    description: "SORT.IO is a sorting visualizer made in Javascript. The application represents how various sorting techniques work and manifests a cogent visual display of the time taken by use of bars that represents an array. It is a great start to learning how actually Sorting algorithms work!",
      image: ['/images/1.png'],
      tags: ['JavaScript', 'Algorithms', 'React'],
    source: 'https://sort-io.vercel.app/',
    visit: 'https://github.com/itzYubi/Sort.IO',
    id: 0,
  },
  {
    title: 'Contact Manager',
    description:"Spring boot App made for contact management. The Web application allows you to store and manage your contacts within seconds! This project was accociated with my work at Samsung SDS. Made using spring mvc, hibernate, sts4, PostgreSQL and deployed on Heroku.",
    image: ['/images/2.png'],
    tags: ['Java', 'Spring', 'Heroku', 'Hibernate', 'STS4'],
    source: 'https://contact-management-heroku.herokuapp.com/',
    visit: 'https://github.com/itzYubi/ContactManager-Spring-mvc-heroku',
    id: 1,
  },
  {
    title: 'Path Finder',
    description:"Hurrah!! It's a Path finding visualizer! Support for various Algorithms like A*, Dijkstra, BFS, DFS. Push Ctrl to make walls. Made using React JS, CSS, HTML & deployed in vercel",
    image: ['/images/pathFinder1.png', '/images/pathFinder2.png'],
    tags: ['React', 'CSS', 'HTML'],
    source: 'https://path-finder-graph-algorithms.vercel.app/',
    visit: 'https://github.com/itzYubi/PathFinder-GraphAlgorithms',
    id: 1,
  },
];

export const research = [
  {
    title: 'Analysis-of-Hybrid-Approach-For-Voiceprint-Biometric-Template-protection',
    description: "With the recent advancements in speech recognition or in general, biometric systems; their security becomes crucial. Before the content of this research paper can be accessed, we need to understand the need for template protection and existing methods for template protection. There have been a number of template protection techniques, but there is always a trade of between security and performance. This research paper presents a hybrid approach that utilizes the benefits of both Template transformation and Biometric Cryptosystem.",
      image: ['/images/6.png','/images/7.png', '/images/8.png', '/images/9.png', '/images/10.png', '/images/11.png'],
      tags: ['Python', 'numpy', 'Fuzzy Vault', 'matplotlib', 'Scipy'],
    source: 'https://github.com/itzYubi/Analysis-of-Hybrid-Approach-For-Voiceprint-Biometric-Template-protection/blob/main/Research%20article.pdf',
    visit: 'https://github.com/itzYubi/Analysis-of-Hybrid-Approach-For-Voiceprint-Biometric-Template-protection',
    id: 0,
  },

  {
    title: 'A possible Deterministic Rabin Cryptosystem',
    description: "Rabin Cryptosystem is a public-key cryptosystem that utilizes the benefits of asymmetric key encryption for communicating between two parties and encrypting the message. The security of Rabin's cryptosystem is related to the difficulty of factorization. The disadvantage of the algorithm is that it produces 4 pieces of decrypted plaintexts out of which only one is the secret message. My research focuses on a possible, secure way of finding the correct secret message after the receiver decrypts it! This is my current research! ",
      image: ['/images/5.jpg'],
      tags: ['C++', 'Cryptography'],
    source: 'https://github.com/itzYubi/A-possible-Deterministic-Rabin-Cryptosystem/tree/main',
    visit: 'https://github.com/itzYubi/A-possible-Deterministic-Rabin-Cryptosystem/tree/main',
    id: 1,
  },

];


export const TimeLineData = [
  { year: 2018, text: 'Graduted from Higher Secondary School with an aggregate of 93% from ISC Board.', },
  { year: 2018, text: 'Started my Undergraduate studies in Computer Science at NIT Uttarakhand.', },
  { year: 2022, text: 'Final year undergraduate 8.3 CGPA', },
  { year: 2022, text: 'Interned with Samsung SDS as a Software Developer.', },
  { year: 2022, text: 'Interned with PocketFul as a Backend Developer.', },
  { year: 2022, text: 'Started Working with Algosec as a Development Engineer.', },
];

export const WorkExperienceData = [
  {
    company: 'Algosec',
    role: "Software Development Engineer",
    startDate: '4 July 2023',
    endDate: 'Current',
    tags: ['Java', 'Spring', 'PostGreSQL', 'Selenium', 'Angular', 'AWS'],
    description: "At Algosec, I am working as a Software Engineer working on our Cloud Product - AppViz. AlgoSec AppViz provides an application-centric approach to your network security policy management. With AlgoSec AppViz, all business applications are discovered, identified, and mapped, providing visibility of the network connectivity flows associated with each business application, which in turn provides critical security information regarding the firewalls and firewall rules supporting each connectivity flow.",
    image: ['/images/algosec.png'],
    website: "https://www.algosec.com/",
  },
  {
    company: 'Pocketful',
    role: "Backend developer intern",
    startDate: '1 June 2022',
    endDate: '31 July 2022',
    tags: ['Go', 'Mongo DB', 'Postman', 'AWS S3'],
    description: "At Pocketful I worked directly under the CEO and the CTO. I developed the KYC feature and major backend from scratch. Also integrated 3rd part API's to the backend. Pocketful is a new-age stockbroking platform that seeks to transform your trading experience by offering cutting-edge products that are backed by Nobel-winning financial research and best-in-class tech.",
    image: ['/images/pocketful.jpeg'],
    website: "https://www.pocketful.in/",
  },
  {
    company: 'Samsung SDS',
    role: "Software Engineer Intern",
    startDate: '1 Feb 2022',
    endDate: '31 May 2022',
    tags: ['Java', 'Spring', 'Oracle DB', 'STS4', 'JSP'],
    description: "At Samsung, I started my software engineering journey. I received extensive training on Java-Spring and other technologies around it. I also cleared the Samsung Software Proficiency Test in my first attempt and landed a full-time offer. Samsung SDS provides cloud and digital logistics services.",
    image: ['/images/samsung.jpg'],
    website: "https://www.samsungsds.com/in/index.html",
  },
]