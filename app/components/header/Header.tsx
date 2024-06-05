import styles from "./header.module.css";
import logo from "@/public/logo.png";

const Header = () => {
  return (
    <a href="/" className={styles.header}>
      <img src={logo.src} height={60} alt="logo" />
    </a>
  );
};
export default Header;
