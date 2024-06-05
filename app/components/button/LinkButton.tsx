import Link from "next/link";
import styles from "./button.module.css";

type LinkButtonProps = {
  cta: string;
  href: string;
};

const LinkButton = ({ cta, href }: LinkButtonProps) => {
  return (
    <Link href={href} className={styles.button}>
      {cta}
    </Link>
  );
};
export default LinkButton;
