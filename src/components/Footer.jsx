function Footer() {
  const styles = {
    footer: {
      marginTop: "40px",
      padding: "20px",
      backgroundColor: "#1f2937",
      color: "white",
      textAlign: "center",
    },
    text: {
      margin: "5px 0",
      fontSize: "15px",
    }
  };

  return (
    <footer style={styles.footer}>
      <p style={styles.text}>© 2025 Product Explorer App</p>
      <p style={styles.text}>Created by Prashant Shukla</p>
      <p style={styles.text}>All rights reserved.</p>
    </footer>
  );
}

export default Footer;
