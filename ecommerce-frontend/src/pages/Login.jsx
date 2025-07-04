import { useContext, useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import API from '../api/axios';

const Login = () => {
  const { login, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // useEffect(() => {
  //   if (user) {
  //     navigate('/dashboard');
  //   }
  // }, [user, navigate]);

  useEffect(() => {
    if (user) {
      if (user.role === 'admin') {
        navigate('/dashboard');
      } else {
        navigate('/'); // sesuaikan
      }
    }
  }, [user, navigate]);

  const handleLogin = async () => {
    if (!email || !password) {
      alert('Email dan password wajib diisi!');
      return;
    }

    try {
      const formData = { email, password };
      const response = await API.post('/auth/login', formData);
      //const token = response.data.token; // Sesuaikan jika struktur berbeda
      const { token, role } = response.data;

      if (token && role) {
        login(token, role); // pastikan login di context menerima 2 argumen

        if (role === 'admin') {
          navigate('/admin/dashboard');
        } else {
          navigate('/home'); // atau /products sesuai desain kamu
        }
      } else {
        alert('Login gagal! Token atau role tidak ditemukan.');
      }
    } catch (error) {
      console.error('Login gagal:', error);
      alert('Login gagal! Periksa email dan password Anda.');
    }
  };

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '80vh',
    },
    card: {
      backgroundColor: '#fff',
      padding: '2rem',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      width: '100%',
      maxWidth: '400px',
      textAlign: 'center',
    },
    title: { fontSize: '1.8rem', marginBottom: '0.5rem' },
    subtitle: { color: '#555', fontSize: '0.95rem', marginBottom: '1.5rem' },
    input: {
      width: '100%',
      padding: '0.75rem',
      marginBottom: '1rem',
      borderRadius: '5px',
      border: '1px solid #ccc',
      fontSize: '1rem',
    },
    linkText: {
      fontSize: '0.85rem',
      marginBottom: '1.5rem',
      display: 'block',
      color: '#0a66c2',
      textDecoration: 'none',
    },
    button: {
      width: '100%',
      padding: '0.75rem',
      backgroundColor: '#0a66c2',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      fontSize: '1rem',
      cursor: 'pointer',
      marginBottom: '1rem',
    },
    bottomText: { fontSize: '0.85rem', color: '#555' },
    signupLink: {
      marginLeft: '5px',
      color: '#0a66c2',
      textDecoration: 'none',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Sign in</h2>
        <p style={styles.subtitle}>Sign in with your email address</p>
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        <Link to="/forgot-password" style={styles.linkText}>
          Forgot your password?
        </Link>
        <button onClick={handleLogin} style={styles.button}>
          Sign in
        </button>
        <p style={styles.bottomText}>
          Don’t have an account?
          <Link to="/register" style={styles.signupLink}>Sign up now</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
