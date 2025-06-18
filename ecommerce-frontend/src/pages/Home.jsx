import React from 'react';
// import Navbar from '../components/Navbar';
import heroImage from '../assets/ecommerce.png';

const products = [
  {
    id: 1,
    name: 'Product A',
    price: 'Rp 100.000',
    image: 'https://picsum.photos/200?random=1',
  },
  {
    id: 2,
    name: 'Product B',
    price: 'Rp 150.000',
    image: 'https://picsum.photos/200?random=2',
  },
  {
    id: 3,
    name: 'Product C',
    price: 'Rp 200.000',
    image: 'https://picsum.photos/200?random=3',
  },
];

const Home = () => {
  return (
    <div>
      {/* <Navbar /> */}

      {/* Hero Section */}
      <header style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>We Provide Anything You Need</h1>
          <p style={styles.heroSubtitle}>
            Solusi kebutuhan Anda dengan berbagai produk terbaik dan terpercaya
          </p>
          <div style={styles.searchContainer}>
            <input
              type="text"
              placeholder="Search product..."
              style={styles.searchInput}
            />
            <button style={styles.searchButton}>Search</button>
          </div>
        </div>
        <div style={styles.heroImageWrapper}>
          <img
            src={heroImage}
            alt="Hero Product"
            style={styles.heroImage}
          />
        </div>
      </header>

      {/* Produk Unggulan */}
      <section style={styles.productsSection}>
        <h2 style={styles.sectionTitle}>Produk Unggulan</h2>
        <div style={styles.productGrid}>
          {products.map(product => (
            <div key={product.id} style={styles.card}>
              <img src={product.image} alt={product.name} style={styles.cardImage} />
              <h3 style={styles.cardTitle}>{product.name}</h3>
              <p style={styles.cardPrice}>{product.price}</p>
              <button style={styles.button}>Beli Sekarang</button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      {/* <footer style={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Ecommerce App. All rights reserved.</p>
      </footer> */}
    </div>
  );
};

const styles = {
  hero: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'linear-gradient(90deg, #ff512f, #dd2476)',
    color: '#fff',
    padding: '4rem 2rem',
    position: 'relative',
    flexWrap: 'wrap',
    borderRadius: '20px',
  },
  heroContent: {
    flex: '1',
    maxWidth: '500px',
    marginLeft: '200px',
  },
  heroTitle: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  },
  heroSubtitle: {
    fontSize: '1.1rem',
    marginBottom: '1.5rem',
  },
  searchContainer: {
    display: 'flex',
    maxWidth: '400px',
    marginBottom: '2rem',
  },
  searchInput: {
    flex: 1,
    padding: '0.7rem',
    border: 'none',
    borderRadius: '5px 0 0 5px',
    fontSize: '1rem',
  },
  searchButton: {
    padding: '0.7rem 1.5rem',
    border: 'none',
    borderRadius: '0 5px 5px 0',
    backgroundColor: '#fff',
    color: '#dd2476',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  heroImageWrapper: {
    flex: '1',
    display: 'flex',
    justifyContent: 'center',
  },
  heroImage: {
    maxWidth: '400px',
    // borderRadius: '20px',
    // boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
  },

  productsSection: {
    padding: '2rem',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: '1.8rem',
    marginBottom: '1.5rem',
  },
  productGrid: {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    flexWrap: 'wrap',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: '1rem',
    width: '220px',
    textAlign: 'center',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  },
  cardImage: {
    width: '100%',
    borderRadius: '8px',
    marginBottom: '0.5rem',
  },
  cardTitle: {
    fontSize: '1.1rem',
    margin: '0.5rem 0',
  },
  cardPrice: {
    color: '#777',
    marginBottom: '0.5rem',
  },
  button: {
    marginTop: '0.5rem',
    padding: '0.5rem 1rem',
    backgroundColor: '#333',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  footer: {
    marginTop: '2rem',
    padding: '1rem',
    backgroundColor: '#f1f1f1',
    textAlign: 'center',
  },
};

export default Home;
