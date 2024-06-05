import styles from "./hero.module.css";
import ball from "@/public/prode-predictions.png";
import LinkButton from "@/app/components/button/LinkButton";
import Image from "next/image";

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
        <LinkButton cta="Comenzar a jugar" href="/login"></LinkButton>
      </div>
      <Image
        src={ball.src}
        alt="ball"
        width={400}
        height={400}
        className={styles.ball}
      />
    </div>
  );
};
export default Hero;
