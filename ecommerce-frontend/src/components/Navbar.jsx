import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { FaHeart, FaShoppingCart, FaUserCircle } from 'react-icons/fa';
import Logo from '../assets/pslogo.png';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav style={styles.nav}>
      {/* Logo */}
      <div style={styles.logo}>
        <Link to="/">
          <img src={Logo} alt="Logo" style={styles.logoImage} />
        </Link>
      </div>

      {/* Menu */}
      <div style={styles.menu}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/products" style={styles.link}>Produk</Link>
      </div>

      {/* Icon section */}
      <div style={styles.icons}>
        <FaHeart style={styles.icon} />
        <FaShoppingCart style={styles.icon} />
        {user ? (
          <>
            <FaUserCircle style={styles.icon} />
            <button onClick={handleLogout} style={styles.logoutBtn}>Logout</button>
          </>
        ) : (
          <Link to="/login" style={styles.iconLink}>
            <FaUserCircle style={styles.icon} />
          </Link>
        )}
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1.5rem 2rem',
    backgroundColor: '#ffffff',
    color: 'white',
  },
  logoImage: {
    height: '40px',
    objectFit: 'contain',
  },
  logo: {
    fontSize: '1.3rem',
    fontWeight: 'bold',
  },
  logoLink: {
    color: '#333',
    textDecoration: 'none',
  },
  menu: {
    display: 'flex',
    gap: '2rem',
  },
  link: {
    color: '#333',
    textDecoration: 'none',
    fontSize: '0.95rem',
    fontWeight: 'bold',
  },
  icons: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.2rem',
  },
  icon: {
    fontSize: '1.2rem',
    color: '#333',
    cursor: 'pointer',
    position: 'relative',
  },
  iconLink: {
    color: '#333',
    textDecoration: 'none',
  },
  logoutBtn: {
    background: 'transparent',
    color: '#333',
    border: '1px solid #fff',
    padding: '0.3rem 0.6rem',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '0.8rem',
  },
};

export default Navbar;
