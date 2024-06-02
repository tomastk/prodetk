type ButtonProps = {
  cta: string;
  link: string;
};
import styles from "./button.module.css";

const Button = (props: ButtonProps) => {
  return (
    <a href={props.link} className={styles.button}>
      {props.cta}
    </a>
  );
};
export default Button;
