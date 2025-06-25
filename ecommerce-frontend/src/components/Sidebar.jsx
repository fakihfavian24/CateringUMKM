import { Link } from 'react-router-dom';

const Sidebar = () => {
  const styles = {
    sidebar: {
      width: '220px',
      height: '100vh',
      backgroundColor: '#0a66c2',
      color: '#fff',
      padding: '1.5rem 1rem',
      position: 'fixed',
      top: 0,
      left: 0,
      display: 'flex',
      flexDirection: 'column',
    },
    logo: {
      fontSize: '1.3rem',
      fontWeight: 'bold',
      marginBottom: '2rem',
      textAlign: 'center',
    },
    link: {
      color: '#fff',
      textDecoration: 'none',
      marginBottom: '1rem',
      padding: '0.5rem 1rem',
      borderRadius: '5px',
      transition: '0.3s',
    },
    linkHover: {
      backgroundColor: '#084d99',
    }
  };

  return (
    <div style={styles.sidebar}>
      <div style={styles.logo}>Admin Panel</div>
      <Link to="/dashboard" style={styles.link}>Dashboard</Link>
    </div>
  );
};

export default Sidebar;
