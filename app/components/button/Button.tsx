type ButtonProps = {
  cta: string;
  onClick?: () => void;
};
import styles from "./button.module.css";

const Button = (props: ButtonProps) => {
  return (
    <button className={styles.button} onClick={props.onClick}>
      {props.cta}
    </button>
  );
};
export default Button;
