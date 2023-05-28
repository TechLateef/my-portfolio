import Button from "./Button";

const Header = (props) => {
  return (
    <nav className="all">
      <h2>Lateef</h2>
      <span className="center">
        <Button link="#work" text="Work" />
        <Button text="Resume" />
        <Button link="#contact" text="Contact" />
      </span>
      <div className="link">
        <Button text="En" />
        <Button
          link="https://www.linkedin.com/in/mubarak-abdullateef-b8669b244/"
          text={<i className="fa-brands fa-linkedin"></i>}
        />
        <Button
          link="https://github.com/TechLateef"
          text={<i className="fa-brands fa-github"></i>}
        />
      </div>
    </nav>
  );
};

export default Header;
