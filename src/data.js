import Portfolio from './images/Portfolio.png';
import Adoption from './images/Adoption.png';
import Travel from './images/Travel.png';
import toDOlist from './images/toDO.png';
import NoImage from './images/No-Image.png';
import Coursera1 from './images/Coursera1.jpg';
import Coursera2 from './images/Coursera2.jpg';
import GeeksforGeeks from './images/GeeksforGeeks.jpg';
import SkillUpSQL from './images/SkillUpSQL.png';

export const projects = [
  {
    title: "My Portfolio",
    subtitle: "JavaScript, HTML5, CSS3",
    description: `
      "Dive into a personalized journey through My Portfolio, where creativity meets proficiency with JavaScript, HTML5, and CSS3 expertise."`,
    image: Portfolio,
    link: "https://sai-gif.github.io/MyPortfolio/index.html",
  },
  {
    title: "Pet Adoption Center",
    subtitle: "JavaScript, HTML5, CSS3",
    description: `
      Create a  pet adoption center using HTML, CSS, and JavaScript.
      Display a list of pets with images and details. Have some Forms Implemented`,
    image: Adoption,
    link: "https://sai-gif.github.io/Pet-Adoption-Center/index.html",
  },
  {
    title: " travel destination",
    subtitle: "HTML5, CSS3",
    description:
      "Design a captivating travel destination webpage using HTML and CSS to showcase the beauty and attractions of a specific location.",
    image: Travel,
    link: "https://sai-gif.github.io/Travel-Destination/index.html",
  },
  {
    title: "TO-DO List",
    subtitle: "JavaScript, HTML5, CSS3",
    description:
      "Created a dynamic to-do list using JavaScript for managing tasks and improving productivity.",
    image: toDOlist,
    link: "https://cs.slu.edu/student/skaluvakolu/to-do/HW3Q2.html",
  },
  {
    title: "Task Management",
    subtitle: "JavaScript, HTML5, CSS3",
    description:
      "Developed a React-based task management application facilitating professional and personal task organization.Created an intuitive user interface for efficient task management",
    image: NoImage,
    link: "https://cs.slu.edu/student/skaluvakolu/to-do/HW3Q2.html",
  },
  {
    title: "Dietary Assessment ",
    subtitle: "Python",
    description:
      "Implemented a Python-based application utilizing deep learning techniques for accurate food and drink recognition",
    image: NoImage,
    link: "https://cs.slu.edu/student/skaluvakolu/to-do/HW3Q2.html",
  },
];

export const skills = [
  { name: 'HTML5', proficiency: 85 },
  { name: 'CSS3', proficiency: 80 },
  { name: 'JavaScript', proficiency: 75 },
  { name: 'React', proficiency: 65 },
  { name: 'Python', proficiency: 80 },
  { name: 'Tailwind CSS', proficiency: 65 },
  { name: 'Git', proficiency: 75 },
  { name: 'C/C++', proficiency: 75 },
  { name: 'SQL', proficiency: 68 },
];

export const certificates = [
  {
    title: "Advanced Learning Algorithms",
    subtitle: "Coursera",
    description: "Built TensorFlow neural network for multi-class classification. Applied ML best practices for real-world generalization. Developed expertise in decision trees, random forests, and boosted trees.",
    image: Coursera1,
    link: "https://www.coursera.org/account/accomplishments/verify/XUZQ968MWQTY",
  },
  {
    title: "Supervised Machine Learning: Regression and Classification",
    subtitle: "Coursera",
    description: "Applied theoretical knowledge to enhance problem-solving abilities. Acquired practical experience using various tools for implementing regression and classification algorithms.",
    image: Coursera2,
    link: "https://www.coursera.org/account/accomplishments/verify/6RJWX532KD5E",
  },
  {
    title: "Data Structures and Algorithms - Self Paced",
    subtitle: " GeeksforGeeks",
    description: "Acquired foundational knowledge of Data Structures and Algorithms, implementing structures like Linked List, Stack, Queue, and Heap, while mastering various sorting algorithms.",
    image: GeeksforGeeks,
    link: "https://media.geeksforgeeks.org/courses/certificates/5f2b4a5845ac75f858443d420188100a.pdf",
  },
  {
    title: " Introduction to SQL",
    subtitle: "Skill Up",
    description: "Learned SQL comprehensively, covering MySQL, PostgreSQL, SQL Server, built-in SQL functions, joins, and more. This knowledge has enhanced  my database management skills.",
    image: SkillUpSQL,
    link: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIxODExIiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvdGh1bWJfMzc2ODM2Ml8xNjYzMDcxMjAyLnBuZyIsInVzZXJuYW1lIjoiSy4gU2FpIEt1bWFyIFJlZGR5In0%3D&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F4309%2FIntroduction-to-SQL%2Fcertificate%2Fdownload-skillup&%24web_only=true&_branch_match_id=1228368457681271351&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FVz4%2FI9rHw94vIKEkCAHhLBxAlAAAA",
  },
];
