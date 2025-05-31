import { useEffect, useState } from "react";
import api from '../../api/axios'; 

export default function AdminMetaCRUD({ metaType }) {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchItems = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await api.get(`/meta/${metaType}`);
      if (Array.isArray(res.data)) {
        setItems(res.data);
      } else {
        setItems([]);
        setError("Unexpected data format.");
      }
    } catch (err) {
      setError("Failed to fetch items.");
      setItems([]);
    } finally {
      setLoading(false);
    }
  };

  const createItem = async () => {
    if (!name.trim()) return;
    try {
      await api.post(`/meta/${metaType}`, { name: name.trim() });
      setName("");
      fetchItems();
    } catch {
      alert("Failed to create item.");
    }
  };

  const updateItem = async (id, newName) => {
    if (!newName?.trim()) return;
    try {
      await api.put(`/meta/${metaType}/${id}`, { name: newName.trim() });
      fetchItems();
    } catch {
      alert("Failed to update item.");
    }
  };

  const deleteItem = async (id) => {
    if (!window.confirm("Are you sure you want to delete this item?")) return;
    try {
      await api.delete(`/meta/${metaType}/${id}`);
      fetchItems();
    } catch {
      alert("Failed to delete item.");
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="p-4 space-y-4 border rounded shadow-sm">
      <h2 className="text-xl font-semibold capitalize">{metaType}</h2>
      
      {loading && <p>Loading {metaType}...</p>}
      {error && <p className="text-red-600">{error}</p>}

      <div className="flex gap-2">
        <input
          className="border p-2 rounded w-full"
          placeholder={`New ${metaType.slice(0, -1)}`}
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={loading}
        />
        <button
          onClick={createItem}
          disabled={loading || !name.trim()}
          className={`px-4 py-2 rounded text-white ${
            loading || !name.trim() ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500"
          }`}
        >
          Add
        </button>
      </div>
      
      <ul>
        {items.map((item) => (
          <li key={item._id} className="flex justify-between py-2 border-b">
            <span>{item.name}</span>
            <div className="space-x-2">
              <button
                className="bg-yellow-400 px-2 py-1 rounded text-white"
                onClick={() => {
                  const newName = prompt("New name:", item.name);
                  if (newName?.trim()) updateItem(item._id, newName);
                }}
                disabled={loading}
              >
                Edit
              </button>
              <button
                className="bg-red-500 px-2 py-1 rounded text-white"
                onClick={() => deleteItem(item._id)}
                disabled={loading}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
