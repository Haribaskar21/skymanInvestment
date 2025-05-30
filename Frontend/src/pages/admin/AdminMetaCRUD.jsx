// components/AdminMetaCRUD.jsx
import { useEffect, useState } from "react";
import api from '../../api/axios'; 

export default function AdminMetaCRUD({ metaType }) {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");

const fetchItems = async () => {
  try {
    const res = await api.get(`/meta/${metaType}`);
    if (Array.isArray(res.data)) {
      setItems(res.data);
    } else {
      console.error("Expected an array, got:", res.data);
      setItems([]);
    }
  } catch (err) {
    console.error("Failed to fetch items", err);
    setItems([]);
  }
};


  const createItem = async () => {
    if (!name.trim()) return;
    await api.post(`/meta/${metaType}`, { name });
    setName("");
    fetchItems();
  };

  const updateItem = async (id, newName) => {
    await api.put(`/meta/${metaType}/${id}`, { name: newName });
    fetchItems();
  };

  const deleteItem = async (id) => {
    await api.delete(`/meta/${metaType}/${id}`);
    fetchItems();
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-semibold capitalize">{metaType}</h2>
      <div className="flex gap-2">
        <input
          className="border p-2 rounded w-full"
          placeholder={`New ${metaType}`}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          onClick={createItem}
          className="bg-blue-500 text-white px-4 py-2 rounded"
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
                  if (newName) updateItem(item._id, newName);
                }}
              >
                Edit
              </button>
              <button
                className="bg-red-500 px-2 py-1 rounded text-white"
                onClick={() => deleteItem(item._id)}
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
