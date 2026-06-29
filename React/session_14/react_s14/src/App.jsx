import "./App.css";

import ProfileCard from "./components/ProfileCard";
import ProjectCard from "./components/ProjectCard";
import SocialLinks from "./components/SocialLinks";

import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

function App() {
  const socialMedia = [
    {
      icon: <FaInstagram />,
      url: "https://instagram.com/",
    },
    {
      icon: <FaLinkedin />,
      url: "https://linkedin.com/",
    },
    {
      icon: <FaGithub />,
      url: "https://github.com/",
    },
  ];

  return (
    <div className="container">
      <ProfileCard
        name="john doe"
        image="https://i.pravatar.cc/200"
        bio="Frontend Developer | React Developer | Web Enthusiast"
      />

      <SocialLinks links={socialMedia} theme="dark" />
      <SocialLinks links={socialMedia} theme="light" />

      <ProjectCard
  title="Movie App"
  description="A React movie application using Jikan API."
  image="https://picsum.photos/300/200"
  githubLink="https://github.com/aryan/movie-app"
  liveDemo="https://movie-app.netlify.app"
/>
    </div>
  );
}

export default App;
