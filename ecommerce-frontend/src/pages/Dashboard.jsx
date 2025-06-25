// src/pages/Dashboard.jsx
import React, { useEffect, useState } from 'react';
import API from '../api/axios';

// Komponen kecil untuk menampilkan statistik
const StatCard = ({ label, value }) => (
  <div style={{
    backgroundColor: '#fff',
    padding: '1.5rem',
    borderRadius: '10px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    textAlign: 'center'
  }}>
    <h3 style={{ fontSize: '1rem', color: '#666' }}>{label}</h3>
    <p style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#333' }}>{value}</p>
  </div>
);

const Dashboard = () => {
  const [stats, setStats] = useState({ products: 0, categories: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [productsRes, categoriesRes] = await Promise.all([
          API.get('/products'),
          API.get('/categories')
        ]);

        setStats({
          products: productsRes.data.data.length,
          categories: categoriesRes.data.data.length
        });
      } catch (error) {
        console.error('Gagal mengambil data statistik:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  return (
    <div style={{ padding: '2rem', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      <h2 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>Dashboard Admin</h2>
      <p style={{ color: '#666', marginBottom: '2rem' }}>Selamat datang di halaman dashboard!</p>

      {loading ? (
        <p>Memuat statistik...</p>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.5rem'
        }}>
          <StatCard label="Total Produk" value={stats.products} />
          <StatCard label="Total Kategori" value={stats.categories} />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
