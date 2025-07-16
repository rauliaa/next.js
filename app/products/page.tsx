'use client';
import { useEffect, useState } from 'react';

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [editId, setEditId] = useState<number | null>(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    const res = await fetch('/api/products');
    const data = await res.json();
    setProducts(data);
  }

  async function addOrUpdateProduct() {
    if (editId !== null) {
      await fetch(`/api/products/${editId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, price: Number(price) }),
      });
      setEditId(null);
    } else {
      await fetch('/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, price: Number(price) }),
      });
    }

    setName('');
    setPrice('');
    fetchProducts();
  }

  async function deleteProduct(id: number) {
    await fetch(`/api/products/${id}`, { method: 'DELETE' });
    fetchProducts();
  }

  function startEdit(product: any) {
    setEditId(product.id);
    setName(product.name);
    setPrice(product.price);
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold text-purple-700 mb-6">Daftar Produk</h1>

      <table className="bg-white shadow-lg rounded-xl w-full max-w-2xl mb-8">
        <thead className="bg-purple-200 text-purple-800">
          <tr>
            <th className="p-3 text-left">Nama Produk</th>
            <th className="p-3 text-left">Harga</th>
            <th className="p-3 text-left">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p: any) => (
            <tr key={p.id} className="border-b border-gray-200">
              <td className="p-3 text-gray-700">{p.name}</td>
              <td className="p-3 text-gray-700">Rp{p.price.toLocaleString()}</td>
              <td className="p-3 space-x-2">
                <button
                  onClick={() => startEdit(p)}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-full text-sm shadow transition"
                >
                  ✏️ Edit
                </button>
                <button
                  onClick={() => deleteProduct(p.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-full text-sm shadow transition"
                >
                  🗑️ Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md space-y-4">
        <h2 className="text-xl font-semibold text-purple-700 mb-2">
          {editId ? 'Update Produk' : 'Tambah Produk Baru'}
        </h2>
        <input 
          placeholder="Nama Produk"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2 w-full text-gray-800"
        />
        <input 
          placeholder="Harga"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2 w-full text-gray-800"
        />
        <button 
          onClick={addOrUpdateProduct}
          className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded transition w-full"
        >
          {editId ? 'Update Produk' : 'Tambah Produk'}
        </button>
      </div>
    </main>
  );
}
