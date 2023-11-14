"use client";
import React from "react";
import Link from "next/link";
import styles from "./navbar.module.css";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = React.useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">VidyaVista</Link>
      </div>
      <div className={styles.links}>
        <Link href="/">Home</Link>
        {/* <Link href="/about">About</Link> */}
        <Link href="/register">Register</Link>
      </div>
    </nav>
  );
}
