import Button from "./Button";
import Img from "./Image";
import myIg from "../asset/Ig.png";
import todo from "../asset/Todo.png";
import pricing from "../asset/Price.png";
import gridp from "../asset/grid.png";

const Work = () => {
  return (
    <div className="min-h-screen">
      <h1 className="text-center text-5xl mt-7 " id="work">
        Works
      </h1>
      <div className="project all">
        <div className="item ">
          <Img url={myIg} />
          <Button
            link="https://lateef-ig.netlify.app/"
            text="This my Instagram clone develop with Reactjs"
          />
        </div>
        <div className="item s">
          <Img url={todo} />
          <Button text="A Simple Todo Develop using Reactjs" />
        </div>
        <div className="item t">
          <Img url={pricing} />
          <Button text="holla" />
        </div>
        <div className="item s ">
          <Img url={gridp} />
          <Button text="holla" />
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Work;
