// src/data/data.js

// Datos de habilidades con nombres de íconos en lugar de componentes de íconos
export const skillsData = {
    Frontend: [
        { name: "JavaScript", icon: "SiJavascript", color: "bg-yellow-100 text-yellow-600" },
        { name: "React", icon: "FaReact", color: "bg-blue-100 text-blue-500" },
        { name: "Tailwind", icon: "SiTailwindcss", color: "bg-teal-100 text-teal-500" },
        { name: "Bootstrap", icon: "FaBootstrap", color: "bg-purple-100 text-purple-600" },
    ],
    Backend: [
        { name: "Python", icon: "FaPython", color: "bg-yellow-100 text-yellow-600" },
        { name: "TypeScript", icon: "SiTypescript", color: "bg-blue-100 text-blue-500" },
        { name: "Node.js", icon: "FaNodeJs", color: "bg-green-100 text-green-500" },
        { name: "Java", icon: "FaJava", color: "bg-red-100 text-red-500" },
    ],
    Databases: [
        { name: "Firebase", icon: "SiFirebase", color: "bg-yellow-100 text-yellow-600" },
        { name: "MySQL", icon: "SiMysql", color: "bg-blue-100 text-blue-600" },
        { name: "MongoDB", icon: "SiMongodb", color: "bg-green-100 text-green-700" },
        { name: "PostgreSQL", icon: "SiPostgresql", color: "bg-indigo-100 text-indigo-600" },
    ],
    Tools: [
        { name: "Git", icon: "FaGitAlt", color: "bg-red-100 text-red-500" },
        { name: "VSC", icon: "SiVisualstudiocode", color: "bg-blue-100 text-blue-500" },
        { name: "Docker", icon: "FaDocker", color: "bg-blue-100 text-blue-600" },
        { name: "Jenkins", icon: "SiJenkins", color: "bg-gray-100 text-gray-700" },
    ],
};

// Datos de proyectos
export const projectData = [
    {
        title: "projects.project1.title",
        description: "projects.project1.description",
        imageUrl: "/path/to/image1.jpg",
        projectUrl: "https://project1.example.com",
        repoUrl: "https://github.com/username/project1",
        technologies: ["React", "Tailwind", "Node.js"]
    },
    {
        title: "projects.project2.title",
        description: "projects.project2.description",
        imageUrl: "/path/to/image2.jpg",
        projectUrl: "https://project2.example.com",
        repoUrl: "https://github.com/username/project2",
        technologies: ["Vue.js", "Firebase", "JavaScript"]
    },
    {
        title: "projects.project3.title",
        description: "projects.project3.description",
        imageUrl: "/path/to/image3.jpg",
        projectUrl: "https://project3.example.com",
        repoUrl: "https://github.com/username/project3",
        technologies: ["Angular", "TypeScript", "Express", "MongoDB"]
    },
    {
        title: "projects.project4.title",
        description: "projects.project4.description",
        imageUrl: "/path/to/image4.jpg",
        projectUrl: "https://project4.example.com",
        repoUrl: "https://github.com/username/project4",
        technologies: ["Python", "Django", "PostgreSQL"]
    },
    {
        title: "projects.project5.title",
        description: "projects.project5.description",
        imageUrl: "/path/to/image5.jpg",
        projectUrl: "https://project5.example.com",
        repoUrl: "https://github.com/username/project5",
        technologies: ["Java", "Spring Boot", "MySQL"]
    },
    {
        title: "projects.project6.title",
        description: "projects.project6.description",
        imageUrl: "/path/to/image6.jpg",
        projectUrl: "https://project6.example.com",
        repoUrl: "https://github.com/username/project6",
        technologies: ["PHP", "Laravel", "Vue.js"]
    }
];