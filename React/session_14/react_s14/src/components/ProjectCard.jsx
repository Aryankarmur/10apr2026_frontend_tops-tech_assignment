/*
GitHub Copilot Suggestion:

Create a reusable ProjectCard component that accepts:
- title
- description
- image
- githubLink
- liveDemo

Display the project image at the top,
followed by the title, description,
and buttons for GitHub and Live Demo.
*/

function ProjectCard({
  title,
  description,
  image,
  githubLink,
  liveDemo,
}) {
  return (
    <div className="project-card">
      <img src={image} alt={title} />

      <h2>{title}</h2>

      <p>{description}</p>

      <div>
        <a
          href={githubLink}
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        {" | "}

        <a
          href={liveDemo}
          target="_blank"
          rel="noreferrer"
        >
          Live Demo
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;