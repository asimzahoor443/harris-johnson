import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/viberr.png";
import freshBurger from "../../assets/fresh-burger.png";
import hipsster from "../../assets/hipsster.png";
import fitlift from "../../assets/fitlift.png";
import ProjectCard from "../../common/ProjectCard";
function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/asimzahoor443/titancustomercare"
          h3="Viberr"
          p="Streaming App"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/asimzahoor443/neoporhic"
          h3="Fresh Burger"
          p="Hamburger Restaurant"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/asimzahoor443/neoporhic"
          h3="Hipsster"
          p="Glasses Shop"
        />
        <ProjectCard
          src={fitlift}
          link="https://github.com/asimzahoor443/neoporhic"
          h3="Fitlift"
          p="Fitness App"
        />
      </div>
    </section>
  );
}

export default Projects;
