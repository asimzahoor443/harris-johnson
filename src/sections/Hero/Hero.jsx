import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import themeIcon from "../../assets/sun.svg";
import twitterIcon from "../../assets/twitter-light.svg";
function Hero() {
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt="profile picture" />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
        />
      </div>
      <div className={styles.info}>
        <h1>
          Harris <br /> Johnson
        </h1>
        <h2>Frontend Developer</h2>
        <a href="htto/twitter.com/" target="_blank">
          <img src={twitterIcon} alt="Twitter Icon" />
        </a>
      </div>
    </section>
  );
}

export default Hero;
