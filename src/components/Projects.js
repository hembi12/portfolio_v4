// src/components/Projects.js
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { projectData } from '../data/data';

const Projects = ({ isDarkMode }) => {
    const { t } = useTranslation();
    const [showMore, setShowMore] = useState(false);

    const techColors = {
        "React": "bg-blue-100 text-blue-500 border-blue-500",
        "Tailwind": "bg-teal-100 text-teal-500 border-teal-500",
        "Node.js": "bg-green-100 text-green-500 border-green-500",
        "Vue.js": "bg-green-100 text-green-700 border-green-700",
        "Firebase": "bg-yellow-100 text-yellow-600 border-yellow-600",
        "JavaScript": "bg-yellow-100 text-yellow-600 border-yellow-600",
        "Angular": "bg-red-100 text-red-500 border-red-500",
        "TypeScript": "bg-blue-100 text-blue-500 border-blue-500",
        "Express": "bg-gray-100 text-gray-600 border-gray-600",
        "MongoDB": "bg-green-100 text-green-700 border-green-700",
        "Python": "bg-yellow-100 text-yellow-600 border-yellow-600",
        "Django": "bg-green-100 text-green-600 border-green-600",
        "PostgreSQL": "bg-indigo-100 text-indigo-600 border-indigo-600",
        "Java": "bg-red-100 text-red-500 border-red-500",
        "Spring Boot": "bg-green-100 text-green-600 border-green-600",
        "MySQL": "bg-blue-100 text-blue-600 border-blue-600",
        "PHP": "bg-purple-100 text-purple-500 border-purple-500",
        "Laravel": "bg-red-100 text-red-600 border-red-600",
    };

    const mainProjects = projectData.slice(0, 3);
    const additionalProjects = projectData.slice(3);

    return (
        <section id="projects" className={`py-20 px-6 ${isDarkMode ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-900'}`}>
            <div className="container mx-auto">
                <h2 className={`text-3xl md:text-3xl lg:text-4xl font-bold text-center mb-4 ${isDarkMode ? 'text-gray-100' : ''}`} style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.3)' }}>
                    {t('projects.title')}
                </h2>

                <p className={`text-center mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {t('projects.description')}
                </p>

                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {mainProjects.map((project, index) => (
                        <div key={index} className={`rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl ${isDarkMode ? 'bg-gray-600' : 'bg-indigo-100'}`}>
                            <div className={`flex items-center space-x-2 px-3 py-2 ${isDarkMode ? 'bg-gray-900' : 'bg-indigo-400'}`}>
                                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                                <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                            </div>

                            <div className="relative">
                                <img src={project.imageUrl} alt={t(project.title)} className="w-full h-48 object-cover" />
                                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center space-x-4 opacity-0 hover:opacity-100 transition-opacity bg-black bg-opacity-50">
                                    <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="bg-indigo-600 text-white px-4 py-2 font-semibold rounded-full hover:bg-indigo-800 hover:text-white transition-colors">
                                        {t('projects.viewButton')}
                                    </a>
                                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="border border-indigo-600 text-indigo-600 px-4 py-2 font-semibold rounded-full hover:bg-indigo-800 hover:text-white transition-colors">
                                        {t('projects.repoButton')}
                                    </a>
                                </div>
                            </div>

                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">{t(project.title)}</h3>
                                <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{t(project.description)}</p>

                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className={`${techColors[tech] || "bg-gray-100 text-gray-500 border-gray-500"} border px-2 py-1 text-xs font-semibold rounded-full`}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}

                    {showMore && additionalProjects.map((project, index) => (
                        <div key={index} className={`rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl ${isDarkMode ? 'bg-gray-600' : 'bg-indigo-100'}`}>
                            <div className={`flex items-center space-x-2 px-3 py-2 ${isDarkMode ? 'bg-gray-900' : 'bg-indigo-400'}`}>
                                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                                <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                            </div>

                            <div className="relative">
                                <img src={project.imageUrl} alt={t(project.title)} className="w-full h-48 object-cover" />
                                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center space-x-4 opacity-0 hover:opacity-100 transition-opacity bg-black bg-opacity-50">
                                    <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="bg-indigo-600 text-white px-4 py-2 font-semibold rounded-full hover:bg-indigo-800 hover:text-white transition-colors">
                                        {t('projects.viewButton')}
                                    </a>
                                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="border border-indigo-600 text-indigo-600 px-4 py-2 font-semibold rounded-full hover:bg-indigo-800 hover:text-white transition-colors">
                                        {t('projects.repoButton')}
                                    </a>
                                </div>
                            </div>

                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">{t(project.title)}</h3>
                                <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{t(project.description)}</p>

                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className={`${techColors[tech] || "bg-gray-100 text-gray-500 border-gray-500"} border px-2 py-1 text-xs font-semibold rounded-full`}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-8">
                    <button
                        onClick={() => setShowMore(!showMore)}
                        className={`px-6 py-2 font-semibold rounded-full shadow-lg transition-colors ${isDarkMode ? 'bg-indigo-700 text-white hover:bg-indigo-600' : 'bg-indigo-600 text-white hover:bg-indigo-800'}`}
                    >
                        {showMore ? t('projects.viewLessButton') : t('projects.viewMoreButton')}
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Projects;