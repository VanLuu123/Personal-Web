import React from 'react';
import BudgetPic from '../assets/BudgetPic.png';
import PersonalPic from '../assets/PersonalWeb.png'

const Project = () => {
    const projects = [
        {
            title: 'Budget Website',
            description: 'An Expense Budget website that allowed users to log daily expenses and set spending limits.',
            image: BudgetPic,
            link: 'https://github.com/VanLuu123/Budget-Web',
        },
        {
            title: 'Personal Website',
            description: 'A Personal website that displays personal projects and my skillsets.',
            image: PersonalPic,
            link: '#',
        }
    ];

    return (
        <section className="project-section">
            <div className="container">
                <h1 className="text-center title">PROJECTS</h1>
                <div className="row">
                    {projects.map((project, index) => (
                        <div className="col-md-12" key={index}>
                            <div className="project-row">
                                <div className="project-info">
                                    <h1 className="project-title">{project.title}</h1>
                                    <p>{project.description}</p>
                                    <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                                        View Project
                                    </a>
                                </div>
                                <img src={project.image} alt={project.title} className="project-img" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Project;
