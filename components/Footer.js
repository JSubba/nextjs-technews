import styles from "../styles/Home.module.css";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      Copyright &copy;SABATECH -- {date}
    </footer>
  );
};

export default Footer;
