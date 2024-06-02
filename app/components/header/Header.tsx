import styles from "./header.module.css";
import logo from "@/public/logo.png";

const Header = () => {
  return (
    <div className={styles.header}>
      <img src={logo.src} height={60} alt="logo" />
    </div>
  );
};
export default Header;
