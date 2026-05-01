import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function DetailItem() {
  // useParams ambil semua param dari URL
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(data => {
        setItem(data);
        setLoading(false);
      });
  }, [id]);  // re-fetch kalau id di URL berubah

  if (loading) return <p>Memuat detail item #{id}...</p>;

  return (
    <div className="container mt-4">
      <Link to="/inventori">← Kembali</Link>
      <h2>Detail Item #{item.id}</h2>
      <p><strong>Nama:</strong> {item.title}</p>
      <p><strong>Deskripsi:</strong> {item.body}</p>
    </div>
  );
}

export default DetailItem;
