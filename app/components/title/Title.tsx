import styles from "./title.module.css";

type TitleProps = {
  title: string;
};

const Title = (props: TitleProps) => {
  return <h2 className={styles.title}>{props.title}</h2>;
};
export default Title;
