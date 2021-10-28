import Link from "next/link";
import styles from "../styles/Home.module.css";

const Nav = () => {
  return (
    <nav className={styles.navbar}>
      <div>
        <Link href="/">
          <img src="/static/logo.png" alt="logo" height="40" />
        </Link>
      </div>
      <div className={styles.navbarLinks}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/news">
          <a>News</a>
        </Link>
      </div>

      <style jsx>{`
        a,
        img {
          padding: 10px;
        }
      `}</style>
    </nav>
  );
};

export default Nav;
