import styles from "./hero.module.css";
import ball from "@/public/prode-predictions.png";

const Hero = () => {
  return (
    <div className={`${styles.container} grid-2 grid`}>
      <div className="spaced-content">
        <h1 className={styles.heroTitle}>
          Jugá al <br />
          <b className={styles.darkblue}>prode</b> de las competencias más
          importantes del <br />
          <b className={styles.darkblue}>fútbol</b>
        </h1>
        <p className={styles.description}>¡Sos de los primeros en jugar!</p>
      </div>

      <img className={styles.ball} src={ball.src} alt="" />
    </div>
  );
};
export default Hero;
