import FigmaIcon from "./SkillSetIcons/FigmaIcon";
import GitIcon from "./SkillSetIcons/GitIcon";
import GithubIcon from "./SkillSetIcons/GithubIcon";
import HTMLIcon from "./SkillSetIcons/HTMLIcon";
import CSSIcon from "./SkillSetIcons/CSSIcon";
import JavascriptIcon from "./SkillSetIcons/JavascriptIcon";
import MongoDBIcon from "./SkillSetIcons/MongoDBIcon";
import NextJSIcon from "./SkillSetIcons/NextJSIcon";
import ReactIcon from "./SkillSetIcons/ReactIcon";


//put all icons in one component to be able to import them all at once
export default function AllSkillSetIcons() {
  return (
    <>
      <CSSIcon />
      <HTMLIcon />
      <JavascriptIcon />
      <ReactIcon />
      <NextJSIcon />
      <MongoDBIcon />
      <GithubIcon />
      <GitIcon />
      <FigmaIcon />
    </>
  );
}
