import styles from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

function Layout({ children }) {
  return (
    <>
      <MainNavigation />
      <main className={styles.main}>{children}</main>
    </>
  );
}

export default Layout;
