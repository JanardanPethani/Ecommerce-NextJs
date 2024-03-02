import React from "react";
import styles from "./Nav.module.scss";
import Link from "next/link";

const Nav = () => {
  return (
    <header className={styles.navBg}>
      <nav className={styles.nav}>
        <div>Ecommerce Portal</div>
        <div className={styles.navItems}>
          <Link href="/">Home</Link>
          <Link href="/login">Login</Link>
          <Link href="/user">Profile</Link>
          <Link href="/createuser">Create User</Link>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
