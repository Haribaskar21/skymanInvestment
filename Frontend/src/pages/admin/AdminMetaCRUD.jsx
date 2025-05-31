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
    <div
      className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-tr from-blue-100 via-indigo-100 to-purple-100"
      style={{ backgroundAttachment: 'fixed' }}
    >
      <div className="max-w-xl w-full p-8 bg-white bg-opacity-90 rounded-3xl shadow-2xl border border-gray-200 backdrop-blur-sm">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8 capitalize tracking-wide text-center">
          Manage {metaType}
        </h2>

        {loading && (
          <p className="text-center text-gray-500 italic">Loading {metaType}...</p>
        )}
        {error && (
          <p className="text-center text-red-600 font-medium mb-6">{error}</p>
        )}

        <div className="flex gap-4 mb-8">
          <input
            type="text"
            className="flex-grow border border-gray-300 rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition shadow-sm"
            placeholder={`Add new ${metaType.slice(0, -1)}`}
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={loading}
            onKeyDown={(e) => e.key === "Enter" && createItem()}
          />
          <button
            onClick={createItem}
            disabled={loading || !name.trim()}
            className={`px-8 py-3 rounded-lg font-semibold text-white shadow-md transition ${
              loading || !name.trim()
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 active:bg-blue-800"
            }`}
            aria-label={`Add new ${metaType.slice(0, -1)}`}
          >
            Add
          </button>
        </div>

        <ul className="divide-y divide-gray-200 max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-gray-100 rounded-lg">
          {items.length === 0 && !loading ? (
            <li className="py-6 text-center text-gray-400 italic">
              No {metaType} found.
            </li>
          ) : (
            items.map((item) => (
              <li
                key={item._id}
                className="flex justify-between items-center py-4 hover:bg-gray-100 rounded-lg px-4 transition"
              >
                <span className="text-gray-800 font-medium truncate max-w-[60%]">
                  {item.name}
                </span>

                <div className="flex gap-4">
                  <button
                    title="Edit"
                    className="bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-600 px-4 py-1 rounded-lg text-white shadow-sm transition"
                    onClick={() => {
                      const newName = prompt("New name:", item.name);
                      if (newName?.trim()) updateItem(item._id, newName);
                    }}
                    disabled={loading}
                  >
                    Edit
                  </button>

                  <button
                    title="Delete"
                    className="bg-red-500 hover:bg-red-600 active:bg-red-700 px-4 py-1 rounded-lg text-white shadow-sm transition"
                    onClick={() => deleteItem(item._id)}
                    disabled={loading}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}