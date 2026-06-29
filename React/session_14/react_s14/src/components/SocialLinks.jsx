function SocialLinks({ links, theme = "light" }) {
  const style = {
    backgroundColor: theme === "dark" ? "#222" : "#f5f5f5",
    padding: "20px",
    borderRadius: "10px",
  };

  return (
    <div className="social-links" style={style}>
      {links.map((item, index) => (
        <a
          key={index}
          href={item.url}
          target="_blank"
          rel="noreferrer"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;