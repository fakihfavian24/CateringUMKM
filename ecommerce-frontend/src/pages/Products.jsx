// src/pages/Products.jsx
import React, { useEffect, useState } from 'react';
import API from '../api/axios';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const response = await API.get('/products');
      setProducts(response.data.data);
    } catch (error) {
      console.error('Gagal mengambil produk:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) return <p>Memuat produk...</p>;

  return (
    <div className="container">
      <h2>Daftar Produk</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        {products.map((product) => (
          <div key={product._id} className="product-card" style={{
            border: '1px solid #ccc',
            padding: '10px',
            borderRadius: '8px',
            width: '250px'
          }}>
            {product.images?.[0]?.url && (
              <img
                src={product.images[0].url}
                alt={product.name}
                style={{ width: '100%', height: '150px', objectFit: 'cover' }}
              />
            )}
            <h3>{product.name}</h3>
            <p>Rp{product.price.toLocaleString()}</p>
            <p>{product.description}</p>
            <p><strong>Stok:</strong> {product.stock}</p>
            <p><strong>Kategori:</strong> {product.category?.name || '-'}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
