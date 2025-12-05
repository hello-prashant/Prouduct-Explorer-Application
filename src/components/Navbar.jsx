function Navbar() {
  const styles = {
    nav: {
      width: "100%",
      backgroundColor: "#1f2937",
      padding: "15px 25px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      color: "white",
      position: "sticky",
      top: 0,
      zIndex: 2000,
      boxShadow: "0 2px 8px rgba(0,0,0,0.25)",
    },

    logo: {
      fontSize: "24px",
      fontWeight: "bold",
      letterSpacing: "1px",
    },

    navRight: {
      display: "flex",
      alignItems: "center",
      gap: "25px",
    },

    link: {
      cursor: "pointer",
      fontSize: "16px",
      color: "#d1d5db",
      transition: "0.3s",
    },
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>Product Explorer</div>

      <div style={styles.navRight}>
        <p style={styles.link}>Home</p>
        <p style={styles.link}>Categories</p>
        <p style={styles.link}>Favourites</p>
        <p style={styles.link}>About</p>
      </div>
    </nav>
  );
}

export default Navbar;

