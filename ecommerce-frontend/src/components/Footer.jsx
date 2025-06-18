const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Ecommerce App. All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    marginTop: '2rem',
    padding: '1rem',
    backgroundColor: '#f1f1f1',
    textAlign: 'center',
  },
};

export default Footer;
