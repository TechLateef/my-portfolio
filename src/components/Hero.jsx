import profile from "../asset/Snapchat-1839351438.jpg";

const Hero = () => {
  return (
    <>
      <div className="hero-b"></div>
      <div className="hero all">
        <div className="hero-img">
          <img src={profile} alt="my-photo" />
        </div>
        <div className="hero-content">
          <h1>
            Hi I'm Mubarak and I'm a{" "}
            <span className="span">Full-stack Developer</span>
          </h1>
          <p>
            I am a driven and accomplished Full Stack Web Developer with
            extensive knowledge in a variety of front- end and back-end
            programming languages, responsive frameworks, and database systems.
            My passion lies in creating user-friendly websites and optimizing
            their performance. I excel in both hands-on development work and
            providing guidance to teams, acting as a trusted consultant when
            needed. With strong technical competence and a problem-solving
            mindset, I maintain a calm and professional demeanor in all
            situations.{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
