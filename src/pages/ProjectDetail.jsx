import { Link, useParams } from "react-router";
import { projects } from "../data/projects.js";

export default function ProjectDetail() {
    const { slug } = useParams();
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return (
            <section>
                <h1>Project not found</h1>
                <Link to="/projects">Browse all projects</Link>
            </section>
        );
    }

    return (
        <article>
            <h1>{project.title}</h1>

            <img
                src={project.img}
                alt={`${project.title} screenshot`}
                className="project-detail-image"
            />

            <p>Technologies: {project.technologies.join(", ")}</p>

            <h2>Problem</h2>
            <p className="details">{project.problem}</p>

            <h2>My contribution</h2>
            <p className="details">{project.role}</p>

            <h2>Implementation</h2>
            <p className="details">{project.approach}</p>

            <h2>Result or lesson</h2>
            <p className="details">{project.outcome}</p>

            <h2>GitHub Repository</h2>
            <p>
                Project:{" "}
                <a href={project.github} target="_blank">
                    {project.title}
                </a>
            </p>

            <Link to="/projects">Back to projects</Link>
        </article>
    );
}